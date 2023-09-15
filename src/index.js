import './index.style.scss';

const Main = () => {
    const mainElement = document.createElement('div');

    mainElement.innerHTML = "<p>Hello World!</p>";

    return mainElement;
}

document.body.appendChild(Main());