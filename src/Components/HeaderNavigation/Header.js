import './header.style.scss';
import Navigation from "./Navigation";

export default function Header() {
    const header = document.createElement("header");
    const headerTitle = document.createElement("p");
    const headerSecondarTitle = document.createElement("p");
    const headerWrapper = document.createElement("div");

    headerWrapper.id = "headerWrapper";
    headerTitle.className = "strong"

    headerTitle.innerText = "Portfolio";
    headerSecondarTitle.innerText = "Valtteri Kurunsaari";

    headerWrapper.append(headerTitle, headerSecondarTitle);
    header.append(headerWrapper, Navigation());

    return header;
}