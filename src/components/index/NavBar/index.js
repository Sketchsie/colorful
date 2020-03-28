import "./styles.scss";

import MenuHamburger from "menu-hamburger";

import { toggleDrawer, onToggle } from "../NavTabs"

let menuApi = null;

const NavBar = function () {
    const navString = `
        <nav id="nav-wrapper">
        </nav>
    `
    const navContainerString = `
    <nav id="nav-container">
        <div id="nav-logo-wrapper">
            <img 
                src="${process.env.PATH_BASE === "/" ? "/assets/logo.png" : `${process.env.PATH_BASE}/assets/logo.png`}" 
                    height="60" alt="Logo"
                >
            <h1>Colorful</h1>
        </div>
    </nav>
    `
    const navNode = navString.stringToHTML();
    const navContainerNode = navContainerString.stringToHTML();

    menuApi = MenuHamburger.initialize({
        rootElement: navContainerNode,
        backgroundColor: 'var(--content)',
        size: 50,
        iconColor: 'var(--color)',
        lineWidth: 1,
    });
    onToggle(menuApi.close);

    menuApi.on("open", () => toggleDrawer());

    navNode.appendChild(navContainerNode);

    return navNode;
}
export default NavBar;