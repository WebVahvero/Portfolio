import './index.style.scss';
import Header from './Components/HeaderFooter/Header';
import Intro from './Components/Sections/Intro'

const Main = () => {
    const mainElement = document.createElement('main');

    mainElement.append(Header(), Intro())

    return mainElement;
}

document.body.appendChild(Main());