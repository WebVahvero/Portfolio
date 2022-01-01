// Define language reload anchors
var dataReload = document.querySelectorAll("[data-reload]")

// Language translations
var language = {
    fin: {
        aboutLinkJs: "Minusta",
        skillsLinkJs: "Osaaminen",
        projectsLinkJs: "Projektit",
        welcome: "Tervetuloa ja kiitos, että päätit vierailla Portfoliosivustollani!",
        aboutMeJs: "Tässä hieman minusta",
        aboutmeText1Js: "Olen 24-vuotias ja opiskelen tällähetkellä Vaasan Ammattikorkeakoulussa Tietojenkäsittelyä",
        aboutmeText2Js: "Kiinnostukseni kohteisiin kuuluu erityisesti verkkosivustojen ja -ohjelmistojen kehitys, sekä niiden suunnittelu",
        aboutmeText3Js: "Työkokemusta minulta löytyy muutama vuosi ravintola-alalta, mutta kokemusta IT-alalla työskentelystä minulla on vain työharjoittelusta, jota suoritan tällähetkellä",
        aboutmeText4Js: "Vapaa-aikaani vietän mielelläni omien koodaus/ohjelmointi projektien ja liikunnan parissa. Pidän myös paljon erillaisten ruokien ja leivonnaisten valmistamisesta",
        aboutSchoolJs: "Koulutus",
        aboutSchoolText1Js: "Vaasan ammattikorkeakoulu, Tietojenkäsittelyn tradenomi, AMK (03.09.2019 - jatkuu)",
        aboutSchoolText2Js: "Koulutuskeskus Sedu Lapua, Hotelli-, Ravintola- ja Catering -alan perustutkinto (12.08.2013 - 18.12.2015)",
        aboutSchoolBtnJs: "Katso arvosanani",
        workExp1Js: "Työskentelin ravintolakokkina huvipuisto Powerparkin ravintoloissa",
        workExp2Js: "Tehtävänä yrityksessä oli a la carte ja lounas ruokien valmistus ja keittiön tavanomaiset työt",
        workExp3Js: "Työskentelin Savolinnan OperaGrillissä kahtena kesänä vuosina 2017 ja 2018",
        workExp4Js: "Tehtävänä yrityksessä oli a la carte annosten valmistaminen ja keittiön tavanomaiset työt",
        workExp5Js: "Työskentelin yrityksessä määräaikaisena työntekijänä vuosina 2017, 2018 ja 2019",
        workExp6Js: "Tehtävänä yrityksessä oli a la carte annosten valmistaminen ja keittiön tavanomaiset työt",
        workExp7Js: "Olin töissä Pancho Villassa alkuvuoden ja kesän 2021",
        workExp8Js: "Tehtävänä yrityksessä oli annosten kuten hampurilaisten ja meksikolaistyylisten annosten valmistaminen ja keittiön tavanomaiset työt",
        workExp9Js: "Työharjoittelijana WebAulalla 13.9.2021 - 17.2.2022",
        workExp10Js: "Ensimmäinen IT-alan työ. Tehtävänä yrityksessä Wordpress sivustojen rakentaminen, testaaminen ja sisällönpäivitys asiakas yrityksille",

        skillsTitleJs: "Osaaminen",
        desingTitleJs: "Suunnittelu",
        desingText1Js: "Aloitan usein verkkosivujen tai ohjelmien tekemisen suunnittelemalla niiden ulkoasun. Ulkoasun suunnitteluun käytän yleensä Figmaa, jonka olen havainnut olevan itselleni mieluisin. Myös Adobe XD on tuttu, mutta sitä en käytä säännöllisesti",
        desingText2Js: "Kuvia tai logoja muokkaan yleensä Photoshopilla, gimpillä tai inkscapella",
        frontTitleJs: "Frontend teknologiat",
        frontText1Js: "Verkkosivujen julkisivun rakentaminen luonnistuu minulta luontevasti HTLM ja CSS teknologioita käyttäen.",
        frontText2Js: "Sivustoihin interaktiivisuutta lisään käyttäen JavaScriptiä ja sen frameworkkeja sekä kirjastoja",
        frontText3Js: "Olen myös kiinnostunut oppimaan lisää JavaScriptin frameworkkeja",
        backTitleJs: "Backend teknologiat",
        backText1Js: "Dynaamisuuta luon sivustoille käyttäen PHPta, joka on minulle tutuin palvelinpuolen skriptikieli.",
        backText2Js: "Tietokantoja olen rakentanut käyttäen MySql tietokantaa.",
        wordpressTitleJs: "Wordpress",
        worpressText1Js: "Wordpressillä olen tehnyt useita sivustoja yrityksille käyttäen lisäosia kuten Elementor, Woocommerce, Polylang, FacetWP ja Gravityforms",
        versionTitleJs: "Versionhallinta",
        versionTextJs: "Versionhallintana minulle tutuin on git ja käytän sitä GitHubin kanssa.",
        basicTitleJs: "Teknologiat, joista hallitsen perusteet",
        basicText1Js: "Koulussa käytimme ohjelmoinnin opiskeluun C# kieltä ja olen tehnyt muutamia yksinkertaisia ohjelmia sen avulla, mutta en ole käyttänyt sitä henkilökohtaisten projektien tekemiseen.",
        basicText2Js: "Pythonin opettelin mielenkiinnosta ja olen tehnyt muutamia perusteiden opetteluun soveltuvia ohjelmia sillä.",

        projectsTitleJs: "Projektini",
        cardFrontTitle1Js: "Ruoka blogi",
        cardBackTitle1Js: "Ruokablogi",
        cardText1Js: "Tämän projektin tarkoituksena oli staattinen verkkosivusto, johon lisäilisin muutamia ruokia joita olene tehnyt. Ruokapostauksiin sisältyy kuvia annoksesta, tarvittavat aineet ja ohjeet sen valmistamiseen. Verkkosivun frontin valmistumisen jälkeen olisi tarkoituksena lisätä projektiin backend ja mahdollisuus muuttaa annoskokoja reseptissä",
        cardLinkJs: "Sivulle",
    },
    eng: {
        aboutLinkJs: "About Me",
        skillsLinkJs: "Skills",
        projectsLinkJs: "Projects",
        welcome: "Welcome and thank you for visiting my Portfolio Website!",
        aboutMeJs: "About me",
        aboutmeText1Js: "I am 24-years old and I study Information Technology at Vaasa University of Applied Sciences",
        aboutmeText2Js: "My interests are the development and design of websites and software",
        aboutmeText3Js: "I have few years of work experience in the restaurants as a chef, but I only have experience working in the IT field from the internship",
        aboutmeText4Js: "In my free time, I do various programming projects and exercise, such as running or the gym. I also like cooking",
        aboutSchoolJs: "School",
        aboutSchoolText1Js: "Vaasa University of Applied Sciences, Bachelor of Information Technology, (03.09.2019 - ongoing)",
        aboutSchoolText2Js: "Vocational school Sedu Lapua, Hotel-, Restauranta- and Catering (12.08.2013 - 18.12.2015)",
        aboutSchoolBtnJs: "Grades",
        workExp1Js: "My position in this workplace  was a chef",
        workExp2Js: "My tasks as a chef included cooking a la carte and lunch dishes and common restaurant tasks",
        workExp3Js: "I worked as chef two summers in 2017 and 2018 at Opera Grill.",
        workExp4Js: "My tasks as a chef included cooking a la carte and lunch dishes and common restaurant tasks",
        workExp5Js: "I worked ar Rosso as a chef in 2017, 2018 ja 2019",
        workExp6Js: "My tasks as a chef included cooking a la carte and lunch dishes and common restaurant tasks",
        workExp7Js: "I worked at Pancho Villa as a chef in 2021",
        workExp8Js: "My tasks as a chef included cooking a la carte and lunch dishes and common restaurant tasks",
        workExp9Js: "Trainee at WebAula 13.9.2021 - 17.2.2022",
        workExp10Js: "First position in IT-field. My tasks included making, testing wordpress and content management sites for customers companies",
        skillsTitleJs: "Skills",

        desingTitleJs: "Design",
        desingText1Js: "I often start making websites or programs by designing layout. To design the layout, I usually use Figma, which I have found to be my favorite. Adobe XD is also familiar, but I don't use it regularly",
        desingText2Js: "I usually edit images or logos with Photoshop, Gimp, or Inkscape",
        frontTitleJs: "Frontend technologies",
        frontText1Js: "Building a website facade is easy using html, css and javascript.",
        frontText2Js: "I create interactivity for websites using Javascript and its libraries/Frameworks",
        frontText3Js: "I am also interested learning more about JavaScript Frameworks",
        backTitleJs: "Backend technologies",
        backText1Js: "I create dynamics for websites using PHP, which is the most familiar server-side scripting language for me.",
        backText2Js: "The databases I have built use the MySql database.",
        wordpressTitleJs: "Wordpress",
        worpressText1Js: "With Wordpress, I’ve made several websites for businesses using add-ons like Elementor, Woocommerce, Polylang, FacetWP, and Gravityforms",
        versionTitleJs: "Version control",
        versionTextJs: "As a version control, the most familiar to me is git and I use it with GitHub.",
        basicTitleJs: "Technologies I master the basics of",
        basicText1Js: "At school, we used C # to study programming and I’ve done a few simple programs with it, but I haven’t used it to do personal projects.",
        basicText2Js: "I learnet Python because of interest and have done a few programs to learn the basics.",

        projectsTitleJs: "My Projects",
        cardFrontTitle1Js: "Food Blog",
        cardBackTitle1Js: "FoodBlog",
        cardText1Js: "The purpose of this project was a static website to which I would add a few dishes I have made. Food posts include pictures of the dish, the ingredients needed, and instructions for making it. After the completion of the Front of the website, the intention would be to add a backend to the project and the possibility to change the portion sizes in the recipe",
        cardLinkJs: "To Website",
    }
};

