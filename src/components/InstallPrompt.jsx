import React, { useState, useEffect } from "react";

export default function InstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user dismissed it in this session to avoid nagging
    const isDismissed = sessionStorage.getItem("pwa_prompt_dismissed");
    if (isDismissed) return;

    const handleBeforeInstallPrompt = (e) => {
      // Prevent the default browser prompt banner from showing automatically
      e.preventDefault();
      // Store the event so we can trigger it later
      setDeferredPrompt(e);
      // Show our premium custom prompt modal
      setIsVisible(true);
    };

    const handleAppInstalled = () => {
      console.log("App was installed successfully.");
      setDeferredPrompt(null);
      setIsVisible(false);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    window.addEventListener("appinstalled", handleAppInstalled);

    // If PWA is already installed or in standalone mode, don't show custom install UI
    if (window.matchMedia("(display-mode: standalone)").matches) {
      setIsVisible(false);
    }

    return () => {
      window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
      window.removeEventListener("appinstalled", handleAppInstalled);
    };
  }, []);

  const handleInstall = async () => {
    if (!deferredPrompt) return;

    // Show the browser's install dialog
    deferredPrompt.prompt();

    // Wait for the user's response
    const { outcome } = await deferredPrompt.userChoice;
    console.log(`User response to PWA install: ${outcome}`);

    // Clean up
    setDeferredPrompt(null);
    setIsVisible(false);
  };

  const handleNotNow = () => {
    // Keep it dismissed for the current session
    sessionStorage.setItem("pwa_prompt_dismissed", "true");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="pwa-install-overlay" role="dialog" aria-modal="true" aria-label="Install App Prompt">
      <div className="pwa-install-card">
        {/* Main Content Area */}
        <div className="pwa-install-body">
          {/* Left Side: Document Icon with Gold/Yellow Gradient */}
          <div className="pwa-install-icon-container">
            <svg
              className="pwa-install-icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#5c3c10"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
              <line x1="16" y1="13" x2="8" y2="13" />
              <line x1="16" y1="17" x2="8" y2="17" />
              <line x1="10" y1="9" x2="8" y2="9" />
            </svg>
          </div>

          {/* Right Side: Translation Text Fields */}
          <div className="pwa-install-text">
            <h3 className="pwa-install-title">மாண்புமிகு மக்கள்</h3>
            <p className="pwa-install-desc-ta">
              மாற்றுத்திறனாளிகள் உரிமைகள் சட்டம், 2016 (RPWD Act 2016) தொடர்பான தகவல்களை விரைவாகவும்
              எளிதாகவும் அணுக, இந்த இணையதளத்தை செயலியாக (App) நிறுவி பயன்படுத்துங்கள்.
            </p>
            <p className="pwa-install-desc-en">
              Install this website as an application for easy use.
            </p>
          </div>
        </div>

        {/* Buttons Row */}
        <div className="pwa-install-actions">
          <button className="pwa-btn-not-now" onClick={handleNotNow}>
            Not Now
          </button>
          <button className="pwa-btn-install" onClick={handleInstall}>
            Install App
          </button>
        </div>
      </div>
    </div>
  );
}
