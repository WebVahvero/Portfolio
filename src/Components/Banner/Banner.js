import './banner.style.scss'

export default function Banner() {
    const bannerSection = document.createElement('section');

    bannerSection.id = 'tech-banner';

    const htmlCard = techCardBuilder('HTML', 'fa-brands', 'fa-html5');
    const cssCard = techCardBuilder('CSS', 'fa-brands', 'fa-css3-alt');
    const scssCard = techCardBuilder('Sass', 'fa-brands', 'fa-sass');
    const jsCard = techCardBuilder('Javascript', 'fa-brands', 'fa-js');
    const reactCard = techCardBuilder('React', 'fa-brands', 'fa-react');
    const pythonCard = techCardBuilder('Python', 'fa-brands', 'fa-python');
    const webPackCard = techCardBuilder('Webpack', 'fa-solid', 'fa-cube');
    const jiraCard = techCardBuilder('Jira', 'fa-brands', 'fa-jira');
    const gitCard = techCardBuilder('Git', 'fa-brands', 'fa-git');
    const githubCard = techCardBuilder('GitHub', 'fa-brands', 'fa-github');
    const microsoftCard = techCardBuilder('Microsoft', 'fa-brands', 'fa-microsoft');
    const linuxCard = techCardBuilder('Linux', 'fa-brands', 'fa-linux');

    bannerSection.append(htmlCard, cssCard, scssCard, jsCard, reactCard, pythonCard, webPackCard, jiraCard, gitCard, githubCard, microsoftCard, linuxCard);

    return bannerSection;
}

const techCardBuilder = (techName, iconclass1, iconclass2, iconAnimclass) => {
    let techCard = document.createElement('div');
    let techCardicon = document.createElement('i');
    let techCardTitle = document.createElement('h6');
    
    techCard.id = techName;

    techCard.classList.add('tech-card');
    techCardicon.classList.add(iconclass1);
    techCardicon.classList.add(iconclass2);
    techCardicon.classList.add(iconAnimclass);

    techCardTitle.innerText = techName;

    techCard.append(techCardicon, techCardTitle);

    return techCard;
}