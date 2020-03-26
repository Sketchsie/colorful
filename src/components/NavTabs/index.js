import "./styles.scss";

import tabs from "./tabs";

import EmblaCarousel from 'embla-carousel'

function section(){
    
}
function NavColorMode() {

    const navString = `
        <nav id="nav-tab-wrapper">
            <div id="nav-tab-container">
                <section class="nav-tab-item-container">
                    <div class="nav-tab-item" data-background="#fc5f52">
                        <p>Favorite</p>
                    </div>
                </section>
                <section class="nav-tab-item-container">
                    <div class="nav-tab-item">
                        <p>Teste</p>
                    </div>
                </section>
                <section class="nav-tab-item-container">
                    <div class="nav-tab-item">
                        <p>Teste</p>
                    </div>
                </section>
                <section class="nav-tab-item-container">
                    <div class="nav-tab-item">
                        <p>Teste</p>
                    </div>
                </section>
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