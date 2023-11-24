import './footer.style.scss';

export default function Footer() {
    const footer = document.createElement("footer");
    const githubLink = document.createElement("a");
    const linkedInLink = document.createElement("a");
    const codepenLink = document.createElement("a");
    
    githubLink.href = 'https://github.com/WebVahvero';
    githubLink.target = '_blank';
    githubLink.innerHTML = '<i class="fa-brands fa-github"></i>';

    linkedInLink.href = 'https://www.linkedin.com/in/valtteri-kurunsaari-b40410207/';
    linkedInLink.target = '_blank';
    linkedInLink.innerHTML = '<i class="fa-brands fa-linkedin"></i>';

    codepenLink.href = 'https://codepen.io/webvahvero';
    codepenLink.target = '_blank';
    codepenLink.innerHTML = '<i class="fa-brands fa-codepen"></i>';

    footer.append(githubLink, linkedInLink, codepenLink);

    return footer;
}