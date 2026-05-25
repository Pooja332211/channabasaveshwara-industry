/* ============================================
   SHRI CHANNABASAVESHWARA INDUSTRIES
   script.js — Clean, Honest, Deployable
   ============================================ */

// ============ TRANSLATIONS ============
const T = {
  en: {
    topAddress:"Ankalagi Village, Gokak Taluk, Belagavi — 591101",
    brandShort:"SCI", brandFull:"Shri Channabasaveshwara Industries",
    navHome:"Home", navAbout:"About", navProducts:"Products",
    navCalc:"Calculator", navGallery:"Gallery", navContact:"Contact", navQuote:"Get Quote",
    heroTag:"Gokak, Belagavi — Karnataka",
    heroH1a:"QUALITY BRICKS,", heroH1b:"HONEST PRICE.",
    heroP:"Fly Ash & Cement Bricks made with care. Factory direct — no middlemen. Available 24/7.",
    heroCta1:"Our Products", heroCta2:"Get a Quote",
    pill1:"5+ Years", pill2:"2 Products", pill3:"Bulk Welcome", pill4:"Cash & UPI",
    tick1:"Eco-Friendly Fly Ash Bricks", tick2:"Bulk Orders Welcome",
    tick3:"Ankalagi, Gokak Taluk", tick4:"Available 24/7", tick5:"Factory Direct Pricing",
    aboutTag:"Who We Are", aboutH:"A Small Factory With Honest Work",
    aboutBadge:"Quality Assured", aboutPill:"Years & Growing",
    aboutP1:"We are Shri Channabasaveshwara Industries, a family-run brick manufacturing unit based in Ankalagi Village, Gokak Taluk, Belagavi. We make Fly Ash Bricks and Heavy Cement Bricks and supply directly to contractors and builders across the region.",
    aboutP2:"We have been operating for 5+ years. No fancy claims — just good bricks, honest pricing, and reliable supply. You can visit our factory anytime, inspect the product, and order directly.",
    chip1:"Modern Machinery", chip2:"Eco-Friendly", chip3:"Bulk Supply", chip4:"Direct from Factory",
    aboutCta:"Contact Us",
    prodTag:"Our Products", prodH:"Two Products. Both Built to Last.",
    fltAll:"All", fltFly:"Fly Ash", fltCem:"Cement",
    badgeEco:"Eco-Friendly", badgeHeavy:"Heavy Duty",
    p1Name:"Fly Ash Brick", p2Name:"Heavy Cement Brick",
    perBrick:"/brick",
    specSz:"Size", specWt:"Weight", specBest:"Best for", specDen:"Density",
    p1Best:"Residential", p1Den:"Lightweight",
    p2Best:"Commercial", p2Den:"Heavy Duty",
    matsLabel:"Made from:",
    p1f1:"Uses industrial waste — good for the environment",
    p1f2:"Uniform shape — less mortar needed",
    p1f3:"Good heat insulation for homes",
    p2f1:"High load-bearing capacity",
    p2f2:"Good water resistance",
    p2f3:"Suitable for commercial & industrial use",
    prodQuote:"Get Quote", prodOrder:"Order on WhatsApp",
    whyTag:"Why Choose Us", whyH:"Simple Reasons to Trust SCI",
    w1h:"Consistent Quality", w1p:"Every batch is checked before dispatch — uniform size, good strength, clean finish.",
    w2h:"Factory Direct Price", w2p:"No distributors or agents. You buy straight from us, so you save on every order.",
    w3h:"Local Delivery", w3p:"We supply across Gokak, Belagavi, Dharwad, Hubli, and nearby areas. Timely and reliable.",
    w4h:"Eco-Friendly Product", w4p:"Fly ash bricks reuse industrial by-products, helping reduce environmental waste.",
    w5h:"Always Reachable", w5p:"Call or WhatsApp us anytime — we're a small business and we pick up.",
    w6h:"Visit Before You Buy", w6p:"Our factory is open. Come see the product yourself before placing any order.",
    calcTag:"Price Calculator", calcH:"Estimate Your Order",
    calcP:"Select the product and enter quantity to get an instant estimate. Then send it to us on WhatsApp — we'll confirm and arrange delivery.",
    calcNote:"This is an estimate only. Final price confirmed by our team. Payment by Cash or UPI at delivery.",
    cfProd:"Product", cfQty:"Number of Bricks",
    crProd:"Product", crQty:"Quantity", crRate:"Rate per brick", crTotal:"Total Estimate",
    calcErr:"Please enter a valid quantity.",
    btnCalc:"Calculate", btnWA:"Send on WhatsApp", btnSummary:"Download / Print Quote Summary",
    galTag:"Gallery", galH:"Our Factory",
    gal1:"Manufacturing Unit", gal2:"Production Area", gal3:"Fly Ash Bricks", gal4:"Cement Bricks",
    faqTag:"FAQ", faqH:"Common Questions",
    q1:"What is the minimum order?",
    a1:"There is no strict minimum. We welcome all orders — small or large. For bigger quantities we can discuss pricing.",
    q2:"Do you deliver to my area?",
    a2:"We supply across Gokak, Belagavi, Dharwad, Hubli, Bagalkot and nearby areas. Call us to confirm your location.",
    q3:"Are fly ash bricks good for construction?",
    a3:"Yes. Fly ash bricks are durable, uniform in shape, and reduce the amount of mortar needed. They are suitable for most residential construction work.",
    q4:"How do I pay?",
    a4:"We accept Cash and UPI. Payment is done at the time of delivery or as agreed with our team.",
    q5:"Can I visit the factory?",
    a5:"Absolutely. You can visit us at Ankalagi Village, Gokak Taluk anytime. We are always available.",
    q6:"What size are the bricks?",
    a6:"Both our Fly Ash Bricks and Cement Bricks are 16 × 8 × 6 inches. Fly ash bricks weigh about 18 kg and cement bricks about 23 kg.",
    contTag:"Contact", contH:"Find Us & Get in Touch",
    cdAddr:"Factory Address", cdPhone:"Call / WhatsApp",
    cdAvail:"Availability", cdAvailVal:"Always available — 24/7. Call or WhatsApp anytime.",
    btnCall:"Call Now", btnWaContact:"WhatsApp", btnDir:"Directions",
    mapOpen:"Open in Google Maps",
    inqTitle:"Quick Inquiry",
    inqNamePh:"Your Name", inqPhonePh:"Phone Number", inqQtyPh:"Approx quantity (e.g. 2000 bricks)",
    inqP1:"Fly Ash Bricks", inqP2:"Heavy Cement Bricks", inqP3:"Both Products",
    inqSend:"Send Inquiry on WhatsApp",
    ftDesc:"Fly Ash & Cement Brick Manufacturer\nAnkalagi, Gokak Taluk, Belagavi",
    ftLinks:"Quick Links", ftProd:"Products", ftContact:"Contact",
    ftP1:"Fly Ash Bricks — ₹30/brick", ftP2:"Cement Bricks — ₹34/brick",
    ftCalc:"Price Calculator", ftAvail:"Available 24/7",
    fabTip:"Chat with us",
    // calculator internals
    _flyAshName:"Fly Ash Brick", _cementName:"Heavy Cement Brick",
    _waMsg:"Hello,\n\nI would like to enquire about:\n\nProduct: {product}\nQuantity: {qty} bricks\nEstimated Total: ₹{total}\n\nPlease confirm availability and delivery.\n\nThank you.",
    _inqMsg:"Hello Shri Channabasaveshwara Industries,\n\nName: {name}\nPhone: {phone}\nProduct: {product}\nQuantity: {qty}\n\nPlease get in touch.\n\nThank you."
  },
  hi: {
    topAddress:"अंकलगी गांव, गोकाक तालुका, बेलगावी — 591101",
    brandShort:"SCI", brandFull:"श्री चन्नबसवेश्वर इंडस्ट्रीज़",
    navHome:"होम", navAbout:"परिचय", navProducts:"उत्पाद",
    navCalc:"कैलकुलेटर", navGallery:"गैलरी", navContact:"संपर्क", navQuote:"कोटेशन लें",
    heroTag:"गोकाक, बेलगावी — कर्नाटक",
    heroH1a:"गुणवत्ता वाली ईंटें,", heroH1b:"ईमानदार दाम।",
    heroP:"फ्लाई ऐश और सीमेंट ईंटें — फैक्टरी से सीधे। कोई बिचौलिया नहीं। 24/7 उपलब्ध।",
    heroCta1:"हमारे उत्पाद", heroCta2:"कोटेशन पाएं",
    pill1:"5+ साल", pill2:"2 उत्पाद", pill3:"थोक स्वागत", pill4:"नकद और UPI",
    tick1:"पर्यावरण अनुकूल फ्लाई ऐश ईंटें", tick2:"थोक ऑर्डर स्वागत",
    tick3:"अंकलगी, गोकाक तालुका", tick4:"24/7 उपलब्ध", tick5:"फैक्टरी सीधी कीमत",
    aboutTag:"हम कौन हैं", aboutH:"एक छोटी फैक्टरी, ईमानदार काम",
    aboutBadge:"गुणवत्ता सुनिश्चित", aboutPill:"वर्ष और बढ़ रहे हैं",
    aboutP1:"हम श्री चन्नबसवेश्वर इंडस्ट्रीज़ हैं — अंकलगी गांव, गोकाक तालुका, बेलगावी में स्थित एक परिवार संचालित ईंट निर्माण इकाई। हम फ्लाई ऐश ईंटें और भारी सीमेंट ईंटें बनाते हैं।",
    aboutP2:"हम 5+ साल से काम कर रहे हैं। कोई बड़े दावे नहीं — बस अच्छी ईंटें, ईमानदार दाम, और भरोसेमंद आपूर्ति।",
    chip1:"आधुनिक मशीनरी", chip2:"पर्यावरण अनुकूल", chip3:"थोक आपूर्ति", chip4:"फैक्टरी से सीधे",
    aboutCta:"संपर्क करें",
    prodTag:"हमारे उत्पाद", prodH:"दो उत्पाद। दोनों टिकाऊ।",
    fltAll:"सभी", fltFly:"फ्लाई ऐश", fltCem:"सीमेंट",
    badgeEco:"पर्यावरण अनुकूल", badgeHeavy:"भारी ड्यूटी",
    p1Name:"फ्लाई ऐश ईंट", p2Name:"भारी सीमेंट ईंट",
    perBrick:"/ईंट",
    specSz:"आकार", specWt:"वजन", specBest:"सर्वश्रेष्ठ उपयोग", specDen:"घनत्व",
    p1Best:"आवासीय", p1Den:"हल्का",
    p2Best:"व्यावसायिक", p2Den:"भारी ड्यूटी",
    matsLabel:"सामग्री:",
    p1f1:"औद्योगिक कचरे का उपयोग — पर्यावरण के लिए अच्छा",
    p1f2:"एकसमान आकार — कम मोर्टार की जरूरत",
    p1f3:"घरों के लिए अच्छा ताप इन्सुलेशन",
    p2f1:"उच्च भार वहन क्षमता", p2f2:"अच्छा जल प्रतिरोध",
    p2f3:"व्यावसायिक और औद्योगिक उपयोग के लिए उपयुक्त",
    prodQuote:"कोटेशन लें", prodOrder:"WhatsApp पर ऑर्डर करें",
    whyTag:"हमें क्यों चुनें", whyH:"SCI पर भरोसा करने के सरल कारण",
    w1h:"एकसमान गुणवत्ता", w1p:"हर बैच की जांच की जाती है।",
    w2h:"फैक्टरी सीधी कीमत", w2p:"कोई एजेंट नहीं। सीधे हमसे खरीदें।",
    w3h:"स्थानीय डिलीवरी", w3p:"गोकाक, बेलगावी, धारवाड़, हुबली में आपूर्ति।",
    w4h:"पर्यावरण अनुकूल उत्पाद", w4p:"फ्लाई ऐश ईंटें औद्योगिक उप-उत्पादों का पुनः उपयोग करती हैं।",
    w5h:"हमेशा उपलब्ध", w5p:"कभी भी कॉल या WhatsApp करें।",
    w6h:"खरीदने से पहले देखें", w6p:"हमारी फैक्टरी खुली है। पहले देखें, फिर ऑर्डर करें।",
    calcTag:"मूल्य कैलकुलेटर", calcH:"अपना ऑर्डर अनुमान लगाएं",
    calcP:"उत्पाद चुनें और मात्रा डालें। फिर हमें WhatsApp पर भेजें।",
    calcNote:"यह केवल अनुमान है। अंतिम मूल्य हमारी टीम द्वारा पुष्टि की जाएगी। भुगतान डिलीवरी पर नकद या UPI द्वारा।",
    cfProd:"उत्पाद", cfQty:"ईंटों की संख्या",
    crProd:"उत्पाद", crQty:"मात्रा", crRate:"दर प्रति ईंट", crTotal:"कुल अनुमान",
    calcErr:"कृपया एक वैध मात्रा दर्ज करें।",
    btnCalc:"गणना करें", btnWA:"WhatsApp पर भेजें", btnSummary:"कोटेशन सारांश डाउनलोड/प्रिंट करें",
    galTag:"गैलरी", galH:"हमारी फैक्टरी",
    gal1:"उत्पादन इकाई", gal2:"उत्पादन क्षेत्र", gal3:"फ्लाई ऐश ईंटें", gal4:"सीमेंट ईंटें",
    faqTag:"FAQ", faqH:"सामान्य प्रश्न",
    q1:"न्यूनतम ऑर्डर क्या है?", a1:"कोई सख्त न्यूनतम नहीं। हम सभी ऑर्डर का स्वागत करते हैं।",
    q2:"क्या आप मेरे क्षेत्र में डिलीवरी करते हैं?", a2:"हां, गोकाक, बेलगावी, धारवाड़, हुबली और आसपास।",
    q3:"क्या फ्लाई ऐश ईंटें निर्माण के लिए अच्छी हैं?", a3:"हां। वे टिकाऊ, एकसमान और कम मोर्टार की जरूरत वाली हैं।",
    q4:"भुगतान कैसे करें?", a4:"हम नकद और UPI स्वीकार करते हैं। डिलीवरी पर भुगतान।",
    q5:"क्या मैं फैक्टरी देख सकता हूं?", a5:"बिल्कुल। कभी भी आएं — हम हमेशा उपलब्ध हैं।",
    q6:"ईंटों का आकार क्या है?", a6:"दोनों ईंटें 16×8×6 इंच की हैं। फ्लाई ऐश ~18 किग्रा, सीमेंट ~23 किग्रा।",
    contTag:"संपर्क", contH:"हमें खोजें और संपर्क करें",
    cdAddr:"फैक्टरी पता", cdPhone:"कॉल / WhatsApp",
    cdAvail:"उपलब्धता", cdAvailVal:"हमेशा उपलब्ध — 24/7। कभी भी कॉल या WhatsApp करें।",
    btnCall:"अभी कॉल करें", btnWaContact:"WhatsApp", btnDir:"दिशा-निर्देश",
    mapOpen:"Google Maps में खोलें",
    inqTitle:"त्वरित जांच",
    inqNamePh:"आपका नाम", inqPhonePh:"फोन नंबर", inqQtyPh:"अनुमानित मात्रा",
    inqP1:"फ्लाई ऐश ईंटें", inqP2:"भारी सीमेंट ईंटें", inqP3:"दोनों उत्पाद",
    inqSend:"WhatsApp पर जांच भेजें",
    ftDesc:"फ्लाई ऐश और सीमेंट ईंट निर्माता\nअंकलगी, गोकाक तालुका, बेलगावी",
    ftLinks:"त्वरित लिंक", ftProd:"उत्पाद", ftContact:"संपर्क",
    ftP1:"फ्लाई ऐश ईंटें — ₹30/ईंट", ftP2:"सीमेंट ईंटें — ₹34/ईंट",
    ftCalc:"मूल्य कैलकुलेटर", ftAvail:"24/7 उपलब्ध",
    fabTip:"हमसे चैट करें",
    _flyAshName:"फ्लाई ऐश ईंट", _cementName:"भारी सीमेंट ईंट",
    _waMsg:"नमस्ते,\n\nमैं निम्नलिखित के बारे में पूछना चाहता हूं:\n\nउत्पाद: {product}\nमात्रा: {qty} ईंटें\nअनुमानित कुल: ₹{total}\n\nकृपया उपलब्धता और डिलीवरी की पुष्टि करें।\n\nधन्यवाद।",
    _inqMsg:"नमस्ते श्री चन्नबसवेश्वर इंडस्ट्रीज़,\n\nनाम: {name}\nफोन: {phone}\nउत्पाद: {product}\nमात्रा: {qty}\n\nकृपया संपर्क करें।\n\nधन्यवाद।"
  },
  kn: {
    topAddress:"ಅಂಕಲಗಿ ಗ್ರಾಮ, ಗೋಕಾಕ್ ತಾಲೂಕು, ಬೆಳಗಾವಿ — 591101",
    brandShort:"SCI", brandFull:"ಶ್ರೀ ಚನ್ನಬಸವೇಶ್ವರ ಇಂಡಸ್ಟ್ರೀಸ್",
    navHome:"ಮುಖಪುಟ", navAbout:"ನಮ್ಮ ಬಗ್ಗೆ", navProducts:"ಉತ್ಪನ್ನಗಳು",
    navCalc:"ಕ್ಯಾಲ್ಕುಲೇಟರ್", navGallery:"ಗ್ಯಾಲರಿ", navContact:"ಸಂಪರ್ಕ", navQuote:"ಕೋಟ್ ಪಡೆಯಿರಿ",
    heroTag:"ಗೋಕಾಕ್, ಬೆಳಗಾವಿ — ಕರ್ನಾಟಕ",
    heroH1a:"ಗುಣಮಟ್ಟದ ಇಟ್ಟಿಗೆಗಳು,", heroH1b:"ಪ್ರಾಮಾಣಿಕ ಬೆಲೆ.",
    heroP:"ಫ್ಲೈ ಆಶ್ ಮತ್ತು ಸಿಮೆಂಟ್ ಇಟ್ಟಿಗೆಗಳು — ಕಾರ್ಖಾನೆಯಿಂದ ನೇರ. 24/7 ಲಭ್ಯ.",
    heroCta1:"ಉತ್ಪನ್ನಗಳು", heroCta2:"ಕೋಟ್ ಪಡೆಯಿರಿ",
    pill1:"5+ ವರ್ಷಗಳು", pill2:"2 ಉತ್ಪನ್ನಗಳು", pill3:"ಸಗಟು ಸ್ವಾಗತ", pill4:"ನಗದು ಮತ್ತು UPI",
    tick1:"ಪರಿಸರ ಸ್ನೇಹಿ ಫ್ಲೈ ಆಶ್ ಇಟ್ಟಿಗೆಗಳು", tick2:"ಸಗಟು ಆರ್ಡರ್ ಸ್ವಾಗತ",
    tick3:"ಅಂಕಲಗಿ, ಗೋಕಾಕ್ ತಾಲೂಕು", tick4:"24/7 ಲಭ್ಯ", tick5:"ಕಾರ್ಖಾನೆ ನೇರ ಬೆಲೆ",
    aboutTag:"ನಾವು ಯಾರು", aboutH:"ಒಂದು ಸಣ್ಣ ಕಾರ್ಖಾನೆ, ಪ್ರಾಮಾಣಿಕ ಕೆಲಸ",
    aboutBadge:"ಗುಣಮಟ್ಟ ಖಾತ್ರಿ", aboutPill:"ವರ್ಷಗಳು ಮತ್ತು ಬೆಳೆಯುತ್ತಿದ್ದೇವೆ",
    aboutP1:"ನಾವು ಶ್ರೀ ಚನ್ನಬಸವೇಶ್ವರ ಇಂಡಸ್ಟ್ರೀಸ್ — ಅಂಕಲಗಿ ಗ್ರಾಮ, ಗೋಕಾಕ್ ತಾಲೂಕು, ಬೆಳಗಾವಿಯಲ್ಲಿ ನೆಲೆಗೊಂಡ ಕುಟುಂಬ ನಡೆಸುವ ಇಟ್ಟಿಗೆ ತಯಾರಿಕಾ ಘಟಕ.",
    aboutP2:"ನಾವು 5+ ವರ್ಷಗಳಿಂದ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತಿದ್ದೇವೆ. ಒಳ್ಳೆಯ ಇಟ್ಟಿಗೆಗಳು, ಪ್ರಾಮಾಣಿಕ ಬೆಲೆ, ವಿಶ್ವಾಸಾರ್ಹ ಪೂರೈಕೆ.",
    chip1:"ಆಧುನಿಕ ಯಂತ್ರೋಪಕರಣಗಳು", chip2:"ಪರಿಸರ ಸ್ನೇಹಿ", chip3:"ಸಗಟು ಪೂರೈಕೆ", chip4:"ಕಾರ್ಖಾನೆಯಿಂದ ನೇರ",
    aboutCta:"ಸಂಪರ್ಕಿಸಿ",
    prodTag:"ನಮ್ಮ ಉತ್ಪನ್ನಗಳು", prodH:"ಎರಡು ಉತ್ಪನ್ನಗಳು. ಎರಡೂ ಬಾಳಿಕೆ ಬರುವಂತ.",
    fltAll:"ಎಲ್ಲ", fltFly:"ಫ್ಲೈ ಆಶ್", fltCem:"ಸಿಮೆಂಟ್",
    badgeEco:"ಪರಿಸರ ಸ್ನೇಹಿ", badgeHeavy:"ಭಾರೀ ಡ್ಯೂಟಿ",
    p1Name:"ಫ್ಲೈ ಆಶ್ ಇಟ್ಟಿಗೆ", p2Name:"ಭಾರೀ ಸಿಮೆಂಟ್ ಇಟ್ಟಿಗೆ",
    perBrick:"/ಇಟ್ಟಿಗೆ",
    specSz:"ಗಾತ್ರ", specWt:"ತೂಕ", specBest:"ಉತ್ತಮ ಬಳಕೆ", specDen:"ಸಾಂದ್ರತೆ",
    p1Best:"ವಸತಿ", p1Den:"ಹಗುರ",
    p2Best:"ವಾಣಿಜ್ಯ", p2Den:"ಭಾರೀ ಡ್ಯೂಟಿ",
    matsLabel:"ತಯಾರಿಸಲ್ಪಟ್ಟದ್ದು:",
    p1f1:"ಕೈಗಾರಿಕಾ ತ್ಯಾಜ್ಯ ಬಳಸುತ್ತದೆ — ಪರಿಸರಕ್ಕೆ ಒಳ್ಳೆಯದು",
    p1f2:"ಏಕರೂಪ ಆಕಾರ — ಕಡಿಮೆ ಗಾರೆ ಬೇಕು",
    p1f3:"ಮನೆಗಳಿಗೆ ಉತ್ತಮ ಉಷ್ಣ ನಿರೋಧ",
    p2f1:"ಹೆಚ್ಚಿನ ಭಾರ ಸಾಮರ್ಥ್ಯ", p2f2:"ಉತ್ತಮ ನೀರು ನಿರೋಧಕ",
    p2f3:"ವಾಣಿಜ್ಯ ಮತ್ತು ಕೈಗಾರಿಕಾ ಬಳಕೆಗೆ ಸೂಕ್ತ",
    prodQuote:"ಕೋಟ್ ಪಡೆಯಿರಿ", prodOrder:"WhatsApp ನಲ್ಲಿ ಆರ್ಡರ್ ಮಾಡಿ",
    whyTag:"ನಮ್ಮನ್ನು ಏಕೆ ಆಯ್ಕೆ ಮಾಡಿ", whyH:"SCI ಅನ್ನು ನಂಬಲು ಸರಳ ಕಾರಣಗಳು",
    w1h:"ಸ್ಥಿರ ಗುಣಮಟ್ಟ", w1p:"ಪ್ರತಿ ಬ್ಯಾಚ್ ಪರಿಶೀಲಿಸಲಾಗುತ್ತದೆ.",
    w2h:"ಕಾರ್ಖಾನೆ ನೇರ ಬೆಲೆ", w2p:"ಯಾವುದೇ ಏಜೆಂಟ್ ಇಲ್ಲ. ನೇರ ನಮ್ಮಿಂದ ಖರೀದಿಸಿ.",
    w3h:"ಸ್ಥಳೀಯ ಡೆಲಿವರಿ", w3p:"ಗೋಕಾಕ್, ಬೆಳಗಾವಿ, ಧಾರವಾಡ, ಹುಬ್ಬಳ್ಳಿ ಮತ್ತು ಸುತ್ತಮುತ್ತ.",
    w4h:"ಪರಿಸರ ಸ್ನೇಹಿ ಉತ್ಪನ್ನ", w4p:"ಫ್ಲೈ ಆಶ್ ಇಟ್ಟಿಗೆಗಳು ಕೈಗಾರಿಕಾ ಉಪ-ಉತ್ಪನ್ನಗಳನ್ನು ಮರುಬಳಕೆ ಮಾಡುತ್ತವೆ.",
    w5h:"ಯಾವಾಗಲೂ ಲಭ್ಯ", w5p:"ಯಾವಾಗಲಾದರೂ ಕರೆ ಮಾಡಿ ಅಥವಾ WhatsApp ಮಾಡಿ.",
    w6h:"ಖರೀದಿಸುವ ಮೊದಲು ನೋಡಿ", w6p:"ನಮ್ಮ ಕಾರ್ಖಾನೆ ತೆರೆದಿದೆ. ಮೊದಲು ನೋಡಿ, ನಂತರ ಆರ್ಡರ್ ಮಾಡಿ.",
    calcTag:"ಬೆಲೆ ಕ್ಯಾಲ್ಕುಲೇಟರ್", calcH:"ನಿಮ್ಮ ಆರ್ಡರ್ ಅಂದಾಜು ಮಾಡಿ",
    calcP:"ಉತ್ಪನ್ನ ಆಯ್ಕೆ ಮಾಡಿ ಮತ್ತು ಪ್ರಮಾಣ ನಮೂದಿಸಿ. ನಂತರ WhatsApp ನಲ್ಲಿ ಕಳುಹಿಸಿ.",
    calcNote:"ಇದು ಕೇವಲ ಅಂದಾಜು. ಅಂತಿಮ ಬೆಲೆ ನಮ್ಮ ತಂಡ ದೃಢೀಕರಿಸುತ್ತದೆ. ಡೆಲಿವರಿಯಲ್ಲಿ ನಗದು ಅಥವಾ UPI ಮೂಲಕ ಪಾವತಿ.",
    cfProd:"ಉತ್ಪನ್ನ", cfQty:"ಇಟ್ಟಿಗೆಗಳ ಸಂಖ್ಯೆ",
    crProd:"ಉತ್ಪನ್ನ", crQty:"ಪ್ರಮಾಣ", crRate:"ದರ ಪ್ರತಿ ಇಟ್ಟಿಗೆ", crTotal:"ಒಟ್ಟು ಅಂದಾಜು",
    calcErr:"ದಯವಿಟ್ಟು ಮಾನ್ಯ ಪ್ರಮಾಣ ನಮೂದಿಸಿ.",
    btnCalc:"ಲೆಕ್ಕ ಹಾಕಿ", btnWA:"WhatsApp ನಲ್ಲಿ ಕಳುಹಿಸಿ", btnSummary:"ಕೋಟ್ ಸಾರಾಂಶ ಡೌನ್‌ಲೋಡ್/ಪ್ರಿಂಟ್ ಮಾಡಿ",
    galTag:"ಗ್ಯಾಲರಿ", galH:"ನಮ್ಮ ಕಾರ್ಖಾನೆ",
    gal1:"ಉತ್ಪಾದನಾ ಘಟಕ", gal2:"ಉತ್ಪಾದನಾ ಪ್ರದೇಶ", gal3:"ಫ್ಲೈ ಆಶ್ ಇಟ್ಟಿಗೆಗಳು", gal4:"ಸಿಮೆಂಟ್ ಇಟ್ಟಿಗೆಗಳು",
    faqTag:"FAQ", faqH:"ಸಾಮಾನ್ಯ ಪ್ರಶ್ನೆಗಳು",
    q1:"ಕನಿಷ್ಠ ಆರ್ಡರ್ ಏನು?", a1:"ಕಟ್ಟುನಿಟ್ಟಾದ ಕನಿಷ್ಠ ಇಲ್ಲ. ಎಲ್ಲಾ ಆರ್ಡರ್‌ಗಳನ್ನು ಸ್ವಾಗತಿಸುತ್ತೇವೆ.",
    q2:"ನೀವು ನನ್ನ ಪ್ರದೇಶಕ್ಕೆ ಡೆಲಿವರಿ ಮಾಡುತ್ತೀರಾ?", a2:"ಹೌದು, ಗೋಕಾಕ್, ಬೆಳಗಾವಿ, ಧಾರವಾಡ, ಹುಬ್ಬಳ್ಳಿ ಮತ್ತು ಸುತ್ತಮುತ್ತ.",
    q3:"ಫ್ಲೈ ಆಶ್ ಇಟ್ಟಿಗೆಗಳು ನಿರ್ಮಾಣಕ್ಕೆ ಒಳ್ಳೆಯವೇ?", a3:"ಹೌದು. ಅವು ಬಾಳಿಕೆ ಬರುವ, ಏಕರೂಪ ಮತ್ತು ಕಡಿಮೆ ಗಾರೆ ಬೇಡುತ್ತವೆ.",
    q4:"ಹಣ ಹೇಗೆ ಪಾವತಿಸಬೇಕು?", a4:"ನಾವು ನಗದು ಮತ್ತು UPI ಸ್ವೀಕರಿಸುತ್ತೇವೆ. ಡೆಲಿವರಿಯಲ್ಲಿ ಪಾವತಿ.",
    q5:"ಕಾರ್ಖಾನೆಗೆ ಭೇಟಿ ನೀಡಬಹುದೇ?", a5:"ಖಂಡಿತ. ಅಂಕಲಗಿ ಗ್ರಾಮ, ಗೋಕಾಕ್ ತಾಲೂಕುಗೆ ಯಾವಾಗ ಬೇಕಾದರೂ ಬನ್ನಿ.",
    q6:"ಇಟ್ಟಿಗೆಗಳ ಗಾತ್ರ ಏನು?", a6:"ಎರಡೂ ಇಟ್ಟಿಗೆಗಳು 16×8×6 ಇಂಚ್. ಫ್ಲೈ ಆಶ್ ~18 ಕಿಗ್ರಾ, ಸಿಮೆಂಟ್ ~23 ಕಿಗ್ರಾ.",
    contTag:"ಸಂಪರ್ಕ", contH:"ನಮ್ಮನ್ನು ಹುಡುಕಿ ಮತ್ತು ಸಂಪರ್ಕಿಸಿ",
    cdAddr:"ಕಾರ್ಖಾನೆ ವಿಳಾಸ", cdPhone:"ಕರೆ / WhatsApp",
    cdAvail:"ಲಭ್ಯತೆ", cdAvailVal:"ಯಾವಾಗಲೂ ಲಭ್ಯ — 24/7. ಯಾವಾಗ ಬೇಕಾದರೂ ಕರೆ ಮಾಡಿ.",
    btnCall:"ಈಗ ಕರೆ ಮಾಡಿ", btnWaContact:"WhatsApp", btnDir:"ದಿಕ್ಕನ್ನು ಪಡೆಯಿರಿ",
    mapOpen:"Google Maps ನಲ್ಲಿ ತೆರೆಯಿರಿ",
    inqTitle:"ತ್ವರಿತ ವಿಚಾರಣೆ",
    inqNamePh:"ನಿಮ್ಮ ಹೆಸರು", inqPhonePh:"ಫೋನ್ ಸಂಖ್ಯೆ", inqQtyPh:"ಅಂದಾಜು ಪ್ರಮಾಣ",
    inqP1:"ಫ್ಲೈ ಆಶ್ ಇಟ್ಟಿಗೆಗಳು", inqP2:"ಭಾರೀ ಸಿಮೆಂಟ್ ಇಟ್ಟಿಗೆಗಳು", inqP3:"ಎರಡೂ ಉತ್ಪನ್ನಗಳು",
    inqSend:"WhatsApp ನಲ್ಲಿ ವಿಚಾರಣೆ ಕಳುಹಿಸಿ",
    ftDesc:"ಫ್ಲೈ ಆಶ್ ಮತ್ತು ಸಿಮೆಂಟ್ ಇಟ್ಟಿಗೆ ತಯಾರಕ\nಅಂಕಲಗಿ, ಗೋಕಾಕ್ ತಾಲೂಕು, ಬೆಳಗಾವಿ",
    ftLinks:"ತ್ವರಿತ ಲಿಂಕ್‌ಗಳು", ftProd:"ಉತ್ಪನ್ನಗಳು", ftContact:"ಸಂಪರ್ಕ",
    ftP1:"ಫ್ಲೈ ಆಶ್ ಇಟ್ಟಿಗೆಗಳು — ₹30/ಇಟ್ಟಿಗೆ", ftP2:"ಸಿಮೆಂಟ್ ಇಟ್ಟಿಗೆಗಳು — ₹34/ಇಟ್ಟಿಗೆ",
    ftCalc:"ಬೆಲೆ ಕ್ಯಾಲ್ಕುಲೇಟರ್", ftAvail:"24/7 ಲಭ್ಯ",
    fabTip:"ನಮ್ಮೊಂದಿಗೆ ಚಾಟ್ ಮಾಡಿ",
    _flyAshName:"ಫ್ಲೈ ಆಶ್ ಇಟ್ಟಿಗೆ", _cementName:"ಭಾರೀ ಸಿಮೆಂಟ್ ಇಟ್ಟಿಗೆ",
    _waMsg:"ನಮಸ್ಕಾರ,\n\nನಾನು ಕೇಳಲು ಬಯಸುತ್ತೇನೆ:\n\nಉತ್ಪನ್ನ: {product}\nಪ್ರಮಾಣ: {qty} ಇಟ್ಟಿಗೆಗಳು\nಒಟ್ಟು ಅಂದಾಜು: ₹{total}\n\nಲಭ್ಯತೆ ಮತ್ತು ಡೆಲಿವರಿ ದೃಢೀಕರಿಸಿ.\n\nಧನ್ಯವಾದ.",
    _inqMsg:"ನಮಸ್ಕಾರ ಶ್ರೀ ಚನ್ನಬಸವೇಶ್ವರ ಇಂಡಸ್ಟ್ರೀಸ್,\n\nಹೆಸರು: {name}\nಫೋನ್: {phone}\nಉತ್ಪನ್ನ: {product}\nಪ್ರಮಾಣ: {qty}\n\nದಯವಿಟ್ಟು ಸಂಪರ್ಕಿಸಿ.\n\nಧನ್ಯವಾದ."
  }
};

