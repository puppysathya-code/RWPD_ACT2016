import React from "react";

export default function TtsTroubleshootModal({
  isOpen,
  onClose,
  lang,
  onPlayEnglishFallback,
  troubleData
}) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose} style={{ zIndex: 1100 }}>
      <div
        className="modal-content troubleshooting-modal"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        style={{ maxWidth: "560px", animation: "slideUp 0.3s ease" }}
      >
        <button
          className="modal-close"
          onClick={onClose}
          aria-label={lang === "en" ? "Close troubleshooting guide" : "மூடு"}
        >
          ×
        </button>

        {/* Title */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
          <span style={{ fontSize: "2rem" }}>🔊</span>
          <h2 style={{ fontFamily: "var(--font-display)", color: "var(--accent-blue)", fontSize: "1.4rem", margin: 0 }}>
            {lang === "en" ? "Tamil TTS Voice Not Found" : "தமிழ் பேச்சு குரல் கண்டறியப்படவில்லை"}
          </h2>
        </div>

        {/* Dynamic Warning Alert Box */}
        <div
          style={{
            background: "rgba(245, 158, 11, 0.1)",
            border: "1px solid rgba(245, 158, 11, 0.3)",
            borderRadius: "8px",
            padding: "12px 16px",
            marginBottom: "20px",
            fontSize: "0.9rem",
            lineHeight: "1.6",
            color: "var(--text-primary)"
          }}
        >
          <p style={{ margin: 0, fontWeight: "600", color: "var(--accent-gold)", marginBottom: "4px" }}>
            ⚠️ {lang === "en" ? "Why is this happening?" : "ஏன் இது நிகழ்கிறது?"}
          </p>
          {lang === "en" ? (
            "Your operating system or browser is missing a Tamil Text-to-Speech (TTS) voice package. Standard English voices skip Tamil letters, which causes the reader to read ONLY section numbers."
          ) : (
            "உங்களது கணினி அல்லது உலாவியில் தமிழ் பேச்சு குரல் (TTS) நிறுவப்படவில்லை. ஆங்கில குரல் இயந்திரங்கள் தமிழ் எழுத்துக்களை புறக்கணிப்பதால், வெறும் எண்கள் மட்டுமே ஒலிக்கிறது."
          )}
        </div>

        {/* Action Buttons */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            marginBottom: "24px"
          }}
        >
          <button
            className="acc-btn"
            onClick={onPlayEnglishFallback}
            style={{
              background: "var(--accent-blue)",
              color: "#ffffff",
              padding: "12px",
              fontWeight: "600",
              borderRadius: "8px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px"
            }}
          >
            <span>📖</span>
            <span>
              {lang === "en"
                ? "Read English Translation Aloud"
                : "ஆங்கில மொழிபெயர்ப்பை உரக்க வாசி"}
            </span>
          </button>
          
          <button
            className="acc-btn"
            onClick={onClose}
            style={{
              background: "transparent",
              border: "1px solid var(--border-color)",
              color: "var(--text-primary)",
              padding: "10px"
            }}
          >
            {lang === "en" ? "Dismiss & Read Text Manually" : "மூடு & உரையை நீங்களே வாசிக்கவும்"}
          </button>
        </div>

        {/* Installation Instructions Tabbed/Divided Sections */}
        <div
          style={{
            borderTop: "1px solid var(--border-color)",
            paddingTop: "16px",
            maxHeight: "220px",
            overflowY: "auto",
            paddingRight: "8px"
          }}
        >
          <h3 style={{ fontSize: "0.95rem", fontFamily: "var(--font-display)", color: "var(--accent-blue)", marginBottom: "12px", display: "flex", alignItems: "center", gap: "6px" }}>
            ⚙️ {lang === "en" ? "How to Install Tamil Speech Voice" : "தமிழ் பேச்சு குரலை எவ்வாறு நிறுவுவது?"}
          </h3>

          <div style={{ display: "flex", flexDirection: "column", gap: "14px", fontSize: "0.85rem", lineHeight: "1.6" }}>
            {/* Windows Instructions */}
            <div>
              <strong style={{ display: "block", color: "var(--accent-gold)", marginBottom: "4px" }}>
                💻 Windows 10 & 11:
              </strong>
              <ol style={{ paddingLeft: "20px", margin: 0 }}>
                <li>
                  {lang === "en"
                    ? "Open Settings (Win + I) ➔ Time & Language ➔ Language & Region."
                    : "அமைப்புகள் (Settings) ➔ Time & Language ➔ Language & Region பக்கத்திற்கு செல்லவும்."}
                </li>
                <li>
                  {lang === "en"
                    ? "Click 'Add a language' and search for 'Tamil (India)'. Click Next."
                    : "'Add a language' என்பதை கிளிக் செய்து 'Tamil' என தேடி தேர்ந்தெடுக்கவும்."}
                </li>
                <li>
                  {lang === "en"
                    ? "Ensure the 'Speech' checkbox is ticked and click Install."
                    : "'Speech' தேர்வுப் பெட்டி தேர்ந்தெடுக்கப்பட்டுள்ளதை உறுதிசெய்து Install கிளிக் செய்யவும்."}
                </li>
                <li>
                  {lang === "en"
                    ? "Restart your browser (Google Chrome or Microsoft Edge) to load the new voice pack."
                    : "புதிய குரல் தொகுப்பை ஏற்க உங்களது உலாவியை (Chrome/Edge) மூடி மீண்டும் திறக்கவும்."}
                </li>
              </ol>
            </div>

            {/* Edge / Chrome Recommendation */}
            <div>
              <strong style={{ display: "block", color: "var(--accent-gold)", marginBottom: "4px" }}>
                🌐 Recommended Browsers:
              </strong>
              <p style={{ margin: 0 }}>
                {lang === "en" ? (
                  <>
                    We highly recommend opening this portal in <strong>Microsoft Edge</strong>. Edge includes premium cloud-powered natural voices (like <em>Microsoft Pallavi Online</em>) that work instantly without downloading any language packs!
                  </>
                ) : (
                  <>
                    இத்தளத்தை <strong>Microsoft Edge</strong> உலாவியில் திறக்கப் பரிந்துரைக்கிறோம். எட்ஜ் உலாவியில் இணையவழியாக இயங்கும் பிரீமியம் குரல்கள் (<em>Microsoft Pallavi Online</em>) எந்தவொரு பதிவிறக்கமும் இன்றி உடனடியாக இயங்கும்!
                  </>
                )}
              </p>
            </div>

            {/* Mobile Instructions */}
            <div>
              <strong style={{ display: "block", color: "var(--accent-gold)", marginBottom: "4px" }}>
                📱 Mobile (Android & iOS):
              </strong>
              <p style={{ margin: 0 }}>
                {lang === "en" ? (
                  "Go to Settings ➔ Accessibility ➔ Text-to-Speech. Under preferred engine settings, download the Tamil voice data pack."
                ) : (
                  "அமைப்புகள் ➔ அணுகல் (Accessibility) ➔ Text-to-Speech சென்று கூகுள் பேச்சு அமைப்பில் தமிழ் மொழி தரவை பதிவிறக்கவும்."
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
