// Define language reload anchors
var dataReload = document.querySelectorAll("[data-reload]")

// Language translations
var language = {
    fin: {
        aboutLinkJs: "Minusta",
        skillsLinkJs: "Taidot",
        projectsLinkJs: "Projektit",

        welcome: "Tervetuloa ja kiitos, että päätit vierailla Portfoliosivustollani!",
        aboutMeJs: "Tässä hieman minusta",
        aboutmeText1Js: "Olen 24-vuotias ja opiskelen tällä hetkellä Tietojenkäsittelyä Vaasan Ammattikorkeakoulussa.",
        aboutmeText2Js: "Kiinnostukseni kohteisiin kuuluu erityisesti verkkosivustojen ja -ohjelmistojen kehitys, sekä niiden suunnittelu.",
        aboutmeText3Js: "Työkokemusta minulta löytyy muutama vuosi ravintola-alalta, mutta kokemusta IT-alalla työskentelystä minulla on vain työharjoittelusta Webaulalla.",
        aboutmeText4Js: "Vapaa-aikaani vietän mielelläni omien koodaus/ohjelmointi projektien sekä liikunnan parissa. Pidän myös paljon erilaisten ruokien ja leivonnaisten valmistamisesta.",

        aboutSchoolJs: "Koulutus",
        aboutSchoolText1Js: "Vaasan ammattikorkeakoulu, Tietojenkäsittelyn tradenomi, AMK (03.09.2019 - jatkuu)",
        aboutSchoolText2Js: "Koulutuskeskus Sedu Lapua, Hotelli-, Ravintola- ja Catering -alan perustutkinto (12.08.2013 - 18.12.2015)",
        aboutSchoolBtnJs: "Katso arvosanani",

        aboutWorkJs: "Työkokemus",
        workExp1Js: "Työskentelin ravintolakokkina huvipuisto Powerparkin ravintoloissa vuosien 2014–2016 ja 2020 kesinä.",
        workExp2Js: "Työtehtäviini kuului tavanomaiset keittiön tehtävät kuten keittiönkunnossapito, kuormanpurkaminen ja esivalmisteiden valmistaminen. Valmistin a la carte annoksia, hampurilaisia, pizzoja ja lounas ruokia.",
        workExp3Js: "Työskentelin Savonlinnan OperaGrillissä ravintolakokkina kahtena kesänä vuosina 2017 ja 2018.",
        workExp4Js: "Työtehtäviini kuului tavanomaiset keittiön tehtävät kuten keittiönkunnossapito, kuormanpurkaminen ja esivalmisteiden valmistaminen. Valmistin a la carte annoksia ja hampurilaisia käyttäen hiiligriiliä.",
        workExp5Js: "Työskentelin yrityksessä määräaikaisena työntekijänä vuosina 2017, 2018 ja 2019.",
        workExp6Js: "Tehtävänä yrityksessä oli a la carte annosten, pizzojen ja lounasruokien valmistaminen sekä tavanomaiset keittiön tehtävät kuten keittiönkunnossapito, kuormanpurkaminen ja esivalmisteiden valmistaminen.",
        workExp7Js: "Olin töissä Pancho Villassa alkuvuoden ja kesän 2021.",
        workExp8Js: "Tehtävänä yrityksessä oli annosten kuten hampurilaisten ja meksikolaistyylisten annosten valmistaminen ja keittiön tavanomaiset kuten keittiönkunnossapito, kuormanpurkaminen ja esivalmisteiden valmistaminen.",
        workExp9Js: "Työharjoittelijana WebAulalla 13.9.2021 - 18.2.2022.",
        workExp10Js: "Ensimmäinen IT-alan työ. Tehtävänä yrityksessä Wordpress sivustojen rakentaminen, testaaminen ja sisällönpäivitys asiakas yrityksille.",

        skillsTitleJs: "Osaaminen",
        desingTitleJs: "Suunnittelu",
        desingText1Js: "Aloitan usein verkkosivujen tekemisen suunnittelemalla niiden ulkoasun. Ulkoasun suunnitteluun käytän Figmaa, jonka olen havainnut olevan itselleni mieluisin. Myös Adobe XD on tuttu, mutta sen käyttö on jäänyt vähemmälle.",
        desingText2Js: "Kuvia tai logoja muokkaan Photoshopilla, gimpillä tai inkscapella.",
        frontTitleJs: "Frontend teknologiat",
        frontText1Js: "Verkkosivujen julkisivun rakentaminen luonnistuu minulta luontevasti HTML ja CSS teknologioita käyttäen. Koen että osaan html ja css teknologiat hyvin, sillä saan niillä aikaiseksi kaiken mitä yritän niillä saavuttaa.  Olen myös kiinnostunut lisäämään käytettävyyttä ja saatavuutta verkkosivuillani ja olen aina kiinnostunut kehittymään sen saralla.",
        frontText2Js: "Javascriptin avulla luon interaktiivisuutta verkkosivuille. Osaan tehdä yleisiä DOM manipulaatioita sen avulla. Pyrin jatkuvasti kehittämään taitojani javascriptin kanssa ja tavoitteenani on tulevaisuudessa opetella jokin frameworkki kuten React tai Vue.js.",
        backTitleJs: "Backend teknologiat",
        backText1Js: "Dynaamisuuta luon sivustoille käyttäen PHPta, joka on minulle tutuin palvelinpuolen skriptikieli. En ole käyttänyt PHPta koulun ulkopuolella usein, mutta se on tällä hetkellä harjoittelussa.",
        backText2Js: "Osaan SQL kysely kieltä ihan hyvin. Tietokantana minulle tutuimmat ovat MySQL ja MariaDB. Relaatiotietokantojen suunnittelussa koen tarvitsevani vielä harjoitusta, sillä kaikki kokemukseni tulee siitä pelkästään koulusta.",
        wordpressTitleJs: "Wordpress",
        worpressText1Js: "Wordpress sivustojen tekemisestä minulla on aitoa työkokemusta ja koen hallitsevani sen hyvin. Wordpressillä olen tehnyt useita sivustoja yrityksille käyttäen lisäosia kuten Elementor, Woocommerce, Polylang, FacetWP ja Gravityforms.",
        versionTitleJs: "Versionhallinta",
        versionTextJs: "Versionhallintana minulle tutuin on git ja käytän sitä GitHubin kanssa.",
        basicTitleJs: "Teknologiat, joista hallitsen perusteet",
        basicText1Js: "Koulussa käytimme ohjelmoinnin opiskeluun C# kieltä ja olen tehnyt muutamia yksinkertaisia ohjelmia sen avulla koulussa, mutta en ole käyttänyt sitä henkilökohtaisten projektien tekemiseen.",
        basicText2Js: "Pythonin opettelin mielenkiinnosta ja olen tehnyt muutamia perusteiden opetteluun soveltuvia ohjelmia sillä.",
        basicText3Js: "Minulla on myös kokemusta Power BI datan visualisointi ohjelmasta ja hallitsen siitä perusteet.",

        projectsTitleJs: "Projektini",
        cardFrontTitle1Js: "Ruoka blogi",
        cardBackTitle1Js: "Ruokablogi",
        cardText1Js: "Tämän projektin tarkoituksena oli staattinen verkkosivusto, johon lisäilisin muutamia ruokia joita olene tehnyt. Ruokapostauksiin sisältyy kuvia annoksesta, tarvittavat aineet ja ohjeet sen valmistamiseen. Verkkosivun frontin valmistumisen jälkeen olisi tarkoituksena lisätä projektiin backend ja mahdollisuus muuttaa annoskokoja reseptissä",
        cardFrontTitle2Js: "Ruoka- arvostelu generaattori",
        cardBackTitle2Js: "Ruoka- arvostelu generaattori",
        cardText2Js: "Tämän projektin tarkoituksena oli tehdä satiirinen generaattori ja opetella JavaScriptin arrayta, sekä DOM manipulointia.",
        cardLinkJs: "Sivulle",

        thoughtsTitleJs: "Ajatuksia taidoista ja kiinnostuksenkohteista",
        thoughtsText1Js: "Olen todella kiinnostunut verkkosivujen kehityksestä ja jatkuvasti kertaan vanhoja jo opittuja asioita sekä perehdyn uusiin aina kun löydän niille aikaa opiskelujen ja muiden töiden ohella. Verkkosivustojen kehityksessä olen eniten perehtynyt sivustojen frontendin kehittämiseen, mutta tavoitteenani on myös backend puolen kehityksen hallitseminen.",
        thoughtsText2Js: "Verkkosivujen kehityksen lomassa olen myös löytänyt itseni digitaalisen markkinoinnin ja Google markkinoinnin kursseilta, joihin päädyin tutustuessani verkkosivustojen saatavuuteen ja käytettävyyteen. Edellä mainittuihin perehtyessäni törmäsin yhä useammin lauseeseen ”tällä on vaikutusta hakukonenäkyvyyteen”, joten aloin miettimään että verkkosivut ovat usein aika hyödyttömiä jos niitä ei kukaan löydä mikä johti siihen, että aloitin siihen perehtymisen ja ehkä jopa tuleva opinnäytetyöni voi olla aiheeseen liittyvä.",
    },
    eng: {
        aboutLinkJs: "About",
        skillsLinkJs: "Skills",
        projectsLinkJs: "Projects",

        welcome: "Welcome and thank you for visiting my Portfolio Website!",
        aboutMeJs: "About me",
        aboutmeText1Js: "I am 24-years old, and I study Information Technology at Vaasa University of Applied Sciences.",
        aboutmeText2Js: "My interests are the development and design of websites and software",
        aboutmeText3Js: "I have few years of work experience in the restaurants as a chef, but I only have experience working in the IT field from the internship at Webaula.",
        aboutmeText4Js: "In my free time, I do various programming projects and exercises. I also like do sports and cooking.",

        aboutSchoolJs: "School",
        aboutSchoolText1Js: "Vaasa University of Applied Sciences, Bachelor of Information Technology, (03.09.2019 - ongoing)",
        aboutSchoolText2Js: "Vocational school Sedu Lapua, Hotel-, Restauranta- and Catering (12.08.2013 - 18.12.2015)",
        aboutSchoolBtnJs: "Grades",

        aboutWorkJs: "Work",
        workExp1Js: "I worked as a restaurant chef in the restaurants of the amusement park Powerpark in the summers of 2014–2016 and 2020.",
        workExp2Js: "My job included routine kitchen tasks such as kitchen maintenance, unloading, and making preparations. I made a la carte dishes, burgers, pizzas and lunch dishes.",
        workExp3Js: "I worked at OperaGrill in Savonlinna as a restaurant chef for two summers in 2017 and 2018.",
        workExp4Js: "My job included routine kitchen tasks such as kitchen maintenance, unloading, and making preparations. I made a la carte dishes and burgers using charcoal grill.",
        workExp5Js: "I worked for the company as a temporary employee in 2017, 2018 and 2019.",
        workExp6Js: "The task of the company was to prepare a la carte dishes, pizzas and lunch dishes, as well as the usual kitchen tasks such as kitchen maintenance, unloading and making preparations.",
        workExp7Js: "I worked at Pancho Villa as a chef in 2021.",
        workExp8Js: "The task of the company was to prepare portions such as burgers and Mexican-style dishes and usual kitchen tasks such as kitchen maintenance, unloading and pre-preparations.",
        workExp9Js: "Trainee at WebAula 13.9.2021 - 18.2.2022.",
        workExp10Js: "First position in IT-field. My tasks included making, testing wordpress and content management sites for customers companies.",
        skillsTitleJs: "Skills",

        desingTitleJs: "Design",
        desingText1Js: "I often start making websites by designing layout. To design the layout, I usually use Figma, which I have found to be my favorite. Adobe XD is also familiar, but I don't use it regularly.",
        desingText2Js: "I usually edit images or logos with Photoshop, Gimp, or Inkscape.",
        frontTitleJs: "Frontend technologies",
        frontText1Js: "I like making facades for web pages using html and css. I feel that I know html and css technologies well, because I can do everything, I try to achieve with them. I am also interested in increasing the usability and accessibility of my website and I am always interested in evolving in it.",
        frontText2Js: "With Javascript, I create interactivity for websites. I can do general DOM manipulations with it. I am constantly striving to develop my skills with javascript and my goal in the future is to learn some framework like React or Vue.js.",
        backTitleJs: "Backend technologies",
        backText1Js: "I create dynamics for websites using PHP, which is the most familiar server-side scripting language for me. I haven’t used PHP outside of school often, but it’s currently in practice.",
        backText2Js: "I know the SQL query language just fine. The most familiar database to me is MySQL and MariaDB. In designing relational databases, I feel I still need practice, because all my experience comes from school alone.",
        wordpressTitleJs: "Wordpress",
        worpressText1Js: "I have real work experience in making Wordpress sites and I feel that I master it well. With Wordpress, I’ve made several websites for businesses using add-ons like Elementor, Woocommerce, Polylang, FacetWP, and Gravityforms.",
        versionTitleJs: "Version control",
        versionTextJs: "As a version control, the most familiar to me is git and I use it with GitHub.",
        basicTitleJs: "Technologies I master the basics of",
        basicText1Js: "At school, we used C # to study programming and I’ve done a few simple programs with it at school, but I haven’t used it to do personal projects.",
        basicText2Js: "I learned Python because of interest and have done a few programs to learn the basics.",
        basicText3Js: "I also have experience with the Power BI data visualization program, and I master the basics.",

        projectsTitleJs: "My Projects",
        cardFrontTitle1Js: "Food Blog",
        cardBackTitle1Js: "FoodBlog",
        cardText1Js: "The purpose of this project was a static website to which I would add a few dishes I have made. Food posts include pictures of the dish, the ingredients needed, and instructions for making it. After the completion of the Front of the website, the intention would be to add a backend to the project and the possibility to change the portion sizes in the recipe",
        cardFrontTitle2Js: "Food Review Generator",
        cardBackTitle2Js: "Food Review Generator",
        cardText2Js: "The purpose of this project was to make a satirical generator and learn JavaScript array, as well as DOM manipulation.",
        cardLinkJs: "To Website",

        thoughtsTitleJs: "Thoughts on skills and interests",
        thoughtsText1Js: "I am really interested in the development of websites and constantly review old things that have already been learned, as well as getting acquainted with new ones whenever I find time for them, in addition to studies and other work. In website development, I am most familiar with developing the frontend of websites, but my goal is also to master the development of the backend side.",
        thoughtsText2Js: "In the midst of website development, I have also found myself taking courses in digital marketing and Google marketing, which I ended up learning about the accessibility and usability of websites. As I became acquainted with the above, I came across the phrase “this has an effect on search engine visibility” more and more, so I started to think that websites are often useless if no one finds them, which led me to start learning about them and maybe even my future thesis may be related.",
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
        aboutWork.textContent = language.eng.aboutWorkJs;
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
        basicText3.textContent = language.eng.basicText3Js;

        projectsTitle.textContent = language.eng.projectsTitleJs;
        cardFrontTitle1.textContent = language.eng.cardFrontTitle1Js;
        cardBackTitle1.textContent = language.eng.cardBackTitle1Js;
        cardText1.textContent = language.eng.cardText1Js;
        cardFrontTitle2.textContent = language.eng.cardFrontTitle2Js;
        cardBackTitle2.textContent = language.eng.cardBackTitle2Js;
        cardText2.textContent = language.eng.cardText2Js;
        cardLink.textContent = language.eng.cardLinkJs;

        thoughtsTitle.textContent = language.eng.thoughtsTitleJs;
        thoughtsText1.textContent = language.eng.thoughtsText1Js;
        thoughtsText2.textContent = language.eng.thoughtsText2Js;
    }
}

// Define language reload onclick iteration
for (k = 0; k <= dataReload.length - 1; k++) {
    dataReload[k].onclick = function() {
        setTimeout(function () {
            location.reload(true);
        }, 100) //timer as ms
    }
}