// ============ STATE ============
let lang = 'en';
let calcPrice = 0, calcQty = 0, calcProductName = '';
let slideIdx = 0, slideTimer;

// ============ INIT ============
window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('preloader').classList.add('gone');
    AOS.init({ duration:650, easing:'ease-out-cubic', once:true, offset:60 });
  }, 1200);
  startSlides();
  clockTick();
  setInterval(clockTick, 1000);
});

// ============ CLOCK ============
function clockTick() {
  const el = document.getElementById('liveClock');
  if (!el) return;
  const n = new Date();
  el.textContent = n.toLocaleTimeString('en-IN', {hour:'2-digit', minute:'2-digit', second:'2-digit'});
}

// ============ NAV ============
const navbar = document.getElementById('navbar');
const navHam = document.getElementById('navHam');
const navMenu = document.getElementById('navMenu');

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
  document.getElementById('btt').classList.toggle('show', window.scrollY > 300);
});

navHam.addEventListener('click', () => {
  navHam.classList.toggle('open');
  navMenu.classList.toggle('open');
});

navMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  navHam.classList.remove('open');
  navMenu.classList.remove('open');
}));

// ============ HERO SLIDES ============
function startSlides() {
  slideTimer = setInterval(() => goSlide((slideIdx + 1) % 3), 6000);
}

