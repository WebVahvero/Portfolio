import './index.style.scss';
import Header from './Components/HeaderNavigation/Header';
import Intro from './Components/Intro/Intro'

const Main = () => {
    const mainElement = document.createElement('main');

    mainElement.append(Header(), Intro())

    return mainElement;
}

document.body.appendChild(Main());