import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import AccessibilityBar from "./components/AccessibilityBar";
import ActContent from "./components/ActContent";
import DisabilitiesGuide from "./components/DisabilitiesGuide";
import EligibilityWizard from "./components/EligibilityWizard";
import TtsTroubleshootModal from "./components/TtsTroubleshootModal";
import InstallPrompt from "./components/InstallPrompt";

import "./App.css";

export default function App() {
  const [lang, setLang] = useState(() => localStorage.getItem("rwpd_lang") || "en");
  const [theme, setTheme] = useState(() => localStorage.getItem("rwpd_theme") || "light");
  const [fontScale, setFontScale] = useState(() => parseFloat(localStorage.getItem("rwpd_fontScale")) || 1.0);
  const [lineSpacing, setLineSpacing] = useState(() => parseFloat(localStorage.getItem("rwpd_lineSpacing")) || 1.8);
  const [speechRate, setSpeechRate] = useState(() => parseFloat(localStorage.getItem("rwpd_speechRate")) || 1.0);
  const [selectedVoiceName, setSelectedVoiceName] = useState(() => localStorage.getItem("rwpd_voiceName") || "");
  const [availableVoices, setAvailableVoices] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [bookmarks, setBookmarks] = useState(() => JSON.parse(localStorage.getItem("rwpd_bookmarks")) || []);
  const [activePanel, setActivePanel] = useState("wizard"); // Default to the Wizard to WOW the user immediately!
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Central SpeechSynthesis State
  const [speakingId, setSpeakingId] = useState(null);
  const [speakingComponent, setSpeakingComponent] = useState(null);
  const [synth, setSynth] = useState(null);
  const [currentUtterance, setCurrentUtterance] = useState(null);

  // TTS Troubleshooting Modal State
  const [isTtsTroubleOpen, setIsTtsTroubleOpen] = useState(false);
  const [ttsTroubleData, setTtsTroubleData] = useState(null);

  // Load voices asynchronously and setup SpeechSynthesis instance
  useEffect(() => {
    if (typeof window !== "undefined" && window.speechSynthesis) {
      setSynth(window.speechSynthesis);
      const updateVoices = () => {
        setAvailableVoices(window.speechSynthesis.getVoices());
      };
      updateVoices();
      window.speechSynthesis.onvoiceschanged = updateVoices;
    }
    return () => {
      if (typeof window !== "undefined" && window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  // Automatically select a matching voice when language or voice list changes
  useEffect(() => {
    if (availableVoices.length > 0) {
      let matchingVoice = null;
      if (lang === "ta") {
        matchingVoice = availableVoices.find(v => 
          v.lang.toLowerCase().startsWith("ta") || 
          v.name.toLowerCase().includes("tamil") ||
          v.name.toLowerCase().includes("latha") ||
          v.name.toLowerCase().includes("pallavi") ||
          v.name.toLowerCase().includes("valluvar")
        );
      } else {
        matchingVoice = availableVoices.find(v => 
          v.lang.toLowerCase().startsWith("en") || 
          v.name.toLowerCase().includes("english")
        );
      }
      
      // If we found a matching voice for the active language, set it.
      // Otherwise, if lang is Tamil but no Tamil voice exists, we clear selectedVoiceName
      // so we don't accidentally try to speak Tamil using an English voice engine.
      if (matchingVoice) {
        setSelectedVoiceName(matchingVoice.name);
      } else if (lang === "ta") {
        setSelectedVoiceName("");
      }
    }
  }, [lang, availableVoices]);

  // Global Bilingual Speech synthesis coordinator
  const handleSpeakGlobal = (id, component, textEn, textTa, forceEnglish = false) => {
    if (!synth) return;

    if (speakingId === id && speakingComponent === component && !forceEnglish) {
      synth.cancel();
      setSpeakingId(null);
      setSpeakingComponent(null);
      setCurrentUtterance(null);
      return;
    }

    synth.cancel();

    // Determine active speech language (check if forcing English or if Tamil is missing)
    const playTamil = lang === "ta" && !forceEnglish;
    const voices = synth.getVoices();
    let targetVoice = null;

    if (playTamil) {
      // Find a compatible native Tamil voice
      if (selectedVoiceName) {
        targetVoice = voices.find(v => v.name === selectedVoiceName);
      }
      if (!targetVoice || !targetVoice.lang.toLowerCase().startsWith("ta")) {
        targetVoice = voices.find(v => 
          v.lang.toLowerCase().startsWith("ta") || 
          v.lang.toLowerCase().includes("ta-") ||
          v.lang.toLowerCase().includes("ta_") ||
          v.name.toLowerCase().includes("tamil") ||
          v.name.toLowerCase().includes("latha") ||
          v.name.toLowerCase().includes("pallavi") ||
          v.name.toLowerCase().includes("valluvar")
        );
      }

      // CRITICAL GUARD: If no Tamil voice exists at all on the device,
      // prevent the horrible "reading numbers only" behavior and show the Troubleshooting Modal!
      if (!targetVoice) {
        setTtsTroubleData({ id, component, textEn, textTa });
        setIsTtsTroubleOpen(true);
        return;
      }
    } else {
      // Find a compatible English voice
      if (selectedVoiceName && !forceEnglish) {
        targetVoice = voices.find(v => v.name === selectedVoiceName);
      }
      if (!targetVoice || !targetVoice.lang.toLowerCase().startsWith("en")) {
        targetVoice = voices.find(v => 
          v.lang.toLowerCase().startsWith("en") || 
          v.name.toLowerCase().includes("english")
        );
      }
    }

    const textPayload = playTamil ? textTa : textEn;
    const fullText = Array.isArray(textPayload) ? textPayload.join(" ") : textPayload;

    const utterance = new SpeechSynthesisUtterance(fullText);
    if (targetVoice) utterance.voice = targetVoice;
    utterance.rate = speechRate;
    utterance.lang = playTamil ? "ta-IN" : "en-US";

    utterance.onend = () => {
      setSpeakingId(null);
      setSpeakingComponent(null);
      setCurrentUtterance(null);
    };

    utterance.onerror = () => {
      setSpeakingId(null);
      setSpeakingComponent(null);
      setCurrentUtterance(null);
    };

    setSpeakingId(id);
    setSpeakingComponent(component);
    setCurrentUtterance(utterance);
    synth.speak(utterance);
  };

  const handlePlayEnglishFallback = () => {
    if (ttsTroubleData) {
      const { id, component, textEn, textTa } = ttsTroubleData;
      setIsTtsTroubleOpen(false);
      // Wait a tiny moment for the modal exit animation
      setTimeout(() => {
        handleSpeakGlobal(id, component, textEn, textTa, true);
      }, 100);
    }
  };

  // Sync settings to localStorage
  useEffect(() => {
    localStorage.setItem("rwpd_lang", lang);
  }, [lang]);

  useEffect(() => {
    localStorage.setItem("rwpd_theme", theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem("rwpd_fontScale", fontScale);
  }, [fontScale]);

  useEffect(() => {
    localStorage.setItem("rwpd_lineSpacing", lineSpacing);
  }, [lineSpacing]);

  useEffect(() => {
    localStorage.setItem("rwpd_speechRate", speechRate);
  }, [speechRate]);

  useEffect(() => {
    localStorage.setItem("rwpd_voiceName", selectedVoiceName);
  }, [selectedVoiceName]);

  useEffect(() => {
    localStorage.setItem("rwpd_bookmarks", JSON.stringify(bookmarks));
  }, [bookmarks]);

  // Handle bookmark toggle
  const toggleBookmark = (sectionId) => {
    setBookmarks((prev) =>
      prev.includes(sectionId)
        ? prev.filter((id) => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  // Quick navigate to section from bookmarks
  const navigateToSection = (sectionId, chapterId) => {
    setActivePanel(chapterId);
    setTimeout(() => {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }, 100);
  };

  return (
    <div className="app-container">
      {/* Accessibility Floating Toolbar */}
      <AccessibilityBar
        theme={theme}
        setTheme={setTheme}
        fontScale={fontScale}
        setFontScale={setFontScale}
        lineSpacing={lineSpacing}
        setLineSpacing={setLineSpacing}
        lang={lang}
        speechRate={speechRate}
        setSpeechRate={setSpeechRate}
        availableVoices={availableVoices}
        selectedVoiceName={selectedVoiceName}
        setSelectedVoiceName={setSelectedVoiceName}
      />

      {/* Main App Header */}
      <Header
        lang={lang}
        setLang={setLang}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
      />

      <div className="main-content">
        {/* Sidebar Left Navigation */}
        <Sidebar
          lang={lang}
          activePanel={activePanel}
          setActivePanel={setActivePanel}
          isDrawerOpen={isSidebarOpen}
          closeDrawer={() => setIsSidebarOpen(false)}
        />

        {/* Core Right Dynamic Content Area */}
        <main style={{ minWidth: 0, display: "flex", flexDirection: "column", gap: "28px" }}>
          {/* Header Mobile Search bar (since the desktop header search is hidden in narrow screens) */}
          <div className="mobile-search-bar" style={{ display: "none" }}>
            <input
              type="text"
              className="search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={lang === "en" ? "Search..." : "தேடுக..."}
              style={{ width: "100%", paddingLeft: "16px" }}
            />
          </div>

          {/* Bookmarks Section (Rendered dynamically if bookmarks exist) */}
          {bookmarks.length > 0 && !searchQuery && (
            <div className="bookmarks-panel">
              <h3 style={{ fontFamily: "var(--font-display)", color: "var(--accent-blue)", fontSize: "0.95rem", fontWeight: "700" }}>
                🔖 {lang === "en" ? "Bookmarked Sections" : "புக்மார்க் செய்யப்பட்ட பிரிவுகள்"} ({bookmarks.length})
              </h3>
              <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginTop: "8px" }}>
                {bookmarks.map((bId) => {
                  // Find section's parent chapter for navigation
                  let chId = "chapter1";
                  const bSec = bId;
                  
                  return (
                    <div key={bId} className="bookmark-item" style={{ padding: "4px 12px", borderRadius: "20px" }}>
                      <button
                        onClick={() => navigateToSection(bId, "all")}
                        className="bookmark-link"
                        style={{ background: "transparent", border: "none", cursor: "pointer" }}
                      >
                        {lang === "en" ? `Sec ${bId.split("-")[1]}` : `பிரிவு ${bId.split("-")[1]}`}
                      </button>
                      <button
                        onClick={() => toggleBookmark(bId)}
                        style={{ background: "transparent", border: "none", color: "#ef4444", marginLeft: "8px", cursor: "pointer", fontWeight: "bold" }}
                        title={lang === "en" ? "Remove Bookmark" : "நீக்கு"}
                      >
                        ×
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {searchQuery ? (
            <ActContent
              lang={lang}
              activePanel="all"
              searchQuery={searchQuery}
              bookmarks={bookmarks}
              toggleBookmark={toggleBookmark}
              speakingId={speakingId}
              speakingComponent={speakingComponent}
              handleSpeak={handleSpeakGlobal}
              setActivePanel={setActivePanel}
            />
          ) : activePanel === "wizard" ? (
            <EligibilityWizard
              lang={lang}
              speakingId={speakingId}
              speakingComponent={speakingComponent}
              handleSpeak={handleSpeakGlobal}
            />
          ) : activePanel === "disabilities" ? (
            <DisabilitiesGuide
              lang={lang}
              speakingId={speakingId}
              speakingComponent={speakingComponent}
              handleSpeak={handleSpeakGlobal}
            />
          ) : (
            <ActContent
              lang={lang}
              activePanel={activePanel}
              searchQuery={searchQuery}
              bookmarks={bookmarks}
              toggleBookmark={toggleBookmark}
              speakingId={speakingId}
              speakingComponent={speakingComponent}
              handleSpeak={handleSpeakGlobal}
              setActivePanel={setActivePanel}
            />
          )}


        </main>
      </div>

      {/* Premium Footer */}
      <footer className="site-footer">
        <div className="footer-logo">⚖️</div>
        <p className="footer-text">
          {lang === "en" ? (
            <>
              The <span className="footer-gold">Rights of Persons with Disabilities Act, 2016</span> — Act No. 49 of 2016
            </>
          ) : (
            <>
              மாற்றுத்திறனாளிகளின் உரிமைகள் சட்டம், 2016 — <span className="footer-gold">சட்டம் எண். 49 of 2016</span>
            </>
          )}
        </p>
        <p className="footer-text" style={{ marginTop: "8px", fontSize: "0.75rem", opacity: 0.8 }}>
          {lang === "en"
            ? "Government of India — Ministry of Social Justice and Empowerment"
            : "இந்திய அரசு — சமூக நீதி மற்றும் உரிமையளித்தல் அமைச்சகம்"}
        </p>
      </footer>

      {/* Bilingual TTS Troubleshooting Modal */}
      <TtsTroubleshootModal
        isOpen={isTtsTroubleOpen}
        onClose={() => setIsTtsTroubleOpen(false)}
        lang={lang}
        onPlayEnglishFallback={handlePlayEnglishFallback}
        troubleData={ttsTroubleData}
      />

      {/* Custom PWA Install Prompt Overlay */}
      <InstallPrompt />
    </div>
  );
}
