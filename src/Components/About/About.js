import './about.style.scss';
import data from '../../data/experience.json'

export default function About() {
    const aboutSection = document.createElement('section');
    const aboutTitle = document.createElement('h2');
    
    const educationDiv = document.createElement('div');
    const eduTitle = document.createElement('h3');

    const workDiv = document.createElement('div');
    const workTitle = document.createElement('h3');

    const experienceDiv = document.createElement('div');

    const eduCards = document.createElement('div');
    const workCards = document.createElement('div');

    aboutSection.id = 'About';
    educationDiv.id = 'education';
    workDiv.id = 'work';
    experienceDiv.id = 'experience';

    eduCards.id = 'edu-cards';
    workCards.id = 'work-cards';

    eduCards.classList.add("card-wrap");
    workCards.classList.add("card-wrap");

    aboutTitle.innerText = 'About';
    eduTitle.innerText = 'Education';
    workTitle.innerText = 'Work experience';

    for (let edu of data.education) {
        let eduItem = document.createElement("div");
        eduItem.id = 'education-item';
        eduItem.classList.add("card");
        eduItem.innerHTML += `
        <h4>${edu.school}</h4>
        <h5>${edu.degree}</5>
        <p>${edu.description}<p>
        <p>${edu.startDate} - ${edu.endDate}<p>
        `;
        eduCards.append(eduItem);
    }

    for (let work of data.work) {
        let workItem = document.createElement("div");
        workItem.id = 'work-item';
        workItem.classList.add("card");
        workItem.innerHTML += `
        <h4>${work.workplace}</h4>
        <h5>${work.title}</5>
        <p>${work.description}<p>
        <p>${work.startDate} - ${work.endDate}<p>
        `;
        workCards.append(workItem);
    }

    educationDiv.append(eduTitle, eduCards);
    workDiv.append(workTitle, workCards);

    experienceDiv.append(educationDiv, workDiv)

    aboutSection.append(aboutTitle, experienceDiv);

    console.log(data.education[0])

    return aboutSection;
}