import "./styles.scss";

import EmblaCarousel from 'embla-carousel'

function NavColorMode() {

    const navString = `
        <nav id="nav-tab-wrapper">
            <div id="nav-tab-container">
                <section class="nav-tab-item-container">
                    <div class="nav-tab-item-item">
                        Slide 1
                    </div>
                </section>
                <section class="nav-tab-item-container">
                    <div class="nav-tab-item-item">
                        Slide 2
                    </div>
                </section>
                <section class="nav-tab-item-container">
                    <div class="nav-tab-item-item">
                        Slide 3
                    </div>
                </section>
                <section class="nav-tab-item-container">
                    <div class="nav-tab-item-item">
                        Slide 4
                    </div>
                </section>
            </div>
        </nav>
    `;

    const navNode = navString.stringToHTML();

    return { navNode, EmblaCarousel, customTratative: true };
}

export default NavColorMode;