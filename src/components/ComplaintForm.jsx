import React, { useState, useEffect } from "react";

// Tamil Nadu Police Directory (All 38 Districts -> Stations & Emails)
const tnPoliceDirectory = {
  "Chennai (சென்னை)": {
    emailSP: "cop.chennai@tn.gov.in",
    stations: {
      "B1 North Beach Station (வடக்கு கடற்கரை)": "sho.b1northbeach@tncctns.gov.in",
      "E1 Mylapore Station (மயிலாப்பூர்)": "sho.e1mylapore@tncctns.gov.in",
      "G3 Kilpauk Station (கீழ்ப்பாக்கம்)": "sho.g3kilpauk@tncctns.gov.in",
      "H1 Washermenpet Station (வண்ணாரப்பேட்டை)": "sho.h1washermenpet@tncctns.gov.in",
      "J1 Saidapet Station (சைதாப்பேட்டை)": "sho.j1saidapet@tncctns.gov.in",
      "K1 Sembium Station (செம்பியம்)": "sho.k1sembium@tncctns.gov.in",
      "R1 Mambalam Station (மாம்பலம்)": "sho.r1mambalam@tncctns.gov.in",
      "S11 Tambaram Station (தாம்பரம்)": "sho.s11tambaram@tncctns.gov.in",
      "All Women Police Station Mylapore (அனைத்து மகளிர் காவல் நிலையம் மயிலாப்பூர்)": "sho.awpsmylapore@tncctns.gov.in"
    }
  },
  "Madurai (மதுரை)": {
    emailSP: "cop.madurai@tn.gov.in",
    stations: {
      "B1 Vilakkuthoon Station (விளக்குத்தூண்)": "sho.b1vilakkuthoon@tncctns.gov.in",
      "C1 Teppakulam Station (தெப்பக்குளம்)": "sho.c1teppakulam@tncctns.gov.in",
      "D1 Tallakulam Station (தல்லாகுளம்)": "sho.d1tallakulam@tncctns.gov.in",
      "K1 Anna Nagar Station (அண்ணா நகர்)": "sho.k1annanagar@tncctns.gov.in",
      "S1 Koodal Nagar Station (கூடல் நகர்)": "sho.s1koodalnagar@tncctns.gov.in",
      "Thiruparankundram Station (திருப்பரங்குன்றம்)": "sho.thiruparankundram@tncctns.gov.in"
    }
  },
  "Coimbatore (கோயம்புத்தூர்)": {
    emailSP: "cop.coimbatore@tn.gov.in",
    stations: {
      "B1 G.H. Station (ஜி.எச் காவல் நிலையம்)": "sho.b1ghcbe@tncctns.gov.in",
      "C1 Kattoor Station (காட்டூர்)": "sho.c1kattoorcbe@tncctns.gov.in",
      "D1 Ramanathapuram Station (இராமநாதபுரம்)": "sho.d1ramnathpuramcbe@tncctns.gov.in",
      "E1 Singanallur Station (சிங்காநல்லூர்)": "sho.e1singanallurcbe@tncctns.gov.in",
      "Peelamedu Station (பீளமேடு)": "sho.peelameducbe@tncctns.gov.in",
      "Saibaba Colony Station (சாய்பாபா காலனி)": "sho.saibabacolonycbe@tncctns.gov.in"
    }
  },
  "Trichy (திருச்சிராப்பள்ளி)": {
    emailSP: "cop.trichy@tn.gov.in",
    stations: {
      "Cantonment Station (கண்டோன்மென்ட்)": "sho.cantonmenttry@tncctns.gov.in",
      "Fort Station (கோட்டை காவல் நிலையம்)": "sho.forttry@tncctns.gov.in",
      "Palakkarai Station (பாலக்கரை)": "sho.palakkaraitry@tncctns.gov.in",
      "Srirangam Station (ஸ்ரீரங்கம்)": "sho.srirangamtry@tncctns.gov.in",
      "Golden Rock Station (பொன்மலை)": "sho.goldenrocktry@tncctns.gov.in"
    }
  },
  "Salem (சேலம்)": {
    emailSP: "cop.salem@tn.gov.in",
    stations: {
      "Town Station (டவுன் காவல் நிலையம்)": "sho.townsalem@tncctns.gov.in",
      "Ammapet Station (அம்மாப்பேட்டை)": "sho.ammapetsalem@tncctns.gov.in",
      "Hasthampatti Station (அஸ்தம்பட்டி)": "sho.hasthampattisalem@tncctns.gov.in",
      "Shevapet Station (செவ்வாய்ப்பேட்டை)": "sho.shevapetsalem@tncctns.gov.in",
      "Suramangalam Station (சூரமங்கலம்)": "sho.suramangalamsalem@tncctns.gov.in"
    }
  },
  "Tirunelveli (திருநெல்வேலி)": {
    emailSP: "cop.tirunelveli@tn.gov.in",
    stations: {
      "Town Station (டவுன் காவல் நிலையம்)": "sho.townnellai@tncctns.gov.in",
      "Junction Station (சந்திப்பு காவல் நிலையம்)": "sho.junctionnellai@tncctns.gov.in",
      "Melapalayam Station (மேலப்பாளையம்)": "sho.melapalayamnellai@tncctns.gov.in",
      "Pettai Station (பேட்டை)": "sho.pettainellai@tncctns.gov.in",
      "Palayamkottai Station (பாளையங்கோட்டை)": "sho.palayamkottainellai@tncctns.gov.in"
    }
  },
  "Tiruppur (திருப்பூர்)": {
    emailSP: "cop.tiruppur@tn.gov.in",
    stations: {
      "North Station (வடக்கு காவல் நிலையம்)": "sho.northtiruppur@tncctns.gov.in",
      "South Station (தெற்கு காவல் நிலையம்)": "sho.southtiruppur@tncctns.gov.in",
      "Central Station (மத்திய காவல் நிலையம்)": "sho.centraltiruppur@tncctns.gov.in",
      "Nallur Station (நல்லூர்)": "sho.nallurtiruppur@tncctns.gov.in"
    }
  },
  "Vellore (வேலூர்)": {
    emailSP: "sp.vellore@tn.gov.in",
    stations: {
      "North Station (வடக்கு காவல் நிலையம்)": "sho.northvellore@tncctns.gov.in",
      "South Station (தெற்கு காவல் நிலையம்)": "sho.southvellore@tncctns.gov.in",
      "Taluk Station (தாலுகா காவல் நிலையம்)": "sho.talukvellore@tncctns.gov.in",
      "Bagayam Station (பாகாயம்)": "sho.bagayamvellore@tncctns.gov.in"
    }
  },
  "Thanjavur (தஞ்சாவூர்)": {
    emailSP: "sp.thanjavur@tn.gov.in",
    stations: {
      "East Station (கிழக்கு காவல் நிலையம்)": "sho.eastthanjavur@tncctns.gov.in",
      "West Station (மேற்கு காவல் நிலையம்)": "sho.westthanjavur@tncctns.gov.in",
      "Taluk Station (தாலுகா காவல் நிலையம்)": "sho.talukthanjavur@tncctns.gov.in",
      "Medical College Station (மருத்துவக் கல்லூரி)": "sho.mcthanjavur@tncctns.gov.in"
    }
  },
  "Kanyakumari (கன்னியாகுமரி)": {
    emailSP: "sp.kanyakumari@tn.gov.in",
    stations: {
      "Nagercoil Town Station (நாகர்கோவில் டவுன்)": "sho.townnagercoil@tncctns.gov.in",
      "Nesamony Nagar Station (நேசமணி நகர்)": "sho.nesamonicolony@tncctns.gov.in",
      "Kanyakumari Station (கன்னியாகுமரி)": "sho.kkstation@tncctns.gov.in",
      "Thuckalay Station (தக்கலை)": "sho.thuckalay@tncctns.gov.in"
    }
  },
  "Ariyalur (அரியலூர்)": {
    emailSP: "sp.ariyalur@tn.gov.in",
    stations: {
      "Ariyalur Town Station (அரியலூர் நகர்)": "sho.ariyalurtown@tncctns.gov.in",
      "Jayankondam Station (ஜெயங்கொண்டம்)": "sho.jayankondam@tncctns.gov.in",
      "Sendurai Station (செந்துறை)": "sho.sendurai@tncctns.gov.in"
    }
  },
  "Chengalpattu (செங்கல்பட்டு)": {
    emailSP: "sp.chengalpattu@tn.gov.in",
    stations: {
      "Chengalpattu Town Station (செங்கல்பட்டு நகர்)": "sho.chengalpattutown@tncctns.gov.in",
      "Chengalpattu Taluk Station (செங்கல்பட்டு தாலுகா)": "sho.chengalpattutaluk@tncctns.gov.in",
      "Maduranthakam Station (மதுராந்தகம்)": "sho.maduranthakam@tncctns.gov.in",
      "Mahabalipuram Station (மகாபலிபுரம்)": "sho.mahabalipuram@tncctns.gov.in"
    }
  },
  "Cuddalore (கடலூர்)": {
    emailSP: "sp.cuddalore@tn.gov.in",
    stations: {
      "Cuddalore Town Station (கடலூர் நகர்)": "sho.cuddaloretown@tncctns.gov.in",
      "Cuddalore Taluk Station (கடலூர் தாலுகா)": "sho.cuddaloretaluk@tncctns.gov.in",
      "Chidambaram Town Station (சிதம்பரம் நகர்)": "sho.chidambaramtown@tncctns.gov.in",
      "Panruti Station (பண்ருட்டி)": "sho.panruti@tncctns.gov.in",
      "Vridhachalam Station (விருத்தாசலம்)": "sho.vridhachalam@tncctns.gov.in"
    }
  },
  "Dharmapuri (தர்மபுரி)": {
    emailSP: "sp.dharmapuri@tn.gov.in",
    stations: {
      "Dharmapuri Town Station (தர்மபுரி நகர்)": "sho.dharmapuritown@tncctns.gov.in",
      "Dharmapuri Taluk Station (தர்மபுரி தாலுகா)": "sho.dharmapuritaluk@tncctns.gov.in",
      "Harur Station (அரூர்)": "sho.harur@tncctns.gov.in",
      "Pennagaram Station (பெண்ணாகரம்)": "sho.pennagaram@tncctns.gov.in"
    }
  },
  "Dindigul (திண்டுக்கல்)": {
    emailSP: "sp.dindigul@tn.gov.in",
    stations: {
      "Dindigul Town Station (திண்டுக்கல் நகர்)": "sho.dindigultown@tncctns.gov.in",
      "Dindigul Taluk Station (திண்டுக்கல் தாலுகா)": "sho.dindigultaluk@tncctns.gov.in",
      "Palani Town Station (பழனி நகர்)": "sho.palanitown@tncctns.gov.in",
      "Kodaikanal Station (கொடைக்கானல்)": "sho.kodaikanaltown@tncctns.gov.in"
    }
  },
  "Erode (ஈரோடு)": {
    emailSP: "sp.erode@tn.gov.in",
    stations: {
      "Erode Town Station (ஈரோடு நகர்)": "sho.erodetown@tncctns.gov.in",
      "Erode Taluk Station (ஈரோடு தாலுகா)": "sho.erodetaluk@tncctns.gov.in",
      "Gobichettipalayam Station (கோபிசெட்டிபாளையம்)": "sho.gobichettipalayam@tncctns.gov.in",
      "Bhavani Station (பவானி)": "sho.bhavani@tncctns.gov.in",
      "Perundurai Station (பெருந்துறை)": "sho.perundurai@tncctns.gov.in"
    }
  },
  "Kallakurichi (கள்ளக்குறிச்சி)": {
    emailSP: "sp.kallakurichi@tn.gov.in",
    stations: {
      "Kallakurichi Town Station (கள்ளக்குறிச்சி நகர்)": "sho.kallakurichitown@tncctns.gov.in",
      "Ulundurpet Station (உளுந்தூர்ப்பேட்டை)": "sho.ulundurpet@tncctns.gov.in",
      "Sankarapuram Station (சங்கராபுரம்)": "sho.sankarapuram@tncctns.gov.in"
    }
  },
  "Kanchipuram (காஞ்சிபுரம்)": {
    emailSP: "sp.kanchipuram@tn.gov.in",
    stations: {
      "Kanchipuram Town Station (காஞ்சிபுரம் நகர்)": "sho.kanchipuramtown@tncctns.gov.in",
      "Kanchipuram Taluk Station (காஞ்சிபுரம் தாலுகா)": "sho.kanchipuramtaluk@tncctns.gov.in",
      "Sriperumbudur Station (ஸ்ரீபெரும்புதூர்)": "sho.sriperumbudur@tncctns.gov.in",
      "Sunguvarchatram Station (சுங்குவார்சத்திரம்)": "sho.sunguvarchatram@tncctns.gov.in"
    }
  },
  "Karur (கரூர்)": {
    emailSP: "sp.karur@tn.gov.in",
    stations: {
      "Karur Town Station (கரூர் நகர்)": "sho.karurtown@tncctns.gov.in",
      "Karur Taluk Station (கரூர் தாலுகா)": "sho.karurtaluk@tncctns.gov.in",
      "Kulithalai Station (குளித்தலை)": "sho.kulithalai@tncctns.gov.in",
      "Aravakurichi Station (அரவக்குறிச்சி)": "sho.aravakurichi@tncctns.gov.in"
    }
  },
  "Krishnagiri (கிருஷ்ணகிரி)": {
    emailSP: "sp.krishnagiri@tn.gov.in",
    stations: {
      "Krishnagiri Town Station (கிருஷ்ணகிரி நகர்)": "sho.krishnagiritown@tncctns.gov.in",
      "Hosur Town Station (ஓசூர் நகர்)": "sho.hosurtown@tncctns.gov.in",
      "Hosur HUDCO Station (ஓசூர் HUDCO)": "sho.hosurhudco@tncctns.gov.in",
      "Uthangarai Station (உத்தங்கரை)": "sho.uthangarai@tncctns.gov.in"
    }
  },
  "Mayiladuthurai (மயிலாடுதுறை)": {
    emailSP: "sp.mayiladuthurai@tn.gov.in",
    stations: {
      "Mayiladuthurai Town Station (மயிலாடுதுறை நகர்)": "sho.mayiladuthuraitown@tncctns.gov.in",
      "Sirkazhi Station (சீர்காழி)": "sho.sirkazhi@tncctns.gov.in",
      "Tarangambadi Station (தரங்கம்பாடி)": "sho.tarangambadi@tncctns.gov.in"
    }
  },
  "Nagapattinam (நாகப்பட்டினம்)": {
    emailSP: "sp.nagapattinam@tn.gov.in",
    stations: {
      "Nagapattinam Town Station (நாகப்பட்டினம் நகர்)": "sho.nagapattinamtown@tncctns.gov.in",
      "Velankanni Station (வேளாங்கண்ணி)": "sho.velankanni@tncctns.gov.in",
      "Vedaranyam Station (வேதாரண்யம்)": "sho.vedaranyam@tncctns.gov.in"
    }
  },
  "Namakkal (நாமக்கல்)": {
    emailSP: "sp.namakkal@tn.gov.in",
    stations: {
      "Namakkal Town Station (நாமக்கல் நகர்)": "sho.namakkaltown@tncctns.gov.in",
      "Rasipuram Station (ராசிபுரம்)": "sho.rasipuram@tncctns.gov.in",
      "Tiruchengode Town Station (திருச்செங்கோடு நகர்)": "sho.tiruchengodetown@tncctns.gov.in",
      "Komarapalayam Station (குமாரபாளையம்)": "sho.komarapalayam@tncctns.gov.in"
    }
  },
  "Perambalur (பெரம்பலூர்)": {
    emailSP: "sp.perambalur@tn.gov.in",
    stations: {
      "Perambalur Town Station (பெரம்பலூர் நகர்)": "sho.perambalurtown@tncctns.gov.in",
      "Kunnam Station (குன்னம்)": "sho.kunnam@tncctns.gov.in",
      "Veppanthattai Station (வேப்பந்தட்டை)": "sho.veppanthattai@tncctns.gov.in"
    }
  },
  "Pudukkottai (புதுக்கோட்டை)": {
    emailSP: "sp.pudukkottai@tn.gov.in",
    stations: {
      "Pudukkottai Town Station (புதுக்கோட்டை நகர்)": "sho.pudukkottaitown@tncctns.gov.in",
      "Pudukkottai Taluk Station (புதுக்கோட்டை தாலுகா)": "sho.pudukkottaitaluk@tncctns.gov.in",
      "Aranthangi Station (அறந்தாங்கி)": "sho.aranthangi@tncctns.gov.in",
      "Alangudi Station (ஆலங்குடி)": "sho.alangudi@tncctns.gov.in"
    }
  },
  "Ramanathapuram (இராமநாதபுரம்)": {
    emailSP: "sp.ramanathapuram@tn.gov.in",
    stations: {
      "Ramanathapuram Town Station (இராமநாதபுரம் நகர்)": "sho.ramanathapuramtown@tncctns.gov.in",
      "Rameswaram Temple Station (ராமேஸ்வரம் கோயில்)": "sho.rameswaramtemple@tncctns.gov.in",
      "Paramakudi Town Station (பரமக்குடி நகர்)": "sho.paramakuditown@tncctns.gov.in",
      "Keelakarai Station (கீழக்கரை)": "sho.keelakarai@tncctns.gov.in"
    }
  },
  "Ranipet (ராணிப்பேட்டை)": {
    emailSP: "sp.ranipet@tn.gov.in",
    stations: {
      "Ranipet Town Station (ராணிப்பேட்டை நகர்)": "sho.ranipettown@tncctns.gov.in",
      "Arakkonam Town Station (அரக்கோணம் நகர்)": "sho.arakkonamtown@tncctns.gov.in",
      "Arcot Town Station (ஆற்காடு நகர்)": "sho.arcottown@tncctns.gov.in",
      "Walajah Station (வாலாஜா)": "sho.walajah@tncctns.gov.in"
    }
  },
  "Sivaganga (சிவகங்கை)": {
    emailSP: "sp.sivaganga@tn.gov.in",
    stations: {
      "Sivaganga Town Station (சிவகங்கை நகர்)": "sho.sivagangatown@tncctns.gov.in",
      "Karaikudi North Station (காரைக்குடி வடக்கு)": "sho.karaikudinorth@tncctns.gov.in",
      "Karaikudi South Station (காரைக்குடி தெற்கு)": "sho.karaikudisouth@tncctns.gov.in",
      "Devakottai Town Station (தேவகோட்டை நகர்)": "sho.devakottaitown@tncctns.gov.in",
      "Manamadurai Station (மானாமதுரை)": "sho.manamadurai@tncctns.gov.in"
    }
  },
  "Tenkasi (தென்காசி)": {
    emailSP: "sp.tenkasi@tn.gov.in",
    stations: {
      "Tenkasi Town Station (தென்காசி நகர்)": "sho.tenkasitown@tncctns.gov.in",
      "Kadayanallur Station (கடையநல்லூர்)": "sho.kadayanallur@tncctns.gov.in",
      "Sankarankovil Town Station (சங்கரன்கோவில் நகர்)": "sho.sankarankoviltown@tncctns.gov.in",
      "Alangulam Station (ஆலங்குளம்)": "sho.alangulam@tncctns.gov.in"
    }
  },
  "Theni (தேனி)": {
    emailSP: "sp.theni@tn.gov.in",
    stations: {
      "Theni Town Station (தேனி நகர்)": "sho.thenitown@tncctns.gov.in",
      "Periyakulam Town Station (பெரியகுளம் நகர்)": "sho.periyakulamtown@tncctns.gov.in",
      "Bodinayakanur Town Station (போடிநாயக்கனூர் நகர்)": "sho.bodinayakanurtown@tncctns.gov.in",
      "Cumbum Town Station (கம்பம் நகர்)": "sho.cumbumtown@tncctns.gov.in"
    }
  },
  "Thoothukudi (தூத்துக்குடி)": {
    emailSP: "sp.thoothukudi@tn.gov.in",
    stations: {
      "Thoothukudi Central Station (தூத்துக்குடி மத்திய)": "sho.thoothukudicentral@tncctns.gov.in",
      "Thoothukudi South Station (தூத்துக்குடி தெற்கு)": "sho.thoothukudisouth@tncctns.gov.in",
      "Kovilpatti East Station (கோவில்பட்டி கிழக்கு)": "sho.kovilpantieast@tncctns.gov.in",
      "Tiruchendur Station (திருச்செந்தூர்)": "sho.tiruchendur@tncctns.gov.in"
    }
  },
  "Tirupathur (திருப்பத்தூர்)": {
    emailSP: "sp.tirupathur@tn.gov.in",
    stations: {
      "Tirupathur Town Station (திருப்பத்தூர் நகர்)": "sho.tirupathurtown@tncctns.gov.in",
      "Vaniyambadi Town Station (வாணியம்பாடி நகர்)": "sho.vaniyambaditown@tncctns.gov.in",
      "Ambur Town Station (ஆம்பூர் நகர்)": "sho.amburtown@tncctns.gov.in"
    }
  },
  "Tiruvallur (திருவள்ளூர்)": {
    emailSP: "sp.tiruvallur@tn.gov.in",
    stations: {
      "Tiruvallur Town Station (திருவள்ளூர் நகர்)": "sho.tiruvallurtown@tncctns.gov.in",
      "Tiruvallur Taluk Station (திருவள்ளூர் தாலுகா)": "sho.tiruvallurtaluk@tncctns.gov.in",
      "Avadi Station (ஆவடி)": "sho.avaditown@tncctns.gov.in",
      "Poonamallee Station (பூந்தமல்லி)": "sho.poonamallee@tncctns.gov.in"
    }
  },
  "Tiruvannamalai (திருவண்ணாமலை)": {
    emailSP: "sp.tiruvannamalai@tn.gov.in",
    stations: {
      "Tiruvannamalai Town Station (திருவண்ணாமலை நகர்)": "sho.tiruvannamalaitown@tncctns.gov.in",
      "Tiruvannamalai Taluk Station (திருவண்ணாமலை தாலுகா)": "sho.tiruvannamalailtaluk@tncctns.gov.in",
      "Arani Town Station (ஆரணி நகர்)": "sho.aranitown@tncctns.gov.in",
      "Polur Station (போளூர்)": "sho.polur@tncctns.gov.in",
      "Chengam Station (செங்கம்)": "sho.chengam@tncctns.gov.in"
    }
  },
  "Tiruvarur (திருவாரூர்)": {
    emailSP: "sp.tiruvarur@tn.gov.in",
    stations: {
      "Tiruvarur Town Station (திருவாரூர் நகர்)": "sho.tiruvarurtown@tncctns.gov.in",
      "Mannargudi Town Station (மன்னார்குடி நகர்)": "sho.mannarguditown@tncctns.gov.in",
      "Thiruthuraipoondi Station (திருத்துறைப்பூண்டி)": "sho.thiruthuraipoondi@tncctns.gov.in"
    }
  },
  "Viluppuram (விழுப்புரம்)": {
    emailSP: "sp.viluppuram@tn.gov.in",
    stations: {
      "Viluppuram Town Station (விழுப்புரம் நகர்)": "sho.viluppuramtown@tncctns.gov.in",
      "Viluppuram Taluk Station (விழுப்புரம் தாலுகா)": "sho.viluppuramtaluk@tncctns.gov.in",
      "Tindivanam Town Station (திண்டிவனம் நகர்)": "sho.tindivanamtown@tncctns.gov.in",
      "Gingee Station (செஞ்சி)": "sho.gingee@tncctns.gov.in"
    }
  },
  "Virudhunagar (விருதுநகர்)": {
    emailSP: "sp.virudhunagar@tn.gov.in",
    stations: {
      "Virudhunagar Town Station (விருதுநகர் நகர்)": "sho.virudhunagartown@tncctns.gov.in",
      "Sivakasi Town Station (சிவகாசி நகர்)": "sho.sivakasitown@tncctns.gov.in",
      "Rajapalayam Town Station (ராஜபாளையம் நகர்)": "sho.rajapalayamtown@tncctns.gov.in",
      "Aruppukottai Town Station (அருப்புக்கோட்டை நகர்)": "sho.aruppukottaitown@tncctns.gov.in"
    }
  },
  "Nilgiris (நீலகிரி)": {
    emailSP: "sp.nilgiris@tn.gov.in",
    stations: {
      "Ooty Town Station (ஊட்டி நகர்)": "sho.ootytown@tncctns.gov.in",
      "Ooty Taluk Station (ஊட்டி தாலுகா)": "sho.ootytaluk@tncctns.gov.in",
      "Coonoor Town Station (குன்னூர் நகர்)": "sho.coonoortown@tncctns.gov.in",
      "Gudalur Town Station (கூடலூர் நகர்)": "sho.gudalurtown@tncctns.gov.in"
    }
  }
};

