import "./styles.scss";

import tabs from "./tabs";

import EmblaCarousel from 'embla-carousel'

function icon(color) {
    return `
        <div style="background: ${color}" class="nav-tab-color-icon"></div>
    `
}
function section({ name, icons }) {
    return `
    <section class="nav-tab-item-container">
        <div class="nav-tab-item">
            <div class="nav-tab-color-icon-wrapper">
                ${icons.map(iconColor => icon(iconColor)).join("")}
            </div>
            <p>${name}</p>
        </div>
    </section>
    `
}
function NavColorMode() {

    const navString = `
        <nav id="nav-tab-wrapper">
            <div id="nav-tab-container">
                ${tabs.map(tab => section(tab)).join("")}
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

export default NavColorMode;