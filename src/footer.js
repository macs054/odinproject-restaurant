const initFooter = () => {
    const footer = document.createElement('footer');
    const footerContent = document.createElement('h4');

    footerContent.textContent = "Footer";

    footer.appendChild(footerContent);

    return footer;
}

export default initFooter;