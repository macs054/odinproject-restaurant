import initHeader from "./header";
import initHomeContent from "./home";
import initFooter from "./footer";
import './style.css';
import initMenuItems from "./menu";
import initContactContent from "./contact";

const content = () => {
    const content = document.createElement('div');
    content.id = 'content';

    const contentContainer = document.createElement('div');
    contentContainer.classList.add('main-container');
    contentContainer.appendChild(initMenuItems());

    content.appendChild(initHeader());
    content.appendChild(contentContainer);
    content.appendChild(initFooter());

    return content;
}

const setNavigation = () => {
    const nav = document.querySelector('.nav');
    
    nav.childNodes[0].addEventListener('click', () => loadContent(initHomeContent()));
    nav.childNodes[1].addEventListener('click', () => loadContent(initMenuItems()));
    nav.childNodes[2].addEventListener('click', () => loadContent(initContactContent()));
}

const loadContent = (content) => {
    const main = document.querySelector('.main-container');
    main.textContent = "";
    main.appendChild(content);
}

document.body.appendChild(content());

setNavigation();