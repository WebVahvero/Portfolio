export default function Navigation() {
    const navigation = document.createElement("nav");
    const unorderedList = document.createElement("ul");
    const navItems = ["Intro", "About", "Projects"]

    for (let nItems of navItems) {
        let listitem = document.createElement("li");
        listitem.innerHTML = `<li><a href="#${nItems}">${nItems}</a></li>`
        unorderedList.appendChild(listitem)
    }

    navigation.appendChild(unorderedList)

    return navigation;
}