export default function ComplaintForm({
  lang,
  speakingId,
  speakingComponent,
  handleSpeak
}) {
  // District States
  const [selectedDistrict, setSelectedDistrict] = useState("Chennai (சென்னை)");
  const [customDistrict, setCustomDistrict] = useState("");
  
  // Police Station States
  const [selectedStation, setSelectedStation] = useState("E1 Mylapore Station (மயிலாப்பூர்)");
  const [customStation, setCustomStation] = useState("");

  // Email States
  const [emailId, setEmailId] = useState("sho.e1mylapore@tncctns.gov.in");

  // Personal & Incident States
  const [date, setDate] = useState(() => {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0");
    const yyyy = today.getFullYear();
    return `${yyyy}-${mm}-${dd}`;
  });
  
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [address, setAddress] = useState("");
  const [familyMember, setFamilyMember] = useState("");
  const [disabilityType, setDisabilityType] = useState("");
  const [incidentDate, setIncidentDate] = useState("");
  const [incidentPlace, setIncidentPlace] = useState("");
  const [accusedList, setAccusedList] = useState("");
  const [incidentDesc, setIncidentDesc] = useState("");
  
  const [isCopied, setIsCopied] = useState(false);

  // Auto-load matching stations and email when selected district changes
  useEffect(() => {
    if (selectedDistrict !== "other") {
      const districtData = tnPoliceDirectory[selectedDistrict];
      if (districtData) {
        const stations = Object.keys(districtData.stations);
        if (stations.length > 0) {
          const defaultStation = stations[0];
          setSelectedStation(defaultStation);
          setEmailId(districtData.stations[defaultStation]);
        }
      }
    } else {
      setSelectedStation("other");
      setEmailId("");
    }
  }, [selectedDistrict]);

  // Update email automatically when selected station changes
  useEffect(() => {
    if (selectedDistrict !== "other") {
      if (selectedStation !== "other") {
        const districtData = tnPoliceDirectory[selectedDistrict];
        if (districtData) {
          const email = districtData.stations[selectedStation];
          if (email) {
            setEmailId(email);
          }
        }
      } else {
        setEmailId("");
      }
    }
  }, [selectedStation, selectedDistrict]);

  // Set today's date on initial mount
  useEffect(() => {
    if (!incidentDate) {
      setIncidentDate(date);
    }
  }, [date]);

  // Format date from yyyy-mm-dd to dd/mm/yyyy for formal letter
  const formatDate = (dateStr) => {
    if (!dateStr) return "___ / ___ / ______";
    const parts = dateStr.split("-");
    if (parts.length === 3) {
      return `${parts[2]} / ${parts[1]} / ${parts[0]}`;
    }
    return dateStr;
  };

  // Get active District Text for Letter
  const getActiveDistrict = () => {
    if (selectedDistrict === "other") {
      return customDistrict ? customDistrict : "________________";
    }
    // Strip the Tamil script from the key name for English if needed, but display raw value for simplicity
    return selectedDistrict.split(" (")[0];
  };

  // Get active Police Station Text for Letter
  const getActiveStation = () => {
    if (selectedStation === "other") {
      return customStation ? customStation : "________________";
    }
    return selectedStation.split(" (")[0];
  };

  // Accused array
  const accusedNames = accusedList 
    ? accusedList.split(",").map(n => n.trim()).filter(n => n.length > 0)
    : [];

  // Generate formal Tamil petition text
  const generateTamilPetition = () => {
    const activeStationTxt = selectedStation === "other" ? (customStation ? customStation : "________________") : selectedStation;
    const activeDistrictTxt = selectedDistrict === "other" ? (customDistrict ? customDistrict : "________________") : selectedDistrict;
    
    return `காவல்துறையில் அளிக்க வேண்டிய புகார் மனு

மாற்றுத்திறனாளிகளுக்கு எதிரான கொடுமைகள் குறித்து

இவருக்கு,
காவல் ஆய்வாளர்,
${activeStationTxt} காவல் நிலையம்,
${activeDistrictTxt} மாவட்டம்.
${emailId ? `மின்னஞ்சல் முகவரி: ${emailId}\n` : ""}
தேதி: ${formatDate(date)}

பொருள்: மாற்றுத்திறனாளிகளுக்கு எதிரான அவமதிப்பு / தாக்குதல் / பாகுபாடு / கொடுமை தொடர்பாக மாற்றுத்திறனாளிகள் உரிமைகள் சட்டம், 2016 (Rights of Persons with Disabilities Act, 2016) கீழ் நடவடிக்கை எடுக்க கோரி புகார் மனு.

மதிப்பிற்குரிய அய்யா / அம்மா,

நான் ${name ? name : "__________________________"} (பெயர்), வயது ${age ? age : "________"}, முகவரி ${address ? address : "________________________________________________"}.

${familyMember ? `பாதிக்கப்பட்ட என் குடும்ப உறுப்பினர் ${familyMember} என்பவர்` : "நான்"} மாற்றுத்திறனாளி ஆவேன். ${familyMember ? "அவருக்கு" : "எனக்கு"} ${disabilityType ? disabilityType : "________________________________"} என்ற மாற்றுத்திறன் உள்ளது.

${formatDate(incidentDate)} அன்று, ${incidentPlace ? incidentPlace : "________________"} இடத்தில், கீழ்க்கண்ட நபர்கள் / குழுவினர்:
${accusedNames.length > 0 
  ? accusedNames.map((n, i) => `${i + 1}. ${n}`).join("\n") 
  : "1. ________________\n2. ________________"}

${familyMember ? "என் குடும்ப உறுப்பினரை" : "என்னை"} எதிர்த்து பின்வரும் வகையில் கொடுமை / அவமதிப்பு / மிரட்டல் / தாக்குதல் / பாகுபாடு செய்துள்ளனர்:

${incidentDesc ? incidentDesc : "________________________________________________________________\n________________________________________________________________"}

இந்த செயல்கள் மாற்றுத்திறனாளிகள் உரிமைகள் சட்டம், 2016-ன் கீழ் குற்றமாகும்.

தொடர்புடைய சட்டப் பிரிவுகள்:
மாற்றுத்திறனாளிகள் உரிமைகள் சட்டம், 2016 (RPwD Act, 2016)

பிரிவு 3: மாற்றுத்திறனாளிகளுக்கு சம உரிமை மற்றும் பாகுபாடு இல்லாத பாதுகாப்பு வழங்கப்பட வேண்டும்.
பிரிவு 4 மற்றும் 5: மாற்றுத்திறனாளி பெண்கள் மற்றும் குழந்தைகளுக்கு பாதுகாப்பு மற்றும் உரிமைகள் வழங்கப்பட வேண்டும்.
பிரிவு 6: மாற்றுத்திறனாளிகள் மீது கொடுமை, சுரண்டல், வன்முறை அல்லது துஷ்பிரயோகம் நடைபெறக் கூடாது.
பிரிவு 7: மாற்றுத்திறனாளிகளுக்கு எதிரான அவமதிப்பு, தாக்குதல், மனிதாபிமானமற்ற நடத்தை, மிரட்டல் ஆகியவற்றுக்கு எதிராக அரசு மற்றும் காவல்துறை பாதுகாப்பு வழங்க வேண்டும்.
பிரிவு 89: சட்ட விதிகளை மீறுபவர்களுக்கு அபராதம் மற்றும் தண்டனை வழங்கப்படும்.
பிரிவு 92: மாற்றுத்திறனாளியை அவமதித்தல், பயமுறுத்தல், பாலியல் அல்லது உடல் ரீதியான துஷ்பிரயோகம், பொதுமக்கள் முன்னிலையில் இழிவுபடுத்துதல் போன்ற செயல்களுக்கு:
- குறைந்தபட்சம் 6 மாதங்கள் முதல் அதிகபட்சம் 5 ஆண்டுகள் வரை சிறைத் தண்டனை,
- மற்றும் அபராதம் விதிக்கப்படும்.

மேற்கண்ட சம்பவம் குறித்து உரிய FIR பதிவு செய்து, குற்றவாளிகள் மீது இந்திய தண்டனைச் சட்டம் மற்றும் மாற்றுத்திறனாளிகள் உரிமைகள் சட்டம், 2016-ன் பொருத்தமான பிரிவுகளின் கீழ் உடனடி நடவடிக்கை எடுக்குமாறு கேட்டுக்கொள்கிறேன்.

மேலும், எனக்கும் / பாதிக்கப்பட்டவருக்கும் பாதுகாப்பு வழங்குமாறும் பணிவுடன் கேட்டுக்கொள்கிறேன்.

நன்றி.

இப்படிக்கு,

கையொப்பம்: ____________________
பெயர்: ${name ? name : "_______________________"}
தொலைபேசி எண்: __________________

இணைப்புகள்:
1. UDID Card
2. மருத்துவ சான்று
3. புகைப்படம் / வீடியோ / ஆடியோ ஆதாரங்கள் (இருந்தால்)
4. சாட்சி விவரங்கள்
5. பிற ஆவணங்கள்`;
  };

  // Formal English version for bilingual users
  const generateEnglishPetition = () => {
    const activeStationTxt = selectedStation === "other" ? (customStation ? customStation : "________________") : selectedStation;
    const activeDistrictTxt = selectedDistrict === "other" ? (customDistrict ? customDistrict : "________________") : selectedDistrict;

    return `FORMAL POLICE COMPLAINT PETITION

Regarding Atrocities and Cruelty against Persons with Disabilities

To,
The Inspector of Police,
${activeStationTxt} Police Station,
${activeDistrictTxt} District.
${emailId ? `Station Email ID: ${emailId}\n` : ""}
Date: ${formatDate(date)}

Subject: Request for immediate action under the Rights of Persons with Disabilities Act, 2016 for atrocity, insult, discrimination, and cruelty committed against a person with disability.

Respected Sir / Madam,

I, ${name ? name : "__________________________"} (Name), aged ${age ? age : "________"} years, residing at ${address ? address : "________________________________________________"}.

${familyMember ? `My family member ${familyMember}` : "I"} am a person with disability, diagnosed with ${disabilityType ? disabilityType : "________________________________"}.

On ${formatDate(incidentDate)}, at ${incidentPlace ? incidentPlace : "________________"}, the following accused persons/group:
${accusedNames.length > 0 
  ? accusedNames.map((n, i) => `${i + 1}. ${n}`).join("\n") 
  : "1. ________________\n2. ________________"}

committed acts of cruelty, insult, intimidation, assault, and discrimination against ${familyMember ? "my family member" : "me"} as described below:

${incidentDesc ? incidentDesc : "________________________________________________________________\n________________________________________________________________"}

These actions constitute severe offences under the Rights of Persons with Disabilities Act, 2016.

Relevant Legal Sections:
Rights of Persons with Disabilities Act, 2016 (RPwD Act, 2016)

Section 3: Mandatory right to equality and non-discrimination.
Section 4 & 5: Enhanced protection for women and children with disabilities.
Section 6: Absolute protection from cruelty and inhuman treatment.
Section 7: Mandated protection from abuse, violence, and exploitation.
Section 89: Penalty for contravention of provisions of the Act.
Section 92: Punishment for atrocities, insults, public humiliation, or sexual/physical abuse:
- Imprisonment for a term not less than 6 months which may extend to 5 years,
- and fine.

Therefore, I request you to register a formal First Information Report (FIR) under the appropriate sections of the Bharatiya Nyaya Sanhita (BNS/IPC) and the Rights of Persons with Disabilities Act, 2016, and initiate immediate legal action against the accused.

I also request you to provide adequate safety and protection to the victim.

Thanking you.

Yours faithfully,

Signature: ____________________
Name: ${name ? name : "_______________________"}
Contact Number: __________________

Enclosures:
1. UDID Card
2. Medical Certificate
3. Photo / Video / Audio evidence (if any)
4. List of Witnesses
5. Other supporting documents`;
  };

  const handleCopyText = () => {
    const text = generateTamilPetition();
    navigator.clipboard.writeText(text);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  const handleSendEmail = () => {
    if (!emailId) {
      alert(lang === "en" ? "Please enter a valid station email address first." : "தயவுசெய்து காவல் நிலைய மின்னஞ்சல் முகவரியைப் பதிவு செய்யவும்.");
      return;
    }
    const subject = `COMPLAINT PETITION UNDER RPwD ACT, 2016 - ${name ? name : "Person with Disability"}`;
    const body = generateTamilPetition();
    
    // Launch mail client via mailto
    const mailtoUrl = `mailto:${emailId}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;
  };

  const activeTamilText = generateTamilPetition();
  const activeEnglishText = generateEnglishPetition();
  const isSpeaking = speakingId === "complaint-form-id" && speakingComponent === "complaint";

  const handleSpeech = () => {
    handleSpeak(
      "complaint-form-id",
      "complaint",
      [
        "Police Complaint Petition regarding atrocities against disabled citizens.",
        activeEnglishText.replace(/_+/g, "blank line")
      ],
      [
        "காவல்துறையில் அளிக்க வேண்டிய புகார் மனு.",
        activeTamilText.replace(/_+/g, "கோடிட்ட இடம்")
      ]
    );
  };

  return (
    <div className="wizard-container" style={{ padding: "28px" }}>
      <div className="wizard-header" style={{ marginBottom: "24px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <span style={{ fontSize: "2.2rem" }}>⚖️</span>
          <div>
            <h2 style={{ fontFamily: "var(--font-display)", fontWeight: "800", color: "var(--text-primary)" }}>
              {lang === "en" ? "Police Complaint Form Generator" : "காவல் புகார் மனு தயாரிப்பான்"}
            </h2>
            <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", marginTop: "4px" }}>
              {lang === "en" 
                ? "Generate a ready-to-submit formal police petition for atrocities, abuse, or discrimination under the RPwD Act, 2016." 
                : "மாற்றுத்திறனாளிகளுக்கு எதிரான அவமதிப்பு, தாக்குதல் அல்லது வன்கொடுமைகளுக்கு எதிராக காவல் நிலைய மின்னஞ்சலுக்கு அனுப்பவும், அச்சிடவும் புகார் மனுவை எளிதாக உருவாக்குங்கள்."}
            </p>
          </div>
        </div>
      </div>

      <div className="complaint-grid" style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: "28px" }}>
        {/* Input Form Column */}
        <div className="step-card" style={{ padding: "24px", display: "flex", flexDirection: "column", gap: "16px", background: "var(--bg-secondary)", border: "1px solid var(--border-color)", borderRadius: "16px" }}>
          <h3 style={{ fontFamily: "var(--font-display)", color: "var(--accent-blue)", fontSize: "1.1rem", borderBottom: "1px solid var(--border-color)", paddingBottom: "8px" }}>
            📝 {lang === "en" ? "Fill Incident & Personal Details" : "விவரங்களைப் பதிவு செய்யவும்"}
          </h3>

          {/* District & Station Selector Dropdowns */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
            <div className="input-group">
              <label className="form-label">{lang === "en" ? "District" : "மாவட்டம்"}</label>
              <select 
                className="search-input" 
                style={{ width: "100%", padding: "10px", borderRadius: "8px", background: "var(--bg-primary)", color: "var(--text-primary)", border: "1px solid var(--border-color)" }}
                value={selectedDistrict}
                onChange={(e) => setSelectedDistrict(e.target.value)}
              >
                {Object.keys(tnPoliceDirectory).map((dist) => (
                  <option key={dist} value={dist}>{dist}</option>
                ))}
                <option value="other">{lang === "en" ? "Other District / வேறு..." : "வேறு மாவட்டம்..."}</option>
              </select>
            </div>

            <div className="input-group">
              <label className="form-label">{lang === "en" ? "Police Station" : "காவல் நிலையம்"}</label>
              <select 
                className="search-input" 
                style={{ width: "100%", padding: "10px", borderRadius: "8px", background: "var(--bg-primary)", color: "var(--text-primary)", border: "1px solid var(--border-color)" }}
                value={selectedStation}
                onChange={(e) => setSelectedStation(e.target.value)}
                disabled={selectedDistrict === "other"}
              >
                {selectedDistrict !== "other" && tnPoliceDirectory[selectedDistrict] ? (
                  <>
                    {Object.keys(tnPoliceDirectory[selectedDistrict].stations).map((station) => (
                      <option key={station} value={station}>{station}</option>
                    ))}
                    <option value="other">{lang === "en" ? "Other Station / வேறு..." : "வேறு காவல் நிலையம்..."}</option>
                  </>
                ) : (
                  <option value="other">{lang === "en" ? "Type Manually / கைமுறையாக..." : "கைமுறையாக எழுதவும்..."}</option>
                )}
              </select>
            </div>
          </div>

          {/* Manual Input Fields - shown if 'other' is selected */}
          {(selectedDistrict === "other" || selectedStation === "other") && (
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", background: "var(--bg-primary)", padding: "12px", borderRadius: "8px", border: "1px dashed var(--border-color)" }}>
              {selectedDistrict === "other" && (
                <div className="input-group">
                  <label className="form-label" style={{ fontSize: "0.8rem", color: "var(--accent-blue)" }}>
                    {lang === "en" ? "Type Custom District" : "மாவட்டத்தின் பெயர்"}
                  </label>
                  <input 
                    type="text" 
                    className="search-input" 
                    style={{ width: "100%", padding: "10px" }}
                    value={customDistrict}
                    onChange={(e) => setCustomDistrict(e.target.value)}
                    placeholder="எ.கா: சென்னை / E.g. Chennai"
                  />
                </div>
              )}
              {selectedStation === "other" && (
                <div className="input-group">
                  <label className="form-label" style={{ fontSize: "0.8rem", color: "var(--accent-blue)" }}>
                    {lang === "en" ? "Type Custom Police Station" : "காவல் நிலையத்தின் பெயர்"}
                  </label>
                  <input 
                    type="text" 
                    className="search-input" 
                    style={{ width: "100%", padding: "10px" }}
                    value={customStation}
                    onChange={(e) => setCustomStation(e.target.value)}
                    placeholder="எ.கா: மதுரை வடக்கு / E.g. Madurai North"
                  />
                </div>
              )}
            </div>
          )}

          {/* Email ID Section */}
          <div className="input-group" style={{ background: "rgba(37, 99, 235, 0.04)", padding: "12px", borderRadius: "8px", border: "1px solid rgba(37, 99, 235, 0.15)" }}>
            <label className="form-label" style={{ fontWeight: "700", display: "flex", justifyContent: "space-between" }}>
              <span>📧 {lang === "en" ? "Station Official Email Address" : "காவல் நிலைய மின்னஞ்சல் முகவரி"}</span>
              {selectedStation === "other" && (
                <span style={{ fontSize: "0.75rem", color: "var(--text-secondary)", fontWeight: "normal" }}>
                  ({lang === "en" ? "Edit manually below" : "கைமுறையாக மாற்றலாம்"})
                </span>
              )}
            </label>
            <input 
              type="email" 
              className="search-input" 
              style={{ width: "100%", padding: "10px", marginTop: "4px", background: selectedStation === "other" ? "var(--bg-primary)" : "var(--bg-secondary)", border: "1px solid var(--border-color)" }}
              value={emailId}
              onChange={(e) => setEmailId(e.target.value)}
              readOnly={selectedStation !== "other"}
              placeholder="sho.[stationname]@tncctns.gov.in"
            />
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: "12px" }}>
            <div className="input-group">
              <label className="form-label">{lang === "en" ? "Complainant Name" : "புகார் அளிப்பவர் பெயர்"}</label>
              <input 
                type="text" 
                className="search-input" 
                style={{ width: "100%", padding: "10px" }}
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="திரு/திருமதி/செல்வி..."
              />
            </div>
            <div className="input-group">
              <label className="form-label">{lang === "en" ? "Age" : "வயது"}</label>
              <input 
                type="number" 
                className="search-input" 
                style={{ width: "100%", padding: "10px" }}
                value={age}
                onChange={(e) => setAge(e.target.value)}
                placeholder="Age"
              />
            </div>
          </div>

          <div className="input-group">
            <label className="form-label">{lang === "en" ? "Full Residential Address" : "முகவரி (முழுமையான கதவு எண்ணுடன்)"}</label>
            <textarea 
              className="search-input" 
              style={{ width: "100%", padding: "10px", height: "60px", resize: "none" }}
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="தற்போதைய வீட்டு முகவரி"
            />
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
            <div className="input-group">
              <label className="form-label">{lang === "en" ? "Disability Category" : "மாற்றுத்திறன் வகை"}</label>
              <input 
                type="text" 
                className="search-input" 
                style={{ width: "100%", padding: "10px" }}
                value={disabilityType}
                onChange={(e) => setDisabilityType(e.target.value)}
                placeholder="எ.கா: பார்வையின்மை / locomotor"
              />
            </div>
            <div className="input-group">
              <label className="form-label">{lang === "en" ? "Victim's Name (if family member)" : "பாதிக்கப்பட்ட உறவினர் பெயர் (இருப்பின்)"}</label>
              <input 
                type="text" 
                className="search-input" 
                style={{ width: "100%", padding: "10px" }}
                value={familyMember}
                onChange={(e) => setFamilyMember(e.target.value)}
                placeholder="உங்களுக்குப் பதில் உறவினர் பாதிக்கப்பட்டால்"
              />
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
            <div className="input-group">
              <label className="form-label">{lang === "en" ? "Date of Incident" : "சம்பவ தேதி"}</label>
              <input 
                type="date" 
                className="search-input" 
                style={{ width: "100%", padding: "10px" }}
                value={incidentDate}
                onChange={(e) => setIncidentDate(e.target.value)}
              />
            </div>
            <div className="input-group">
              <label className="form-label">{lang === "en" ? "Place of Incident" : "சம்பவம் நடந்த இடம்"}</label>
              <input 
                type="text" 
                className="search-input" 
                style={{ width: "100%", padding: "10px" }}
                value={incidentPlace}
                onChange={(e) => setIncidentPlace(e.target.value)}
                placeholder="ஊர், தெரு, அல்லது அலுவலகம்"
              />
            </div>
          </div>

          <div className="input-group">
            <label className="form-label">{lang === "en" ? "Accused Names (comma-separated)" : "குற்றவாளிகளின் பெயர்கள் (காற்புள்ளி கொண்டு பிரிக்கவும்)"}</label>
            <input 
              type="text" 
              className="search-input" 
              style={{ width: "100%", padding: "10px" }}
              value={accusedList}
              onChange={(e) => setAccusedList(e.target.value)}
              placeholder="எ.கா: குமார், செல்வம்"
            />
          </div>

          <div className="input-group">
            <label className="form-label">
              {lang === "en" 
                ? "Brief Description of Cruelty / Abuse / Assault" 
                : "கொடுமை / அவமதிப்பு / தாக்குதல் குறித்த சம்பவத்தின் சுருக்கம்"}
            </label>
            <textarea 
              className="search-input" 
              style={{ width: "100%", padding: "10px", height: "80px", resize: "vertical" }}
              value={incidentDesc}
              onChange={(e) => setIncidentDesc(e.target.value)}
              placeholder="குற்றவாளிகள் உங்களை எவ்வாறு இழிவுபடுத்தினர் அல்லது தாக்கினர் என்ற விவரங்களை விரிவாக எழுதவும்..."
            />
          </div>

          <div className="penalty-box" style={{ marginTop: "8px", background: "rgba(239, 68, 68, 0.08)", borderColor: "var(--accent-red)" }}>
            <span style={{ fontSize: "0.85rem", display: "flex", gap: "8px", alignItems: "flex-start", color: "var(--accent-red)" }}>
              ⚠️ <strong>{lang === "en" ? "Legal Notice" : "சட்ட எச்சரிக்கை"}:</strong> 
              {lang === "en"
                ? "Atrocities against disabled citizens in public view constitute non-bailable criminal offences under Section 92, carrying up to 5 years in prison."
                : "பொதுமக்கள் முன்னிலையில் மாற்றுத்திறனாளிகளை அவமதித்தல் அல்லது தாக்குதல் செய்வது பிரிவு 92-ன் படி ஜாமீனில் வெளிவர முடியாத குற்றமாகும். இதற்கு 5 ஆண்டுகள் வரை சிறைத்தண்டனை விதிக்கப்படும்."}
            </span>
          </div>
        </div>

        {/* Live Preview Column */}
        <div className="preview-container" style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {/* Preview Action Header */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <h3 style={{ fontFamily: "var(--font-display)", fontWeight: "700", fontSize: "1rem" }}>
              📄 {lang === "en" ? "Live Petition Preview (Tamil)" : "புகார் மனு முன்னோட்டம்"}
            </h3>
            <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
              {/* TTS Audio button */}
              <button 
                onClick={handleSpeech}
                className={`action-btn ${isSpeaking ? "active" : ""}`}
                title={lang === "en" ? "Read generated petition" : "மனுவை வாசித்துக் காட்டு"}
                style={{ width: "40px", height: "40px", borderRadius: "50%" }}
              >
                {isSpeaking ? "⏹️" : "🔊"}
              </button>

              {/* Email Trigger button */}
              <button 
                onClick={handleSendEmail} 
                className="bookmark-btn" 
                style={{ 
                  background: "#2563eb",
                  color: "#fff",
                  border: "none",
                  padding: "8px 14px",
                  borderRadius: "20px",
                  cursor: "pointer",
                  fontSize: "0.85rem",
                  fontWeight: "bold",
                  display: "flex",
                  alignItems: "center",
                  gap: "6px"
                }}
              >
                📧 Email
              </button>

              <button 
                onClick={handleCopyText} 
                className="bookmark-btn" 
                style={{ 
                  background: isCopied ? "var(--accent-green)" : "var(--accent-blue)",
                  color: "#fff",
                  border: "none",
                  padding: "8px 14px",
                  borderRadius: "20px",
                  cursor: "pointer",
                  fontSize: "0.85rem",
                  fontWeight: "bold",
                  transition: "all 0.2s"
                }}
              >
                {isCopied ? "✓ Copied" : "📋 Copy"}
              </button>
              
              <button 
                onClick={handlePrint} 
                className="bookmark-btn" 
                style={{ 
                  background: "transparent",
                  color: "var(--text-primary)",
                  border: "1px solid var(--border-color)",
                  padding: "8px 14px",
                  borderRadius: "20px",
                  cursor: "pointer",
                  fontSize: "0.85rem",
                  fontWeight: "bold"
                }}
              >
                🖨️ Print / PDF
              </button>
            </div>
          </div>

          {/* Interactive Formal Sheet */}
          <div 
            id="printable-petition-sheet"
            className="article-card" 
            style={{ 
              padding: "40px 32px", 
              background: "var(--bg-cream)", 
              border: "2px solid #ddd", 
              boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
              color: "#1f2937", // Set dark text explicitly for official letter contrast
              fontSize: "0.9rem",
              lineHeight: "1.8",
              fontFamily: "var(--font-sans)",
              maxHeight: "680px",
              overflowY: "auto",
              borderRadius: "8px"
            }}
          >
            <div style={{ textAlign: "center", borderBottom: "2px double #888", paddingBottom: "16px", marginBottom: "24px" }}>
              <h1 style={{ fontSize: "1.3rem", fontWeight: "800", color: "#111827", margin: 0, textTransform: "uppercase", letterSpacing: "1px" }}>
                காவல்துறையில் அளிக்க வேண்டிய புகார் மனு
              </h1>
              <p style={{ fontSize: "0.85rem", color: "#4b5563", marginTop: "4px", fontWeight: "600" }}>
                மாற்றுத்திறனாளிகளுக்கு எதிரான கொடுமைகள் குறித்து
              </p>
            </div>

            <div>
              <strong>இவருக்கு,</strong><br />
              அய்யா / அம்மா,<br />
              காவல் ஆய்வாளர்,<br />
              <span style={{ fontWeight: "bold" }}>
                {getActiveStation()}
              </span> காவல் நிலையம்,<br />
              <span style={{ fontWeight: "bold" }}>
                {getActiveDistrict()}
              </span> மாவட்டம்.<br />
              {emailId && (
                <span style={{ fontSize: "0.85rem", color: "#4b5563" }}>
                  <strong>மின்னஞ்சல் முகவரி:</strong> {emailId}<br />
                </span>
              )}
              <br />
              
              <div style={{ textAlign: "right", marginBottom: "16px" }}>
                <strong>தேதி:</strong> {formatDate(date)}
              </div>

              <div style={{ background: "#f3f4f6", padding: "12px 16px", borderRadius: "6px", marginBottom: "20px", borderLeft: "4px solid #4b5563" }}>
                <strong>பொருள்:</strong> மாற்றுத்திறனாளிகளுக்கு எதிரான அவமதிப்பு / தாக்குதல் / பாகுபாடு / கொடுமை தொடர்பாக மாற்றுத்திறனாளிகள் உரிமைகள் சட்டம், 2016 (Rights of Persons with Disabilities Act, 2016) கீழ் நடவடிக்கை எடுக்க கோரி புகார் மனு.
              </div>

              <strong>மதிப்பிற்குரிய அய்யா / அம்மா,</strong><br /><br />
              
              <p style={{ textIndent: "40px", margin: "0 0 12px" }}>
                நான் <span style={{ color: name ? "inherit" : "#ef4444", fontWeight: name ? "bold" : "normal" }}>{name ? name : "__________________________"}</span> (பெயர்), வயது <span style={{ color: age ? "inherit" : "#ef4444", fontWeight: age ? "bold" : "normal" }}>{age ? age : "________"}</span>, முகவரி <span style={{ color: address ? "inherit" : "#ef4444", fontWeight: address ? "bold" : "normal" }}>{address ? address : "________________________________________________"}</span>.
              </p>

              <p style={{ textIndent: "40px", margin: "0 0 12px" }}>
                {familyMember ? (
                  <>பாதிக்கப்பட்ட என் குடும்ப உறுப்பினர் <span style={{ fontWeight: "bold" }}>{familyMember}</span> என்பவர் மாற்றுத்திறனாளி ஆவார். அவருக்கு </>
                ) : (
                  <>நான் மாற்றுத்திறனாளி ஆவேன். எனக்கு </>
                )}
                <span style={{ color: disabilityType ? "inherit" : "#ef4444", fontWeight: disabilityType ? "bold" : "normal" }}>
                  {disabilityType ? disabilityType : "________________________________"}
                </span> என்ற மாற்றுத்திறன் உள்ளது.
              </p>

              <p style={{ textIndent: "40px", margin: "0 0 12px" }}>
                <span style={{ fontWeight: "bold" }}>{formatDate(incidentDate)}</span> அன்று, <span style={{ color: incidentPlace ? "inherit" : "#ef4444", fontWeight: incidentPlace ? "bold" : "normal" }}>{incidentPlace ? incidentPlace : "________________"}</span> இடத்தில், கீழ்க்கண்ட நபர்கள் / குழுவினர்:
              </p>

              <ol style={{ margin: "0 0 16px 40px", padding: 0 }}>
                {accusedNames.length > 0 ? (
                  accusedNames.map((n, i) => (
                    <li key={i} style={{ fontWeight: "bold" }}>{n}</li>
                  ))
                ) : (
                  <>
                    <li style={{ color: "#ef4444" }}>________________</li>
                    <li style={{ color: "#ef4444" }}>________________</li>
                  </>
                )}
              </ol>

              <p style={{ margin: "0 0 12px" }}>
                {familyMember ? "என் குடும்ப உறுப்பினரை" : "என்னை"} எதிர்த்து பின்வரும் வகையில் கொடுமை / அவமதிப்பு / மிரட்டல் / தாக்குதல் / பாகுபாடு செய்துள்ளனர்:
              </p>

              <div style={{ border: "1px dashed #ccc", padding: "12px 16px", borderRadius: "6px", background: "#fcfaf2", color: incidentDesc ? "inherit" : "#9ca3af", fontStyle: incidentDesc ? "normal" : "italic", margin: "0 0 16px" }}>
                {incidentDesc ? incidentDesc : "இங்கு உங்களுக்கான சம்பவ விவரம் தானாகப் பதியும்..."}
              </div>

              <p style={{ margin: "0 0 16px" }}>
                இந்த செயல்கள் மாற்றுத்திறனாளிகள் உரிமைகள் சட்டம், 2016-ன் கீழ் குற்றமாகும்.
              </p>

              <div style={{ border: "1px solid #ddd", borderRadius: "6px", padding: "16px", background: "#fff", marginBottom: "20px" }}>
                <strong style={{ display: "block", color: "#111827", borderBottom: "1px solid #eee", paddingBottom: "6px", marginBottom: "10px" }}>
                  ⚖️ தொடர்புடைய சட்டப் பிரிவுகள் (RPwD Act, 2016)
                </strong>
                <ul style={{ margin: 0, paddingLeft: "20px", display: "flex", flexDirection: "column", gap: "6px", fontSize: "0.85rem", color: "#374151" }}>
                  <li><strong>பிரிவு 3:</strong> மாற்றுத்திறனாளிகளுக்கு சம உரிமை மற்றும் பாகுபாடு இல்லாத பாதுகாப்பு வழங்கப்பட வேண்டும்.</li>
                  <li><strong>பிரிவு 4 மற்றும் 5:</strong> மாற்றுத்திறனாளி பெண்கள் மற்றும் குழந்தைகளுக்கு பாதுகாப்பு மற்றும் உரிமைகள் வழங்கப்பட வேண்டும்.</li>
                  <li><strong>பிரிவு 6:</strong> மாற்றுத்திறனாளிகள் மீது கொடுமை, சுரண்டல், வன்முறை அல்லது துஷ்பிரயோகம் நடைபெறக் கூடாது.</li>
                  <li><strong>பிரிவு 7:</strong> மாற்றுத்திறனாளிகளுக்கு எதிரான அவமதிப்பு, தாக்குதல், மனிதாபிமானமற்ற நடைபாதை, மிரட்டல் ஆகியவற்றுக்கு எதிராக அரசு மற்றும் காவல்துறை பாதுகாப்பு வழங்க வேண்டும்.</li>
                  <li><strong>பிரிவு 89:</strong> சட்ட விதிகளை மீறுபவர்களுக்கு அபராதம் மற்றும் தண்டனை வழங்கப்படும்.</li>
                  <li>
                    <strong>பிரிவு 92:</strong> மாற்றுத்திறனாளியை அவமதித்தல், பயமுறுத்தல், பாலியல்/உடல் ரீதியான துஷ்பிரயோகம், பொதுமக்கள் முன்னிலையில் இழிவுபடுத்துதல் போன்ற செயல்களுக்கு:
                    <ul style={{ margin: "4px 0 0", paddingLeft: "15px" }}>
                      <li>குறைந்தபட்சம் 6 மாதங்கள் முதல் அதிகபட்சம் 5 ஆண்டுகள் வரை சிறைத் தண்டனை,</li>
                      <li>மற்றும் அபராதம் விதிக்கப்படும்.</li>
                    </ul>
                  </li>
                </ul>
              </div>

              <p style={{ textIndent: "40px", margin: "0 0 12px" }}>
                மேற்கண்ட சம்பவம் குறித்து உரிய FIR பதிவு செய்து, குற்றவாளிகள் மீது இந்திய தண்டனைச் சட்டம் மற்றும் மாற்றுத்திறனாளிகள் உரிமைகள் சட்டம், 2016-ன் பொருத்தமான பிரிவுகளின் கீழ் உடனடி நடவடிக்கை எடுக்குமாறு கேட்டுக்கொள்கிறேன்.
              </p>

              <p style={{ textIndent: "40px", margin: "0 0 24px" }}>
                மேலும், எனக்கும் / பாதிக்கப்பட்டவருக்கும் பாதுகாப்பு வழங்குமாறும் பணிவுடன் கேட்டுக்கொள்கிறேன்.
              </p>

              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginTop: "40px" }}>
                <div>
                  <strong>இணைப்புகள்:</strong>
                  <ol style={{ margin: "4px 0 0", paddingLeft: "20px", fontSize: "0.8rem", color: "#4b5563" }}>
                    <li>UDID Card</li>
                    <li>மருத்துவ சான்று</li>
                    <li>ஆதாரங்கள் (புகைப்படம் / வீடியோ / ஆடியோ - இருப்பின்)</li>
                    <li>சாட்சி விவரங்கள்</li>
                    <li>பிற ஆவணங்கள்</li>
                  </ol>
                </div>
                <div style={{ textAlign: "right" }}>
                  <p style={{ marginBottom: "40px" }}>நன்றி.</p>
                  <p>இப்படிக்கு,</p>
                  <p style={{ marginTop: "24px" }}>கையொப்பம்: ____________________</p>
                  <p>பெயர்: <span style={{ fontWeight: "bold" }}>{name ? name : "_______________________"}</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
