const diseases = [
  {
    name: "Anthrax",
    description:
      "Anhrax, a highly infectious and fatal disease of cattle, is caused by a relatively large spore-forming rectangular shaped bacterium called Bacillus anthracis. Anthrax causes acute mortality in ruminants. The bacteria produce extremely potent toxins which are responsible for the ill effects, causing a high mortality rate. Signs of the illness usually appear 3 to 7 days after the spores are swallowed or inhaled. Once signs begin in animals, they usually die within two days.",
    Caused Animals: ["Deer, Cattle, Goats, and Sheep"],
    solution:
      "Due to the acute nature of the disease resulting in sudden death, treatment is usually not possible in animals even though Anthrax bacilli are clines. Treatment is of use in cases showing sub-acute form of the disease.",
  },
  {
    name: "Black Quarter",
    description:
      "It is an acute infectious and highly fatal, bacterial disease of cattle. Buffaloes, sheep and goats are also affected. Young cattle between 6-24 months of age, in good body condition are mostly affected. It is soil-borne infection which generally occurs during rainy season. In India, the disease is sporadic (1-2 animal) in nature.",
    Caused Animals: ["Buffaloes, Sheep and Goats"],
    solution:
      "Early treatment can be possible to complete cure of the animal.
Consult with veterinarian immediately",
  },
  {
    name: "Foot and mouth disease",
    description:
      "The foot-and-mouth disease is a highly communicable disease affecting cloven-footed animals. It is characterized by fever, formation of vesicles and blisters in the mouth, udder, teats and on the skin between the toes and above the hoofs. Animals recovered from the disease present a characteristically rough coat and deformation of the hoof  In India, the disease is widespread and assumes a position of importance in livestock industr.",
    Caused Animals: ["Cattles"],
    solution: "the external application of antiseptics contributes to the healing of the ulcers and wards off attacks by flies.
a common and inexpensive dressing for the lesions in the feet is a mixture of coal-tar and copper sulphate in the proportion of 5:1",
  },
  {
    name: "Blue tongue",
    description:
      "Bluetongue, a disease which is transmitted by midges, infects domestic and wild ruminants and also camelids, however sheep are particularly badly affected. Cattle, although infected more frequently than sheep, do not always show signs of disease. Virus spreads between animals occurs via the midges of Cullicoides species. ",
    Caused Animals: ["Sheep"],
    solution:
      "Since the animal is not taking any feed the starvation may lead to death. So the animal has to be administered orally the following food. Banana fruits (one) smeared with sesame oil (50 ml) for 2 to 3 times. By this animal will recover little. However, this will not control the disease fully. Next the leaf pulp of sothukathalai (Aloe vera) has to be administered daily.",
  },
  {
    name: "Pox",
    description:
      " sheep-pox is a highly contagious disease. It causes a mortality of 20 to 50 per cent in animals below the age of 6 months, and causes damage to the wool and skin in adults. Of the pock diseases, sheep-pox ranks only second to human small-pox in virulence. The disease is transmissible to in-contact goats but not to other species of animals. It, however, spreads slowly.",
    Caused Animals: ["Sheep"],
    solution:
      " The diseased animal should be treated with palliatives. In the young ones nursing is more important than medication. The infected litter should be burnt and the bedding changed every day. Affected animals should be kept on soft diet. The ulcers on the skin should be washed with potassium permanganate lotion and dusted with boric acid; strict hygienic measures should be adopted.",
  },
  {
    name: "Listeriosis",
    description:
      " The organisms are excreted in the faeces, urine, aborted foetuses, uterine discharge and milk of infected animals. The organisms are sufficiently resistant to remain viable in animal and human faeces, sewage, soil, silage and dust foe several weeks and months. The blood sucking arthropods may spread infection since organisms have been isolated from cattle ticks and tabanid flies. Under natural conditions certain predisposing factors are related to clinical infection. ",
    Caused Animals: ["Cattle"],
    solution:
      "Tetracyclines are very effective in meningo-encephalities of cattle less so in sheep. The recovery rate depends on the speed with which the treatment is commenced. ",
  },
  {
    name: "Campylobactor abortion (Vibriosis)",
    description:
      "Transmission occurs by coitus. The affected bulls carry the organisms in preputial cavity indefinitely. Mature cows and heifers also carry the infection for long periods. Infected semen from an infected bull is the important means of the disease. The organism survives low temperature used in semen storage. ",
    Symptoms: ["infertility may cause become apparent only when the percentage of pregnancies in a dairy herd is low. The infertility rate in heifers is more than in cows. Abortions usually occur between fifth and sixth month of pregnancy. Infected bulls show no symptoms and their semen is normal"],
    solution:
      "abortion rate can be reduced by antibiotic therapy, and particularly by using chlortetracycline and concurrently with the development of specific immunity. The use of killed vaccines may reduce the incidence of disease in a herd but does not eradicate the infection. The bulls can be treated by injecting antibiotic cream in the prepuce. There is no direct treatment of females.",
  },
  {
    name: "Johne`s disease",
    description:
      "Johne`s disease is a specific chronic contagious enteritis of cattle, sheep, goat, buffaloes and occasionally of pigs. The disease is characterized by progressive emaciation and in cattle and buffaloes by chronic diarrhea and thickening of the intestine.",
    Caused Anumals: ["Corn"],
    solution:
      "Stewart's wilt is controlled effectively by planting resistant corn hybrids. Resistance restricts the movement of Erwinia stewartii in the vascular system of plants and prevents plants from becoming infected systemically.",
  }"the organisms is more resistant to chemotherapeutic agents invitro than mycotuberculosis. Because of this the practical utility of treatment in clinical cases is poor."
];