function goSlide(n) {
  document.querySelectorAll('.hero-slide').forEach((s, i) => s.classList.toggle('active', i === n));
  document.querySelectorAll('.dot').forEach((d, i) => d.classList.toggle('active', i === n));
  slideIdx = n;
}

// ============ PRODUCT FILTER ============
function filterProd(cat, btn) {
  document.querySelectorAll('.flt').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  document.querySelectorAll('.prod-card').forEach(c => {
    c.classList.toggle('hidden', cat !== 'all' && c.dataset.cat !== cat);
  });
}

// ============ CALCULATOR ============
function doCalc() {
  const t = T[lang];
  const priceEl = document.getElementById('calcProd');
  const qty = parseInt(document.getElementById('calcQty').value);
  const errEl = document.getElementById('calcErr');
  const resEl = document.getElementById('calcResult');

  if (!qty || qty < 1) {
    errEl.style.display = 'block';
    resEl.style.display = 'none';
    return;
  }
  errEl.style.display = 'none';

  const price = parseFloat(priceEl.value);
  const key = priceEl.options[priceEl.selectedIndex].dataset.key;
  calcProductName = key === 'p1' ? t._flyAshName : t._cementName;
  calcPrice = price;
  calcQty = qty;
  const total = price * qty;

  document.getElementById('crProdVal').textContent = calcProductName;
  document.getElementById('crQtyVal').textContent = qty.toLocaleString('en-IN') + ' bricks';
  document.getElementById('crRateVal').textContent = '₹' + price + '/brick';
  document.getElementById('crTotalVal').textContent = '₹' + total.toLocaleString('en-IN');

  resEl.style.display = 'block';
}

