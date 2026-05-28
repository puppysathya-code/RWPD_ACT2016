import React, { useState, useEffect } from "react";
import { rpwdData } from "../data/rpwdData";

export default function ActContent({
  lang,
  activePanel,
  searchQuery,
  bookmarks,
  toggleBookmark,
  speakingId,
  speakingComponent,
  handleSpeak,
  setActivePanel
}) {

  // Helper function to highlight text matching searchQuery intelligently
  const renderHighlightedText = (text) => {
    if (!searchQuery) return text;
    const trimmedQuery = searchQuery.trim().toLowerCase();
    
    // Check if the query is a generic structural word
    const isGenericKeyword = ["section", "sec", "chapter", "ch", "பிரிவு", "அத்தியாயம்"].includes(trimmedQuery);
    if (isGenericKeyword) return text;

    // Cleaned query term for text highlighting
    const highlightTerm = trimmedQuery
      .replace(/^(?:section|sec|chapter|ch|பிரிவு|அத்தியாயம்)\s+/gi, "")
      .trim();

    if (!highlightTerm || /^\d+$/.test(highlightTerm)) return text; // Avoid highlighting pure numbers to prevent layout glitches

    const parts = text.split(new RegExp(`(${highlightTerm})`, "gi"));
    return (
      <>
        {parts.map((part, i) =>
          part.toLowerCase() === highlightTerm.toLowerCase() ? (
            <span key={i} className="search-highlight">{part}</span>
          ) : (
            part
          )
        )}
      </>
    );
  };

  // Determine what chapters/sections to display
  let displayedChapters = rpwdData.chapters;

  if (activePanel !== "all" && !searchQuery) {
    displayedChapters = rpwdData.chapters.filter(ch => ch.id === activePanel);
  }

  // Filter sections by search query if present
  if (searchQuery) {
    const trimmedQuery = searchQuery.trim().toLowerCase();
    const isGenericKeyword = ["section", "sec", "chapter", "ch", "பிரிவு", "அத்தியாயம்"].includes(trimmedQuery);

    if (isGenericKeyword) {
      // If they only typed structural words, show all sections gracefully
      displayedChapters = rpwdData.chapters;
    } else {
      // Try to extract exact section/chapter numbers if present (e.g. "section 32", "ch 1", "32")
      let targetNumber = null;
      const numMatch = trimmedQuery.match(/^(?:section|sec|chapter|ch|பிரிவு|அத்தியாயம்)?\s*[-–]?\s*(\d+)$/i);
      if (numMatch) {
        targetNumber = numMatch[1];
      }

      // Cleaned search term for content search
      const textQuery = trimmedQuery
        .replace(/^(?:section|sec|chapter|ch|பிரிவு|அத்தியாயம்)\s+/gi, "")
        .trim();

      displayedChapters = rpwdData.chapters.map(ch => {
        const filteredSections = ch.sections.filter(sec => {
          // 1. Match exact section number
          if (targetNumber && sec.number === targetNumber) {
            return true;
          }

          // 2. Match exact chapter number
          if (targetNumber && ch.number.toLowerCase() === targetNumber) {
            return true;
          }

          // 3. Match regular text keywords inside section fields
          if (textQuery.length > 0) {
            const titleMatch =
              sec.titleEn.toLowerCase().includes(textQuery) ||
              sec.titleTa.includes(textQuery);
            const contentMatch =
              sec.contentEn.some(p => p.toLowerCase().includes(textQuery)) ||
              sec.contentTa.some(p => p.includes(textQuery));
            const defMatch =
              sec.definitions &&
              sec.definitions.some(
                d =>
                  d.termEn.toLowerCase().includes(textQuery) ||
                  d.termTa.includes(textQuery) ||
                  d.descEn.toLowerCase().includes(textQuery) ||
                  d.descTa.includes(textQuery)
              );
            return titleMatch || contentMatch || defMatch;
          }

          return false;
        });

        return {
          ...ch,
          sections: filteredSections
        };
      }).filter(ch => ch.sections.length > 0);
    }
  }

  if (displayedChapters.length === 0) {
    return (
      <div style={{ textAlign: "center", padding: "40px", color: "var(--text-secondary)", background: "var(--bg-secondary)", borderRadius: "16px", border: "1px solid var(--border-color)" }}>
        <h3>
          {lang === "en"
            ? "No Matching Legal Sections Found"
            : "பொருத்தமான சட்டப் பிரிவுகள் எதுவும் கிடைக்கவில்லை"}
        </h3>
        <p style={{ marginTop: "8px", fontSize: "0.85rem" }}>
          {lang === "en"
            ? "Try searching for alternative keywords (e.g. 'reservation', 'pension', 'education')."
            : "மாற்று முக்கிய வார்த்தைகளைத் தேடி முயற்சிக்கவும் (உதாரணமாக: 'இடஒதுக்கீடு', 'ஓய்வூதியம்', 'கல்வி')."}
        </p>
      </div>
    );
  }

  return (
    <div className="act-section">
      {displayedChapters.map((ch) => (
        <div key={ch.id} className="chapter-block" id={ch.id}>
          <div className="chapter-header">
            <div className="chapter-info">
              <span className="chapter-label">
                {lang === "en" ? `Chapter ${ch.number}` : `அத்தியாயம் ${ch.number}`}
              </span>
              <h2>{lang === "en" ? ch.titleEn : ch.titleTa}</h2>
            </div>
            <div style={{ fontSize: "1.8rem" }} aria-hidden="true">📁</div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "20px", marginTop: "16px" }}>
            {ch.sections.map((sec) => {
              const isBookmarked = bookmarks.includes(sec.id);
              
              // Compile full readable speech texts including Section number, Title, and definitions if present
              const textArrayEn = [
                `Section ${sec.number}. ${sec.titleEn}.`,
                ...(sec.isDefinition 
                  ? [...sec.contentEn, ...sec.definitions.map(d => `${d.termEn.replace(/"/g, "")}. ${d.descEn}`)]
                  : sec.contentEn)
              ];

              const textArrayTa = [
                `பிரிவு ${sec.number}. ${sec.titleTa}.`,
                ...(sec.isDefinition 
                  ? [...sec.contentTa, ...sec.definitions.map(d => `${d.termTa.replace(/"/g, "")}. ${d.descTa}`)]
                  : sec.contentTa)
              ];

              const textArray = lang === "en" ? sec.contentEn : sec.contentTa;
              const isSpeaking = speakingId === sec.id && speakingComponent === "act";

              return (
                <article key={sec.id} className="article-card" id={sec.id}>
                  {/* Article Badge & Actions Header */}
                  <div className="article-header">
                    <span className="article-badge">
                      {lang === "en" ? `Section ${sec.number}` : `பிரிவு ${sec.number}`}
                    </span>
                    <div className="article-actions">
                      {/* Text to Speech Button */}
                      <button
                        className={`action-btn ${isSpeaking ? "active" : ""}`}
                        onClick={() => handleSpeak(sec.id, "act", textArrayEn, textArrayTa)}
                        title={lang === "en" ? "Read Section Aloud" : "பிரிவை உரக்க வாசி"}
                        aria-label={
                          isSpeaking
                            ? (lang === "en" ? "Stop reading" : "வாசிப்பதை நிறுத்து")
                            : (lang === "en" ? "Read section aloud" : "பிரிவை உரக்க வாசி")
                        }
                      >
                        {isSpeaking ? "⏹️" : "🔊"}
                      </button>

                      {/* Bookmark Button */}
                      <button
                        className={`action-btn ${isBookmarked ? "active" : ""}`}
                        onClick={() => toggleBookmark(sec.id)}
                        title={lang === "en" ? "Bookmark Section" : "பிரிவை புக்மார்க் செய்"}
                        aria-label={
                          isBookmarked
                            ? (lang === "en" ? "Remove bookmark" : "புக்மார்க்கை நீக்கு")
                            : (lang === "en" ? "Bookmark this section" : "இப்பிரிவை புக்மார்க் செய்")
                        }
                      >
                        {isBookmarked ? "★" : "☆"}
                      </button>
                    </div>
                  </div>

                  {/* Section Title */}
                  <h3 className="article-title">
                    {renderHighlightedText(lang === "en" ? sec.titleEn : sec.titleTa)}
                  </h3>

                  {/* Section Body */}
                  <div className="article-body">
                    {sec.isDefinition ? (
                      <>
                        <p className="paragraph-text">
                          {renderHighlightedText(lang === "en" ? sec.contentEn[0] : sec.contentTa[0])}
                        </p>
                        {sec.definitions.map((def, idx) => (
                          <div key={idx} className="definition-box">
                            <div className="def-term">
                              {renderHighlightedText(lang === "en" ? def.termEn : def.termTa)}
                            </div>
                            <div className="def-desc">
                              {renderHighlightedText(lang === "en" ? def.descEn : def.descTa)}
                            </div>
                          </div>
                        ))}
                      </>
                    ) : sec.isPenalty ? (
                      <div className="penalty-box">
                        <strong style={{ display: "block", marginBottom: "8px", textTransform: "uppercase", fontSize: "0.8rem", letterSpacing: "1px" }}>
                          ⚠️ {lang === "en" ? "Penal Warning Box" : "தண்டனை எச்சரிக்கை விவரம்"}
                        </strong>
                        {textArray.map((p, idx) => (
                          <p key={idx} className="paragraph-text" style={{ marginBottom: "6px" }}>
                            {renderHighlightedText(p)}
                          </p>
                        ))}
                        {setActivePanel && (
                          <button
                            onClick={() => {
                              setActivePanel("complaint");
                              window.scrollTo({ top: 0, behavior: "smooth" });
                            }}
                            className="bookmark-btn"
                            style={{
                              marginTop: "12px",
                              background: "var(--accent-red, #ef4444)",
                              color: "#fff",
                              border: "none",
                              padding: "8px 16px",
                              borderRadius: "20px",
                              cursor: "pointer",
                              fontSize: "0.8rem",
                              fontWeight: "bold",
                              display: "inline-flex",
                              alignItems: "center",
                              gap: "6px",
                              boxShadow: "0 4px 12px rgba(239, 68, 68, 0.2)"
                            }}
                          >
                            ⚖️ {lang === "en" ? "Generate Police Complaint Form" : "காவல் புகார் மனுவை உருவாக்கு"}
                          </button>
                        )}
                      </div>
                    ) : (
                      textArray.map((p, idx) => (
                        <p key={idx} className="paragraph-text">
                          {renderHighlightedText(p)}
                        </p>
                      ))
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
