import "./styles.scss";

import { generateRandomNumber } from "../../scripts/utils";

import tabs from "./tabs";

import EmblaCarousel from 'embla-carousel'

function Icon(color) {
    return `
        <div style="background: ${color}" class="nav-tab-color-icon"></div>
    `
}
function NavItemTabContainer({ name, icons }) {
    const dataAppear = generateRandomNumber(0, 1) === 1 ? "right" : "left";

    return `
    <section class="nav-tab-item-container" data-appear="${dataAppear}">
        <div class="nav-tab-item">
            <div class="nav-tab-color-icon-wrapper">
                ${icons.map(iconColor => Icon(iconColor)).join("")}
            </div>
            <p>${name}</p>
        </div>
    </section>
    `
}
function NavTabs() {
    const navString = `
        <nav id="nav-tab-wrapper">
            <div id="nav-tab-container">
                ${tabs.map(tab => NavItemTabContainer(tab)).join("")}
            </div>
        </nav>
    `;

    const navNode = navString.stringToHTML();

    const options = {
        containScroll: true,
        dragFree: true
    }
    return { navNode, EmblaCarousel, customTratative: true, options };
}

export default NavTabs;