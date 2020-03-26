import "./styles.scss";

import { redirect } from "../../scripts/redirectTo";

import { generateRandomNumber } from "../../scripts/utils";

import tabs from "./tabs";

import EmblaCarousel from 'embla-carousel'

function Icon(color) {
    return `
        <div style="background: ${color}" class="nav-tab-color-icon"></div>
    `
}
function NavItemTabContainer({ name, icons, path }) {
    const dataAppear = generateRandomNumber(0, 1) === 1 ? "right" : "left";

    const navItemTabContainerString = `
    <a href="${path}" class="nav-tab-item-container" data-appear="${dataAppear}">
        <div class="nav-tab-item">
            <div class="nav-tab-color-icon-wrapper">
                ${icons.map(iconColor => Icon(iconColor)).join("")}
            </div>
            <p>${name}</p>
        </div>
    </a>
    `
    const navItemTabContainerNode = navItemTabContainerString.stringToHTML();

    navItemTabContainerNode.onclick = function (e) {
        e.preventDefault();
        redirect(path);
    }

    return navItemTabContainerNode;
}
function NavTabs() {

    const navWrapperString = `
        <nav id="nav-tab-wrapper">
        </nav>
    `
    const navContainerString = `
        <div id="nav-tab-container"></div>
    `;

    const navWrapperNode = navWrapperString.stringToHTML();
    const navContainerNode = navContainerString.stringToHTML();

    tabs.forEach(tab => navContainerNode.appendChild(NavItemTabContainer(tab)))

    navWrapperNode.appendChild(navContainerNode);

    const options = {
        containScroll: true,
        dragFree: true
    }

    return { navNode: navWrapperNode, EmblaCarousel, customTratative: true, options };
}

export default NavTabs;