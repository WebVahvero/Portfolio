import './index.style.scss';
import './Components/Header'
import Header from './Components/Header';

const Main = () => {
    const mainElement = document.createElement('main');

    mainElement.append(Header())

    return mainElement;
}

document.body.appendChild(Main());