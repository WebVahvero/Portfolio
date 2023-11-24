import './index.style.scss';
import Header from './Components/HeaderNavigation/Header';
import Intro from './Components/Intro/Intro'
import About from './Components/About/About';
import Banner from './Components/Banner/Banner';
import Projects from './Components/Projects/Projects';
import Footer from './Components/Footer/Footer';

const Main = () => {
    const mainElement = document.createElement('main');
    const fontAwesomeLink = document.createElement('script');

    fontAwesomeLink.src = "https://kit.fontawesome.com/b624cfda5b.js";
    fontAwesomeLink.crossorigin = "anonymous";

    mainElement.append(Header(), Intro(), About(), Banner(),Projects(), Footer(), fontAwesomeLink)

    return mainElement;
}

document.body.appendChild(Main());