import React, { useState } from "react";
import { rpwdData } from "../data/rpwdData";

export default function EligibilityWizard({
  lang,
  speakingId,
  speakingComponent,
  handleSpeak
}) {
  const [step, setStep] = useState(1);
  const [disabilityId, setDisabilityId] = useState("");
  const [percentage, setPercentage] = useState(40);
  const [ageGroup, setAgeGroup] = useState("");

  const handleReset = () => {
    setDisabilityId("");
    setPercentage(40);
    setAgeGroup("");
    setStep(1);
  };

  const getResults = () => {
    const isBenchmark = percentage >= 40;
    const isSchoolAge = ageGroup === "school";
    const selectedDis = rpwdData.disabilities.find(d => d.id === disabilityId);
    
    let benefits = [];

    // General Rights
    benefits.push({
      titleEn: "Right to Equality & Non-discrimination (Sec 3)",
      titleTa: "சமத்துவம் மற்றும் பாகுபாடற்ற உரிமை (பிரிவு 3)",
      descEn: "You are fully entitled to a life of dignity, respect, and equal opportunities in society. Discrimination based on disability is strictly prohibited.",
      descTa: "சமூகத்தில் கண்ணியம், மரியாதை மற்றும் சம வாய்ப்புகளுடன் வாழ்வதற்கு உங்களுக்கு முழு உரிமை உண்டு. குறைபாட்டின் அடிப்படையில் பாகுபாடு காட்டுவது முற்றிலும் தடைசெய்யப்பட்டுள்ளது."
    });

    if (isBenchmark) {
      benefits.push({
        titleEn: "Benchmark Disability Legal Status (Sec 2(c))",
        titleTa: "வரம்புக்குட்பட்ட மாற்றுத்திறனாளி சட்டப்பூர்வ அங்கீகாரம் (பிரிவு 2(இ))",
        descEn: "With a certified disability of 40% or more, you are legally classified as having a 'Benchmark Disability', unlocking special reservations and welfare benefits.",
        descTa: "40% அல்லது அதற்கு மேற்பட்ட குறைபாடு சான்றளிக்கப்பட்டால், நீங்கள் சட்டப்பூர்வமாக 'வரம்புக்குட்பட்ட மாற்றுத்திறனாளி' என வகைப்படுத்தப்பட்டு, சிறப்பு சலுகைகள் மற்றும் இடஒதுக்கீடுகளைப் பெறத் தகுதி பெறுகிறீர்கள்."
      });

      benefits.push({
        titleEn: "Higher Education Reservations (Sec 32)",
        titleTa: "உயர்கல்வி சேர்க்கையில் இடஒதுக்கீடு (பிரிவு 32)",
        descEn: "Entitled to not less than 5% reservation in seats in government and government-aided institutions of higher learning, along with a 5-year upper age limit relaxation.",
        descTa: "அரசு மற்றும் அரசு நிதியுதவி பெறும் உயர்கல்வி நிறுவனங்களில் 5% இடஒதுக்கீடு மற்றும் 5 ஆண்டுகள் வயது வரம்பு தளர்வு பெற தகுதியுடையவர்."
      });

      benefits.push({
        titleEn: "Public Sector Job Reservations (Sec 34)",
        titleTa: "அரசு வேலைவாய்ப்புகளில் இடஒதுக்கீடு (பிரிவு 34)",
        descEn: "Entitled to at least 4% reservation in government jobs, specifically allocated across groups: 1% for blindness/low vision, 1% for deaf/hard of hearing, 1% for locomotor disabilities, and 1% for autism/intellectual/mental illnesses.",
        descTa: "அரசு வேலைகளில் 4% இடஒதுக்கீடு பெற தகுதியுடையவர். இதில் பார்வையற்றோருக்கு 1%, செவித்திறன் குறைபாடுள்ளோருக்கு 1%, நரம்பு ஒருங்கிய இயலாமை கொண்டோருக்கு 1%, மற்றும் மன இறுக்கம்/அறிவுசார் மாற்றுத்திறன் கொண்டோருக்கு 1% எனப் பிரிக்கப்பட்டுள்ளது."
      });

      benefits.push({
        titleEn: "Higher Social Security Quantum (Sec 24)",
        titleTa: "அதிகப்படியான சமூகப் பாதுகாப்பு உதவித்தொகை (பிரிவு 24)",
        descEn: "Welfare and financial assistance schemes formulated under this Act will offer support that is at least 25% higher than similar schemes designed for non-disabled citizens.",
        descTa: "இச்சட்டத்தின் கீழ் உருவாக்கப்படும் சமூக பாதுகாப்பு திட்டங்கள் மற்றும் நிதி உதவிகள், மாற்றுத்திறன் இல்லாத மக்களுக்கான ஒத்த திட்டங்களை விட குறைந்தபட்சம் 25% கூடுதலாக இருக்கும்."
      });

      if (isSchoolAge) {
        benefits.push({
          titleEn: "Free and Inclusive School Education (Sec 31 & 17)",
          titleTa: "இலவச மற்றும் உள்ளடக்கிய பள்ளி கல்வி (பிரிவு 31 மற்றும் 17)",
          descEn: "Absolute right to free education in a neighborhood school or special school of your choice until the age of 18. This includes free books, transport, and assistive learning aids.",
          descTa: "18 வயது வரை இலவசமாக பள்ளி அல்லது சிறப்புப் பள்ளியில் பயில முழு உரிமை உண்டு. இதில் இலவச புத்தகங்கள், போக்குவரத்து மற்றும் கற்றல் சாதனங்கள் ஆகியவை அடங்கும்."
        });
      }
    } else {
      benefits.push({
        titleEn: "Inclusive Education Support (Sec 16)",
        titleTa: "உள்ளடக்கிய கல்விக்கான ஆதரவு (பிரிவு 16)",
        descEn: "All educational institutions must admit you without discrimination and provide a supportive environment for your education and sports activities equally with others.",
        descTa: "அனைத்து கல்வி நிறுவனங்களும் உங்களை பாகுபாடின்றி சேர்க்க வேண்டும் மற்றும் கல்வி, விளையாட்டு ஆகியவற்றில் மற்றவர்களுக்கு நிகரான ஆதரவான சூழலை வழங்க வேண்டும்."
      });
      benefits.push({
        titleEn: "Notice: Benchmark Benefits Threshold",
        titleTa: "அறிவிப்பு: வரம்புக்குட்பட்ட சலுகை வரம்பு",
        descEn: "Special reservations in employment (4%) and higher education (5%) require a certified disability level of 40% or more. Consider getting a disability certificate from a certified medical authority.",
        descTa: "வேலைவாய்ப்பு (4%) மற்றும் உயர்கல்வி (5%) ஆகியவற்றில் சிறப்பு இடஒதுக்கீடு பெற 40% அல்லது அதற்கு மேற்பட்ட குறைபாடு சான்றளிக்கப்பட வேண்டும். அங்கீகரிக்கப்பட்ட மருத்துவ வாரியத்திடம் சான்றிதழ் பெற பரிந்துரைக்கப்படுகிறது."
      });
    }

    // High support conditions
    if (isBenchmark && ["cerebral_palsy", "multiple_disabilities", "blindness"].includes(disabilityId)) {
      benefits.push({
        titleEn: "Eligibility for High Support Services (Sec 38)",
        titleTa: "உயர் ஆதரவு சேவைகளுக்கான தகுதி (பிரிவு 38)",
        descEn: "Due to the severe nature of your condition, you or an organization on your behalf may apply to the State designated authority for 'High Support Services' which covers intensive care, customized aids, and rehabilitation programs.",
        descTa: "உங்கள் மாற்றுத்திறனின் தீவிரத் தன்மையைக் கருத்தில் கொண்டு, நீங்கள் அல்லது உங்களது சார்பாக ஏதேனும் ஒரு அமைப்பு தீவிரப் பராமரிப்பு, பிரத்யேக சாதனங்கள் மற்றும் மறுவாழ்வு திட்டங்களை உள்ளடக்கிய 'உயர் ஆதரவு சேவைகள்' பெற விண்ணப்பிக்கலாம்."
      });
    }

    return { benefits, isBenchmark, selectedDis };
  };

  const { benefits, isBenchmark, selectedDis } = getResults();

  // Helper to render accessible small speaker button
  const renderSpeakBtn = (id, textEn, textTa) => {
    const isSpeaking = speakingId === id && speakingComponent === "wizard";
    return (
      <button
        className={`action-btn speak-small-btn ${isSpeaking ? "active" : ""}`}
        onClick={(e) => {
          e.stopPropagation();
          handleSpeak(id, "wizard", textEn, textTa);
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
          marginLeft: "8px",
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
    <div className="wizard-card">
      <div className="wizard-steps">
        <span className={`step-indicator ${step >= 1 ? "active" : ""}`}>
          {lang === "en" ? "1. Category" : "1. வகை"}
        </span>
        <span className={`step-indicator ${step >= 2 ? "active" : ""}`}>
          {lang === "en" ? "2. Severity" : "2. அளவு"}
        </span>
        <span className={`step-indicator ${step >= 3 ? "active" : ""}`}>
          {lang === "en" ? "3. Details" : "3. விவரம்"}
        </span>
        <span className={`step-indicator ${step >= 4 ? "active" : ""}`}>
          {lang === "en" ? "4. Result" : "4. முடிவு"}
        </span>
      </div>

      <div className="step-content">
        {step === 1 && (
          <>
            <h3 style={{ fontFamily: "var(--font-display)", color: "var(--accent-blue)", display: "flex", alignItems: "center" }}>
              <span>{lang === "en" ? "Select your disability category:" : "உங்கள் மாற்றுத்திறன் வகையைத் தேர்ந்தெடுக்கவும்:"}</span>
              {renderSpeakBtn("wiz-step1", "Select your disability category.", "உங்கள் மாற்றுத்திறன் வகையைத் தேர்ந்தெடுக்கவும்.")}
            </h3>
            <div className="wizard-options-grid">
              {rpwdData.disabilities.slice(0, 10).map((d) => (
                <button
                  key={d.id}
                  className={`wizard-option ${disabilityId === d.id ? "selected" : ""}`}
                  onClick={() => setDisabilityId(d.id)}
                >
                  {lang === "en" ? d.typeEn : d.typeTa}
                </button>
              ))}
              <button
                className={`wizard-option ${disabilityId === "other" ? "selected" : ""}`}
                onClick={() => setDisabilityId("other")}
              >
                {lang === "en" ? "Other Specified Disability" : "மற்ற குறிப்பிட்ட மாற்றுத்திறன்"}
              </button>
            </div>
            {disabilityId && (
              <button
                className="acc-btn"
                style={{ alignSelf: "flex-end", maxWidth: "120px", marginTop: "16px" }}
                onClick={() => setStep(2)}
              >
                {lang === "en" ? "Next →" : "அடுத்து →"}
              </button>
            )}
          </>
        )}

        {step === 2 && (
          <>
            <h3 style={{ fontFamily: "var(--font-display)", color: "var(--accent-blue)", display: "flex", alignItems: "center" }}>
              <span>{lang === "en" ? "What is the certified disability percentage?" : "சான்றளிக்கப்பட்ட மாற்றுத்திறனின் சதவீதம் எவ்வளவு?"}</span>
              {renderSpeakBtn("wiz-step2", "What is the certified disability percentage? This is listed on your official Disability Certificate or UDID Card.", "சான்றளிக்கப்பட்ட மாற்றுத்திறனின் சதவீதம் எவ்வளவு? இது உங்களது அதிகாரப்பூர்வ மாற்றுத்திறனாளி சான்றிதழ் அல்லது UDID அட்டையில் குறிப்பிடப்பட்டிருக்கும்.")}
            </h3>
            <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)" }}>
              {lang === "en"
                ? "This is listed on your official Disability Certificate / UDID Card."
                : "இது உங்களது அதிகாரப்பூர்வ மாற்றுத்திறனாளி சான்றிதழ் அல்லது UDID அட்டையில் குறிப்பிடப்பட்டிருக்கும்."}
            </p>
            
            <div style={{ margin: "24px 0", display: "flex", flexDirection: "column", gap: "16px", alignItems: "center" }}>
              <input
                type="range"
                min="10"
                max="100"
                step="5"
                value={percentage}
                onChange={(e) => setPercentage(parseInt(e.target.value))}
                style={{ width: "100%", maxWidth: "400px", accentColor: "var(--accent-gold)" }}
                aria-label="Disability percentage slider"
              />
              <span style={{ fontSize: "2.5rem", fontFamily: "var(--font-display)", fontWeight: "700", color: "var(--accent-blue)" }}>
                {percentage}%
              </span>
            </div>

            <div style={{ display: "flex", justifyContent: "space-between", marginTop: "auto" }}>
              <button className="acc-btn" style={{ maxWidth: "120px" }} onClick={() => setStep(1)}>
                {lang === "en" ? "← Back" : "← பின்னே"}
              </button>
              <button className="acc-btn" style={{ maxWidth: "120px" }} onClick={() => setStep(3)}>
                {lang === "en" ? "Next →" : "அடுத்து →"}
              </button>
            </div>
          </>
        )}

        {step === 3 && (
          <>
            <h3 style={{ fontFamily: "var(--font-display)", color: "var(--accent-blue)", display: "flex", alignItems: "center" }}>
              <span>{lang === "en" ? "Select your age group:" : "உங்கள் வயதுப் பிரிவைத் தேர்ந்தெடுக்கவும்:"}</span>
              {renderSpeakBtn("wiz-step3", "Select your age group.", "உங்கள் வயதுப் பிரிவைத் தேர்ந்தெடுக்கவும்.")}
            </h3>
            <div className="wizard-options-grid">
              <button
                className={`wizard-option ${ageGroup === "child" ? "selected" : ""}`}
                onClick={() => setAgeGroup("child")}
              >
                {lang === "en" ? "Below 6 Years" : "6 வயதிற்குட்பட்ட குழந்தை"}
              </button>
              <button
                className={`wizard-option ${ageGroup === "school" ? "selected" : ""}`}
                onClick={() => setAgeGroup("school")}
              >
                {lang === "en" ? "School Going (6–18 Years)" : "பள்ளி செல்லும் வயது (6–18 ஆண்டுகள்)"}
              </button>
              <button
                className={`wizard-option ${ageGroup === "adult" ? "selected" : ""}`}
                onClick={() => setAgeGroup("adult")}
              >
                {lang === "en" ? "Adult (18–60 Years)" : "பெரியவர் (18–60 ஆண்டுகள்)"}
              </button>
              <button
                className={`wizard-option ${ageGroup === "senior" ? "selected" : ""}`}
                onClick={() => setAgeGroup("senior")}
              >
                {lang === "en" ? "Senior Citizen (60+ Years)" : "மூத்த குடிமகன் (60+ ஆண்டுகள்)"}
              </button>
            </div>

            <div style={{ display: "flex", justifyContent: "space-between", marginTop: "auto", paddingTop: "16px" }}>
              <button className="acc-btn" style={{ maxWidth: "120px" }} onClick={() => setStep(2)}>
                {lang === "en" ? "← Back" : "← பின்னே"}
              </button>
              {ageGroup && (
                <button
                  className="acc-btn"
                  style={{ maxWidth: "120px", background: "var(--accent-gold)", color: "var(--bg-primary)" }}
                  onClick={() => setStep(4)}
                >
                  {lang === "en" ? "View Rights →" : "உரிமைகளைக் காண்க →"}
                </button>
              )}
            </div>
          </>
        )}

        {step === 4 && (
          <div className="wizard-results">
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid var(--border-color)", paddingBottom: "12px", marginBottom: "16px" }}>
              <h3 style={{ fontFamily: "var(--font-display)", color: "var(--accent-blue)", margin: 0 }}>
                {lang === "en" ? "Your Legal Rights Checklist" : "உங்கள் சட்டப்பூர்வ உரிமைகள் சரிபார்ப்புப் பட்டியல்"}
              </h3>
              {renderSpeakBtn("wiz-step4-header", "Your Legal Rights Checklist. Here are the benefits you are entitled to.", "உங்கள் சட்டப்பூர்வ உரிமைகள் சரிபார்ப்புப் பட்டியல். நீங்கள் பெறத் தகுதியுடைய சலுகைகள் பின்வருமாறு.")}
            </div>
            
            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              {benefits.map((b, idx) => (
                <div key={idx} className="wizard-benefit-item" style={{ position: "relative" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "12px" }}>
                    <h4 style={{ margin: 0, paddingRight: "30px", flex: 1 }}>{lang === "en" ? b.titleEn : b.titleTa}</h4>
                    {renderSpeakBtn(`wiz-benefit-${idx}`, `${b.titleEn}. ${b.descEn}`, `${b.titleTa}. ${b.descTa}`)}
                  </div>
                  <p style={{ marginTop: "8px", marginBottom: 0 }}>{lang === "en" ? b.descEn : b.descTa}</p>
                </div>
              ))}
            </div>

            <button
              className="acc-btn"
              style={{ background: "var(--accent-blue)", color: "#ffffff", marginTop: "16px", alignSelf: "center", maxWidth: "200px" }}
              onClick={handleReset}
            >
              {lang === "en" ? "Start Over 🔄" : "மீண்டும் தொடங்கு 🔄"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
