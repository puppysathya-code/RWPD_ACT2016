import React from "react";

export default function Header({
  lang,
  setLang,
  searchQuery,
  setSearchQuery,
  toggleSidebar
}) {
  return (
    <header className="site-header">
      <div className="header-inner">
        {/* Brand/Emblem Section */}
        <div className="brand-section">
          <button
            className="menu-toggle"
            onClick={toggleSidebar}
            aria-label="Open Navigation Drawer"
          >
            ☰
          </button>
          <div className="brand-emblem" aria-hidden="true">⚖️</div>
          <div className="brand-titles">
            <h1>
              {lang === "en"
                ? "RPWD Act 2016 Interactive"
                : "மாற்றுத்திறனாளிகள் சட்டம் 2016"}
            </h1>
            <p>
              {lang === "en"
                ? "Bilingual Legal Reference & Assessment Suite"
                : "இருமொழி சட்டக் குறிப்பு மற்றும் மதிப்பீட்டுத் தொகுப்பு"}
            </p>
          </div>
        </div>

        {/* Search & Language Controls */}
        <div className="search-and-controls">
          <div className="search-container">
            <span className="search-icon" aria-hidden="true">🔍</span>
            <input
              type="text"
              className="search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={
                lang === "en"
                  ? "Search sections by keyword..."
                  : "பிரிவுகளை தேடவும்..."
              }
              aria-label={
                lang === "en"
                  ? "Search sections by keyword"
                  : "பிரிவுகளை தேடவும்"
              }
            />
          </div>

          <button
            className="lang-toggle-button"
            onClick={() => setLang(lang === "en" ? "ta" : "en")}
            aria-label={
              lang === "en"
                ? "Switch language to Tamil"
                : "மொழியினை ஆங்கிலத்திற்கு மாற்றவும்"
            }
          >
            {lang === "en" ? "தமிழ்" : "English"}
          </button>
        </div>
      </div>
    </header>
  );
}