// Define language via window hash
if (window.location.hash) {
    if (window.location.hash === "#eng") {
        aboutLink.textContent = language.eng.aboutLinkJs;
        skillsLink.textContent = language.eng.skillsLinkJs;
        projectsLink.textContent = language.eng.projectsLinkJs;
        greeting.textContent = language.eng.welcome;
        aboutMe.textContent = language.eng.aboutMeJs;
        aboutmeText1.textContent = language.eng.aboutmeText1Js;
        aboutmeText2.textContent = language.eng.aboutmeText2Js;
        aboutmeText3.textContent = language.eng.aboutmeText3Js;
        aboutmeText4.textContent = language.eng.aboutmeText4Js;
        aboutSchool.textContent = language.eng.aboutSchoolJs;
        aboutSchoolText1.textContent = language.eng.aboutSchoolText1Js;
        aboutSchoolText2.textContent = language.eng.aboutSchoolText2Js;
        aboutSchoolBtn.textContent = language.eng.aboutSchoolBtnJs;
        workExp1.textContent = language.eng.workExp1Js;
        workExp2.textContent = language.eng.workExp2Js;
        workExp3.textContent = language.eng.workExp3Js;
        workExp4.textContent = language.eng.workExp4Js;
        workExp5.textContent = language.eng.workExp5Js;
        workExp6.textContent = language.eng.workExp6Js;
        workExp7.textContent = language.eng.workExp7Js;
        workExp8.textContent = language.eng.workExp8Js;
        workExp9.textContent = language.eng.workExp9Js;
        workExp10.textContent = language.eng.workExp10Js;
        skillsTitle.textContent = language.eng.skillsTitleJs;

        desingTitle.textContent = language.eng.desingTitleJs;
        desingText1.textContent = language.eng.desingText1Js;
        desingText2.textContent = language.eng.desingText2Js;
        frontTitle.textContent = language.eng.frontTitleJs;
        frontText1.textContent = language.eng.frontText1Js;
        frontText2.textContent = language.eng.frontText2Js;
        frontText3.textContent = language.eng.frontText3Js;
        backTitle.textContent = language.eng.backTitleJs;
        backText1.textContent = language.eng.backText1Js;
        backText2.textContent = language.eng.backText2Js;
        wordpressTitle.textContent = language.eng.wordpressTitleJs;
        worpressText1.textContent = language.eng.worpressText1Js;
        versionTitle.textContent = language.eng.versionTitleJs;
        versionText.textContent = language.eng.versionTextJs;
        basicTitle.textContent = language.eng.basicTitleJs;
        basicText1.textContent = language.eng.basicText1Js;
        basicText2.textContent = language.eng.basicText2Js;

        projectsTitle.textContent = language.eng.projectsTitleJs;
        cardFrontTitle1.textContent = language.eng.cardFrontTitle1Js;
        cardBackTitle1.textContent = language.eng.cardBackTitle1Js;
        cardText1.textContent = language.eng.cardText1Js;
        cardLink.textContent = language.eng.cardLinkJs;
    }
}

// Define language reload onclick iteration
for (i = 0; i <= dataReload.length - 1; i++) {
    dataReload[i].onclick = function() {
        setTimeout(function () {
            location.reload(true);
        }, 100) //timer as ms
    }
}