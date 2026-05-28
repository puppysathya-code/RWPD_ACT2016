import React, { useState } from "react";
import { rpwdData } from "../data/rpwdData";

export default function DisabilitiesGuide({
  lang,
  speakingId,
  speakingComponent,
  handleSpeak
}) {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchWord, setSearchWord] = useState("");
  const [activeModal, setActiveModal] = useState(null);

  // Extract categories
  const categories = [
    { id: "all", labelEn: "All Categories", labelTa: "அனைத்து வகைகள்" },
    { id: "Physical Disability", labelEn: "Physical", labelTa: "உடல் சார்ந்தவை" },
    { id: "Intellectual Disability", labelEn: "Intellectual", labelTa: "அறிவுசார்ந்தவை" },
    { id: "Mental Behaviour", labelEn: "Mental", labelTa: "மனநலம்" },
    { id: "Chronic Neurological", labelEn: "Neurological", labelTa: "நரம்பியல்" },
    { id: "Blood Disorders", labelEn: "Blood", labelTa: "இரத்தம் சார்ந்தவை" },
    { id: "Multiple Disabilities", labelEn: "Multiple", labelTa: "பல்வகை" }
  ];

  // Filter list
  const filteredDisabilities = rpwdData.disabilities.filter((d) => {
    const matchesCategory =
      selectedCategory === "all" || d.categoryEn === selectedCategory;
    const matchesSearch =
      d.typeEn.toLowerCase().includes(searchWord.toLowerCase()) ||
      d.typeTa.includes(searchWord) ||
      d.descEn.toLowerCase().includes(searchWord.toLowerCase()) ||
      d.descTa.includes(searchWord);
    return matchesCategory && matchesSearch;
  });

  // Helper to render accessible small speaker button
  const renderSpeakBtn = (id, textEn, textTa) => {
    const isSpeaking = speakingId === id && speakingComponent === "disabilities";
    return (
      <button
        className={`action-btn speak-small-btn ${isSpeaking ? "active" : ""}`}
        onClick={(e) => {
          e.stopPropagation();
          handleSpeak(id, "disabilities", textEn, textTa);
        }}
        title={lang === "en" ? "Read aloud" : "உரக்க வாசி"}
        aria-label={
          isSpeaking
            ? (lang === "en" ? "Stop reading" : "வாசிப்பதை நிறுத்து")
            : (lang === "en" ? "Read aloud" : "உரக்க வாசி")
        }
        style={{
          background: "transparent",
          border: "none",
          cursor: "pointer",
          padding: "4px 8px",
          borderRadius: "4px",
          fontSize: "1.1rem",
          display: "inline-flex",
          alignItems: "center",
          color: isSpeaking ? "var(--accent-gold)" : "var(--text-secondary)",
          transition: "color 0.2s ease"
        }}
      >
        {isSpeaking ? "⏹️" : "🔊"}
      </button>
    );
  };

  return (
    <div className="disabilities-container">
      <div className="explorer-header">
        <h2>
          {lang === "en"
            ? "Specified Disabilities Guide"
            : "குறிப்பிட்ட மாற்றுத்திறன்கள் வழிகாட்டி"}
        </h2>
        <p style={{ marginTop: "6px" }}>
          {lang === "en"
            ? "Explore the 21 specified disabilities recognized under the RPWD Act, 2016."
            : "மாற்றுத்திறனாளிகள் உரிமைகள் சட்டம் 2016-ன் கீழ் அங்கீகரிக்கப்பட்ட 21 குறைபாடுகளைப் பற்றி அறியவும்."}
        </p>
      </div>

      {/* Internal Search Bar */}
      <div style={{ position: "relative", width: "100%", maxWidth: "400px", margin: "0 auto" }}>
        <input
          type="text"
          className="search-input"
          value={searchWord}
          onChange={(e) => setSearchWord(e.target.value)}
          placeholder={
            lang === "en"
              ? "Search disabilities..."
              : "குறைபாடுகளைத் தேடவும்..."
          }
          style={{ paddingLeft: "16px" }}
        />
      </div>

      {/* Categories Filter Bar */}
      <div className="filter-bar">
        {categories.map((cat) => (
          <button
            key={cat.id}
            className={`filter-btn ${selectedCategory === cat.id ? "active" : ""}`}
            onClick={() => setSelectedCategory(cat.id)}
          >
            {lang === "en" ? cat.labelEn : cat.labelTa}
          </button>
        ))}
      </div>

      {/* Grid of Cards */}
      <div className="disabilities-grid">
        {filteredDisabilities.map((d) => {
          const cardSpeakId = `dis-card-${d.id}`;
          return (
            <div
              key={d.id}
              className="disability-card"
              onClick={() => setActiveModal(d)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && setActiveModal(d)}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", width: "100%", marginBottom: "8px" }}>
                <span className="disability-category-badge" style={{ margin: 0 }}>
                  {lang === "en" ? d.categoryEn : d.categoryTa}
                </span>
                {renderSpeakBtn(cardSpeakId, `${d.typeEn}. ${d.descEn}`, `${d.typeTa}. ${d.descTa}`)}
              </div>
              <h3>{lang === "en" ? d.typeEn : d.typeTa}</h3>
              <p>{lang === "en" ? d.descEn : d.descTa}</p>
              <div style={{ marginTop: "auto", display: "flex", justifyContent: "flex-end", color: "var(--accent-gold)", fontWeight: "600", fontSize: "0.8rem", fontFamily: "var(--font-display)" }}>
                {lang === "en" ? "Read Details →" : "விவரங்கள் அறிய →"}
              </div>
            </div>
          );
        })}
      </div>

      {/* Detailed Modal Expansion */}
      {activeModal && (
        <div className="modal-overlay" onClick={() => setActiveModal(null)}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
          >
            <button className="modal-close" onClick={() => setActiveModal(null)} aria-label="Close modal">
              ×
            </button>
            <span className="disability-category-badge" style={{ marginBottom: "12px" }}>
              {lang === "en" ? activeModal.categoryEn : activeModal.categoryTa}
            </span>
            
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
              <h2 style={{ fontFamily: "var(--font-display)", color: "var(--accent-blue)", fontSize: "1.6rem", margin: 0 }}>
                {lang === "en" ? activeModal.typeEn : activeModal.typeTa}
              </h2>
              {renderSpeakBtn(
                `dis-modal-${activeModal.id}`,
                `${activeModal.typeEn}. Clinical Definition: ${activeModal.descEn}. Legal Safeguards: Reservation Eligibility: Entitled to 4% reservation in government jobs if certified >= 40% (Benchmark Disability under Sec 34). Educational Protection: 5% seats reserved in government or aided institutions of higher learning, plus 5 years age relaxation (Sec 32). Free Education: Free learning in a neighborhood or special school until 18 years of age (Sec 31).`,
                `${activeModal.typeTa}. மருத்துவ வரையறை: ${activeModal.descTa}. சட்டப்பூர்வ பாதுகாப்பு: இடஒதுக்கீடு தகுதி: குறைந்தது 40% பாதிப்பு சான்றளிக்கப்பட்டால், அரசு வேலைவாய்ப்புகளில் 4% இடஒதுக்கீடு பெற தகுதியுடையவர் (பிரிவு 34-ன் கீழ்). கல்விப் பாதுகாப்பு: அரசு மற்றும் உதவி பெறும் உயர்கல்வி நிறுவனங்களில் 5% இடஒதுக்கீடு, அத்துடன் 5 ஆண்டுகள் வயது வரம்பு தளர்வு (பிரிவு 32). இலவசக் கல்வி: 18 வயது வரையிலான வரம்புக்குட்பட்ட மாற்றுத்திறன் குழந்தைகளுக்கு அருகில் உள்ள பள்ளியிலோ அல்லது சிறப்புப் பள்ளியிலோ இலவசக் கல்வி (பிரிவு 31).`
              )}
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "16px", lineHeight: "1.8" }}>
              <div>
                <strong style={{ display: "block", fontSize: "0.8rem", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "4px" }}>
                  {lang === "en" ? "Clinical Definition" : "மருத்துவ வரையறை"}
                </strong>
                <p style={{ fontSize: "0.95rem" }}>
                  {lang === "en" ? activeModal.descEn : activeModal.descTa}
                </p>
              </div>

              <div style={{ borderTop: "1px solid var(--border-color)", paddingTop: "16px" }}>
                <strong style={{ display: "block", fontSize: "0.8rem", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "4px" }}>
                  {lang === "en" ? "Legal Status & Safeguards" : "சட்டப்பூர்வ நிலை மற்றும் பாதுகாப்புகள்"}
                </strong>
                <ul style={{ listStyle: "none", padding: 0 }}>
                  <li style={{ padding: "6px 0", fontSize: "0.9rem", display: "flex", gap: "8px" }}>
                    <span>✅</span>
                    <span>
                      {lang === "en"
                        ? "Reservation Eligibility: Entitled to 4% reservation in government jobs if certified >= 40% (Benchmark Disability under Sec 34)."
                        : "இடஒதுக்கீடு தகுதி: குறைந்தது 40% பாதிப்பு சான்றளிக்கப்பட்டால், அரசு வேலைவாய்ப்புகளில் 4% இடஒதுக்கீடு பெற தகுதியுடையவர் (பிரிவு 34-ன் கீழ்)."}
                    </span>
                  </li>
                  <li style={{ padding: "6px 0", fontSize: "0.9rem", display: "flex", gap: "8px" }}>
                    <span>✅</span>
                    <span>
                      {lang === "en"
                        ? "Educational Protection: 5% seats reserved in government or aided institutions of higher learning, plus 5 years age relaxation (Sec 32)."
                        : "கல்விப் பாதுகாப்பு: அரசு மற்றும் உதவி பெறும் உயர்கல்வி நிறுவனங்களில் 5% இடஒதுக்கீடு, அத்துடன் 5 ஆண்டுகள் வயது வரம்பு தளர்வு (பிரிவு 32)."}
                    </span>
                  </li>
                  <li style={{ padding: "6px 0", fontSize: "0.9rem", display: "flex", gap: "8px" }}>
                    <span>✅</span>
                    <span>
                      {lang === "en"
                        ? "Free Education: Free learning in a neighborhood or special school until 18 years of age (Sec 31)."
                        : "இலவசக் கல்வி: 18 வயது வரையிலான வரம்புக்குட்பட்ட மாற்றுத்திறன் குழந்தைகளுக்கு அருகில் உள்ள பள்ளியிலோ அல்லது சிறப்புப் பள்ளியிலோ இலவசக் கல்வி (பிரிவு 31)."}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
