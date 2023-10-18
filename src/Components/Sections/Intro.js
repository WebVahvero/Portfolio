import coverImg from '../../img/sienet.jpg'

export default function Intro() {
    const introSection = document.createElement("section");
    const introTitle = document.createElement("h1");
    const introCover = document.createElement("img");
    const figure = document.createElement("figure");
    const overlay = document.createElement("div");


    introSection.id = "Intro";
    introCover.id = "intro-cover";
    overlay.id = "overlay";
    introCover.setAttribute("src", coverImg)

    introTitle.innerHTML = 'Portfolio <br> Valtteri Kurunsaari'
    
    figure.append(introCover)
    overlay.append(introTitle)
    introSection.append(figure, overlay)

    return introSection;
}