const diseasesTamil = [
  {
    name: "ஆந்த்ராக்ஸ்",
    description:
       "அன்ராக்ஸ், கால்நடைகளின் மிகவும் தொற்று மற்றும் ஆபத்தான நோயாகும், இது பாசிலஸ் ஆந்த்ராசிஸ் எனப்படும் ஒப்பீட்டளவில் பெரிய வித்துகளை உருவாக்கும் செவ்வக வடிவ பாக்டீரியாவால் ஏற்படுகிறது. ஆந்த்ராக்ஸ் ரூமினன்ட்களில் கடுமையான மரணத்தை ஏற்படுத்துகிறது. பாக்டீரியா மிகவும் சக்திவாய்ந்த நச்சுகளை உருவாக்குகிறது, அவை மோசமான விளைவுகளுக்கு காரணமாகின்றன, இதனால் அதிக இறப்பு விகிதம் ஏற்படுகிறது. வித்திகளை விழுங்கிய அல்லது உள்ளிழுத்த 3 முதல் 7 நாட்களுக்குப் பிறகு நோயின் அறிகுறிகள் பொதுவாக தோன்றும். விலங்குகளில் அறிகுறிகள் தோன்றியவுடன், அவை பொதுவாக இரண்டு நாட்களுக்குள் இறந்துவிடுகின்றன."
          crops: ["மான், கால்நடை, ஆடுகள் மற்றும் செம்மறி ஆடுகள்"],
    solution: "திடீரென்று மரணம் விளைவிக்கும் நோயின் கடுமையான தன்மை காரணமாக, ஆந்த்ராக்ஸ் பேசில்லி கிளையினமாக இருந்தாலும், பொதுவாக விலங்குகளில் சிகிச்சை சாத்தியமில்லை. நோயின் துணை-கடுமையான வடிவத்தைக் காட்டும் சந்தர்ப்பங்களில் சிகிச்சை பயன்படுத்தப்படுகிறது.",
  },
  {
    name: "கருப்பு காலாண்டு",
    description:
"இது ஒரு கடுமையான தொற்று மற்றும் மிகவும் ஆபத்தானது, கால்நடைகளின் பாக்டீரியா நோயாகும். எருமைகள், செம்மறி ஆடுகள் மற்றும் ஆடுகளும் பாதிக்கப்படுகின்றன. 6-24 மாதங்களுக்கு இடைப்பட்ட இளம் கால்நடைகள், நல்ல உடல் நிலையில் பெரும்பாலும் பாதிக்கப்படுகின்றன. இது பொதுவாக மண்ணில் பரவும் தொற்று ஆகும். மழைக்காலத்தில் ஏற்படும்.இந்தியாவில் இந்த நோய் இயற்கையில் அவ்வப்போது (1-2 விலங்குகள்) காணப்படும்.",    crops: [],
    solution: "",
  },
  {
    name: "கால் மற்றும் வாய் நோய்",
    description:
"கால் மற்றும் வாய் நோயானது பிளவுபட்ட கால் விலங்குகளைப் பாதிக்கும் ஒரு தொற்று நோயாகும். இது காய்ச்சல், வாய், மடி, முலைகள் மற்றும் கால்விரல்களுக்கு இடையில் மற்றும் குளம்புகளுக்கு மேல் தோலில் கொப்புளங்கள் மற்றும் கொப்புளங்கள் ஆகியவற்றால் வகைப்படுத்தப்படுகிறது. விலங்குகள். நோயிலிருந்து மீண்டால், இந்தியாவில், இந்நோய் பரவலானது மற்றும் கால்நடைத் தொழிலில் முக்கிய இடத்தைப் பெறுகிறது.",    crops: [],
    solution: "",
  },
  {
    name:"நீல நாக்கு",
    description:
"புளூடோங்கு, நாட்டுப்புற மற்றும் காட்டு ருமினன்ட்கள் மற்றும் ஒட்டகங்களால் பரவும் ஒரு நோயாகும், இருப்பினும் செம்மறி ஆடுகள் குறிப்பாக மோசமாக பாதிக்கப்படுகின்றன. ஆடுகளை விட கால்நடைகள், எப்போதும் நோயின் அறிகுறிகளைக் காட்டாது. விலங்குகளுக்கு இடையே வைரஸ் பரவுகிறது. குல்லிகாய்ட்ஸ் இனங்களின் நடுப்பகுதிகள்.",    crops: [],
    solution: "",
  },
  {
    name: "போக்ஸ்",
    description:
"செம்மறியாடு-பாக்ஸ் மிகவும் தொற்று நோயாகும். இது 6 மாத வயதுக்குட்பட்ட விலங்குகளில் 20 முதல் 50 சதவிகிதம் இறப்புக்கு காரணமாகிறது, மேலும் பெரியவர்களின் கம்பளி மற்றும் தோலுக்கு சேதம் ஏற்படுகிறது. பாக் நோய்களில், செம்மறியாடு மட்டுமே உள்ளது. மனிதர்களுக்கு பெரியம்மை நோய் தொற்று உள்ளது"    crops: [],
    solution: "",
  },
  {
    name: "லிஸ்டீரியோசிஸ், இருப்பினும், மெதுவாகப் பரவுகிறது.",
    description:
"உயிரினங்கள் மலம், சிறுநீர், கருக்கலைப்பு செய்யப்பட்ட கருக்கள், கருப்பை வெளியேற்றம் மற்றும் பாதிக்கப்பட்ட விலங்குகளின் பால் ஆகியவற்றில் வெளியேற்றப்படுகின்றன. விலங்குகள் மற்றும் மனித மலம், கழிவுநீர், மண், சிலேஜ் மற்றும் தூசி எதிரிகள் பல வாரங்கள் மற்றும் மாதங்கள் ஆகியவற்றில் உயிர்வாழ்வதற்கு உயிரினங்கள் போதுமான எதிர்ப்பைக் கொண்டுள்ளன. கால்நடை உண்ணி மற்றும் தபனிட் ஈக்களிலிருந்து உயிரினங்கள் தனிமைப்படுத்தப்பட்டதால் இரத்தத்தை உறிஞ்சும் கணுக்காலிகள் தொற்றுநோயைப் பரப்பக்கூடும். இயற்கையான சூழ்நிலையில் சில முன்கூட்டிய காரணிகள் மருத்துவத் தொற்றுடன் தொடர்புடையவை. ",    crops: [],
    solution: "",
  },
  {
    name: "கேம்பிலோபாக்டர் கருக்கலைப்பு (விப்ரியோசிஸ்)",
    description:
"இணைப்பு மூலம் பரவுகிறது. பாதிக்கப்பட்ட காளைகள் காலவரையின்றி முன்கூட்டிய குழிக்குள் உயிரினங்களை கொண்டு செல்கின்றன. முதிர்ந்த பசுக்கள் மற்றும் மாடுகளும் நீண்ட காலத்திற்கு நோய்த்தொற்றை சுமந்து செல்கின்றன. பாதிக்கப்பட்ட காளையிலிருந்து பாதிக்கப்பட்ட விந்துதான் நோய்க்கான முக்கிய வழிமுறையாகும். குறைந்த வெப்பநிலையில் உயிரினம் உயிர்வாழும். விந்து சேமிப்பு.",    crops: [],
    solution: "",
  },
  {
    name: "ஜான் நோய்",
    description:
ஜானின் நோய்கள் "ஜான்'ஸ் நோய் என்பது கால்நடைகள், செம்மறி ஆடு, ஆடு, எருமைகள் மற்றும் எப்போதாவது பன்றிகளின் ஒரு குறிப்பிட்ட நாள்பட்ட தொற்றக்கூடிய குடல் அழற்சி ஆகும். இந்த நோய் முற்போக்கான மெலிவு மற்றும் கால்நடைகள் மற்றும் எருமைகளில் நாள்பட்ட வயிற்றுப்போக்கு மற்றும் குடல் தடித்தல் ஆகியவற்றால் வகைப்படுத்தப்படுகிறது." ,    crops: [],
    solution: "",
  },
  
];

export { diseases, diseasesTamil };