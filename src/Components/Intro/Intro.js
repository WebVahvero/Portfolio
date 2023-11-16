import './intro.style.scss';
import SeasonalBg from './seasonalBg';

export default function Intro() {
    const introSection = document.createElement("section");
    const introTitle = document.createElement("h1");
    const overlay = document.createElement("div");

    introSection.id = "Intro";
    introTitle.id = "intro-title";
    overlay.id = "overlay";

    introTitle.innerHTML = 'Portfolio <br> Valtteri Kurunsaari'

    introSection.style.backgroundImage = `url(${SeasonalBg()})`
    
    introSection.append(introTitle, overlay)

    return introSection;
}