import './projects.style.scss';
import data from '../../data/experience.json'

export default function Projects() {
    const projectSection = document.createElement("section");
    const projectSecTitle = document.createElement('h2');
    const projectWrapper = document.createElement('div');

    projectSecTitle.innerText = 'Projects';

    projectSection.id = 'Projects';
    projectWrapper.id = 'project-wrapper';
    projectWrapper.classList.add("card-wrap")

    for (let project of data.projects) {
        let projectCard = document.createElement("div");
        projectCard.id = 'project';
        projectCard.classList.add("card");
        projectCard.innerHTML += `
        <div class="card-header">
            <h4>${project.name}</h4>
            <a href=${project.link} target="_blank">
                <button>
                    <span class="code-bracket">&lt;</span>${project.name} GitHub Repo<span class="code-bracket">/&gt;</span>
                </button>
            </a>
        </div>
        <p>${project.description}</p>
        <div class="tools">${getIcon(project.tools)}</div>
        <div class="card-footer">
            <p class="small-p">Created: ${project.created}</p>
            <p class="small-p">Updated: ${project.updated}</p>
        </div>
        `;
        projectWrapper.append(projectCard);
    }

    projectSection.append(projectSecTitle, projectWrapper);

    return projectSection;
}

function getIcon(iconlist) {
    let tooldiv = '';
    for (let icon of iconlist) {
        tooldiv += `<i class="fa-brands fa-${icon}"></i>`;
    }
    return tooldiv;
}