function sendWA() {
  const t = T[lang];
  if (!calcQty) { doCalc(); if (!calcQty) return; }
  const total = calcPrice * calcQty;
  const msg = t._waMsg
    .replace('{product}', calcProductName)
    .replace('{qty}', calcQty.toLocaleString('en-IN'))
    .replace('{total}', total.toLocaleString('en-IN'));
  window.open('https://wa.me/919972616695?text=' + encodeURIComponent(msg), '_blank');
}

function printSummary() {
  if (!calcQty) { alert('Please calculate first.'); return; }
  const total = calcPrice * calcQty;
  const ref = 'SCI-' + Date.now().toString(36).toUpperCase();
  const date = new Date().toLocaleDateString('en-IN', {day:'2-digit', month:'long', year:'numeric'});

  const win = window.open('', '_blank');
  win.document.write(`<!DOCTYPE html><html><head><meta charset="UTF-8"><title>Quote — ${ref}</title>
<style>
*{box-sizing:border-box;margin:0;padding:0}body{font-family:Arial,sans-serif;background:#f4f4f4;padding:24px;color:#222}
.pg{max-width:580px;margin:0 auto;background:#fff;border-radius:8px;overflow:hidden;box-shadow:0 4px 16px rgba(0,0,0,.1)}
.hd{background:#111;padding:24px 28px}.hd h1{color:#c9a227;font-size:16px;letter-spacing:.5px;margin-bottom:3px}.hd p{color:#888;font-size:11px}
.notice{background:#fff8e1;border-left:4px solid #c9a227;padding:11px 18px;font-size:12px;color:#7a6000}
.body{padding:24px 28px}
.meta{display:flex;justify-content:space-between;font-size:12px;color:#666;margin-bottom:20px}
table{width:100%;border-collapse:collapse;font-size:13px}
td{padding:10px 12px;border-bottom:1px solid #eee}td:first-child{color:#666;width:40%}td:last-child{font-weight:600}
.tot td{background:#111;color:#c9a227!important;font-size:15px;border:none;font-weight:700}
.disc{margin-top:18px;padding:12px;background:#f9f9f9;border-radius:6px;font-size:11px;color:#999;line-height:1.6}
.ft{padding:14px 28px;text-align:center;border-top:1px solid #eee;font-size:11px;color:#bbb}
@media print{body{background:none;padding:0}.pg{box-shadow:none}}
</style></head><body><div class="pg">
<div class="hd"><h1>SHRI CHANNABASAVESHWARA INDUSTRIES</h1><p>Ankalagi Village, Gokak Taluk, Belagavi District, Karnataka — PIN 591101</p><p>📞 +91 99726 16695 &nbsp;|&nbsp; Available 24/7</p></div>
<div class="notice">📋 This is a <strong>Quote Request Summary</strong> — NOT a payment receipt. No payment has been made.</div>
<div class="body">
<div class="meta"><span><strong>Ref:</strong> ${ref}</span><span><strong>Date:</strong> ${date}</span></div>
<table>
<tr><td>Product</td><td>${calcProductName}</td></tr>
<tr><td>Size</td><td>16 × 8 × 6 inch</td></tr>
<tr><td>Rate per Brick</td><td>₹${calcPrice}</td></tr>
<tr><td>Quantity</td><td>${calcQty.toLocaleString('en-IN')} bricks</td></tr>
<tr class="tot"><td>Estimated Total</td><td>₹${total.toLocaleString('en-IN')}</td></tr>
</table>
<div class="disc">⚠️ <strong>Note:</strong> This is an estimate only. Final price will be confirmed by our team. Payment accepted as Cash or UPI at the time of delivery, as mutually agreed. No payment has been made or received.</div>
</div>
<div class="ft">Thank you for contacting Shri Channabasaveshwara Industries · +91 99726 16695</div>
</div><script>window.onload=()=>window.print()<\/script></body></html>`);
  win.document.close();
}

