import './index.style.scss';
import Header from './Components/HeaderNavigation/Header';
import Intro from './Components/Intro/Intro'
import About from './Components/About/About';
import Footer from './Components/Footer/Footer';

const Main = () => {
    const mainElement = document.createElement('main');

    mainElement.append(Header(), Intro(), About(), Footer())

    return mainElement;
}

document.body.appendChild(Main());