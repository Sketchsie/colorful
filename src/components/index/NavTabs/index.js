import "./styles.scss";

import Hammer from "hammerjs";

import { redirect } from "../../../scripts/redirectTo";

import { generateRandomNumber, getLiquidRoute } from "../../../scripts/utils";

import tabs from "./tabs";

import EmblaCarousel from 'embla-carousel'

function Icon(color) {
    return `
        <div style="background: ${color}" class="nav-tab-color-icon"></div>
    `
}

function useLinearGradient(useNow, firstColor, secondColor) {
    if (!useNow) return `border: 2px solid transparent;"`

    return `border: 2px solid transparent; border-image: linear-gradient(to left, ${firstColor}, ${secondColor});border-image-slice: 1;"`
}

function NavItemTabContainer({ name, icons, path }) {
    const dataAppear = generateRandomNumber(0, 1) === 1 ? "right" : "left";

    const isSelected = getLiquidRoute(window.location.pathname) === path;

    const navItemTabContainerString = `
        <div style="background: ${isSelected ? "var(--content-lightness)" : "transparent"};${useLinearGradient(isSelected, icons[3], icons[0])}}" class="nav-tab-item-container" data-appear="${dataAppear}"></div>
    `

    const navItemTabItemString = `
        <div class="nav-tab-item" style="${useLinearGradient(true, icons[0], icons[3])}}}">
            <div class="nav-tab-color-icon-wrapper">
                ${icons.map(iconColor => Icon(iconColor)).join("")}
            </div>
            <p>${name}</p>
        </div>
    `
    const navItemTabContainerNode = navItemTabContainerString.stringToHTML();
    const navItemTabItemNode = navItemTabItemString.stringToHTML();

    const NavItemTabNodeHammer = new Hammer(navItemTabItemNode);
    NavItemTabNodeHammer.on("tap", () => redirect(path));

    navItemTabContainerNode.appendChild(navItemTabItemNode);

    return { navItemTabContainerNode, isSelected };
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

    let selectedIndex = null;

    tabs.forEach((tab, i) => {
        const { navItemTabContainerNode, isSelected } = NavItemTabContainer(tab);
        if (isSelected)
            selectedIndex = i;
        navContainerNode.appendChild(navItemTabContainerNode)
    })

    navWrapperNode.appendChild(navContainerNode);

    const options = {
        containScroll: true,
        dragFree: true,
        startIndex: selectedIndex || 0
    }

    return { navNode: navWrapperNode, EmblaCarousel, customTratative: true, options };
}

export default NavTabs;