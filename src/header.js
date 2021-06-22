import initHomeContent from "./home";
import initMenuItems from "./menu";

const menuItems = ['Home', 'Menu', 'Contact'];

const initHeader = () => {
    const header = document.createElement('header');

    const title = document.createElement('h1');
    title.classList.add('title');
    title.textContent = "Title";

    const nav = document.createElement('nav');
    nav.classList.add('nav');
    addNavItems(menuItems, nav);

    header.appendChild(title);
    header.append(nav);

    return header;
}

const addNavItems = (items, parent) => {
    items.forEach(element => {
        const navItem = document.createElement('div');
        navItem.textContent = element;
        navItem.classList.add('btn');
        navItem.addEventListener('click', () => setSelected(navItem));
        parent.appendChild(navItem);
    });

    parent.firstChild.classList.add('selected');
}

const setSelected = button => {
    const buttons = document.querySelectorAll(".btn");
    buttons.forEach(button => {
        if(button !== this) {
            button.classList.remove('selected');
        }
    });

    button.classList.add('selected');
}

export default initHeader;