const diseases = [
  {
    name: "Blast",
    description:
      "Blast disease, also known as rice rotten neck, is caused by the fungus Pyricularia oryzae and is the most damaging of all the fungal diseases The fungus attacks individual grains, leaves, and the stem at the base of the panicle. Tiny brown spots first appear on the leaves and become rhomboidal and elongated, sometimes several cm long.",
    crops: ["Rice", "Ragi", "Jowar"],
    solution:
      "Avoid dry nurseries. Avoid late planting. Burning of straw and stubbles after harvest. Avoid grasses and other weeds on bunds and inside. Dry seed treatment with Pseudomonas fluorescens talc formulation @10g/kg of seed. Stagnate water to a depth of 2.5cm over an area of 25m2 in the nursery.",
  },
  {
    name: "Bacterial Leaf Blight",
    description:
      "Rice bacterial blight, also called bacterial blight of rice, deadly bacterial disease that is among the most destructive afflictions of cultivated rice (Oryza sativa and O. glaberrima). In severe epidemics, crop loss may be as high as 75 percent, and millions of hectares of rice are infected annually.",
    crops: ["walnut", "apple", "pear", "plum"],
    solution:
      " Prune diseased twigs 10 to 12 inches below the point of visible symptoms, and dispose of the branches by burning or burying them.  Always prune in dry weather, and after each cut, disinfest pruning shears by dipping them for at least 30 seconds in a 10% bleach solution, or alcohol (spray disinfectants that contain at least 70% alcohol can also be used).",
  },
  {
    name: "Rice tungro disease",
    description:
      "Rice tungro disease is caused by the combination of two viruses, which are transmitted by leafhoppers. It causes leaf discoloration, stunted growth, reduced tiller numbers and sterile or partly filled grains.",
    crops: ["Rice"],
    solution: "",
  },
  {
    name: "Sheath Rot",
    description:
      "Sheath rot is present in most of the rice growing countries worldwide, particularly in rainfed rice ecosystems and is more prevalent during wet than dry seasons. Its incidence increases with increasing planting density and in plants that provide entry points for the fungus, in the form of injuries and wounds caused by insects such as stem borers at panicle initiation stage. ",
    crops: ["Rice", "Wheat", "Paddy"],
    solution:
      "Removal of infected stubbles after harvest     optimum plant spacing can reduce the disease. Application of potash at tillering stage is also recommended. Control  weeds  and  keep field sanitation. Spray Carbendazim 250 g or Chlorothalonil 1 kg or Edifenphos 1 lit/ha. Foliar spraying with Benomyl and copper oxychloride were also found to be effective.",
  },
  {
    name: "False Smut",
    description:
      "Individual rice grain transformed into a mass of yellow fruiting bodies Growth of velvetty spores that enclose floral parts Infected grain has greenish smut balls with a velvetty appearance.   The smut ball appears small at first and grows gradually up to the size of 1 cm.",
    crops: ["Corn", "Wheat", "Sugarcane"],
    solution:
      "    Among the cultural control, destruction of straw and stubble from infected plants is recommended to reduce the disease. Use varieties that are found to be resistant or tolerant against the disease in India. Avoid field activities when the plants are wet. Early planted crop has less smut balls than the late planted crop. At the time of harvesting, diseased plants should be removed and destroyed so that sclerotia do not fall in the field. This will reduce primary inoculum for the next crop. Field bunds and irrigation channels should be kept clean to eliminate alternate hosts. Excess application of nitrogenous fertilizer should be avoided. Regular monitoring of disease incidence during rabi season is very essential. Proper Destruction of straw and stubble.",
  },
  {
    name: "Grain discoluration",
    description:
      "The grains may be infected by various organisms before or after harvesting causing discolouration, the extend of which varies according to season and locality. The infection may be external or internal causing discoloration of the glumes or kernels or both. Dark brown or black spots appear on the grains. ",
    crops: ["Paddy", "Rice"],
    solution:
      "Use of disease-free seeds that are selected from healthy crop.     Seed treatment with carbendazim 2.0g/kg of seeds. Control insect pests. Removal and proper disposal of infected plant debris. In areas where the disease may cause yield loss, applying captan, captafol, fentin hydroxide, and mancozeb can be inhibited conidial germination. At tillering and preflowering stages, spraying of carbendazim fungicide and copper base fungicide can effectively control the disease. ",
  },
  {
    name: "Leaf streak",
    description:
      "Initially, small, dark-green and water-soaked streaks on interveins from tillering to booting stage The progress of the streaks is longitudinal, limited by the veins and soon turn yellow or orange brown. ",
    crops: ["Maize"],
    solution:
      "If you grow daylily varieties that suffer from severe leaf streak every year, consider applying fungicides containing chlorothalonil, mancozeb or thiophanate-methyl to prevent the disease. Use fungicides only during periods of wet weather.Sprinkle ½ cup of corn meal around every plant, then cover it with a layer of bark mulch.",
  },
  {
    name: "Stewart's disease",
    description:
      "Stewart's wilt is a serious bacterial disease of corn caused by the bacterium Pantoea stewartii. This bacterium affects plants, particularly types of maize such as sweet, flint, dent, flour, and popcorn.",
    crops: ["Corn"],
    solution:
      "Stewart's wilt is controlled effectively by planting resistant corn hybrids. Resistance restricts the movement of Erwinia stewartii in the vascular system of plants and prevents plants from becoming infected systemically.",
  },
  {
    name: "Purple leaf sheath",
    description:
      "Purple leaf sheath appear as small round to oblong lesions that are yellowish to brown in color. Lesions can be on leaves, stalk, sheath, and husks. Neighboring lesions join and tend to darken in color from brown to reddish brown or purple.",
    crops: ["Rice"],
    solution:
      "Apply FYM 12.5 t/ha or green manure 6.25 t/ha to promote antagonistic microflora     Avoid excess doses of fertilizers.    Adopt optimum spacing. Eliminate weed hosts. Apply organic amendments. Avoid flow of irrigation water from infected fields to healthy fields. Deep ploughing in summer and burning of stubbles.",
  },
  {
    name: "Powdery mildew",
    description:
      "powdery mildew, plant disease of worldwide occurrence that causes a powdery growth on the surface of leaves, buds, young shoots, fruits, and flowers. Powdery mildew is caused by many specialized races of fungal species",
    crops: ["Beans", "Carrot", "EggPlant", "Tomatoes"],
    solution:
      "Spray on plants every one to two weeks. Potassium bicarbonate– Similar to baking soda, this has the unique advantage of actually eliminating powdery mildew once it's there. Potassium bicarbonate is a contact fungicide which kills the powdery mildew spores quickly. In addition, it's approved for use in organic growing.",
  },
  {
    name: "Loose smut",
    description:
      "Loose smut of barley is caused by Ustilago nuda. It is a disease that can destroy a large proportion of a barley crop. Loose smut replaces grain heads with smut, or masses of spores which infect the open flowers of healthy plants and grow into the seed, without showing any symptoms.",
    crops: ["Barley", "Sugarcane", "Wheat"],
    solution:
      "The most widely used method of control for loose smut is using treated seed. Seeds are typically treated with a systemic fungicide to kill any fungus that may be inside. Since the fungus grows up with the plant, it's very important that the fungicide used to treat the seed be systemic and not just external.",
  },
  {
    name: "Black rust",
    description:
      "Stem rust, also known as cereal rust, black rust, red rust or red dust, is caused by the fungus Puccinia graminis, which causes significant disease in cereal crops. Crop species that are affected by the disease include bread wheat, durum wheat, barley and triticale.",
    crops: ["Gladiolus", "Lilium", "Marigold"],
    solution:
      "Remove all infected parts and destroy them. For bramble fruits, remove and destroy all the infected plants and replant the area with resistant varieties. Clean away all debris in between plants to prevent rust from spreading. Avoid splashing water onto the leaves, as this can help spread rust.",
  },
];

