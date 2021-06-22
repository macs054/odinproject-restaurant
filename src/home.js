import { LoremIpsum } from "lorem-ipsum";

// placeholder
const lorem = new LoremIpsum({
    sentencesPerParagraph: {
        max: 8,
        min: 4
    },
    wordsPerSentence: {
        max: 16,
        min: 4
    }
});

const initHomeContent = () => {
    const container = document.createElement('div');
    container.classList.add('home-container');

    const homeTitle = document.createElement('h3');
    homeTitle.classList.add('home-title');
    homeTitle.textContent = "Lorem Ipsum";

    // placeholder
    const homeContent = document.createElement('p');
    homeContent.classList.add('home-content');
    homeContent.textContent = lorem.generateParagraphs(6);

    container.appendChild(homeTitle);
    container.appendChild(homeContent);

    return container;
}

export default initHomeContent;

