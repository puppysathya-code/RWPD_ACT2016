import React, { useState, useEffect } from "react";

export default function AccessibilityBar({
  theme,
  setTheme,
  fontScale,
  setFontScale,
  lineSpacing,
  setLineSpacing,
  lang,
  speechRate,
  setSpeechRate,
  availableVoices = [],
  selectedVoiceName,
  setSelectedVoiceName
}) {
  const [isOpen, setIsOpen] = useState(false);

  // Apply theme to body element
  useEffect(() => {
    document.body.className = "";
    if (theme === "dark") document.body.classList.add("theme-dark");
    else if (theme === "sepia") document.body.classList.add("theme-sepia");
    else if (theme === "high-contrast") document.body.classList.add("theme-high-contrast");
    
    if (lang === "ta") {
      document.body.classList.add("tamil");
    } else {
      document.body.classList.remove("tamil");
    }
  }, [theme, lang]);

  // Apply font scale and line spacing to CSS variables
  useEffect(() => {
    document.documentElement.style.setProperty("--font-scale", fontScale);
    document.documentElement.style.setProperty("--line-spacing", lineSpacing);
  }, [fontScale, lineSpacing]);

  const handleFontChange = (direction) => {
    if (direction === "up") {
      setFontScale(prev => Math.min(prev + 0.1, 1.5));
    } else if (direction === "down") {
      setFontScale(prev => Math.max(prev - 0.1, 0.8));
    } else {
      setFontScale(1.0);
    }
  };

  const handleSpacingChange = (direction) => {
    if (direction === "up") {
      setLineSpacing(prev => Math.min(prev + 0.2, 2.4));
    } else if (direction === "down") {
      setLineSpacing(prev => Math.max(prev - 0.2, 1.4));
    } else {
      setLineSpacing(1.8);
    }
  };

  return (
    <div className="accessibility-bar-floating" aria-label="Accessibility settings">
      <button
        className="accessibility-trigger"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-label="Toggle Accessibility Toolbar"
        title="Accessibility Settings"
      >
        ♿
      </button>

      {isOpen && (
        <div className="accessibility-panel" role="dialog" aria-modal="true" style={{ maxHeight: "400px", overflowY: "auto" }}>
          <div className="acc-title">
            {lang === "en" ? "Accessibility Toolbar" : "அணுகல் பட்டி"}
          </div>

          {/* Theme Selector */}
          <div className="acc-section">
            <span className="acc-label">
              {lang === "en" ? "Contrast & Theme" : "மாறுபாடு மற்றும் தீம்"}
            </span>
            <div className="theme-selector-grid">
              <button
                className="theme-button theme-button-light"
                onClick={() => setTheme("light")}
                title="Light Theme"
              >
                A
              </button>
              <button
                className="theme-button theme-button-dark"
                onClick={() => setTheme("dark")}
                title="Dark Theme"
              >
                A
              </button>
              <button
                className="theme-button theme-button-sepia"
                onClick={() => setTheme("sepia")}
                title="Sepia Theme"
              >
                A
              </button>
              <button
                className="theme-button theme-button-hc"
                onClick={() => setTheme("high-contrast")}
                title="High Contrast Theme"
              >
                A
              </button>
            </div>
          </div>

          {/* Font Scaler */}
          <div className="acc-section">
            <span className="acc-label">
              {lang === "en" ? "Text Size" : "உரை அளவு"}
            </span>
            <div className="font-controller-row">
              <button className="acc-btn" onClick={() => handleFontChange("down")} aria-label="Decrease font size">- A</button>
              <button className="acc-btn" onClick={() => handleFontChange("reset")} aria-label="Reset font size">Reset</button>
              <button className="acc-btn" onClick={() => handleFontChange("up")} aria-label="Increase font size">+ A</button>
            </div>
          </div>

          {/* Line Spacing */}
          <div className="acc-section">
            <span className="acc-label">
              {lang === "en" ? "Line Spacing" : "வரி இடைவெளி"}
            </span>
            <div className="font-controller-row">
              <button className="acc-btn" onClick={() => handleSpacingChange("down")} aria-label="Decrease line height">- Spacing</button>
              <button className="acc-btn" onClick={() => handleSpacingChange("reset")} aria-label="Reset line height">Reset</button>
              <button className="acc-btn" onClick={() => handleSpacingChange("up")} aria-label="Increase line height">+ Spacing</button>
            </div>
          </div>

          {/* TTS Speed */}
          <div className="acc-section">
            <span className="acc-label">
              {lang === "en" ? "Read-Aloud Speed" : "வாசிப்பு வேகம்"}
            </span>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <input
                type="range"
                min="0.5"
                max="2"
                step="0.1"
                value={speechRate}
                onChange={(e) => setSpeechRate(parseFloat(e.target.value))}
                style={{ flex: 1, accentColor: "var(--accent-gold)" }}
                aria-label="Speech Speed slider"
              />
              <span style={{ fontSize: "0.75rem", fontWeight: "bold", fontFamily: "var(--font-display)" }}>
                {speechRate}x
              </span>
            </div>
          </div>

          {/* TTS Voice Select */}
          {availableVoices.length > 0 && (
            <div className="acc-section">
              <span className="acc-label">
                {lang === "en" ? "Speech Voice" : "பேச்சு குரல்"}
              </span>
              <select
                value={selectedVoiceName}
                onChange={(e) => setSelectedVoiceName(e.target.value)}
                className="acc-btn"
                style={{ width: "100%", padding: "6px", fontSize: "0.75rem", fontFamily: "var(--font-display)", textAlign: "left" }}
                aria-label="Select speech voice"
              >
                <option value="">
                  {lang === "en" ? "-- Auto-Detect --" : "-- தானியங்கி கண்டறிதல் --"}
                </option>
                {availableVoices.map((voice, idx) => (
                  <option key={idx} value={voice.name}>
                    {voice.name} ({voice.lang})
                  </option>
                ))}
              </select>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