const diseasesTamil = [
  {
    name: "அரிசி வெடிப்பு நோய்",
    description:
      "அரிசி வெடிப்பு நோய், அரிசி அழுகிய கழுத்து என்றும் அழைக்கப்படுகிறது, இது பைரிகுலேரியா ஓரிசே என்ற பூஞ்சையால் ஏற்படுகிறது மற்றும் அனைத்து பூஞ்சை நோய்களிலும் மிகவும் சேதத்தை ஏற்படுத்துகிறது. சிறிய பழுப்பு நிற புள்ளிகள் முதலில் இலைகளில் தோன்றும் மற்றும் ரோம்பாய்டல் மற்றும் நீளமாக மாறும்.",
    crops: [],
    solution: "",
  },
  {
    name: "பாக்டீரியா இலை கருகல் நோய்",
    description:
      "அரிசி பாக்டீரியா ப்ளைட், அரிசியின் பாக்டீரியா ப்ளைட் என்றும் அழைக்கப்படுகிறது, இது பயிரிடப்பட்ட அரிசியின் மிகவும் அழிவுகரமான துன்பங்களில் ஒன்றாகும் (ஓரிசா சாடிவா மற்றும் ஓ. கிளாபெரிமா). கடுமையான தொற்றுநோய்களில், பயிர் இழப்பு 75 சதவிகிதம் அதிகமாக இருக்கலாம், மேலும் மில்லியன் கணக்கான ஹெக்டேர் அரிசி ஆண்டுதோறும் பாதிக்கப்படுகிறது.",
    crops: [],
    solution: "",
  },
  {
    name: "அரிசி துங்குரோ நோய்",
    description:
      "ரைஸ் டுங்ரோ நோய் இரண்டு வைரஸ்களின் கலவையால் ஏற்படுகிறது, அவை இலைப்பேன்களால் பரவுகின்றன. இது இலை நிறமாற்றம், வளர்ச்சி குன்றியது, உழவு எண்ணிக்கை குறைதல் மற்றும் மலட்டு அல்லது பகுதி நிரப்பப்பட்ட தானியங்களை ஏற்படுத்துகிறது.",
    crops: [],
    solution: "",
  },
  {
    name: "உறை அழுகல்",
    description:
      "உறை அழுகல் உலகளவில் பெரும்பாலான நெல் வளரும் நாடுகளில் உள்ளது, குறிப்பாக மானாவாரி நெல் சுற்றுச்சூழல் அமைப்புகளில் மற்றும் வறண்ட காலங்களை விட ஈரமான காலங்களில் அதிகமாக உள்ளது. வளரும் நடவு அடர்த்தி மற்றும் பூஞ்சைக்கான நுழைவுப் புள்ளிகளை வழங்கும் தாவரங்களில், தண்டுத் துளைப்பான்கள் போன்ற பூச்சிகளால் ஏற்படும் காயங்கள் மற்றும் காயங்கள் போன்ற வடிவங்களில் அதன் நிகழ்வு அதிகரிக்கிறது.",
    crops: [],
    solution: "",
  },
  {
    name: "தவறான ஸ்மட்",
    description:
      "தனித்தனி அரிசி தானியம் மஞ்சள் நிறத்தில் பழம்தரும் உடல்களாக மாறுகிறது, மலர் பாகங்களை உள்ளடக்கிய வெல்வெட்டி வித்திகளின் வளர்ச்சி பாதிக்கப்பட்ட தானியமானது வெல்வெட்டி தோற்றத்துடன் பச்சை நிற கறை உருண்டைகளைக் கொண்டுள்ளது. ஸ்மட் பந்து முதலில் சிறியதாகத் தோன்றி படிப்படியாக 1 செமீ அளவு வரை வளரும்.",
    crops: [],
    solution: "",
  },
  {
    name: "தானிய நிறமாற்றம்",
    description:
      "அறுவடைக்கு முன்னும் பின்னும் பல்வேறு உயிரினங்களால் தானியங்கள் பாதிக்கப்படலாம், இதனால் நிறமாற்றம் ஏற்படலாம், பருவம் மற்றும் இருப்பிடத்தைப் பொறுத்து அவற்றின் நீட்டிப்பு மாறுபடும். தொற்று வெளிப்புறமாகவோ அல்லது உட்புறமாகவோ க்ளூம்கள் அல்லது கர்னல்கள் அல்லது இரண்டின் நிறமாற்றத்தை ஏற்படுத்தும். தானியங்களில் அடர் பழுப்பு அல்லது கருப்பு புள்ளிகள் தோன்றும்.",
    crops: [],
    solution: "",
  },
  {
    name: "தண்டு அழுகல் நோய்",
    description:
      "ஆரம்ப அறிகுறிகள் நீர் மட்டத்திற்கு அருகில் வெளிப்புற இலை உறையில் சிறிய, ஒழுங்கற்ற கருப்பு புண்கள். நோய் முன்னேறும்போது புண்கள் விரிவடைகின்றன. பாதிக்கப்பட்ட தண்டு அழுகும். பாதிக்கப்பட்ட குடல்களுக்குள் ஏராளமான சிறிய வெள்ளை மற்றும் கருப்பு ஸ்க்லரோடியா மற்றும் மைசீலியம் தெரியும்.",
    crops: [],
    solution: "",
  },
  {
    name: "ஸ்டீவர்ட் நோய்",
    description:
      "ஸ்டீவர்ட் நோய் என்பது சோளத்தின் ஒரு தீவிர பாக்டீரியா நோயாகும், இது Pantoea stewartii என்ற பாக்டீரியத்தால் ஏற்படுகிறது. இந்த பாக்டீரியம் தாவரங்களை, குறிப்பாக இனிப்பு, பிளின்ட், டென்ட், மாவு மற்றும் பாப்கார்ன் போன்ற மக்காச்சோள வகைகளை பாதிக்கிறது.",
    crops: [],
    solution: "",
  },
  {
    name: "ஊதா இலை உறை",
    description:
      "ஊதா நிற இலை உறை மஞ்சள் நிறத்தில் இருந்து பழுப்பு நிறத்தில் சிறிய வட்டம் முதல் நீள்வட்ட புண்கள் வரை தோன்றும். இலைகள், தண்டு, உறை மற்றும் உமி ஆகியவற்றில் புண்கள் இருக்கலாம். அண்டை புண்கள் இணைந்து பழுப்பு நிறத்தில் இருந்து சிவப்பு பழுப்பு அல்லது ஊதா நிறத்தில் கருமையாக மாறும்.",
    crops: [],
    solution: "",
  },
  {
    name: "நுண்துகள் பூஞ்சை காளான்",
    description:
      "நுண்துகள் பூஞ்சை காளான், இலைகள், மொட்டுகள், இளம் தளிர்கள், பழங்கள் மற்றும் பூக்களின் மேற்பரப்பில் நுண்துகள் வளர்ச்சியை ஏற்படுத்தும் உலகளாவிய நிகழ்வின் தாவர நோய். நுண்துகள் பூஞ்சை காளான் பல சிறப்பு இனங்களின் பூஞ்சை இனங்களால் ஏற்படுகிறது",
    crops: [],
    solution: "",
  },
  {
    name: "தளர்வான ஸ்மட்",
    description:
      "பார்லியின் தளர்வான சேறு உஸ்டிலாகோ நுடாவால் ஏற்படுகிறது. இது ஒரு பெரிய அளவிலான பார்லி பயிரை அழிக்கக்கூடிய ஒரு நோயாகும். தளர்வான ஸ்மட் தானியத் தலைகளுக்குப் பதிலாக ஸ்மட் அல்லது ஸ்போர்களின் நிறை ஆரோக்கியமான தாவரங்களின் திறந்த பூக்களைப் பாதித்து, எந்த அறிகுறிகளையும் காட்டாமல் விதையாக வளரும்.",
    crops: [],
    solution: "",
  },
  {
    name: "கருப்பு துரு",
    description:
      "தானிய துரு, கருப்பு துரு, சிவப்பு துரு அல்லது சிவப்பு தூசி என்றும் அறியப்படும் தண்டு துரு, தானிய பயிர்களில் குறிப்பிடத்தக்க நோயை ஏற்படுத்தும் புசினியா கிராமினிஸ் என்ற பூஞ்சையால் ஏற்படுகிறது. ரொட்டி கோதுமை, துரும்பு கோதுமை, பார்லி மற்றும் டிரிடிகேல் ஆகியவை நோயால் பாதிக்கப்பட்ட பயிர் வகைகளாகும்.",
    crops: [],
    solution: "",
  },
];

export { diseases, diseasesTamil };
