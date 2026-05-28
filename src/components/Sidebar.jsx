import React from "react";
import { rpwdData } from "../data/rpwdData";

export default function Sidebar({
  lang,
  activePanel,
  setActivePanel,
  isDrawerOpen,
  closeDrawer
}) {
  const handleNavClick = (panelId) => {
    setActivePanel(panelId);
    closeDrawer();
    // Scroll to top of content
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <aside className={`site-sidebar ${isDrawerOpen ? "drawer-open" : ""}`} aria-label="Table of Contents">
      <div className="sidebar-title">
        {lang === "en" ? "Navigation Menu" : "வழிசெலுத்தல் பட்டி"}
      </div>
      
      <ul className="nav-links">
        {/* Interactive Features */}
        <li className={`nav-item ${activePanel === "wizard" ? "active" : ""}`}>
          <button className="nav-link" onClick={() => handleNavClick("wizard")}>
            <span>🧙‍♂️</span>
            <span>
              {lang === "en" ? "Eligibility Assessment" : "தகுதி மதிப்பீடு"}
            </span>
          </button>
        </li>
        <li className={`nav-item ${activePanel === "disabilities" ? "active" : ""}`}>
          <button className="nav-link" onClick={() => handleNavClick("disabilities")}>
            <span>♿</span>
            <span>
              {lang === "en" ? "Specified Disabilities" : "குறிப்பிட்ட குறைபாடுகள்"}
            </span>
          </button>
        </li>
        <li className={`nav-item ${activePanel === "complaint" ? "active" : ""}`}>
          <button className="nav-link" onClick={() => handleNavClick("complaint")}>
            <span>⚖️</span>
            <span>
              {lang === "en" ? "Police Complaint Form" : "காவல் புகார் மனு"}
            </span>
          </button>
        </li>


        <div style={{ height: "1px", background: "var(--border-color)", margin: "12px 0" }} />

        <div className="sidebar-title" style={{ fontSize: "0.75rem", padding: "0 12px 8px" }}>
          {lang === "en" ? "Chapters" : "அத்தியாயங்கள்"}
        </div>

        {/* Chapters Navigation */}
        {rpwdData.chapters.map((ch) => (
          <li
            key={ch.id}
            className={`nav-item ${activePanel === ch.id ? "active" : ""}`}
          >
            <button
              className="nav-link"
              onClick={() => handleNavClick(ch.id)}
            >
              <span>📁</span>
              <span style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                {lang === "en"
                  ? `Ch. ${ch.number} — ${ch.titleEn}`
                  : `அத்தி. ${ch.number} — ${ch.titleTa}`}
              </span>
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}
