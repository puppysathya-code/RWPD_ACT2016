// Structured Bilingual Data for the Rights of Persons with Disabilities (RPWD) Act, 2016
// Contains all 17 Chapters, 102 Sections, 21 Specified Disabilities, and Penalties in both English and Tamil.

export const rpwdData = {
  chapters: [
  {
    "id": "chapter1",
    "number": "I",
    "titleEn": "Preliminary",
    "titleTa": "முன்னுரை",
    "sections": [
      {
        "id": "sec-1",
        "number": "1",
        "titleEn": "Short title, extent and commencement",
        "titleTa": "சுருக்கப் பெயர், பரவல் மற்றும் தொடக்கம்",
        "contentEn": [
          "(1) This Act may be called the Rights of Persons with Disabilities Act, 2016.",
          "(2) It extends to the whole of India.",
          "(3) It shall come into force on such date as the Central Government may, by notification in the Official Gazette, appoint."
        ],
        "contentTa": [
          "(1) இச்சட்டம் மாற்றுத்திறனாளிகளின் உரிமைகள் சட்டம், 2016 என அழைக்கப்படலாம்.",
          "(2) இது இந்தியா முழுவதும் பரவலாகும்.",
          "(3) மத்திய அரசு அரசிதழில் அறிவிக்கை வெளியிடும் நாளிலிருந்து இது நடைமுறைக்கு வரும்."
        ]
      },
      {
        "id": "sec-2",
        "number": "2",
        "titleEn": "Definitions",
        "titleTa": "வரையறைகள்",
        "isDefinition": true,
        "contentEn": [
          "In this Act, unless the context otherwise requires, key definitions include:"
        ],
        "contentTa": [
          "இந்தச் சட்டத்தில், சந்தர்ப்பம் வேறுவிதமாக தேவைப்படாவிட்டால், முக்கிய வரையறைகள் பின்வருமாறு:"
        ],
        "definitions": [
          {
            "termEn": "(a) \"appropriate Government\"",
            "termTa": "(அ) \"உரிய அரசு\"",
            "descEn": "means in relation to any establishment of the Central Government or a Cantonment Board, the Central Government; in relation to an establishment of a State Government or local authority, the State Government.",
            "descTa": "மத்திய அரசின் எந்த நிறுவனம் அல்லது கன்டோன்மென்ட் வாரியம் தொடர்பாக, மத்திய அரசு; மாநில அரசு அல்லது உள்ளாட்சி அமைப்பு நிறுவனம் தொடர்பாக, மாநில அரசு என்று பொருள்படும்."
          },
          {
            "termEn": "(b) \"barrier\"",
            "termTa": "(ஆ) \"தடை\"",
            "descEn": "means any factor including communicational, cultural, economic, environmental, institutional, political, social, attitudinal or structural factors which hampers the full and effective participation of persons with disabilities in society on an equal basis with others.",
            "descTa": "தொடர்பு, கலாச்சார, பொருளாதார, சுற்றுச்சூழல், நிறுவன, அரசியல், சமூக, மனப்பான்மை அல்லது கட்டமைப்பு காரணிகள் உட்பட, மாற்றுத்திறனாளிகள் சமூகத்தில் சமத்துவ அடிப்படையில் பங்கெடுப்பதை தடுக்கும் எந்த காரணியும்."
          },
          {
            "termEn": "(c) \"benchmark disability\"",
            "termTa": "(இ) \"டள்ளர் மாற்றுத்திறன் (வரம்புக்குட்பட்ட மாற்றுத்திறன்)\"",
            "descEn": "means a person with not less than forty per cent of a specified disability as certified by a certifying authority.",
            "descTa": "சான்றளிக்கும் அதிகாரியால் சான்றளிக்கப்பட்ட குறைந்தது நாற்பது சதவீதம் குறிப்பிட்ட மாற்றுத்திறன் உள்ள நபர் என்று பொருள்படும்."
          },
          {
            "termEn": "(d) \"care-giver\"",
            "termTa": "(ஈ) \"பராமரிப்பாளர்\"",
            "descEn": "means a person who provides care, support and assistance to a person with disability.",
            "descTa": "மாற்றுத்திறன் உள்ள நபருக்கு பராமரிப்பு, ஆதரவு மற்றும் உதவி வழங்கும் நபர்."
          },
          {
            "termEn": "(e) \"communication\"",
            "termTa": "(உ) \"தொடர்பு\"",
            "descEn": "includes languages, display of text, Braille, tactile communication, large print, accessible multimedia, plain-language, human-reader, augmentative and alternative modes, means and formats of communication, including accessible information and communication technology.",
            "descTa": "மொழிகள், உரை காட்சி, பிரெயில், தொடு தொடர்பு, பெரிய அச்சிடல், அணுகக்கூடிய மல்டிமீடியா, எளிய மொழி, மனித வாசகர், கூடுதல் மற்றும் மாற்று முறைகள் உட்பட."
          },
          {
            "termEn": "(f) \"disability\"",
            "termTa": "(ஊ) \"மாற்றுத்திறன்\"",
            "descEn": "means the result of long-term physical, mental, intellectual or sensory impairment, when interacting with barriers, hampers full and effective participation in society.",
            "descTa": "நீண்டகால உடல், மன, அறிவார்ந்த அல்லது உணர்வு குறைபாட்டின் விளைவு, தடைகளுடன் தொடர்பு கொள்ளும்போது, சமூகத்தில் முழுமையான பங்கேற்பை தடுக்கும்."
          },
          {
            "termEn": "(g) \"establishment\"",
            "termTa": "(எ) \"நிறுவனம்\"",
            "descEn": "includes a Government establishment and private establishment.",
            "descTa": "அரசு நிறுவனம் மற்றும் தனியார் நிறுவனம் உட்படும்."
          },
          {
            "termEn": "(h) \"guardianship\"",
            "termTa": "(ஏ) \"காப்பாண்மை\"",
            "descEn": "means a legal mechanism whereby a competent authority entrusts one person or an organization to make decisions on behalf of another person.",
            "descTa": "ஒரு நிறுவனம் அல்லது நபரை மற்றொரு நபர் சார்பாக முடிவெடுக்க ஒரு திறமையான அதிகாரம் நம்பகமளிக்கும் சட்ட வழிமுறை."
          },
          {
            "termEn": "(i) \"inclusive education\"",
            "termTa": "(ஐ) \"உள்ளடக்கிய கல்வி\"",
            "descEn": "means a system of education wherein students with and without disability learn together and where the system of teaching and learning is suitably adapted to meet the learning needs of different types of students with disabilities.",
            "descTa": "மாற்றுத்திறன் உள்ள மற்றும் இல்லாத மாணவர்கள் சேர்ந்து படிக்கும் ஒரு கல்வி அமைப்பு."
          },
          {
            "termEn": "(j) \"person with disability\"",
            "termTa": "(ஒ) \"மாற்றுத்திறன் உள்ள நபர்\"",
            "descEn": "means a person with long term physical, mental, intellectual or sensory impairment which, in interaction with barriers, hinders his full and effective participation in society equally with others.",
            "descTa": "நீண்டகால உடல், மன, அறிவு அல்லது புலன் குறைபாடு உள்ள நபர், தடைகளுடன் தொடர்பு கொள்ளும்போது சமூகத்தில் பங்கேற்பை தடுக்கும்."
          },
          {
            "termEn": "(k) \"reasonable accommodation\"",
            "termTa": "(ஓ) \"நியாயமான இணக்கம்\"",
            "descEn": "means necessary and appropriate modification and adjustments, without imposing a disproportionate or undue burden, to ensure to persons with disabilities the enjoyment or exercise of rights equally with others.",
            "descTa": "மாற்றுத்திறனாளிகளுக்கு உரிமைகளை அனுபவிக்க சமத்துவ அடிப்படையில் உறுதிசெய்ய, விகிதாசாரமற்ற சுமை விதிக்காமல் தேவையான மாற்றங்கள் மற்றும் சரிசெய்தல்கள்."
          },
          {
            "termEn": "(l) \"specified disability\"",
            "termTa": "(ஔ) \"குறிப்பிட்ட மாற்றுத்திறன்\"",
            "descEn": "means the disabilities as specified in the Schedule.",
            "descTa": "இணைப்பில் குறிப்பிட்டுள்ள மாற்றுத்திறன்கள்."
          },
          {
            "termEn": "(m) \"universal design\"",
            "termTa": "(க) \"அனைவருமான வடிவமைப்பு\"",
            "descEn": "means the design of products, environments, programmes and services to be usable by all people to the greatest extent possible, without the need for adaptation or specialized design.",
            "descTa": "தகவமைப்பு அல்லது சிறப்பு வடிவமைப்பு தேவையின்றி, எல்லா மக்களும் முடிந்தவரை பயன்படுத்தும் வகையில் பொருட்கள், சூழல்கள், திட்டங்கள் மற்றும் சேவைகளின் வடிவமைப்பு."
          }
        ]
      }
    ]
  },
  {
    "id": "chapter2",
    "number": "II",
    "titleEn": "Rights and Entitlements",
    "titleTa": "உரிமைகள் மற்றும் தகுதிகள்",
    "sections": [
      {
        "id": "sec-3",
        "number": "3",
        "titleEn": "Equality and non-discrimination",
        "titleTa": "சமத்துவம் மற்றும் பாகுபாட்டு ஒழிப்பு",
        "contentEn": [
          "(1) The appropriate Government shall ensure that the persons with disabilities enjoy the right to equality, life with dignity and respect for his or her integrity equally with others.",
          "(2) The appropriate Government shall take steps to utilise the capacity of persons with disabilities by providing appropriate environment.",
          "(3) No person with disability shall be discriminated on the ground of disability, unless it is shown that the impugned act or omission is a proportionate means of achieving a legitimate aim.",
          "(4) No person shall be deprived of his or her personal liberty only on the ground of disability.",
          "(5) The appropriate Government shall take necessary steps to prevent atrocities against persons with disabilities and to rehabilitate such persons."
        ],
        "contentTa": [
          "(1) உரிய அரசு, மாற்றுத்திறனாளிகள் மற்றவர்களுடன் சமத்துவமாக சமத்துவ உரிமை, கண்ணியமான வாழ்க்கை மற்றும் தன்னிறைவுக்கான மரியாதையை அனுபவிப்பதை உறுதிசெய்யும்.",
          "(2) உரிய அரசு, மாற்றுத்திறனாளிகளின் திறனை பயன்படுத்துவதற்கு தகுந்த சூழலை வழங்கி நடவடிக்கைகள் எடுக்கும்.",
          "(3) மாற்றுத்திறன் காரணமாக மட்டும் எந்த மாற்றுத்திறனாளியும் பாகுபாடு காட்டப்படமாட்டார், அச்செயல் சட்டபூர்வமான நோக்கத்தை அடைவதற்கானது என்று நிரூபிக்கப்பட்டால் ஒழிய.",
          "(4) மாற்றுத்திறன் காரணம் மட்டுமே தவிர வேறு எந்த நபரும் தனிப்பட்ட சுதந்திரத்தை இழக்க மாட்டார்.",
          "(5) உரிய அரசு, மாற்றுத்திறனாளிகளுக்கு எதிரான கொடுமைகளை தடுக்கவும், அத்தகைய நபர்களை மறுவாழ்வு செய்யவும் தேவையான நடவடிக்கைகள் எடுக்கும்."
        ]
      },
      {
        "id": "sec-4",
        "number": "4",
        "titleEn": "Women and girls with disabilities",
        "titleTa": "மாற்றுத்திறன் உள்ள பெண்கள் மற்றும் சிறுமிகள்",
        "contentEn": [
          "(1) The appropriate Government and local authorities shall take measures to ensure that women and girls with disabilities enjoy their rights equally with others.",
          "(2) They shall ensure that such women and girls enjoy life with dignity and have appropriate protection from exploitation, abuse, and violence."
        ],
        "contentTa": [
          "(1) உரிய அரசு மற்றும் உள்ளாட்சி அமைப்புகள், மாற்றுத்திறன் உள்ள பெண்கள் மற்றும் சிறுமிகள் மற்றவர்களுடன் சமத்துவமாக தங்கள் உரிமைகளை அனுபவிப்பதை உறுதிசெய்ய நடவடிக்கைகள் எடுக்க வேண்டும்.",
          "(2) அத்தகைய பெண்கள் மற்றும் சிறுமிகள் கண்ணியமான வாழ்க்கையை அனுபவிப்பதையும், சுரண்டல், துஷ்பிரயோகம் மற்றும் வன்முறையிலிருந்து தகுந்த பாதுகாப்பைப் பெறுவதையும் அவர்கள் உறுதிசெய்ய வேண்டும்."
        ]
      },
      {
        "id": "sec-5",
        "number": "5",
        "titleEn": "Children with disabilities",
        "titleTa": "மாற்றுத்திறன் உள்ள குழந்தைகள்",
        "contentEn": [
          "(1) The appropriate Government and the local authorities shall take measures to protect and promote the rights of children with disabilities.",
          "(2) Every child with disability shall have equal rights with respect to family life, and shall not be separated from parents on the grounds of disability."
        ],
        "contentTa": [
          "(1) உரிய அரசு மற்றும் உள்ளாட்சி அமைப்புகள், மாற்றுத்திறன் உள்ள குழந்தைகளின் உரிமைகளைப் பாதுகாக்கவும் மேம்படுத்தவும் தேவையான நடவடிக்கைகள் எடுக்க வேண்டும்.",
          "(2) மாற்றுத்திறன் கொண்ட ஒவ்வொரு குழந்தைக்கும் குடும்ப வாழ்க்கை தொடர்பாக சமமான உரிமைகள் இருக்கும், மேலும் குழந்தையின் மாற்றுத்திறன் காரணமாக பெற்றோரிடமிருந்து பிரிக்கப்படக் கூடாது."
        ]
      },
      {
        "id": "sec-6",
        "number": "6",
        "titleEn": "Protection from cruelty and inhuman treatment",
        "titleTa": "கொடுமை மற்றும் மனிதநேயமற்ற நடத்தையிலிருந்து பாதுகாப்பு",
        "contentEn": [
          "(1) The appropriate Government shall take measures to protect persons with disabilities from being subjected to cruelty, inhuman or degrading treatment.",
          "(2) No person with disability shall be a subject of any research without his or her free and informed consent obtained through a designated procedure."
        ],
        "contentTa": [
          "(1) மாற்றுத்திறனாளிகள் கொடுமை, மனிதநேயமற்ற அல்லது தரக்குறைவான நடத்தைகளுக்கு ஆளாவதிலிருந்து பாதுகாக்க உரிய அரசு தகுந்த நடவடிக்கைகளை எடுக்க வேண்டும்.",
          "(2) பரிந்துரைக்கப்பட்ட நடைமுறையின் மூலம் பெறப்பட்ட இலவச மற்றும் தகவலறிந்த ஒப்புதல் இன்றி எந்த மாற்றுத்திறனாளியும் எந்தவொரு ஆராய்ச்சிக்கும் உட்படுத்தப்படக் கூடாது."
        ]
      },
      {
        "id": "sec-7",
        "number": "7",
        "titleEn": "Protection from abuse, violence and exploitation",
        "titleTa": "துஷ்பிரயோகம், வன்முறை மற்றும் சுரண்டலிலிருந்து பாதுகாப்பு",
        "contentEn": [
          "(1) The appropriate Government shall take mandatory measures to protect persons with disabilities from all forms of abuse, violence, and exploitation.",
          "(2) Any person or registered organization may give information to the local Executive Magistrate regarding any such incident, who shall immediately take rescue and protective measures."
        ],
        "contentTa": [
          "(1) மாற்றுத்திறனாளிகளை அனைத்து வகையான துஷ்பிரயோகம், வன்முறை மற்றும் சுரண்டலில் இருந்து பாதுகாக்க உரிய அரசு கட்டாய நடவடிக்கைகளை எடுக்க வேண்டும்.",
          "(2) எந்தவொரு நபரும் அல்லது பதிவு செய்யப்பட்ட அமைப்பும் அத்தகைய சம்பவம் குறித்து உள்ளூர் நிர்வாக மேஜிஸ்ட்ரேட்டுக்கு தகவல் தெரிவிக்கலாம், அவர் உடனடியாக மீட்பு மற்றும் பாதுகாப்பு நடவடிக்கைகளை எடுக்க வேண்டும்."
        ]
      },
      {
        "id": "sec-8",
        "number": "8",
        "titleEn": "Protection and safety",
        "titleTa": "பாதுகாப்பு மற்றும் முன்னெச்சரிக்கை",
        "contentEn": [
          "(1) Persons with disabilities shall have equal right to protection and safety in situations of risk, armed conflict, humanitarian emergencies and natural disasters.",
          "(2) The National Disaster Management Authority and State Disaster Management Authorities shall ensure that persons with disabilities are integrated into all disaster management plans and rescue operations."
        ],
        "contentTa": [
          "(1) ஆபத்தான சூழ்நிலைகள், ஆயுத மோதல்கள், மனிதாபிமான அவசரநிலைகள் மற்றும் இயற்கை பேரிடர்களின் போது மாற்றுத்திறனாளிகளுக்கு பாதுகாப்பு மற்றும் மீட்புக்கான சம உரிமை உண்டு.",
          "(2) தேசிய பேரிடர் மேலாண்மை ஆணையம் மற்றும் மாநில பேரிடர் மேலாண்மை ஆணையங்கள் அனைத்து பேரிடர் மேலாண்மை திட்டங்கள் மற்றும் மீட்பு நடவடிக்கைகளில் மாற்றுத்திறனாளிகள் இணைக்கப்படுவதை உறுதி செய்ய வேண்டும்."
        ]
      },
      {
        "id": "sec-9",
        "number": "9",
        "titleEn": "Home and family",
        "titleTa": "இல்லம் மற்றும் குடும்பம்",
        "contentEn": [
          "(1) No child with disability shall be separated from his or her parents on the ground of disability except on an order of competent court in the child's best interest.",
          "(2) Where parents are unable to take care of a child with benchmark disability, the court shall place the child with near relations, or within the community in a foster home."
        ],
        "contentTa": [
          "(1) குழந்தையின் நலன் கருதி தகுதிவாய்ந்த நீதிமன்றத்தின் உத்தரவின் பேரில் தவிர, மாற்றுத்திறன் காரணமாக எந்தவொரு குழந்தையும் அவனது அல்லது அவளது பெற்றோரிடமிருந்து பிரிக்கப்படக் கூடாது.",
          "(2) வரம்புக்குட்பட்ட மாற்றுத்திறன் கொண்ட குழந்தையை பெற்றோர்களால் பராமரிக்க முடியாத பட்சத்தில், நீதிமன்றம் அத்தகைய குழந்தையை நெருங்கிய உறவினர்களிடமோ அல்லது சமூகத்திற்குள் ஒரு வளர்ப்பு இல்லத்திலோ வைக்க வேண்டும்."
        ]
      },
      {
        "id": "sec-10",
        "number": "10",
        "titleEn": "Reproductive rights",
        "titleTa": "இனப்பெருக்க உரிமைகள்",
        "contentEn": [
          "(1) The appropriate Government shall ensure that persons with disabilities have access to information regarding family planning and reproductive health.",
          "(2) No person with disability shall be subjected to any medical procedure which leads to sterilization without his or her free and informed consent."
        ],
        "contentTa": [
          "(1) மாற்றுத்திறனாளிகளுக்கு குடும்பக் கட்டுப்பாடு மற்றும் இனப்பெருக்க சுகாதாரம் குறித்த தகவல்கள் கிடைப்பதை உரிய அரசு உறுதி செய்ய வேண்டும்.",
          "(2) மாற்றுத்திறனாளி எவரும் அவரது இலவச மற்றும் தகவலறிந்த ஒப்புதல் இன்றி கருத்தடைக்கு வழிவகுக்கும் எந்தவொரு மருத்துவ நடைமுறைக்கும் உட்படுத்தப்படக் கூடாது."
        ]
      },
      {
        "id": "sec-11",
        "number": "11",
        "titleEn": "Accessibility in voting",
        "titleTa": "தேர்தலில் வாக்களிப்பதற்கான அணுகல்",
        "contentEn": [
          "The Election Commission of India and the State Election Commissions shall ensure that all polling stations are accessible to persons with disabilities and all materials related to the electoral process are easily understandable by and accessible to them."
        ],
        "contentTa": [
          "இந்திய தேர்தல் ஆணையம் மற்றும் மாநில தேர்தல் ஆணையங்கள் அனைத்து வாக்குச்சாவடிகளும் மாற்றுத்திறனாளிகள் எளிதில் அணுகக்கூடிய வகையில் இருப்பதையும், தேர்தல் தொடர்பான அனைத்துப் பொருட்களும் எளிதில் புரிந்துகொள்ளக்கூடியதாகவும் அணுகக்கூடியதாகவும் இருப்பதை உறுதிசெய்ய வேண்டும்."
        ]
      },
      {
        "id": "sec-12",
        "number": "12",
        "titleEn": "Access to justice",
        "titleTa": "நீதிக்கான அணுகல்",
        "contentEn": [
          "(1) The appropriate Government shall ensure that persons with disabilities are able to exercise the right to access any court, tribunal, or authority with quasi-judicial powers without discrimination.",
          "(2) The Government shall put in place support measures including provision of sign language interpreters, accessible documentation, and legal aid."
        ],
        "contentTa": [
          "(1) உரிய அரசு, மாற்றுத்திறனாளிகள் எந்தவொரு நீதிமன்றம், தீர்ப்பாயம் அல்லது நீதித்துறை சார்ந்த அதிகார அமைப்புகளை பாகுபாடின்றி அணுகுவதை உறுதிசெய்ய வேண்டும்.",
          "(2) அரசு சைகை மொழி பெயர்ப்பாளர்கள், அணுகக்கூடிய ஆவணங்கள் மற்றும் இலவச சட்ட உதவி உள்ளிட்ட ஆதரவு நடவடிக்கைகளை வழங்க வேண்டும்."
        ]
      },
      {
        "id": "sec-13",
        "number": "13",
        "titleEn": "Legal capacity",
        "titleTa": "சட்டப்பூர்வ தகுதி",
        "contentEn": [
          "(1) The appropriate Government shall ensure that persons with disabilities have the right to own or inherit property, control their financial affairs and have access to bank loans and mortgages equally with others.",
          "(2) They shall enjoy legal capacity in all aspects of life on an equal basis with others."
        ],
        "contentTa": [
          "(1) மாற்றுத்திறனாளிகளுக்கு சொத்துக்களை வைத்திருக்க அல்லது பாரம்பரியமாக பெறவும், தங்களது நிதி விவகாரங்களை கட்டுப்படுத்தவும், மற்றவர்களுடன் சமமாக வங்கி கடன்கள் மற்றும் அடமானங்களை பெறவும் உரிமை உண்டு என்பதை உரிய அரசு உறுதி செய்ய வேண்டும்.",
          "(2) அவர்கள் வாழ்க்கையின் அனைத்து அம்சங்களிலும் மற்றவர்களுடன் சமமான அடிப்படையில் சட்டப்பூர்வ தகுதியை அனுபவிப்பார்கள்."
        ]
      },
      {
        "id": "sec-14",
        "number": "14",
        "titleEn": "Provision for guardianship",
        "titleTa": "காப்பாளர் நியமனத்திற்கான ஏற்பாடு",
        "contentEn": [
          "(1) Where a district court or designated authority finds that a person with disability requires support in making legally binding decisions, it may provide support including appointment of a limited guardian.",
          "(2) The limited guardian shall act in consultation with the person with disability and make decisions based on mutual understanding."
        ],
        "contentTa": [
          "(1) மாற்றுத்திறனாளி ஒருவருக்கு சட்டப்பூர்வ முடிவுகளை எடுக்க ஆதரவு தேவை என்று மாவட்ட நீதிமன்றம் அல்லது நியமிக்கப்பட்ட அதிகார அமைப்பு கண்டறிந்தால், அது வரம்புக்குட்பட்ட காப்பாளர் நியமனம் உட்பட ஆதரவை வழங்கலாம்.",
          "(2) வரம்புக்குட்பட்ட காப்பாளர் மாற்றுத்திறனாளி நபருடன் கலந்தாலோசித்து, பரஸ்பர புரிந்துணர்வின் அடிப்படையில் முடிவுகளை எடுக்க வேண்டும்."
        ]
      },
      {
        "id": "sec-15",
        "number": "15",
        "titleEn": "Designation of authorities to support",
        "titleTa": "ஆதரவு வழங்குவதற்கான அதிகார அமைப்புகளை நியமித்தல்",
        "contentEn": [
          "Every appropriate Government shall designate authority or authorities to mobilize community support and create social awareness for enabling persons with disabilities to exercise their legal capacity and access support measures."
        ],
        "contentTa": [
          "மாற்றுத்திறனாளிகள் தங்களது சட்டப்பூர்வ தகுதியைப் பயன்படுத்தவும், ஆதரவு நடவடிக்கைகளை அணுகவும் சமூக ஆதரவை ஒருங்கிணைக்கவும், சமூக விழிப்புணர்வை ஏற்படுத்தவும் ஒவ்வொரு உரிய அரசும் அதிகார அமைப்பையோ அல்லது அமைப்புகளையோ நியமிக்க வேண்டும்."
        ]
      }
    ]
  },
  {
    "id": "chapter3",
    "number": "III",
    "titleEn": "Education",
    "titleTa": "கல்வி",
    "sections": [
      {
        "id": "sec-16",
        "number": "16",
        "titleEn": "Duty of educational institutions",
        "titleTa": "கல்வி நிறுவனங்களின் கடமை",
        "contentEn": [
          "The appropriate Government and the local authorities shall endeavour that all educational institutions funded or recognised by them provide inclusive education to children with disabilities, and towards that end shall:",
          "(a) Admit them without discrimination and provide education and opportunities for sports and recreation activities equally with others.",
          "(b) Make building, campus and various facilities accessible.",
          "(c) Provide necessary support, individualized or otherwise, in environments that maximize academic and social development.",
          "(d) Detect specific learning disabilities in children at the earliest and take suitable pedagogical measures."
        ],
        "contentTa": [
          "உரிய அரசு மற்றும் உள்ளாட்சி அமைப்புகள், தங்களால் நிதியளிக்கப்படும் அல்லது அங்கீகரிக்கப்படும் அனைத்து கல்வி நிறுவனங்களும் மாற்றுத்திறன் கொண்ட குழந்தைகளுக்கு உள்ளடக்கிய கல்வியை வழங்குவதை உறுதிசெய்ய வேண்டும், இதற்காக:",
          "(அ) அவர்களை பாகுபாடின்றி சேர்க்க வேண்டும் மற்றும் மற்றவர்களுடன் சமமாக கல்வி, விளையாட்டு மற்றும் பொழுதுபோக்கு நடவடிக்கைகளுக்கான வாய்ப்புகளை வழங்க வேண்டும்.",
          "(ஆ) பள்ளி கட்டிடங்கள், வளாகங்கள் மற்றும் பல்வேறு வசதிகளை எளிதில் அணுகக்கூடியதாக மாற்ற வேண்டும்.",
          "(இ) கல்வி மற்றும் சமூக வளர்ச்சியை அதிகப்படுத்தும் சூழலில், தேவையான தனிப்பயனாக்கப்பட்ட ஆதரவை வழங்க வேண்டும்.",
          "(ஈ) குழந்தைகளுக்கு ஏற்படும் குறிப்பிட்ட கற்றல் குறைபாடுகளை ஆரம்பத்திலேயே கண்டறிந்து தகுந்த கற்பித்தல் நடவடிக்கைகளை எடுக்க வேண்டும்."
        ]
      },
      {
        "id": "sec-17",
        "number": "17",
        "titleEn": "Specific measures to promote and facilitate inclusive education",
        "titleTa": "உள்ளடக்கிய கல்வியை மேம்படுத்துவதற்கான குறிப்பிட்ட நடவடிக்கைகள்",
        "contentEn": [
          "The appropriate Government and the local authorities shall take measures to facilitate inclusive education, including:",
          "(a) Conducting surveys of school-going children to identify children with disabilities.",
          "(b) Establishing adequate number of teacher training institutions.",
          "(c) Training and employing teachers, including teachers with disabilities, who are qualified in sign language and Braille.",
          "(d) Providing free books, learning materials, assistive devices, and transport to children with benchmark disabilities up to the age of eighteen years."
        ],
        "contentTa": [
          "உரிய அரசு மற்றும் உள்ளாட்சி அமைப்புகள் உள்ளடக்கிய கல்வியை எளிதாக்க தேவையான நடவடிக்கைகளை எடுக்க வேண்டும், அவற்றுள்:",
          "(அ) பள்ளி செல்லும் குழந்தைகளிடையே கணக்கெடுப்பு நடத்தி மாற்றுத்திறன் கொண்ட குழந்தைகளைக் கண்டறிதல்.",
          "(ஆ) போதிய எண்ணிக்கையிலான ஆசிரியர் பயிற்சி நிறுவனங்களை நிறுவுதல்.",
          "(இ) சைகை மொழி மற்றும் பிரெயில் முறையில் தகுதி வாய்ந்த ஆசிரியர்களை (மாற்றுத்திறனாளி ஆசிரியர்கள் உட்பட) நியமித்தல் மற்றும் பயிற்சி அளித்தல்.",
          "(ஈ) பதினெட்டு வயது வரையிலான வரம்புக்குட்பட்ட மாற்றுத்திறன் கொண்ட குழந்தைகளுக்கு இலவச புத்தகங்கள், கற்றல் பொருட்கள், உதவி சாதனங்கள் மற்றும் போக்குவரத்து வசதிகளை வழங்குதல்."
        ]
      },
      {
        "id": "sec-18",
        "number": "18",
        "titleEn": "Adult education",
        "titleTa": "முதியோர் கல்வி",
        "contentEn": [
          "The appropriate Government and the local authorities shall take measures to promote, protect and ensure participation of persons with disabilities in adult education and continuing education programmes equally with others."
        ],
        "contentTa": [
          "உரிய அரசு மற்றும் உள்ளாட்சி அமைப்புகள், மாற்றுத்திறனாளிகள் மற்றவர்களுடன் சமமாக முதியோர் கல்வி மற்றும் தொடர் கல்வித் திட்டங்களில் பங்கேற்பதை ஊக்குவிக்கவும், பாதுகாக்கவும், உறுதி செய்யவும் தேவையான நடவடிக்கைகளை எடுக்க வேண்டும்."
        ]
      }
    ]
  },
  {
    "id": "chapter4",
    "number": "IV",
    "titleEn": "Skill Development and Employment",
    "titleTa": "திறன் மேம்பாடு மற்றும் வேலைவாய்ப்பு",
    "sections": [
      {
        "id": "sec-19",
        "number": "19",
        "titleEn": "Vocational training and self-employment",
        "titleTa": "தொழில் பயிற்சி மற்றும் சுயவேலைவாய்ப்பு",
        "contentEn": [
          "(1) The appropriate Government shall formulate schemes and programmes including provision of loans at concessional rates to facilitate and support employment of persons with disabilities, especially for vocational training and self-employment.",
          "(2) These schemes shall provide for inclusion of persons with disabilities in mainstream vocational training and provide micro-credit and marketing support for products made by them."
        ],
        "contentTa": [
          "(1) உரிய அரசு, மாற்றுத்திறனாளிகளின் வேலைவாய்ப்பை எளிதாக்கவும் ஆதரிக்கவும், குறிப்பாக தொழில் பயிற்சி மற்றும் சுயவேலைவாய்ப்பிற்காக சலுகை வட்டி விகிதத்தில் கடன் வழங்குவது உள்ளிட்ட திட்டங்களை உருவாக்க வேண்டும்.",
          "(2) இத்திட்டங்கள் மாற்றுத்திறனாளிகளை முதன்மை தொழில் பயிற்சியில் சேர்ப்பதையும், அவர்கள் தயாரிக்கும் பொருட்களுக்கு நுண்கடன் மற்றும் சந்தைப்படுத்தல் ஆதரவை வழங்குவதையும் உறுதிசெய்ய வேண்டும்."
        ]
      },
      {
        "id": "sec-20",
        "number": "20",
        "titleEn": "Non-discrimination in employment",
        "titleTa": "வேலைவாய்ப்பில் பாகுபாடின்மை",
        "contentEn": [
          "(1) No Government establishment shall discriminate against any person with disability in any matter relating to employment.",
          "(2) Every Government establishment shall provide reasonable accommodation and a barrier-free working environment.",
          "(3) No promotion shall be denied to a person merely on the ground of his disability.",
          "(4) If an employee acquires a disability during service, they shall not be dispensed with or reduced in rank, but shifted to a suitable post with the same pay scale."
        ],
        "contentTa": [
          "(1) எந்தவொரு அரசு நிறுவனமும் வேலைவாய்ப்பு தொடர்பான எந்தவொரு விஷயத்திலும் மாற்றுத்திறனாளிக்கு எதிராக பாகுபாடு காட்டக்கூடாது.",
          "(2) ஒவ்வொரு அரசு நிறுவனமும் நியாயமான இணக்கம் மற்றும் தடைகளற்ற பணிச்சூழலை வழங்க வேண்டும்.",
          "(3) மாற்றுத்திறன் காரணமாக மட்டுமே ஒரு நபருக்கு பதவி உயர்வு மறுக்கப்படக் கூடாது.",
          "(4) பணியின் போது ஒரு ஊழியருக்கு மாற்றுத்திறன் ஏற்பட்டால், அவரை பணியிலிருந்து நீக்கவோ அல்லது பதவியிறக்கம் செய்யவோ கூடாது, மாறாக அதே ஊதிய விகிதத்துடன் பொருத்தமான வேறு பணிக்கு மாற்ற வேண்டும்."
        ]
      },
      {
        "id": "sec-21",
        "number": "21",
        "titleEn": "Equal opportunity policy",
        "titleTa": "சம வாய்ப்புக் கொள்கை",
        "contentEn": [
          "(1) Every establishment (both Government and Private) shall notify an equal opportunity policy detailing measures proposed to be taken for rehabilitation and employment of persons with disabilities.",
          "(2) A copy of the equal opportunity policy shall be registered with the Chief Commissioner or State Commissioner."
        ],
        "contentTa": [
          "(1) ஒவ்வொரு நிறுவனமும் (அரசு மற்றும் தனியார் இரண்டும்) மாற்றுத்திறனாளிகளின் மறுவாழ்வு மற்றும் வேலைவாய்ப்பிற்காக எடுக்க உத்தேசித்துள்ள நடவடிக்கைகளை விளக்கும் சம வாய்ப்புக் கொள்கையை அறிவிக்க வேண்டும்.",
          "(2) இக்கொள்கையின் நகல் தலைமை ஆணையர் அல்லது மாநில ஆணையரிடம் பதிவு செய்யப்பட வேண்டும்."
        ]
      },
      {
        "id": "sec-22",
        "number": "22",
        "titleEn": "Maintenance of records",
        "titleTa": "பதிவேடுகளைப் பராமரித்தல்",
        "contentEn": [
          "(1) Every Government establishment shall maintain records of persons with disabilities in relation to employment, promotions, and other benefits.",
          "(2) These records shall be open to inspection by the designated authorities to ensure compliance with the equal opportunity policies."
        ],
        "contentTa": [
          "(1) ஒவ்வொரு அரசு நிறுவனமும் வேலைவாய்ப்பு, பதவி உயர்வு மற்றும் பிற சலுகைகள் தொடர்பாக மாற்றுத்திறனாளிகளின் பதிவேடுகளைப் பராமரிக்க வேண்டும்.",
          "(2) சம வாய்ப்புக் கொள்கைகளின் இணக்கத்தை உறுதிப்படுத்த இந்த பதிவேடுகள் நியமிக்கப்பட்ட அதிகாரிகளின் ஆய்வுக்கு உட்படுத்தப்பட வேண்டும்."
        ]
      },
      {
        "id": "sec-23",
        "number": "23",
        "titleEn": "Appointment of Grievance Redressal Officer",
        "titleTa": "குறைதீர்க்கும் அதிகாரியை நியமித்தல்",
        "contentEn": [
          "(1) Every Government establishment shall appoint a Grievance Redressal Officer and inform the Chief Commissioner or State Commissioner.",
          "(2) The officer shall register and investigate complaints within two weeks, and maintain a proper record of all grievances."
        ],
        "contentTa": [
          "(1) ஒவ்வொரு அரசு நிறுவனமும் ஒரு குறைதீர்க்கும் அதிகாரியை நியமித்து, தலைமை ஆணையர் அல்லது மாநில ஆணையருக்கு தெரிவிக்க வேண்டும்.",
          "(2) அந்த அதிகாரி இரண்டு வாரங்களுக்குள் புகார்களைப் பதிவு செய்து விசாரிக்க வேண்டும், மேலும் அனைத்து குறைகளின் முறையான பதிவை பராமரிக்க வேண்டும்."
        ]
      }
    ]
  },
  {
    "id": "chapter5",
    "number": "V",
    "titleEn": "Social Security, Health, Rehabilitation and Recreation",
    "titleTa": "சமூக பாதுகாப்பு, சுகாதாரம், மறுவாழ்வு மற்றும் பொழுதுபோக்கு",
    "sections": [
      {
        "id": "sec-24",
        "number": "24",
        "titleEn": "Social security",
        "titleTa": "சமூக பாதுகாப்பு",
        "contentEn": [
          "(1) The appropriate Government shall within the limit of its economic capacity formulate necessary schemes to safeguard and promote the right of persons with disabilities to adequate standard of living.",
          "(2) The quantum of assistance to persons with disabilities under such schemes shall be at least 25% higher than similar schemes for others.",
          "(3) Social security schemes shall include: community centers, support for women with disabilities for livelihood, free aids and appliances, disability pension, and caregiver allowance."
        ],
        "contentTa": [
          "(1) உரிய அரசு, தனது பொருளாதாரத் திறனுக்குள், மாற்றுத்திறனாளிகளின் தகுந்த வாழ்க்கைத் தரத்திற்கான உரிமையைப் பாதுகாக்கவும் மேம்படுத்தவும் தேவையான திட்டங்களை உருவாக்க வேண்டும்.",
          "(2) இத்திட்டங்களின் கீழ் மாற்றுத்திறனாளிகளுக்கு வழங்கப்படும் உதவித் தொகை, மற்றவர்களுக்கான ஒத்த திட்டங்களை விட குறைந்தபட்சம் 25% அதிகமாக இருக்க வேண்டும்.",
          "(3) சமூக பாதுகாப்பு திட்டங்களில் பின்வருவன அடங்கும்: சமூக மையங்கள், வாழ்வாதாரத்திற்காக மாற்றுத்திறனாளி பெண்களுக்கு ஆதரவு, இலவச உபகரணங்கள், மாற்றுத்திறனாளி ஓய்வூதியம் மற்றும் பராமரிப்பாளர் உதவித்தொகை."
        ]
      },
      {
        "id": "sec-25",
        "number": "25",
        "titleEn": "Healthcare",
        "titleTa": "சுகாதாரம்",
        "contentEn": [
          "The appropriate Government and the local authorities shall take necessary measures for persons with disabilities to provide free healthcare in the vicinity especially in rural areas, barrier-free access in all hospitals, priority in attendance and treatment, and training of healthcare staff."
        ],
        "contentTa": [
          "உரிய அரசு மற்றும் உள்ளாட்சி அமைப்புகள், மாற்றுத்திறனாளிகளுக்கு குறிப்பாக கிராமப்புறங்களில் இலவச மருத்துவ வசதி கிடைப்பதையும், அனைத்து மருத்துவமனைகளிலும் தடைகளற்ற அணுகல் இருப்பதையும், சிகிச்சையில் முன்னுரிமை அளிப்பதையும், சுகாதாரப் பணியாளர்களுக்கு பயிற்சி வழங்குவதையும் உறுதி செய்ய வேண்டும்."
        ]
      },
      {
        "id": "sec-26",
        "number": "26",
        "titleEn": "Insurance schemes",
        "titleTa": "காப்பீட்டுத் திட்டங்கள்",
        "contentEn": [
          "The appropriate Government shall formulate insurance schemes for its employees with disabilities, safeguarding them against health risks and accidents."
        ],
        "contentTa": [
          "உரிய அரசு தனது மாற்றுத்திறனாளி ஊழியர்களுக்காக சுகாதார அபாயங்கள் மற்றும் விபத்துக்களுக்கு எதிராக அவர்களைப் பாதுகாக்கும் காப்பீட்டுத் திட்டங்களை உருவாக்க வேண்டும்."
        ]
      },
      {
        "id": "sec-27",
        "number": "27",
        "titleEn": "Rehabilitation",
        "titleTa": "மறுவாழ்வு",
        "contentEn": [
          "The appropriate Government and local authorities shall, within their economic limits, undertake or cause to be undertaken services and programs for rehabilitation, particularly in areas of health, education, and employment."
        ],
        "contentTa": [
          "உரிய அரசு மற்றும் உள்ளாட்சி அமைப்புகள் தங்களின் பொருளாதார வரம்பிற்குள், குறிப்பாக சுகாதாரம், கல்வி மற்றும் வேலைவாய்ப்பு ஆகிய துறைகளில் மறுவாழ்வுக்கான சேவைகள் மற்றும் திட்டங்களை மேற்கொள்ள வேண்டும் அல்லது மேற்கொள்ளச் செய்ய வேண்டும்."
        ]
      },
      {
        "id": "sec-28",
        "number": "28",
        "titleEn": "Research and development",
        "titleTa": "ஆராய்ச்சி மற்றும் மேம்பாடு",
        "contentEn": [
          "The appropriate Government shall initiate and sponsor research on issues relating to disability, rehabilitation, and assistive technologies to improve the quality of life."
        ],
        "contentTa": [
          "மாற்றுத்திறனாளிகளின் வாழ்க்கைத் தரத்தை மேம்படுத்த மாற்றுத்திறன், மறுவாழ்வு மற்றும் உதவித் தொழில்நுட்பங்கள் தொடர்பான பிரச்சினைகள் குறித்த ஆராய்ச்சியை உரிய அரசு தொடங்க வேண்டும் மற்றும் நிதியுதவி அளிக்க வேண்டும்."
        ]
      },
      {
        "id": "sec-29",
        "number": "29",
        "titleEn": "Culture and recreation",
        "titleTa": "கலாச்சாரம் மற்றும் பொழுதுபோக்கு",
        "contentEn": [
          "The appropriate Government and local authorities shall take measures to promote and protect the rights of persons with disabilities to participate in cultural and recreational life, including access to theatres, museums, and historical monuments."
        ],
        "contentTa": [
          "திரையரங்குகள், அருங்காட்சியகங்கள் மற்றும் வரலாற்றுச் சின்னங்களை அணுகுவது உட்பட, மாற்றுத்திறனாளிகள் கலாச்சார மற்றும் பொழுதுபோக்கு வாழ்க்கையில் பங்கேற்பதற்கான உரிமைகளை ஊக்குவிக்கவும் பாதுகாக்கவும் உரிய அரசு மற்றும் உள்ளாட்சி அமைப்புகள் நடவடிக்கை எடுக்க வேண்டும்."
        ]
      },
      {
        "id": "sec-30",
        "number": "30",
        "titleEn": "Sporting activities",
        "titleTa": "விளையாட்டு நடவடிக்கைகள்",
        "contentEn": [
          "The appropriate Government shall take measures to ensure that persons with disabilities have access to sporting venues, receive proper training, and participate in national and international sports events equally with others."
        ],
        "contentTa": [
          "மாற்றுத்திறனாளிகளுக்கு விளையாட்டு மைதானங்கள் கிடைப்பதையும், தகுந்த பயிற்சி பெறுவதையும், மற்றவர்களுடன் சமமாக தேசிய மற்றும் சர்வதேச விளையாட்டு நிகழ்வுகளில் பங்கேற்பதையும் உறுதி செய்ய உரிய அரசு நடவடிக்கை எடுக்க வேண்டும்."
        ]
      }
    ]
  },
  {
    "id": "chapter6",
    "number": "VI",
    "titleEn": "Special Provisions for Persons with Benchmark Disabilities",
    "titleTa": "வரம்புக்குட்பட்ட மாற்றுத்திறனாளிகளுக்கான சிறப்பு வகைமுறைகள்",
    "sections": [
      {
        "id": "sec-31",
        "number": "31",
        "titleEn": "Free education for children with benchmark disabilities",
        "titleTa": "வரம்புக்குட்பட்ட மாற்றுத்திறனாளி குழந்தைகளுக்கு இலவச கல்வி",
        "contentEn": [
          "Every child with benchmark disability between the age of six to eighteen years shall have the right to free education in a neighbourhood school, or in a special school of their choice."
        ],
        "contentTa": [
          "ஆறு முதல் பதினெட்டு வயது வரையிலான வரம்புக்குட்பட்ட மாற்றுத்திறன் கொண்ட ஒவ்வொரு குழந்தைக்கும் அருகில் உள்ள பள்ளியிலோ அல்லது அவர்களின் விருப்பப்படி சிறப்புப் பள்ளியிலோ இலவசக் கல்வி கற்க உரிமை உண்டு."
        ]
      },
      {
        "id": "sec-32",
        "number": "32",
        "titleEn": "Reservation in higher education",
        "titleTa": "உயர் கல்வியில் இட ஒதுக்கீடு",
        "contentEn": [
          "(1) All Government institutions of higher education and other higher education institutions receiving aid from the Government shall reserve not less than five per cent seats for persons with benchmark disabilities.",
          "(2) The persons with benchmark disabilities shall be given an upper age relaxation of five years for admission in institutions of higher education."
        ],
        "contentTa": [
          "(1) அனைத்து அரசு உயர்கல்வி நிறுவனங்களும் மற்றும் அரசிடம் நிதியுதவி பெறும் பிற உயர்கல்வி நிறுவனங்களும் வரம்புக்குட்பட்ட மாற்றுத்திறனாளிகளுக்கு ஐந்து சதவீதத்திற்கு குறையாத இடங்களை ஒதுக்க வேண்டும்.",
          "(2) உயர்கல்வி நிறுவனங்களில் சேர்க்கைக்கு வரம்புக்குட்பட்ட மாற்றுத்திறனாளிகளுக்கு ஐந்து ஆண்டுகள் வயது வரம்பு தளர்வு அளிக்கப்படும்."
        ]
      },
      {
        "id": "sec-33",
        "number": "33",
        "titleEn": "Identification of posts for reservation",
        "titleTa": "இடஒதுக்கீட்டிற்கான பணியிடங்களைக் கண்டறிதல்",
        "contentEn": [
          "The appropriate Government shall identify the posts in the establishments which can be held by respective categories of persons with benchmark disabilities, and constitute a committee for periodic review of identified posts."
        ],
        "contentTa": [
          "உரிய அரசு, வரம்புக்குட்பட்ட மாற்றுத்திறனாளிகளின் அந்தந்த பிரிவினரால் வகிக்கக்கூடிய பணியிடங்களைக் கண்டறிந்து, கண்டறியப்பட்ட பணியிடங்களை அவ்வப்போது ஆய்வு செய்ய ஒரு குழுவை அமைக்க வேண்டும்."
        ]
      },
      {
        "id": "sec-34",
        "number": "34",
        "titleEn": "Reservation in employment",
        "titleTa": "வேலைவாய்ப்பில் இட ஒதுக்கீடு",
        "contentEn": [
          "(1) Every appropriate Government shall reserve in every Government establishment, not less than four per cent of the total number of vacancies in the strength of a cadre for persons with benchmark disabilities, with 1% reserved for each of the following:",
          "(a) Blindness and low vision.",
          "(b) Deaf and hard of hearing.",
          "(c) Locomotor disability including cerebral palsy, leprosy cured, dwarfism, acid attack victims and muscular dystrophy.",
          "(d) Autism, intellectual disability, specific learning disability and mental illness."
        ],
        "contentTa": [
          "(1) உரிய அரசு, ஒவ்வொரு அரசு நிறுவனத்திலும், வரம்புக்குட்பட்ட மாற்றுத்திறனாளிகளுக்கு மொத்த காலியிடங்களில் 4% குறையாமல் ஒதுக்க வேண்டும், இதில் தலா 1% பின்வருமாறு ஒதுக்கப்பட வேண்டும்:",
          "(அ) பார்வையற்றோர் மற்றும் குறைந்த பார்வை கொண்டவர்கள்.",
          "(ஆ) செவித்திறன் குறைபாடு மற்றும் காது கேளாதவர்கள்.",
          "(இ) மூளை முடக்குவாதம், தொழுநோய் குணம் அடைந்தவர்கள், குட்டைத்தன்மை, அமில வீச்சால் பாதிக்கப்பட்டவர்கள் மற்றும் தசைச் சிதைவு உள்ளிட்ட நரம்பு ஒருங்கிய இயலாமை.",
          "(ஈ) மன இறுக்கம், அறிவுசார் மாற்றுத்திறன், குறிப்பிட்ட கற்றல் குறைபாடு மற்றும் மனநல பாதிப்பு."
        ]
      },
      {
        "id": "sec-35",
        "number": "35",
        "titleEn": "Incentives to employers in private sector",
        "titleTa": "தனியார் துறை வேலைவாய்ப்பாளர்களுக்கு ஊக்கத்தொகை வழங்குதல்",
        "contentEn": [
          "The appropriate Government and local authorities shall, within their economic capacity, provide incentives to private sector employers to ensure that at least five per cent of their workforce consists of persons with benchmark disabilities."
        ],
        "contentTa": [
          "தனியார் துறை வேலைவாய்ப்பாளர்களின் பணியாளர்களில் குறைந்தபட்சம் ஐந்து சதவீதமாவது வரம்புக்குட்பட்ட மாற்றுத்திறனாளிகளைக் கொண்டிருப்பதை உறுதி செய்ய, உரிய அரசு மற்றும் உள்ளாட்சி அமைப்புகள் தங்களின் பொருளாதாரத் திறனுக்குள் அவர்களுக்கு ஊக்கத்தொகை வழங்க வேண்டும்."
        ]
      },
      {
        "id": "sec-36",
        "number": "36",
        "titleEn": "Special employment exchange",
        "titleTa": "சிறப்பு வேலைவாய்ப்பு அலுவலகம்",
        "contentEn": [
          "The appropriate Government may, by notification, require that every establishment shall furnish information relating to vacancies appointed for persons with benchmark disabilities to designated employment exchanges."
        ],
        "contentTa": [
          "வரம்புக்குட்பட்ட மாற்றுத்திறனாளிகளுக்காக நியமிக்கப்பட்ட காலியிடங்கள் தொடர்பான தகவல்களை நியமிக்கப்பட்ட வேலைவாய்ப்பு அலுவலகங்களுக்கு ஒவ்வொரு நிறுவனமும் வழங்க வேண்டும் என்று உரிய அரசு அறிவிக்கை மூலம் கோரலாம்."
        ]
      },
      {
        "id": "sec-37",
        "number": "37",
        "titleEn": "Special schemes and development programmes",
        "titleTa": "சிறப்புத் திட்டங்கள் மற்றும் மேம்பாட்டுத் திட்டங்கள்",
        "contentEn": [
          "The appropriate Government and local authorities shall formulate schemes for providing land at concessional rates, housing allotment priority, and development programs for persons with benchmark disabilities."
        ],
        "contentTa": [
          "வரம்புக்குட்பட்ட மாற்றுத்திறனாளிகளுக்கு சலுகை விலையில் நிலம் வழங்குதல், வீட்டு ஒதுக்கீட்டில் முன்னுரிமை மற்றும் மேம்பாட்டுத் திட்டங்களை வழங்குவதற்கான திட்டங்களை உரிய அரசு மற்றும் உள்ளாட்சி அமைப்புகள் உருவாக்க வேண்டும்."
        ]
      }
    ]
  },
  {
    "id": "chapter7",
    "number": "VII",
    "titleEn": "Special Provisions for Persons with Benchmark Disabilities requiring High Support",
    "titleTa": "உயர் ஆதரவு தேவைப்படும் மாற்றுத்திறனாளிகளுக்கான சிறப்பு வகைமுறைகள்",
    "sections": [
      {
        "id": "sec-38",
        "number": "38",
        "titleEn": "High support",
        "titleTa": "உயர் ஆதரவு",
        "contentEn": [
          "(1) Any person with benchmark disability, who considers that he requires high support, or any person or organisation on his behalf, may apply to an authority designated by the State Government requesting high support.",
          "(2) The authority shall get the case assessed by an Assessment Board and provide support in accordance with the schemes formulated by the Government."
        ],
        "contentTa": [
          "(1) தமக்கு உயர் ஆதரவு தேவைப்படுவதாகக் கருதும் வரம்புக்குட்பட்ட மாற்றுத்திறனாளி எவரும் அல்லது அவர் சார்பாக வேறு எந்த நபரோ அல்லது அமைப்போ மாநில அரசால் நியமிக்கப்பட்ட அதிகார அமைப்பிடம் விண்ணப்பிக்கலாம்.",
          "(2) அந்த அதிகாரம் ஒரு மதிப்பீட்டு வாரியத்தின் மூலம் வழக்கை மதிப்பிட்டு, அரசு உருவாக்கிய திட்டங்களின்படி உயர் ஆதரவை வழங்க வேண்டும்."
        ]
      }
    ]
  },
  {
    "id": "chapter8",
    "number": "VIII",
    "titleEn": "Duties and Responsibilities of Governments",
    "titleTa": "அரசுகளின் கடமைகள் மற்றும் பொறுப்புகள்",
    "sections": [
      {
        "id": "sec-39",
        "number": "39",
        "titleEn": "Awareness campaigns",
        "titleTa": "விளக்கம் மற்றும் விழிப்புணர்வு பிரச்சாரங்கள்",
        "contentEn": [
          "The appropriate Government shall conduct, sponsor or promote awareness campaigns and sensitization programmes to ensure that the rights of persons with disabilities are respected and protected in society."
        ],
        "contentTa": [
          "சமூகத்தில் மாற்றுத்திறனாளிகளின் உரிமைகள் மதிக்கப்படுவதையும் பாதுகாக்கப்படுவதையும் உறுதி செய்ய உரிய அரசு விழிப்புணர்வு பிரச்சாரங்கள் மற்றும் உணர்திறன் திட்டங்களை நடத்த வேண்டும், நிதியுதவி அளிக்க வேண்டும் அல்லது ஊக்குவிக்க வேண்டும்."
        ]
      },
      {
        "id": "sec-40",
        "number": "40",
        "titleEn": "Accessibility standards",
        "titleTa": "அணுகல் தரநிலைகள்",
        "contentEn": [
          "The Central Government shall in consultation with the Chief Commissioner formulate rules for persons with disabilities laying down the standards of accessibility for the physical environment, transportation, information and communications, including technologies and systems, and other facilities and services open or provided to the public."
        ],
        "contentTa": [
          "மத்திய அரசு, தலைமை ஆணையருடன் கலந்தாலோசித்து, பொதுமக்களுக்கு வழங்கப்படும் இயற்பியல் சூழல், போக்குவரத்து, தகவல் மற்றும் தொடர்புகள் (தொழில்நுட்பங்கள் மற்றும் அமைப்புகள் உட்பட) மற்றும் பிற வசதிகளுக்கான அணுகல் தரநிலைகளை வகுக்கும் விதிகளை உருவாக்க வேண்டும்."
        ]
      },
      {
        "id": "sec-41",
        "number": "41",
        "titleEn": "Access to transport",
        "titleTa": "போக்குவரத்துக்கான அணுகல்",
        "contentEn": [
          "(1) The appropriate Government shall take suitable measures to provide access to all modes of transport including bus, rail, and air, for persons with disabilities.",
          "(2) This includes retrofitting old transport systems and formulating accessibility standards for new passenger vehicles."
        ],
        "contentTa": [
          "(1) பேருந்து, இரயில் மற்றும் விமானம் உட்பட அனைத்து வகையான போக்குவரத்துகளிலும் மாற்றுத்திறனாளிகள் அணுகுவதற்கான தகுந்த நடவடிக்கைகளை உரிய அரசு எடுக்க வேண்டும்.",
          "(2) இதில் பழைய போக்குவரத்து அமைப்புகளை மாற்றியமைத்தல் மற்றும் புதிய பயணிகள் வாகனங்களுக்கான அணுகல் தரநிலைகளை உருவாக்குதல் ஆகியவை அடங்கும்."
        ]
      },
      {
        "id": "sec-42",
        "number": "42",
        "titleEn": "Access to information and communication technology",
        "titleTa": "தகவல் மற்றும் தொடர்புத் தொழில்நுட்பத்திற்கான அணுகல்",
        "contentEn": [
          "The appropriate Government shall take measures to ensure that all contents in both print and electronic media are accessible, and that audio-description, sign language, and closed captioning are provided in television programs."
        ],
        "contentTa": [
          "அச்சு மற்றும் மின்னணு ஊடகங்களில் உள்ள அனைத்து உள்ளடக்கங்களும் அணுகக்கூடியதாக இருப்பதையும், தொலைக்காட்சி நிகழ்ச்சிகளில் ஆடியோ விளக்கம், சைகை மொழி மற்றும் மூடிய தலைப்புகள் வழங்கப்படுவதையும் உறுதி செய்ய உரிய அரசு நடவடிக்கை எடுக்க வேண்டும்."
        ]
      },
      {
        "id": "sec-43",
        "number": "43",
        "titleEn": "Consumer goods",
        "titleTa": "நுகர்வோர் பொருட்கள்",
        "contentEn": [
          "The appropriate Government shall take measures to promote the development, production and distribution of consumer goods and assistive devices designed to be usable by persons with disabilities."
        ],
        "contentTa": [
          "மாற்றுத்திறனாளிகள் பயன்படுத்தும் வகையில் வடிவமைக்கப்பட்ட நுகர்வோர் பொருட்கள் மற்றும் உதவி சாதனங்களின் மேம்பாடு, உற்பத்தி மற்றும் விநியோகத்தை ஊக்குவிக்க உரிய அரசு நடவடிக்கை எடுக்க வேண்டும்."
        ]
      },
      {
        "id": "sec-44",
        "number": "44",
        "titleEn": "Mandatory observance of accessibility norms",
        "titleTa": "அணுகல் தரநிலைகளைக் கட்டாயமாகப் பின்பற்றுதல்",
        "contentEn": [
          "No establishment shall be granted permission to build any structure, or be issued a certificate of completion, unless it complies with the accessibility standards formulated by the Central Government."
        ],
        "contentTa": [
          "மத்திய அரசால் வகுக்கப்பட்ட அணுகல் தரநிலைகளுக்கு இணங்காத வரை, எந்தவொரு நிறுவனத்திற்கும் எந்தவொரு கட்டமைப்பையும் கட்டுவதற்கு அனுமதி வழங்கப்படக் கூடாது அல்லது நிறைவுச் சான்றிதழ் வழங்கப்படக் கூடாது."
        ]
      },
      {
        "id": "sec-45",
        "number": "45",
        "titleEn": "Time limit for accessibility of existing infrastructure",
        "titleTa": "தற்போதுள்ள உள்கட்டமைப்பை அணுகக்கூடியதாக மாற்றுவதற்கான கால அவகாசம்",
        "contentEn": [
          "(1) All existing public buildings shall be made accessible in accordance with the rules formulated by the Central Government within a period not exceeding five years from the date of notification.",
          "(2) The appropriate Government may grant extension of time for a category of buildings based on genuine reasons, but not exceeding two additional years."
        ],
        "contentTa": [
          "(1) தற்போதுள்ள அனைத்து பொது கட்டிடங்களும் அறிவிக்கை வெளியிடப்பட்ட நாளிலிருந்து ஐந்து ஆண்டுகளுக்கு மிகாத காலத்திற்குள் மத்திய அரசு உருவாக்கிய விதிகளின்படி அணுகக்கூடியதாக மாற்றப்பட வேண்டும்.",
          "(2) உரிய அரசு நியாயமான காரணங்களின் அடிப்படையில் குறிப்பிட்ட வகை கட்டிடங்களுக்கு கூடுதலாக இரண்டு ஆண்டுகளுக்கு மிகாமல் கால அவகாசம் வழங்கலாம்."
        ]
      },
      {
        "id": "sec-46",
        "number": "46",
        "titleEn": "Time limit for accessibility by service providers",
        "titleTa": "சேவை வழங்குநர்கள் அணுகல் தரநிலைகளை மாற்றுவதற்கான கால அவகாசம்",
        "contentEn": [
          "All service providers, whether Government or private, shall provide services in accordance with the rules on accessibility formulated by the Central Government within a period of two years from the date of notification."
        ],
        "contentTa": [
          "அரசு அல்லது தனியார் சேவை வழங்குநர்கள் அனைவரும், அறிவிக்கை வெளியிடப்பட்ட நாளிலிருந்து இரண்டு ஆண்டுகளுக்குள் மத்திய அரசு உருவாக்கிய அணுகல் விதிகளின்படி சேவைகளை வழங்க வேண்டும்."
        ]
      },
      {
        "id": "sec-47",
        "number": "47",
        "titleEn": "Human resource development",
        "titleTa": "மனிதவள மேம்பாடு",
        "contentEn": [
          "The appropriate Government shall formulate training programs for teachers, health professionals, social workers, and other personnel to meet the specific requirements of persons with disabilities."
        ],
        "contentTa": [
          "மாற்றுத்திறனாளிகளின் குறிப்பிட்ட தேவைகளைப் பூர்த்தி செய்ய ஆசிரியர்கள், சுகாதார வல்லுநர்கள், சமூகப் பணியாளர்கள் மற்றும் இதர பணியாளர்களுக்கான பயிற்சித் திட்டங்களை உரிய அரசு உருவாக்க வேண்டும்."
        ]
      },
      {
        "id": "sec-48",
        "number": "48",
        "titleEn": "Social audit",
        "titleTa": "சமூகத் தணிக்கை",
        "contentEn": [
          "The appropriate Government shall undertake social audit of all plans, schemes and programmes to ensure that they are inclusive and that the benefits reach persons with disabilities effectively."
        ],
        "contentTa": [
          "அனைத்து திட்டங்கள், நலத்திட்டங்கள் மற்றும் மேம்பாட்டுத் திட்டங்கள் உள்ளடக்கியதாக இருப்பதையும், அவற்றின் பலன்கள் மாற்றுத்திறனாளிகளைச் சென்றடைவதையும் உறுதி செய்ய உரிய அரசு சமூகத் தணிக்கையை மேற்கொள்ள வேண்டும்."
        ]
      }
    ]
  },
  {
    "id": "chapter9",
    "number": "IX",
    "titleEn": "Registration of Institutions for Persons with Disabilities and Grants to such Institutions",
    "titleTa": "மாற்றுத்திறனாளிகளுக்கான நிறுவனங்களின் பதிவு மற்றும் மானியங்கள்",
    "sections": [
      {
        "id": "sec-49",
        "number": "49",
        "titleEn": "Competent authority",
        "titleTa": "தகுதிவாய்ந்த அதிகார அமைப்பு",
        "contentEn": [
          "The State Government shall appoint a Competent Authority as it deems fit for the purpose of issuing, managing, and regulating registration certificates for institutions serving persons with disabilities."
        ],
        "contentTa": [
          "மாற்றுத்திறனாளிகளுக்குச் சேவையாற்றும் நிறுவனங்களுக்கான பதிவுச் சான்றிதழ்களை வழங்குதல், நிர்வகித்தல் மற்றும் ஒழுங்குபடுத்துதல் ஆகியவற்றிற்காக மாநில அரசு ஒரு தகுதிவாய்ந்த அதிகார அமைப்பை நியமிக்க வேண்டும்."
        ]
      },
      {
        "id": "sec-50",
        "number": "50",
        "titleEn": "Registration of Institutions",
        "titleTa": "நிறுவனங்களை பதிவு செய்தல்",
        "contentEn": [
          "No person shall establish or maintain any institution for persons with disabilities except in accordance with a certificate of registration issued by the Competent Authority designated by the State Government.",
          "This ensures that all private care homes, rehabilitation centers, and special schools comply with designated safety and service standards for persons with disabilities."
        ],
        "contentTa": [
          "மாநில அரசால் நியமிக்கப்பட்ட தகுதியுள்ள அதிகார அமைப்பால் வழங்கப்படும் பதிவுச் சான்றிதழின்படி மட்டுமே மாற்றுத்திறனாளிகளுக்கான எந்தவொரு நிறுவனத்தையும் நிறுவ அல்லது பராமரிக்க வேண்டும்.",
          "இது அனைத்து தனியார் பராமரிப்பு இல்லங்கள், மறுவாழ்வு மையங்கள் மற்றும் சிறப்புப் பள்ளிகள் மாற்றுத்திறனாளிகளுக்கான பாதுகாப்பு மற்றும் சேவைத் தரங்களுக்கு இணங்குவதை உறுதி செய்கிறது."
        ]
      },
      {
        "id": "sec-51",
        "number": "51",
        "titleEn": "Application and grant of certificate of registration",
        "titleTa": "பதிவுச் சான்றிதழுக்கான விண்ணப்பம் மற்றும் வழங்குதல்",
        "contentEn": [
          "(1) Every application for registration shall be made to the Competent Authority in such form and manner as prescribed.",
          "(2) The Competent Authority shall make necessary inquiries and grant a certificate of registration within ninety days if all criteria are satisfied."
        ],
        "contentTa": [
          "(1) பதிவுக்கான ஒவ்வொரு விண்ணப்பமும் பரிந்துரைக்கப்பட்ட படிவத்தில் தகுதிவாய்ந்த அதிகார அமைப்பிற்கு செய்யப்பட வேண்டும்.",
          "(2) அனைத்து அளவுகோல்களும் திருப்திகரமாக இருந்தால், தகுதிவாய்ந்த அதிகார அமைப்பு தேவையான விசாரணைகளை மேற்கொண்டு தொண்ணூறு நாட்களுக்குள் பதிவுச் சான்றிதழை வழங்க வேண்டும்."
        ]
      },
      {
        "id": "sec-52",
        "number": "52",
        "titleEn": "Revocation of registration",
        "titleTa": "பதிவை ரத்து செய்தல்",
        "contentEn": [
          "The Competent Authority may, after giving the holder of the certificate an opportunity of being heard, revoke the registration if there are reasonable grounds to believe that the institution is run in violation of designated safety or service norms."
        ],
        "contentTa": [
          "சான்றிதழ் வைத்திருப்பவருக்கு விளக்கம் அளிக்க வாய்ப்பு அளித்த பிறகு, நிறுவனம் பாதுகாப்பு அல்லது சேவை விதிமுறைகளை மீறி நடத்தப்படுகிறது என்று நம்புவதற்கு நியாயமான காரணங்கள் இருந்தால் தகுதிவாய்ந்த அதிகார அமைப்பு பதிவை ரத்து செய்யலாம்."
        ]
      },
      {
        "id": "sec-53",
        "number": "53",
        "titleEn": "Appeal",
        "titleTa": "மேல்முறையீடு",
        "contentEn": [
          "Any person aggrieved by an order of the Competent Authority refusing to grant or revoking a certificate of registration may, within thirty days, prefer an appeal to a designated appellate authority."
        ],
        "contentTa": [
          "பதிவுச் சான்றிதழ் வழங்க மறுக்கும் அல்லது ரத்து செய்யும் தகுதிவாய்ந்த அதிகார அமைப்பின் உத்தரவினால் அதிருப்தியடைந்த எவரும், முப்பது நாட்களுக்குள் நியமிக்கப்பட்ட மேல்முறையீட்டு அதிகார அமைப்பிடம் மேல்முறையீடு செய்யலாம்."
        ]
      },
      {
        "id": "sec-54",
        "number": "54",
        "titleEn": "Act not to apply to institutions established by Government",
        "titleTa": "மத்திய அல்லது மாநில அரசுகளால் நிறுவப்பட்ட நிறுவனங்களுக்கு விலக்கு",
        "contentEn": [
          "Nothing in this Chapter shall apply to an institution established or maintained by the Central Government or a State Government."
        ],
        "contentTa": [
          "இச்சட்டத்தின் கீழ் அரசு நிறுவனங்கள் நேரடியாக நிர்வகிக்கப்படும் அல்லது நிறுவப்படும் இடங்களில் இந்தப் பதிவுக் கடமைகள் பொருந்தாது."
        ]
      },
      {
        "id": "sec-55",
        "number": "55",
        "titleEn": "Assistance to registered institutions",
        "titleTa": "பதிவு செய்யப்பட்ட நிறுவனங்களுக்கு உதவி வழங்குதல்",
        "contentEn": [
          "The appropriate Government may, within the limits of its economic capacity, provide financial assistance or grants-in-aid to registered institutions to support their operation and development."
        ],
        "contentTa": [
          "பதிவு செய்யப்பட்ட நிறுவனங்களின் செயல்பாடு மற்றும் மேம்பாட்டை ஆதரிக்க, உரிய அரசு தனது பொருளாதாரத் திறனுக்குள் அவர்களுக்கு நிதி உதவி அல்லது மானியங்களை வழங்கலாம்."
        ]
      }
    ]
  },
  {
    "id": "chapter10",
    "number": "X",
    "titleEn": "Certification of Specified Disabilities",
    "titleTa": "குறிப்பிட்ட மாற்றுத்திறன்களைச் சான்றளித்தல்",
    "sections": [
      {
        "id": "sec-56",
        "number": "56",
        "titleEn": "Guidelines for assessment of specified disabilities",
        "titleTa": "குறிப்பிட்ட மாற்றுத்திறன்களை மதிப்பிடுவதற்கான வழிகாட்டுதல்கள்",
        "contentEn": [
          "The Central Government shall formulate and notify guidelines and standards for the purpose of assessing and certifying specified disabilities."
        ],
        "contentTa": [
          "குறிப்பிட்ட மாற்றுத்திறன்களை மதிப்பிடுவதற்கும் சான்றளிப்பதற்கும் உரிய வழிகாட்டுதல்கள் மற்றும் தரநிலைகளை மத்திய அரசு உருவாக்கி அறிவிக்க வேண்டும்."
        ]
      },
      {
        "id": "sec-57",
        "number": "57",
        "titleEn": "Designation of certifying authorities",
        "titleTa": "சான்றளிக்கும் அதிகார அமைப்புகளை நியமித்தல்",
        "contentEn": [
          "The appropriate Government shall designate persons, including medical authorities having requisite qualifications, to be certifying authorities for the purpose of issuing disability certificates."
        ],
        "contentTa": [
          "மாற்றுத்திறனாளி சான்றிதழ்களை வழங்குவதற்காக தேவையான தகுதிகளைக் கொண்ட மருத்துவ அதிகாரிகள் உட்பட தகுந்த நபர்களை சான்றளிக்கும் அதிகார அமைப்புகளாக உரிய அரசு நியமிக்க வேண்டும்."
        ]
      },
      {
        "id": "sec-58",
        "number": "58",
        "titleEn": "Procedure for Certification",
        "titleTa": "மாற்றுத்திறன் சான்றளிக்கும் நடைமுறை",
        "contentEn": [
          "Any person with a specified disability may apply to a designated certifying authority for a disability certificate in such form and manner as prescribed.",
          "The certifying authority shall assess the disability in accordance with Central Government guidelines and issue a certificate of disability (or UDID card) which is valid across the whole of India."
        ],
        "contentTa": [
          "குறிப்பிட்ட மாற்றுத்திறன் கொண்ட எந்தவொரு நபரும், பரிந்துரைக்கப்பட்ட படிவத்தில் சான்றிதழ் பெற நியமிக்கப்பட்ட சான்றளிக்கும் அதிகார அமைப்பிற்கு விண்ணப்பிக்கலாம்.",
          "சான்றளிக்கும் அதிகார அமைப்பு, மத்திய அரசின் வழிகாட்டுதல்களின்படி குறைபாட்டை மதிப்பிட்டு, இந்தியா முழுவதும் செல்லுபடியாகும் மாற்றுத்திறனாளி சான்றிதழை (அல்லது UDID அட்டை) வழங்க வேண்டும்."
        ]
      },
      {
        "id": "sec-59",
        "number": "59",
        "titleEn": "Appeal against a decision of certifying authority",
        "titleTa": "சான்றளிக்கும் அதிகார அமைப்பின் முடிவுக்கு எதிரான மேல்முறையீடு",
        "contentEn": [
          "Any person aggrieved by the decision of a certifying authority may, within such time and in such manner as prescribed, appeal to an appellate authority designated by the State Government."
        ],
        "contentTa": [
          "சான்றளிக்கும் அதிகார அமைப்பின் முடிவினால் அதிருப்தியடைந்த எவரும், பரிந்துரைக்கப்பட்ட நேரம் மற்றும் முறையில் மாநில அரசால் நியமிக்கப்பட்ட மேல்முறையீட்டு அதிகார அமைப்பிடம் மேல்முறையீடு செய்யலாம்."
        ]
      }
    ]
  },
  {
    "id": "chapter11",
    "number": "XI",
    "titleEn": "Central Advisory Board on Disability and State Advisory Board on Disability and District Level Committee",
    "titleTa": "மாற்றுத்திறனுக்கான மத்திய, மாநில ஆலோசனைக் குழுக்கள் மற்றும் மாவட்ட அளவிலான குழு",
    "sections": [
      {
        "id": "sec-60",
        "number": "60",
        "titleEn": "Constitution of Central Advisory Board on Disability",
        "titleTa": "மத்திய ஆலோசனைக் குழுவை அமைத்தல்",
        "contentEn": [
          "(1) The Central Government shall constitute a body to be known as the Central Advisory Board on Disability to exercise powers and perform functions assigned to it under this Act.",
          "(2) The Board shall consist of Ministers, secretaries, and representatives from NGOs representing disabled citizens."
        ],
        "contentTa": [
          "(1) இச்சட்டத்தின் கீழ் வழங்கப்பட்ட அதிகாரங்களைப் பயன்படுத்தவும், பணிகளைச் செய்யவும் மாற்றுத்திறனுக்கான மத்திய ஆலோசனைக் குழு என்ற அமைப்பை மத்திய அரசு அமைக்க வேண்டும்.",
          "(2) இக்குழுவில் அமைச்சர்கள், செயலாளர்கள் மற்றும் மாற்றுத்திறனாளிகளைப் பிரதிநிதித்துவப்படுத்தும் தன்னார்வத் தொண்டு நிறுவனங்களின் பிரதிநிதிகள் இடம் பெறுவர்."
        ]
      },
      {
        "id": "sec-61",
        "number": "61",
        "titleEn": "Terms and conditions of service of members",
        "titleTa": "உறுப்பினர்களின் பணி விதிமுறைகள் மற்றும் நிபந்தனைகள்",
        "contentEn": [
          "The terms and conditions of service of the nominated members of the Central Advisory Board shall be such as may be prescribed by the Central Government, and their term of office shall be three years."
        ],
        "contentTa": [
          "மத்திய ஆலோசனைக் குழுவின் நியமிக்கப்பட்ட உறுப்பினர்களின் பணி விதிமுறைகள் மற்றும் நிபந்தனைகள் மத்திய அரசால் பரிந்துரைக்கப்படும், அவர்களின் பதவிக்காலம் மூன்று ஆண்டுகள் ஆகும்."
        ]
      },
      {
        "id": "sec-62",
        "number": "62",
        "titleEn": "Disqualifications",
        "titleTa": "தகுதியின்மைகள்",
        "contentEn": [
          "No person shall be a member of the Board if they are of unsound mind, declared insolvent, convicted of an offence involving moral turpitude, or fail to attend three consecutive meetings without leave."
        ],
        "contentTa": [
          "ஒரு நபர் மனநலம் பாதிக்கப்பட்டவராகவோ, திவாலானவராக அறிவிக்கப்பட்டவராகவோ, ஒழுக்கக்கேடான குற்றத்திற்காக தண்டிக்கப்பட்டவராகவோ அல்லது அனுமதி இன்றி தொடர்ந்து மூன்று கூட்டங்களில் பங்கேற்கத் தவறினாலோ குழுவின் உறுப்பினராக இருக்க முடியாது."
        ]
      },
      {
        "id": "sec-63",
        "number": "63",
        "titleEn": "Vacation of seats by members",
        "titleTa": "உறுப்பினர்கள் பதவியிடங்களை காலி செய்தல்",
        "contentEn": [
          "A member may resign their office by writing to the Central Government, or may be removed if they become subject to any disqualifications specified under Section 62."
        ],
        "contentTa": [
          "ஒரு உறுப்பினர் மத்திய அரசுக்கு கடிதம் எழுதுவதன் மூலம் தனது பதவியை ராஜினாமா செய்யலாம், அல்லது பிரிவு 62-ன் கீழ் ஏதேனும் தகுதியின்மைகளுக்கு உட்பட்டால் அவர் பதவியிலிருந்து நீக்கப்படலாம்."
        ]
      },
      {
        "id": "sec-64",
        "number": "64",
        "titleEn": "Meetings of the Central Advisory Board on Disability",
        "titleTa": "மத்திய ஆலோசனைக் குழுவின் கூட்டங்கள்",
        "contentEn": [
          "The Central Advisory Board on Disability shall meet at least once in every six months, at such time and place as the Chairperson may think fit."
        ],
        "contentTa": [
          "மத்திய ஆலோசனைக் குழு ஆறு மாதங்களுக்கு ஒரு முறையாவது தலைவர் பொருத்தமானது எனக் கருதும் நேரம் மற்றும் இடத்தில் கூட்டத்தைக் கூட்ட வேண்டும்."
        ]
      },
      {
        "id": "sec-65",
        "number": "65",
        "titleEn": "Functions of Central Advisory Board on Disability",
        "titleTa": "மத்திய ஆலோசனைக் குழுவின் செயல்பாடுகள்",
        "contentEn": [
          "The Central Advisory Board shall be the national-level consultative body on disability matters, advising the Central Government on policies, reviewing schemes, and promoting accessibility and inclusion."
        ],
        "contentTa": [
          "மத்திய ஆலோசனைக் குழு மாற்றுத்திறன் விவகாரங்களில் தேசிய அளவிலான ஆலோசனைக் குழுவாக இருக்கும், கொள்கைகள் குறித்து மத்திய அரசுக்கு அறிவுரை வழங்கவும், திட்டங்களை ஆய்வு செய்யவும், அணுகல் மற்றும் உள்ளடக்கத்தை ஊக்குவிக்கவும் செய்யும்."
        ]
      },
      {
        "id": "sec-66",
        "number": "66",
        "titleEn": "State Advisory Board on Disability",
        "titleTa": "மாநில ஆலோசனைக் குழுவை அமைத்தல்",
        "contentEn": [
          "The State Government shall constitute a State Advisory Board on Disability to exercise powers and perform functions assigned to it under this Act at the state level."
        ],
        "contentTa": [
          "மாநில அளவில் இச்சட்டத்தின் கீழ் வழங்கப்பட்ட அதிகாரங்களைப் பயன்படுத்தவும், பணிகளைச் செய்யவும் மாற்றுத்திறனுக்கான மாநில ஆலோசனைக் குழுவை மாநில அரசு அமைக்க வேண்டும்."
        ]
      },
      {
        "id": "sec-67",
        "number": "67",
        "titleEn": "Terms and conditions of service of State Board members",
        "titleTa": "மாநில ஆலோசனைக் குழு உறுப்பினர்களின் பணி விதிமுறைகள்",
        "contentEn": [
          "The terms and conditions of service of the nominated members of the State Advisory Board shall be such as may be prescribed by the State Government, and their term of office shall be three years."
        ],
        "contentTa": [
          "மாநில ஆலோசனைக் குழுவின் நியமிக்கப்பட்ட உறுப்பினர்களின் பணி விதிமுறைகள் மற்றும் நிபந்தனைகள் மாநில அரசால் பரிந்துரைக்கப்படும், அவர்களின் பதவிக்காலம் மூன்று ஆண்டுகள் ஆகும்."
        ]
      },
      {
        "id": "sec-68",
        "number": "68",
        "titleEn": "Disqualifications of State Advisory Board members",
        "titleTa": "மாநில ஆலோசனைக் குழு உறுப்பினர்களின் தகுதியின்மைகள்",
        "contentEn": [
          "A person shall be disqualified from being a member of the State Advisory Board if they are subject to similar disqualifications as laid down under Section 62."
        ],
        "contentTa": [
          "ஒரு நபர் பிரிவு 62-ன் கீழ் குறிப்பிடப்பட்டுள்ள தகுதியின்மைகளுக்கு உட்பட்டால், அவர் மாநில ஆலோசனைக் குழுவின் உறுப்பினராக இருக்க தகுதியற்றவராவார்."
        ]
      },
      {
        "id": "sec-69",
        "number": "69",
        "titleEn": "Vacation of seats by State Board members",
        "titleTa": "மாநில ஆலோசனைக் குழு உறுப்பினர்கள் பதவியிடங்களை காலி செய்தல்",
        "contentEn": [
          "A member of the State Advisory Board may resign by writing to the State Government, or may be removed if they incur any disqualifications."
        ],
        "contentTa": [
          "மாநில ஆலோசனைக் குழுவின் உறுப்பினர் மாநில அரசுக்கு கடிதம் எழுதுவதன் மூலம் தனது பதவியை ராஜினாமா செய்யலாம், அல்லது தகுதியின்மைக்கு உள்ளானால் அவர் நீக்கப்படலாம்."
        ]
      },
      {
        "id": "sec-70",
        "number": "70",
        "titleEn": "Meetings of the State Advisory Board on Disability",
        "titleTa": "மாநில ஆலோசனைக் குழுவின் கூட்டங்கள்",
        "contentEn": [
          "The State Advisory Board shall meet at least once in every six months, at such time and place as the Chairperson may think fit."
        ],
        "contentTa": [
          "மாநில ஆலோசனைக் குழு ஆறு மாதங்களுக்கு ஒரு முறையாவது தலைவர் பொருத்தமானது எனக் கருதும் நேரம் மற்றும் இடத்தில் கூட்டத்தைக் கூட்ட வேண்டும்."
        ]
      },
      {
        "id": "sec-71",
        "number": "71",
        "titleEn": "Functions of State Advisory Board on Disability",
        "titleTa": "மாநில ஆலோசனைக் குழுவின் செயல்பாடுகள்",
        "contentEn": [
          "The State Advisory Board shall develop a state-level policy, review state welfare schemes, and coordinate disability affairs among various departments."
        ],
        "contentTa": [
          "மாநில ஆலோசனைக் குழு மாநில அளவிலான கொள்கையை உருவாக்க வேண்டும், மாநில நலத்திட்டங்களை ஆய்வு செய்ய வேண்டும் மற்றும் பல்வேறு துறைகளிடையே மாற்றுத்திறன் விவகாரங்களை ஒருங்கிணைக்க வேண்டும்."
        ]
      },
      {
        "id": "sec-72",
        "number": "72",
        "titleEn": "District-Level Committee on Disability",
        "titleTa": "மாவட்ட அளவிலான மாற்றுத்திறனாளிகள் குழு",
        "contentEn": [
          "The State Government shall constitute a District-level Committee on Disability for every district to coordinate, monitor, and address local grievances of persons with disabilities.",
          "This local committee acts as the primary agency for implementing grass-roots level welfare schemes and ensuring localized accessibility compliance."
        ],
        "contentTa": [
          "மாற்றுத்திறனாளிகளின் உள்ளூர் குறைகளை ஒருங்கிணைக்கவும், கண்காணிக்கவும் மற்றும் தீர்க்கவும் ஒவ்வொரு மாவட்டத்திலும் ஒரு மாவட்ட அளவிலான மாற்றுத்திறனாளிகள் குழுவை மாநில அரசு அமைக்க வேண்டும்.",
          "இந்த உள்ளூர் குழு, அடிமட்ட அளவிலான நலத்திட்டங்களை செயல்படுத்துவதற்கும், உள்ளூர்மயமாக்கப்பட்ட அணுகல் இணக்கத்தை உறுதி செய்வதற்கும் முதன்மை அமைப்பாக செயல்படுகிறது."
        ]
      },
      {
        "id": "sec-73",
        "number": "73",
        "titleEn": "Vacancies in Advisory Boards not to invalidate proceedings",
        "titleTa": "ஆலோசனைக் குழுக்களின் காலிப் பணியிடங்கள் நடவடிக்கைகளை செல்லாததாக்காது",
        "contentEn": [
          "No act or proceeding of the Central Advisory Board or a State Advisory Board shall be called in question on the ground merely of the existence of any vacancy in, or defect in the constitution of, such Board."
        ],
        "contentTa": [
          "மத்திய ஆலோசனைக் குழு அல்லது மாநில ஆலோசனைக் குழுவின் எந்தவொரு செயலும் அல்லது நடவடிக்கையும் அக்குழுக்களில் உள்ள காலிப் பணியிடம் அல்லது அக்குழு அமைப்பில் உள்ள குறைபாட்டின் அடிப்படையில் மட்டுமே கேள்விக்குள்ளாக்கப்படக் கூடாது."
        ]
      }
    ]
  },
  {
    "id": "chapter12",
    "number": "XII",
    "titleEn": "Chief Commissioner and State Commissioner for Persons with Disabilities",
    "titleTa": "மாற்றுத்திறனாளிகளுக்கான முதன்மை ஆணையர் மற்றும் மாநில ஆணையர்",
    "sections": [
      {
        "id": "sec-74",
        "number": "74",
        "titleEn": "Appointment of Chief Commissioner and State Commissioners",
        "titleTa": "முதன்மை ஆணையர் மற்றும் மாநில ஆணையர்கள் நியமனம்",
        "contentEn": [
          "The Central Government shall appoint a Chief Commissioner for Persons with Disabilities, and each State Government shall appoint a State Commissioner, to safeguard the rights and monitor implementation of this Act.",
          "These commissioners are vested with the powers of a Civil Court to investigate complaints regarding deprivation of rights and non-implementation of welfare schemes."
        ],
        "contentTa": [
          "உரிமைகளைப் பாதுகாக்கவும், இச்சட்டத்தின் அமலாக்கத்தைக் கண்காணிக்கவும் மத்திய அரசு ஒரு முதன்மை ஆணையரையும், ஒவ்வொரு மாநில அரசும் ஒரு மாநில ஆணையரையும் நியமிக்க வேண்டும்.",
          "இந்த ஆணையர்களுக்கு மாற்றுத்திறனாளிகளின் உரிமைகள் பறிக்கப்படுவது மற்றும் நலத்திட்டங்கள் செயல்படுத்தப்படாமை குறித்த புகார்களை விசாரிக்க சிவில் நீதிமன்றத்தின் அதிகாரங்கள் வழங்கப்பட்டுள்ளன."
        ]
      },
      {
        "id": "sec-75",
        "number": "75",
        "titleEn": "Term of office of Chief Commissioner and Commissioners",
        "titleTa": "முதன்மை ஆணையர் மற்றும் ஆணையர்களின் பதவிக்காலம்",
        "contentEn": [
          "The Chief Commissioner and the Commissioners shall hold office for a term of three years from the date on which they enter upon office, and shall be eligible for reappointment for another term of three years."
        ],
        "contentTa": [
          "முதன்மை ஆணையர் மற்றும் ஆணையர்கள் தங்களது பதவியேற்ற நாளிலிருந்து மூன்று ஆண்டுகள் பதவியில் இருப்பர், மேலும் அவர்கள் மேலும் மூன்று ஆண்டுகள் கொண்ட மற்றொரு காலத்திற்கு மீண்டும் நியமிக்கப்பட தகுதியுடையவர் ஆவர்."
        ]
      },
      {
        "id": "sec-76",
        "number": "76",
        "titleEn": "Salary and allowances of Chief Commissioner and Commissioners",
        "titleTa": "முதன்மை ஆணையர் மற்றும் ஆணையர்களின் ஊதியம் மற்றும் படிகள்",
        "contentEn": [
          "The salary and allowances payable to, and other terms and conditions of service of, the Chief Commissioner and the Commissioners shall be such as may be prescribed by the Central Government."
        ],
        "contentTa": [
          "முதன்மை ஆணையர் மற்றும் ஆணையர்களுக்கு வழங்கப்படும் ஊதியம் மற்றும் இதர படிகள் மற்றும் பிற பணி நிபந்தனைகள் மத்திய அரசால் பரிந்துரைக்கப்படும்."
        ]
      },
      {
        "id": "sec-77",
        "number": "77",
        "titleEn": "Advisory Committee to assist Chief Commissioner",
        "titleTa": "முதன்மை ஆணையருக்கு உதவ ஆலோசனைக் குழு",
        "contentEn": [
          "(1) The Central Government shall constitute an Advisory Committee comprising of not more than eleven experts drawn from diverse fields of disability.",
          "(2) The Committee shall assist and advise the Chief Commissioner in discharge of functions under this Act."
        ],
        "contentTa": [
          "(1) மாற்றுத்திறன் சார்ந்த பல்வேறு துறைகளில் இருந்து பதினொரு நிபுணர்களுக்கு மிகாமல் கொண்ட ஒரு ஆலோசனைக் குழுவை மத்திய அரசு அமைக்க வேண்டும்.",
          "(2) இக்குழு இச்சட்டத்தின் கீழ் பணிகளைச் செய்ய முதன்மை ஆணையருக்கு உதவி மற்றும் ஆலோசனை வழங்க வேண்டும்."
        ]
      },
      {
        "id": "sec-78",
        "number": "78",
        "titleEn": "Functions of Chief Commissioner",
        "titleTa": "முதன்மை ஆணையரின் செயல்பாடுகள்",
        "contentEn": [
          "The Chief Commissioner shall identify and investigate complaints regarding deprivation of rights, review safeguards provided under this Act, and monitor utilization of funds."
        ],
        "contentTa": [
          "முதன்மை ஆணையர் உரிமைகள் பறிக்கப்படுவது தொடர்பான புகார்களைக் கண்டறிந்து விசாரிக்க வேண்டும், இச்சட்டத்தின் கீழ் வழங்கப்பட்ட பாதுகாப்புகளை ஆய்வு செய்ய வேண்டும் மற்றும் நிதியின் பயன்பாட்டைக் கண்காணிக்க வேண்டும்."
        ]
      },
      {
        "id": "sec-79",
        "number": "79",
        "titleEn": "Appointment of State Commissioner in States",
        "titleTa": "மாநிலங்களில் மாநில ஆணையர் நியமனம்",
        "contentEn": [
          "(1) The State Government shall appoint a State Commissioner for Persons with Disabilities for the state.",
          "(2) The Commissioner shall be assisted by an Advisory Committee comprising of not more than five experts."
        ],
        "contentTa": [
          "(1) மாநில அரசு மாற்றுத்திறனாளிகளுக்கான ஒரு மாநில ஆணையரை நியமிக்க வேண்டும்.",
          "(2) ஆணையருக்கு உதவ ஐந்து நிபுணர்களுக்கு மிகாமல் கொண்ட ஒரு ஆலோசனைக் குழு அமைக்கப்பட வேண்டும்."
        ]
      },
      {
        "id": "sec-80",
        "number": "80",
        "titleEn": "Functions of State Commissioner",
        "titleTa": "மாநில ஆணையரின் செயல்பாடுகள்",
        "contentEn": [
          "The State Commissioner shall monitor implementation of the Act at the state level, review safeguards, and investigate complaints regarding deprivation of rights within the state."
        ],
        "contentTa": [
          "மாநில ஆணையர் மாநில அளவில் இச்சட்டத்தின் அமலாக்கத்தைக் கண்காணிக்க வேண்டும், பாதுகாப்புகளை ஆய்வு செய்ய வேண்டும் மற்றும் மாநிலத்திற்குள் உரிமைகள் பறிக்கப்படுவது தொடர்பான புகார்களை விசாரிக்க வேண்டும்."
        ]
      },
      {
        "id": "sec-81",
        "number": "81",
        "titleEn": "Action by appropriate authorities on recommendation of State Commissioner",
        "titleTa": "பரிந்துரையின் பேரில் தகுந்த அதிகார அமைப்புகளின் நடவடிக்கை",
        "contentEn": [
          "Whenever the Chief Commissioner or a State Commissioner makes a recommendation, the appropriate authority shall take action and submit a report within three months."
        ],
        "contentTa": [
          "முதன்மை ஆணையர் அல்லது மாநில ஆணையர் ஒரு பரிந்துரையைச் செய்யும்போது, தகுந்த அதிகார அமைப்பு தகுந்த நடவடிக்கை எடுத்து மூன்று மாதங்களுக்குள் அறிக்கை சமர்ப்பிக்க வேண்டும்."
        ]
      },
      {
        "id": "sec-82",
        "number": "82",
        "titleEn": "Powers of State Commissioner",
        "titleTa": "மாநில ஆணையரின் அதிகாரங்கள்",
        "contentEn": [
          "The Chief Commissioner and the State Commissioners shall have the powers of a Civil Court under the Code of Civil Procedure, 1908, including summoning witnesses, requiring discovery of documents, and receiving evidence on affidavits."
        ],
        "contentTa": [
          "முதன்மை ஆணையர் மற்றும் மாநில ஆணையர்களுக்கு சாட்சிகளை அழைத்தல், ஆவணங்களை தாக்கல் செய்யக் கோருதல் மற்றும் வாக்குமூலங்களைப் பெறுதல் உட்பட சிவில் நடைமுறைச் சட்டம், 1908-ன் கீழ் சிவில் நீதிமன்றத்தின் அதிகாரங்கள் இருக்கும்."
        ]
      },
      {
        "id": "sec-83",
        "number": "83",
        "titleEn": "Annual and special reports by State Commissioner",
        "titleTa": "ஆண்டு மற்றும் சிறப்பு அறிக்கைகள்",
        "contentEn": [
          "The Chief Commissioner and the State Commissioner shall prepare and submit annual and special reports to the Central Government and the State Government respectively, which shall be laid before the Parliament or the State Legislature."
        ],
        "contentTa": [
          "முதன்மை ஆணையர் மற்றும் மாநில ஆணையர் முறையே மத்திய மற்றும் மாநில அரசுகளுக்கு ஆண்டு மற்றும் சிறப்பு அறிக்கைகளை சமர்ப்பிக்க வேண்டும், அவை நாடாளுமன்றம் அல்லது மாநில சட்டமன்றத்தில் தாக்கல் செய்யப்படும்."
        ]
      }
    ]
  },
  {
    "id": "chapter13",
    "number": "XIII",
    "titleEn": "Special Court",
    "titleTa": "சிறப்பு நீதிமன்றம்",
    "sections": [
      {
        "id": "sec-84",
        "number": "84",
        "titleEn": "Special Court for Speedy Trials",
        "titleTa": "விரைவான விசாரணைக்கான சிறப்பு நீதிமன்றம்",
        "contentEn": [
          "For the purpose of providing speedy trial, the State Government, with the concurrence of the Chief Justice of the High Court, shall specify for each district a Court of Session to be a Special Court to try offences under this Act.",
          "This ensures that legal violations, atrocities, and discrimination cases against disabled citizens are adjudicated quickly and decisively."
        ],
        "contentTa": [
          "விரைவான விசாரணையை வழங்குவதற்காக, மாநில அரசு, உயர் நீதிமன்ற தலைமை நீதிபதியின் ஒப்புதலுடன், ஒவ்வொரு மாவட்டத்திலும் ஒரு அமர்வு நீதிமன்றத்தை இச்சட்டத்தின் கீழ் குற்றங்களை விசாரிக்கும் சிறப்பு நீதிமன்றமாக நியமிக்க வேண்டும்.",
          "இது மாற்றுத்திறனாளி குடிமக்களுக்கு எதிரான சட்ட மீறல்கள், வன்கொடுமைகள் மற்றும் பாகுபாடு வழக்குகள் விரைவாகவும் தீர்க்கமாகவும் விசாரிப்பதை உறுதி செய்கிறது."
        ]
      },
      {
        "id": "sec-85",
        "number": "85",
        "titleEn": "Special Public Prosecutor",
        "titleTa": "சிறப்பு அரசு வழக்கறிஞர்",
        "contentEn": [
          "For every Special Court, the State Government shall specify a Special Public Prosecutor, or appoint an advocate who has been in practice for not less than seven years, for the purpose of conducting cases in that Court."
        ],
        "contentTa": [
          "ஒவ்வொரு சிறப்பு நீதிமன்றத்திற்கும், மாநில அரசு ஒரு சிறப்பு அரசு வழக்கறிஞரை நியமிக்க வேண்டும் அல்லது அந்த நீதிமன்றத்தில் வழக்குகளை நடத்துவதற்காகக் குறைந்தது ஏழு ஆண்டுகள் வழக்கறிஞராகப் பயிற்சி பெற்ற ஒரு வழக்கறிஞரை நியமிக்க வேண்டும்."
        ]
      }
    ]
  },
  {
    "id": "chapter14",
    "number": "XIV",
    "titleEn": "National Fund for Persons with Disabilities",
    "titleTa": "மாற்றுத்திறனாளிகளுக்கான தேசிய நிதி",
    "sections": [
      {
        "id": "sec-86",
        "number": "86",
        "titleEn": "National Fund",
        "titleTa": "தேசிய நிதி",
        "contentEn": [
          "There shall be constituted a Fund to be called the National Fund for persons with disabilities. The Fund shall be credited with:",
          "(a) All sums available under the Trust Fund for Empowerment of Persons with Disabilities.",
          "(b) All sums payable by banks or financial institutions in pursuance of judgments of the Supreme Court.",
          "(c) All sums received by way of grant, gifts, donations, or bequests.",
          "(d) Grants-in-aid received from the Central Government."
        ],
        "contentTa": [
          "மாற்றுத்திறனாளிகளுக்கான தேசிய நிதி என அழைக்கப்படும் நிதி ஒன்று அமைக்கப்பட வேண்டும். இதில் பின்வருவன வரவு வைக்கப்படும்:",
          "(அ) மாற்றுத்திறனாளிகளுக்கு அதிகாரமளிப்பதற்கான அறக்கட்டளை நிதியின் கீழ் உள்ள அனைத்து தொகைகளும்.",
          "(ஆ) உச்ச நீதிமன்ற தீர்ப்புகளின்படி வங்கிகள் அல்லது நிதி நிறுவனங்கள் செலுத்த வேண்டிய அனைத்து தொகைகளும்.",
          "(இ) மானியம், நன்கொடைகள் அல்லது ஆவண வழி கொடைகள் மூலமாக பெறப்பட்ட தொகைகள்.",
          "(ஈ) மத்திய அரசிடமிருந்து பெறப்பட்ட உதவி மானியங்கள்."
        ]
      },
      {
        "id": "sec-87",
        "number": "87",
        "titleEn": "Accounts and audit of National Fund",
        "titleTa": "தேசிய நிதியின் கணக்குகள் மற்றும் தணிக்கை",
        "contentEn": [
          "The accounts of the National Fund shall be maintained and audited by the Comptroller and Auditor-General of India in such manner as may be prescribed, and the audited accounts shall be laid before each House of Parliament."
        ],
        "contentTa": [
          "தேசிய நிதியின் கணக்குகள் பரிந்துரைக்கப்பட்ட முறையில் இந்திய தலைமை கணக்கு தணிக்கையாளரால் (CAG) பராமரிக்கப்பட்டு தணிக்கை செய்யப்பட வேண்டும், மேலும் தணிக்கை செய்யப்பட்ட கணக்குகள் நாடாளுமன்றத்தின் இரு அவைகளிலும் சமர்ப்பிக்கப்பட வேண்டும்."
        ]
      }
    ]
  },
  {
    "id": "chapter15",
    "number": "XV",
    "titleEn": "State Fund for Persons with Disabilities",
    "titleTa": "மாற்றுத்திறனாளிகளுக்கான மாநில நிதி",
    "sections": [
      {
        "id": "sec-88",
        "number": "88",
        "titleEn": "State Fund",
        "titleTa": "மாநில நிதி",
        "contentEn": [
          "(1) There shall be constituted a Fund to be called the State Fund for persons with disabilities by a State Government in such manner as may be prescribed.",
          "(2) The State Fund shall be utilised and managed in such manner as may be prescribed by the State Government.",
          "(3) Every State Government shall maintain proper accounts and the accounts shall be audited by the Comptroller and Auditor-General of India."
        ],
        "contentTa": [
          "(1) ஒவ்வொரு மாநில அரசும், மாற்றுத்திறனாளிகளுக்கான மாநில நிதி என அழைக்கப்படும் நிதி ஒன்றை பரிந்துரைக்கப்பட்ட முறையில் அமைக்க வேண்டும்.",
          "(2) மாநில நிதி, மாநில அரசால் பரிந்துரைக்கப்படும் முறையில் பயன்படுத்தப்பட்டு மேலாண்மை செய்யப்பட வேண்டும்.",
          "(3) ஒவ்வொரு மாநில அரசும் முறையான கணக்குகளை பராமரிக்க வேண்டும், மேலும் அவை இந்திய தலைமை கணக்கு தணிக்கையாளரால் (CAG) தணிக்கை செய்யப்பட வேண்டும்."
        ]
      }
    ]
  },
  {
    "id": "chapter16",
    "number": "XVI",
    "titleEn": "Offences and Penalties",
    "titleTa": "குற்றங்கள் மற்றும் தண்டனைகள்",
    "sections": [
      {
        "id": "sec-89",
        "number": "89",
        "titleEn": "Punishment for contravention of provisions",
        "titleTa": "சட்ட விதிகளுக்கு புறம்பாக செயல்படுவதற்கான தண்டனை",
        "isPenalty": true,
        "contentEn": [
          "Any person who contravenes any provision of this Act or rules made thereunder shall be punishable with:",
          "- First offence: Fine up to ₹10,000.",
          "- Subsequent offences: Fine not less than ₹50,000, which may extend to ₹5,00,000."
        ],
        "contentTa": [
          "இந்தச் சட்டத்தின் அல்லது அதன் விதிகளின் ஏதேனும் ஒரு பிரிவை மீறும் எந்தவொரு நபருக்கும் பின்வரும் தண்டனை விதிக்கப்படும்:",
          "- முதல் முறை மீறல்: ₹10,000 வரை அபராதம்.",
          "- அடுத்தடுத்த மீறல்கள்: ₹50,000 முதல் ₹5,00,000 வரை அபராதம்."
        ]
      },
      {
        "id": "sec-90",
        "number": "90",
        "titleEn": "Offences by companies",
        "titleTa": "நிறுவனங்களால் செய்யப்படும் குற்றங்கள்",
        "isPenalty": true,
        "contentEn": [
          "(1) Where an offence under this Act has been committed by a company, every person who at the time was in charge of the company shall be deemed guilty.",
          "(2) If it is proved that the offence was committed with the consent or connivance of any director, manager, or secretary, they shall also be punished accordingly."
        ],
        "contentTa": [
          "(1) இச்சட்டத்தின் கீழ் ஒரு நிறுவனம் குற்றத்தைச் செய்யும்போது, அக்குற்றம் செய்யப்படும் நேரத்தில் நிறுவனத்தின் வணிக பொறுப்பில் இருந்த நபர்கள் குற்றவாளிகளாகக் கருதப்படுவர்.",
          "(2) அக்குற்றம் இயக்குநர், மேலாளர் அல்லது செயலாளரின் சம்மதம் அல்லது உடந்தையுடன் செய்யப்பட்டது என்று நிரூபிக்கப்பட்டால், அவர்களும் தண்டிக்கப்படுவார்கள்."
        ]
      },
      {
        "id": "sec-91",
        "number": "91",
        "titleEn": "Punishment for fraudulently availing benefits",
        "titleTa": "சலுகைகளை மோசடியாகப் பெறுவதற்கான தண்டனை",
        "isPenalty": true,
        "contentEn": [
          "Whoever fraudulently avails or attempts to avail any benefit meant for persons with benchmark disabilities shall be punishable with:",
          "- Imprisonment for a term which may extend to two years, OR",
          "- Fine which may extend to ₹1,00,000, OR both."
        ],
        "contentTa": [
          "வரம்புக்குட்பட்ட மாற்றுத்திறனாளிகளுக்கு என ஒதுக்கப்பட்ட ஏதேனும் ஒரு சலுகையை எவரேனும் மோசடியாகப் பெற்றால் அல்லது பெற முயன்றால்:",
          "- இரண்டு ஆண்டுகள் வரை சிறைத்தண்டனை, அல்லது",
          "- ₹1,00,000 வரை அபராதம், அல்லது இரண்டும் விதிக்கப்படும்."
        ]
      },
      {
        "id": "sec-92",
        "number": "92",
        "titleEn": "Punishment for offences of atrocities",
        "titleTa": "மாற்றுத்திறனாளிகளுக்கு எதிரான கொடுமைகளுக்கான தண்டனை",
        "isPenalty": true,
        "contentEn": [
          "Whoever commits any of the following atrocities against a person with disability:",
          "(a) Intentionally insults or intimidates with intent to humiliate in public view.",
          "(b) Assaults or uses force to dishonour or outrage the modesty of a woman with disability.",
          "(c) Having actual charge or control, voluntarily or knowingly denies food or fluids.",
          "(d) Dominates the will of a child or woman to sexually exploit them.",
          "(e) Voluntarily injures, damages or interferes with use of any limb or supporting device.",
          "Shall be punishable with imprisonment for a term not less than six months, which may extend to five years, and with fine."
        ],
        "contentTa": [
          "மாற்றுத்திறனாளி ஒருவருக்கு எதிராக பின்வரும் கொடுமைகளைச் செய்யும் எவரும்:",
          "(அ) பொது வெளியில் அவமானப்படுத்தும் நோக்கத்துடன் வேண்டுமென்றே அவமதித்தல் அல்லது மிரட்டுதல்.",
          "(ஆ) மாற்றுத்திறனாளிப் பெண்ணின் கண்ணியத்தைக் குலைக்கும் வகையில் தாக்குதல் அல்லது வன்முறையைப் பயன்படுத்துதல்.",
          "(இ) மாற்றுத்திறனாளியைத் தன் பொறுப்பில் வைத்திருந்து, உணவோ திரவங்களோ வழங்க மறுத்தல்.",
          "(ஈ) மாற்றுத்திறனாளிப் பெண் அல்லது குழந்தையை பாலியல் ரீதியாக சுரண்டுதல்.",
          "(உ) மாற்றுத்திறனாளியின் உடல் உறுப்புகள் அல்லது உதவி சாதனங்களை வேண்டுமென்றே காயப்படுத்துதல் அல்லது சேதப்படுத்துதல்.",
          "ஆறு மாதங்கள் குறையாத, ஐந்து ஆண்டுகள் வரை நீடிக்கக்கூடிய சிறைத்தண்டனை மற்றும் அபராதம் விதிக்கப்பட்டு தண்டிப்பார்."
        ]
      },
      {
        "id": "sec-93",
        "number": "93",
        "titleEn": "Punishment for failure to furnish information",
        "titleTa": "தகவலை அளிக்கத் தவறுவதற்கான தண்டனை",
        "isPenalty": true,
        "contentEn": [
          "Whoever fails to produce any book, account or document or furnish any statement, information or particulars which they are bound to produce under this Act shall be punishable with fine which may extend to twenty-five thousand rupees for each offence, and in case of continued failure, with a further fine of one thousand rupees for each day."
        ],
        "contentTa": [
          "இந்தச் சட்டத்தின் கீழ் தாக்கல் செய்யக் கடமைப்பட்டுள்ள எந்தவொரு புத்தகம், கணக்கு அல்லது ஆவணத்தைத் தாக்கல் செய்யத் தவறினால் அல்லது அறிக்கை, தகவல் அல்லது விவரங்களை வழங்கத் தவறினால், ஒவ்வொரு குற்றத்திற்கும் இருபத்தைந்தாயிரம் ரூபாய் வரை அபராதமும், தொடர்ந்து தவறினால் ஒவ்வொரு நாளுக்கும் ஆயிரம் ரூபாய் அபராதமும் விதிக்கப்படும்."
        ]
      },
      {
        "id": "sec-94",
        "number": "94",
        "titleEn": "Previous sanction of appropriate Government",
        "titleTa": "உரிய அரசின் முன் அனுமதி",
        "contentEn": [
          "No Court shall take cognizance of an offence alleged to have been committed by an employee of the appropriate Government under this Chapter, except with the previous sanction of that Government."
        ],
        "contentTa": [
          "உரிய அரசின் ஊழியர் ஒருவரால் செய்யப்பட்டதாகக் கூறப்படும் குற்றத்தை, அந்த அரசின் முன் அனுமதி இன்றி எந்தவொரு நீதிமன்றமும் விசாரணைக்கு எடுத்துக் கொள்ளக் கூடாது."
        ]
      },
      {
        "id": "sec-95",
        "number": "95",
        "titleEn": "Alternative punishments",
        "titleTa": "மாற்றுத் தண்டனைகள்",
        "contentEn": [
          "Where an act or omission constitutes an offence punishable under this Act and also under any other Central or State Act, the offender shall be punished under the Act which imposes a greater punishment."
        ],
        "contentTa": [
          "ஒரு செயல் அல்லது தவிர்த்தல் இச்சட்டத்தின் கீழும் மற்றும் பிற மத்திய அல்லது மாநில சட்டத்தின் கீழும் தண்டனைக்குரிய குற்றமாக அமையும் போது, குற்றவாளிக்கு அதிக தண்டனை விதிக்கும் சட்டத்தின் கீழ் தண்டனை வழங்கப்படும்."
        ]
      }
    ]
  },
  {
    "id": "chapter17",
    "number": "XVII",
    "titleEn": "Miscellaneous",
    "titleTa": "பல்வேறு வகை",
    "sections": [
      {
        "id": "sec-96",
        "number": "96",
        "titleEn": "Act to be in addition to other laws",
        "titleTa": "இச்சட்டம் பிற சட்டங்களுக்கு கூடுதல் பலனளிப்பதாகும்",
        "contentEn": [
          "The provisions of this Act shall be in addition to, and not in derogation of, the provisions of any other law for the time being in force."
        ],
        "contentTa": [
          "இச்சட்டத்தின் விதிகள் தற்போது அமலில் உள்ள பிற சட்டங்களின் விதிகளுக்கு கூடுதலாகவே செயல்படும், அவைகளுக்குப் பாதகமாக அமையாது."
        ]
      },
      {
        "id": "sec-97",
        "number": "97",
        "titleEn": "Protection of action taken in good faith",
        "titleTa": "நல்லெண்ணத்துடன் செய்யப்பட்ட நடவடிக்கைகளுக்கு பாதுகாப்பு",
        "contentEn": [
          "No suit, prosecution or other legal proceeding shall lie against the appropriate Government or any officer for anything which is in good faith done or intended to be done under this Act."
        ],
        "contentTa": [
          "இச்சட்டத்தின் கீழ் நல்லெண்ணத்துடன் செய்யப்பட்ட அல்லது செய்ய உத்தேசிக்கப்பட்ட எந்தவொரு நடவடிக்கைக்கும் எதிராக உரிய அரசு அல்லது அதிகாரிகள் மீது வழக்கு அல்லது சட்ட ரீதியான நடவடிக்கைகள் தொடர முடியாது."
        ]
      },
      {
        "id": "sec-98",
        "number": "98",
        "titleEn": "Power to remove difficulties",
        "titleTa": "சிரமங்களை நீக்குவதற்கான அதிகாரம்",
        "contentEn": [
          "(1) If any difficulty arises in giving effect to the provisions of this Act, the Central Government may, by order published in the Official Gazette, make provisions for removing the difficulty.",
          "(2) No such order shall be made after the expiry of a period of two years from the commencement of this Act."
        ],
        "contentTa": [
          "(1) இச்சட்டத்தின் விதிகளைச் செயல்படுத்துவதில் ஏதேனும் சிரமம் ஏற்பட்டால், மத்திய அரசு அரசிதழில் ஆணை வெளியிடுவதன் மூலம் அச்சிரமத்தை நீக்குவதற்கான விதிகளை உருவாக்கலாம்.",
          "(2) இச்சட்டம் தொடங்கிய நாளிலிருந்து இரண்டு ஆண்டுகள் கடந்த பிறகு அத்தகைய ஆணை எதுவும் பிறப்பிக்கப்படக் கூடாது."
        ]
      },
      {
        "id": "sec-99",
        "number": "99",
        "titleEn": "Power to make rules",
        "titleTa": "விதிகளை உருவாக்குவதற்கான அதிகாரம்",
        "contentEn": [
          "(1) The Central Government may, by notification, make rules for carrying out the provisions of this Act.",
          "(2) Every rule made by the Central Government under this Act shall be laid before each House of Parliament."
        ],
        "contentTa": [
          "(1) இச்சட்டத்தின் விதிகளைச் செயல்படுத்துவதற்காக மத்திய அரசு அறிவிக்கை மூலம் விதிகளை உருவாக்கலாம்.",
          "(2) இச்சட்டத்தின் கீழ் மத்திய அரசால் உருவாக்கப்படும் ஒவ்வொரு விதியும் நாடாளுமன்றத்தின் இரு அவைகளிலும் சமர்ப்பிக்கப்பட வேண்டும்."
        ]
      },
      {
        "id": "sec-100",
        "number": "100",
        "titleEn": "Power of State Government to make rules",
        "titleTa": "மாநில அரசின் விதி உருவாக்கும் அதிகாரம்",
        "contentEn": [
          "(1) The State Government may, by notification, make rules for carrying out the provisions of this Act within the State.",
          "(2) Every rule made by the State Government shall be laid before the State Legislature."
        ],
        "contentTa": [
          "(1) இச்சட்டத்தின் விதிகளை மாநிலத்திற்குள் செயல்படுத்துவதற்காக மாநில அரசு அறிவிக்கை மூலம் விதிகளை உருவாக்கலாம்.",
          "(2) மாநில அரசால் உருவாக்கப்படும் ஒவ்வொரு விதியும் மாநில சட்டமன்றத்தில் சமர்ப்பிக்கப்பட வேண்டும்."
        ]
      },
      {
        "id": "sec-101",
        "number": "101",
        "titleEn": "Rules and schemes to be laid before Parliament",
        "titleTa": "விதிகள் மற்றும் திட்டங்களை நாடாளுமன்றத்தில் சமர்ப்பித்தல்",
        "contentEn": [
          "Every scheme and rule formulated under this Act shall be laid before Parliament and shall be subject to modification or annulment as both Houses may agree."
        ],
        "contentTa": [
          "இச்சட்டத்தின் கீழ் உருவாக்கப்படும் ஒவ்வொரு திட்டமும் மற்றும் விதியும் நாடாளுமன்றத்தில் சமர்ப்பிக்கப்பட வேண்டும், மேலும் இரு அவைகளும் ஒப்புக்கொள்ளும் மாற்றங்கள் அல்லது ரத்துகளுக்கு உட்பட்டதாக இருக்கும்."
        ]
      },
      {
        "id": "sec-102",
        "number": "102",
        "titleEn": "Repeal and savings",
        "titleTa": "நீக்கம் மற்றும் சேமிப்புகள்",
        "contentEn": [
          "(1) The Persons with Disabilities (Equal Opportunities, Protection of Rights and Full Participation) Act, 1995 is hereby repealed.",
          "(2) Notwithstanding the repeal, anything done or action taken under the said Act shall be deemed to have been done under the corresponding provisions of this Act."
        ],
        "contentTa": [
          "(1) ஊனமுற்றோர் (சம வாய்ப்புகள், உரிமைகள் பாதுகாப்பு மற்றும் முழுப் பங்கேற்பு) சட்டம், 1995 இத்தோடு நீக்கப்படுகிறது.",
          "(2) இநீக்கம் அவ்வாறிருந்தபோதிலும், முந்தைய சட்டத்தின் கீழ் செய்யப்பட்ட எந்தவொரு காரியமும் அல்லது எடுக்கப்பட்ட நடவடிக்கையும் இச்சட்டத்தின் தொடர்புடைய பிரிவுகளின் கீழ் செய்யப்பட்டதாகவே கருதப்படும்."
        ]
      }
    ]
  }
],
  disabilities: [
  {
    "id": "dwarfism",
    "categoryEn": "Physical Disability",
    "categoryTa": "உடல் மாற்றுத்திறன்",
    "typeEn": "Dwarfism",
    "typeTa": "குட்டை உடல் தன்மை",
    "descEn": "A medical or genetic condition resulting in an adult height of 4 feet 10 inches (147 cm) or less.",
    "descTa": "மரபணு அல்லது மருத்துவக் காரணங்களால் ஒரு முதியவரின் உயரம் 4 அடி 10 அங்குலம் அல்லது அதற்கு குறைவாக இருப்பது."
  },
  {
    "id": "blindness",
    "categoryEn": "Physical Disability",
    "categoryTa": "உடல் மாற்றுத்திறன்",
    "typeEn": "Blindness",
    "typeTa": "பார்வையின்மை",
    "descEn": "Total absence of sight, or visual acuity less than 3/60, or field of vision less than 10 degrees in the better eye.",
    "descTa": "முழுமையான பார்வை இழப்பு, அல்லது சிறந்த கண்ணில் 3/60 க்கும் குறைவான பார்வை கூர்மை, அல்லது 10 டிகிரிக்கும் குறைவான பார்வை வீச்சு."
  },
  {
    "id": "low_vision",
    "categoryEn": "Physical Disability",
    "categoryTa": "உடல் மாற்றுத்திறன்",
    "typeEn": "Low Vision",
    "typeTa": "குறைந்த பார்வை",
    "descEn": "Visual acuity not exceeding 6/18 or less than 20/60 up to 3/60 in the better eye with correcting lenses.",
    "descTa": "தகுந்த கண்ணாடிகளுடன் கூடிய சிறந்த கண்ணில் 6/18 க்கு மிகாத அல்லது 3/60 வரையிலான பார்வைக் கூர்மை குறைபாடு."
  },
  {
    "id": "deaf",
    "categoryEn": "Physical Disability",
    "categoryTa": "உடல் மாற்றுத்திறன்",
    "typeEn": "Deafness",
    "typeTa": "காது கேளாமை",
    "descEn": "70 decibels hearing loss in speech frequencies in both ears.",
    "descTa": "இரு காதுகளிலும் பேச்சு அலையெண்களில் 70 டெசிபல் அல்லது அதற்கு மேற்பட்ட ஒலி இழப்பு."
  },
  {
    "id": "hard_of_hearing",
    "categoryEn": "Physical Disability",
    "categoryTa": "உடல் மாற்றுத்திறன்",
    "typeEn": "Hard of Hearing",
    "typeTa": "மந்தமான செவித்திறன்",
    "descEn": "60 to 70 decibels hearing loss in speech frequencies in both ears.",
    "descTa": "இரு காதுகளிலும் பேச்சு அலையெண்களில் 60 முதல் 70 டெசிபல் வரையிலான செவித்திறன் இழப்பு."
  },
  {
    "id": "leprosy_cured",
    "categoryEn": "Physical Disability",
    "categoryTa": "உடல் மாற்றுத்திறன்",
    "typeEn": "Leprosy Cured Person",
    "typeTa": "தொழுநோய் குணமடைந்தவர்",
    "descEn": "Persons cured of leprosy but having manifest physical deformities or loss of sensation in hands/feet.",
    "descTa": "தொழுநோய் நீங்கிய பின்பும் கைகள் அல்லது கால்களில் உணர்வின்மை அல்லது உடல் சிதைவுகள் கொண்ட நபர்."
  },
  {
    "id": "cerebral_palsy",
    "categoryEn": "Physical Disability",
    "categoryTa": "உடல் மாற்றுத்திறன்",
    "typeEn": "Cerebral Palsy",
    "typeTa": "மூளை முடக்குவாதம்",
    "descEn": "A group of non-progressive neurological conditions affecting body movements and muscle coordination.",
    "descTa": "உடல் இயக்கம் மற்றும் தசை ஒருங்கிணைப்பைப் பாதிக்கும் முற்போக்கானதல்லாத நரம்பியல் குறைபாடுகளின் குழுமம்."
  },
  {
    "id": "muscular_dystrophy",
    "categoryEn": "Physical Disability",
    "categoryTa": "உடல் மாற்றுத்திறன்",
    "typeEn": "Muscular Dystrophy",
    "typeTa": "தசைச் சிதைவு நோய்",
    "descEn": "A group of hereditary genetic muscle diseases that weaken and damage the muscles over time.",
    "descTa": "காலப்போக்கில் தசைகளை பலவீனப்படுத்தி சேதப்படுத்தும் பரம்பரை மரபணு தசை நோய்களின் குழு."
  },
  {
    "id": "acid_attack",
    "categoryEn": "Physical Disability",
    "categoryTa": "உடல் மாற்றுத்திறன்",
    "typeEn": "Acid Attack Victims",
    "typeTa": "அமில வீச்சால் பாதிக்கப்பட்டவர்கள்",
    "descEn": "Persons severely disfigured due to violent throw of acid or similar corrosive substances.",
    "descTa": "அமிலம் அல்லது அது போன்ற அரிக்கும் பொருட்கள் வீசப்பட்டதால் கடுமையாக உடல் சிதைக்கப்பட்ட நபர்கள்."
  },
  {
    "id": "speech_language",
    "categoryEn": "Physical Disability",
    "categoryTa": "உடல் மாற்றுத்திறன்",
    "typeEn": "Speech and Language Disability",
    "typeTa": "பேச்சு மற்றும் மொழி மாற்றுத்திறன்",
    "descEn": "Permanent disability arising from laryngectomy or aphasia affecting speech due to neurological causes.",
    "descTa": "நரம்பியல் காரணங்களால் பேச்சு மற்றும் மொழியைப் பாதிக்கும் குரல்வளை நீக்கம் அல்லது அஃபாசியா போன்ற நிரந்தரக் குறைபாடுகள்."
  },
  {
    "id": "learning_disability",
    "categoryEn": "Intellectual Disability",
    "categoryTa": "அறிவுசார் மாற்றுத்திறன்",
    "typeEn": "Specific Learning Disabilities",
    "typeTa": "குறிப்பிட்ட கற்றல் குறைபாடுகள்",
    "descEn": "Conditions like Dyslexia (reading), Dysgraphia (writing), and Dyscalculia (maths) affecting learning.",
    "descTa": "வாசிப்பதில் குறைபாடு (டிஸ்லெக்ஸியா), எழுதுவதில் குறைபாடு (டிஸ்கிராஃபியா) மற்றும் கணிதக் குறைபாடு (டிஸ்கால்குலியா) போன்ற கற்றலைப் பாதிக்கும் நிலைகள்."
  },
  {
    "id": "autism",
    "categoryEn": "Intellectual Disability",
    "categoryTa": "அறிவுசார் மாற்றுத்திறன்",
    "typeEn": "Autism Spectrum Disorder",
    "typeTa": "மன இறுக்கம் (ஆட்டிசம்)",
    "descEn": "A developmental condition affecting social interaction, communication, and behaviour.",
    "descTa": "சமூகத் தொடர்பு, பேச்சு மற்றும் நடைத்தையைப் பாதிக்கும் நரம்பியல் வளர்ச்சி நிலை."
  },
  {
    "id": "mental_illness",
    "categoryEn": "Mental Behaviour",
    "categoryTa": "மன நோய் நடத்தை",
    "typeEn": "Mental Illness",
    "typeTa": "மனநல பாதிப்பு (மனநோய்)",
    "descEn": "Substantial disorder of thinking, mood, perception, or memory that grossly impairs life skills. Excludes intellectual disability.",
    "descTa": "சிந்தனை, மனநிலை, நினைவாற்றல் ஆகியவற்றில் ஏற்படும் கணிசமான அசாதாரண நிலை, இது சாதாரண வாழ்க்கைச் செயல்பாடுகளைப் பாதிக்கிறது."
  },
  {
    "id": "multiple_sclerosis",
    "categoryEn": "Chronic Neurological",
    "categoryTa": "நீண்டகால நரம்பியல் நிலை",
    "typeEn": "Multiple Sclerosis",
    "typeTa": "தண்டுவட நரம்பு நோய்",
    "descEn": "An inflammatory disease where the insulating covers of nerve cells in the brain and spinal cord are damaged.",
    "descTa": "மூளை மற்றும் தண்டுவட நரம்பு செல்களை மூடியிருக்கும் பாதுகாப்பு உறை சிதைவடையும் ஒரு நீண்டகால நரம்பியல் நோய்."
  },
  {
    "id": "parkinson",
    "categoryEn": "Chronic Neurological",
    "categoryTa": "நீண்டகால நரம்பியல் நிலை",
    "typeEn": "Parkinson's Disease",
    "typeTa": "பார்கின்சன் நோய்",
    "descEn": "A progressive disease of the nervous system marked by tremor, muscular rigidity, and slow movement.",
    "descTa": "நடுக்கம், தசை விறைப்பு மற்றும் மெதுவான இயக்கம் ஆகியவற்றை ஏற்படுத்தும் நரம்பு மண்டலத்தின் முற்போக்கான நோய்."
  },
  {
    "id": "haemophilia",
    "categoryEn": "Blood Disorders",
    "categoryTa": "இரத்தக் குறைபாடுகள்",
    "typeEn": "Haemophilia",
    "typeTa": "ஹீமோபிலியா (இரத்தக் கசிவு நோய்)",
    "descEn": "An inherited medical condition where the blood does not clot properly, leading to excessive bleeding.",
    "descTa": "இரத்தம் உறைதலில் உள்ள மரபணுக் குறைபாட்டாலோ ஏற்படும் நோய், இது லேசான காயத்திற்கும் அதிக இரத்தக் கசிவை ஏற்படுத்தும்."
  },
  {
    "id": "thalassemia",
    "categoryEn": "Blood Disorders",
    "categoryTa": "இரத்தக் குறைபாடுகள்",
    "typeEn": "Thalassemia",
    "typeTa": "தலசீமியா (இரத்தச் சோகை நோய்)",
    "descEn": "A genetic blood disorder involving lower-than-normal amounts of oxygen-carrying proteins (haemoglobin).",
    "descTa": "ஹீமோகுளோபின் உற்பத்தியில் ஏற்படும் பாதிப்பால் உடலுக்குத் தேவையான ஆக்ஸிஜனை எடுத்துச் செல்லும் திறன் குறையும் மரபணு நோய்."
  },
  {
    "id": "sickle_cell",
    "categoryEn": "Blood Disorders",
    "categoryTa": "இரத்தக் குறைபாடுகள்",
    "typeEn": "Sickle Cell Disease",
    "typeTa": "அரிவாள் செல் சோகை நோய்",
    "descEn": "A group of inherited red blood cell disorders where red blood cells become misshapen like a sickle.",
    "descTa": "இரத்த சிவப்பணுக்கள் அரிவாள் வடிவம் பெற்று சிதைவடையும் ஒரு தீவிர மரபணு இரத்தச் சோகை நோய்."
  },
  {
    "id": "multiple_disabilities",
    "categoryEn": "Multiple Disabilities",
    "categoryTa": "பல்வகை மாற்றுத்திறன்கள்",
    "typeEn": "Multiple Disabilities including Deaf-Blindness",
    "typeTa": "செவிபார்வையற்றது உட்பட பல்வகை மாற்றுத்திறன்",
    "descEn": "A combination of more than one of the specified disabilities, such as combined hearing and visual impairment.",
    "descTa": "ஒன்றுக்கும் மேற்பட்ட குறிப்பிட்ட மாற்றுத்திறன்களின் கூட்டு, உதாரணமாக ஒரே நேரத்தில் பார்வையின்மை மற்றும் காது கேளாமை இருத்தல்."
  }
]
};
