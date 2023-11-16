import './footer.style.scss';

export default function Footer() {
    const footer = document.createElement("footer");
    const githubLink = document.createElement("a");
    const linkedInLink = document.createElement("a");
    const codepenLink = document.createElement("a");
    
    githubLink.href = 'https://github.com/WebVahvero';
    githubLink.innerText = 'GitHub';

    linkedInLink.href = 'https://www.linkedin.com/in/valtteri-kurunsaari-b40410207/';
    linkedInLink.innerText = 'LinkedIn';

    codepenLink.href = 'https://codepen.io/webvahvero';
    codepenLink.innerText = 'Codepen';

    footer.append(githubLink, linkedInLink, codepenLink);

    return footer;
}