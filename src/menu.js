const data = require('./data/menuItems.json');

const initMenuItems = () => {
    const container = document.createElement('div');
    container.classList.add('menu-container');

    container.appendChild(
        createMenuItem(
            data.menu.items[0].name,
            data.menu.items[0].description,
            data.menu.items[0].img)
    );

    container.appendChild(
        createMenuItem(
            data.menu.items[1].name,
            data.menu.items[1].description,
            data.menu.items[1].img)
    );

    container.appendChild(
        createMenuItem(
            data.menu.items[2].name,
            data.menu.items[2].description,
            data.menu.items[2].img)
    );

    container.appendChild(
        createMenuItem(
            data.menu.items[3].name,
            data.menu.items[3].description,
            data.menu.items[3].img)
    );

    return container;
}


const createMenuItem = (name, description, img) => {
    const menuItem = document.createElement('div');
    const itemName = document.createElement('h3');
    const itemDesc = document.createElement('p');
    const itemImg = document.createElement('img');

    menuItem.classList.add('menu-item');
    itemName.classList.add('menu-item-name');
    itemDesc.classList.add('menu-item-desc');
    itemImg.classList.add('menu-item-img');

    menuItem.appendChild(itemImg);
    menuItem.appendChild(itemName);
    menuItem.appendChild(itemDesc);

    itemName.textContent = name;
    itemDesc.textContent = description;
    itemImg.setAttribute('src', img);
    itemImg.setAttribute('alt', name);

    return menuItem;
}

export default initMenuItems;