import React, { useState, useEffect } from "react";

export default function InstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  const [isSafari, setIsSafari] = useState(false);

  // Check URL parameters for manual testing (e.g. ?test_ios or ?testios)
  const params = new URLSearchParams(typeof window !== "undefined" ? window.location.search : "");
  const forceIOS = params.has("test_ios") || params.has("testios");
  const forceGeneric = params.has("test_generic") || params.has("testgeneric");
  const isTestingManual = forceIOS || forceGeneric;
  const showNativeInstall = deferredPrompt && !isTestingManual;

  useEffect(() => {
    // Check if user dismissed it in this session to avoid nagging
    const isDismissed = sessionStorage.getItem("pwa_prompt_dismissed");
    if (isDismissed) return;

    // Check if app is already running in standalone mode (installed)
    const isStandalone = window.matchMedia("(display-mode: standalone)").matches || window.navigator.standalone;
    if (isStandalone) return;

    // Detect OS and Browser (supporting test query params)
    const userAgent = window.navigator.userAgent.toLowerCase();
    const ios = forceIOS || /iphone|ipad|ipod/.test(userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
    const safari = forceIOS || (/safari/.test(userAgent) && !/crios|fxios|opr|edgios/.test(userAgent));
    setIsIOS(ios);
    setIsSafari(safari);

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

    // If beforeinstallprompt is NOT supported by the browser, show custom instructions after a small delay
    // Disable native prompt check if we are explicitly testing the manual fallbacks
    const isInstallPromptSupported = !forceIOS && !forceGeneric && ('BeforeInstallPromptEvent' in window || 'beforeinstallprompt' in window);
    
    let fallbackTimeout;
    if (!isInstallPromptSupported) {
      fallbackTimeout = setTimeout(() => {
        setIsVisible(true);
      }, 1500); // 1.5 seconds delay
    }

    return () => {
      window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
      window.removeEventListener("appinstalled", handleAppInstalled);
      if (fallbackTimeout) clearTimeout(fallbackTimeout);
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

            {/* Instruction manual guide when native install prompt isn't supported */}
            {!showNativeInstall && (
              <div className="pwa-install-instructions">
                <h4 className="pwa-instruction-heading">
                  {isIOS ? "நிறுவும் முறை (iOS Installation Guide):" : "நிறுவும் முறை (Installation Guide):"}
                </h4>
                <ol className="pwa-instruction-list">
                  {isIOS ? (
                    isSafari ? (
                      <>
                        <li>
                          கீழே உள்ள <strong>பகிர் (Share)</strong> பொத்தானை அழுத்தவும்{" "}
                          <span className="pwa-icon-inline share-icon" aria-label="Share button">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8M16 6l-4-4-4 4M12 2v13"/></svg>
                          </span>.
                          <br />
                          <span className="pwa-sub-instruction">Tap the <strong>Share</strong> button at the bottom of Safari.</span>
                        </li>
                        <li>
                          மெனுவை கீழே உருட்டி <strong>'முகப்புத் திரையில் சேர்' (Add to Home Screen)</strong> என்பதைத் தேர்ந்தெடுக்கவும் {" "}
                          <span className="pwa-icon-inline add-icon" aria-label="Add to home screen icon">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/></svg>
                          </span>.
                          <br />
                          <span className="pwa-sub-instruction">Scroll down and select <strong>'Add to Home Screen'</strong>.</span>
                        </li>
                      </>
                    ) : (
                      <>
                        <li>
                          உலாவியின் பகிர் (Share) அல்லது மெனு (Menu) பொத்தானை அழுத்தவும்.
                          <br />
                          <span className="pwa-sub-instruction">Tap the Share or Menu button.</span>
                        </li>
                        <li>
                          <strong>'முகப்புத் திரையில் சேர்' (Add to Home Screen)</strong> என்பதைத் தேர்ந்தெடுக்கவும்.
                          <br />
                          <span className="pwa-sub-instruction">Select <strong>'Add to Home Screen'</strong> to install.</span>
                        </li>
                      </>
                    )
                  ) : (
                    <>
                      <li>
                        உங்கள் உலாவியின் மெனுவை (உயரமான மூன்று புள்ளிகள் அல்லது பகிர் பொத்தான்) திறக்கவும்.
                        <br />
                        <span className="pwa-sub-instruction">Open your browser menu (e.g., three dots or share icon).</span>
                      </li>
                      <li>
                        <strong>'நிறுவவும்' (Install)</strong> அல்லது <strong>'முகப்புத் திரையில் சேர்' (Add to Home Screen)</strong> என்பதைத் தேர்ந்தெடுக்கவும்.
                        <br />
                        <span className="pwa-sub-instruction">Select <strong>'Install App'</strong> or <strong>'Add to Home Screen'</strong>.</span>
                      </li>
                    </>
                  )}
                </ol>
              </div>
            )}
          </div>
        </div>

        {/* Buttons Row */}
        <div className="pwa-install-actions">
          <button className="pwa-btn-not-now" onClick={handleNotNow}>
            {showNativeInstall ? "Not Now" : "Close"}
          </button>
          {showNativeInstall && (
            <button className="pwa-btn-install" onClick={handleInstall}>
              Install App
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