// ============ FAQ ============
function toggleFaq(btn) {
  const item = btn.parentElement;
  const ans = item.querySelector('.faq-ans');
  const open = item.classList.contains('open');
  document.querySelectorAll('.faq-item').forEach(f => {
    f.classList.remove('open');
    f.querySelector('.faq-ans').style.maxHeight = '0';
  });
  if (!open) {
    item.classList.add('open');
    ans.style.maxHeight = ans.scrollHeight + 'px';
  }
}

// ============ INQUIRY FORM ============
function sendInquiry(e) {
  e.preventDefault();
  const t = T[lang];
  const name = document.getElementById('inqName').value.trim();
  const phone = document.getElementById('inqPhone').value.trim();
  const prod = document.getElementById('inqProd').value;
  const qty = document.getElementById('inqQty').value.trim();
  if (!name || !phone) { alert('Please enter your name and phone number.'); return; }
  const msg = t._inqMsg
    .replace('{name}', name).replace('{phone}', phone)
    .replace('{product}', prod).replace('{qty}', qty || 'Not specified');
  window.open('https://wa.me/919972616695?text=' + encodeURIComponent(msg), '_blank');
  e.target.reset();
}

// ============ LANGUAGE ============
function setLang(l) {
  lang = l;
  document.documentElement.lang = l === 'kn' ? 'kn' : l === 'hi' ? 'hi' : 'en';
  const t = T[l];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const k = el.dataset.i18n;
    if (k && t[k] !== undefined) el.textContent = t[k];
  });
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const k = el.dataset.i18nPh;
    if (k && t[k] !== undefined) el.placeholder = t[k];
  });
  // Update calc select options
  const prodSel = document.getElementById('calcProd');
  if (prodSel) {
    prodSel.options[0].text = '🟤 ' + t._flyAshName + ' — ₹30/brick';
    prodSel.options[1].text = '⬛ ' + t._cementName + ' — ₹34/brick';
  }
}

// ============ SMOOTH SCROLL ============
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const el = document.querySelector(a.getAttribute('href'));
    if (el) { e.preventDefault(); el.scrollIntoView({ behavior:'smooth' }); }
  });
});

// ============ CALC REAL-TIME ============
const calcQtyEl = document.getElementById('calcQty');
if (calcQtyEl) calcQtyEl.addEventListener('input', () => { if (calcQtyEl.value) doCalc(); });
