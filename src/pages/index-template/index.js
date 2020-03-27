import index from "./component";

import { debounce, fullColorHex } from "../../scripts/utils";

import "../../assets/images/logo.png"

const IndexTemplatePage = {

    index: null,
    generatePalette: null,
    doc: document.documentElement,

    render: function (functionToGenerateColors, useFixePalettes = false) {
        this.index = index();

        if (useFixePalettes) return this.renderFixedPalettes(useFixePalettes);

        this.generatePalette = functionToGenerateColors
        this.init();
    },
    renderFixedPalettes: function (palettesArrayWithID) {
        palettesArrayWithID.reverse();
        palettesArrayWithID.forEach(palette => {
            this.index.addPalette(
                {
                    hex: palette.colors,
                },
                palette.id
            );
        });
        if (this.scrollToAppearFunction) window.removeEventListener("scroll", this.scrollToAppearFunction);
        if (this.infiniteScrollFunction) window.removeEventListener("scroll", this.infiniteScrollFunction);

        this.scrollToAppear();
    },
    init: function () {
        this.loadMore(this);
        this.infiniteScroll();
        this.scrollToAppear();
    },
    loadMore: function () {
        for (let index = 0; index < 30; index++) {
            this.renderPalette();
        }
    },

    scrollToAppearFunction: null,
    setScrollToAppearFunction: function () {
        function inView(node) {
            const sb = this.doc.getBoundingClientRect();
            const eb = node.getBoundingClientRect();
            return !((eb.top + eb.height < 0) || (eb.top > sb.height));
        }
        function updateInView() {
            for (const palette of document.querySelectorAll('*[data-appear]')) {
                if (inView.apply(this, [palette]))
                    palette.setAttribute("data-appear", "visible");
            }
        }
        updateInView.call(this);
        this.scrollToAppearFunction = debounce(updateInView.bind(this))
    },
    scrollToAppear: function () {
        this.setScrollToAppearFunction();
        window.addEventListener("scroll", this.scrollToAppearFunction);
    },

    infiniteScrollFunction: null,
    setInfiniteScrollFunction: function () {
        this.infiniteScrollFunction = debounce(function () {
            const value = parseInt(100 * this.doc.scrollTop / (this.doc.scrollHeight - this.doc.clientHeight))
            if (value >= 50)
                this.loadMore();
        }.bind(this));
    },
    infiniteScroll: function () {
        this.setInfiniteScrollFunction();
        window.addEventListener("scroll", this.infiniteScrollFunction);
    },
    renderPalette: function () {
        const {
            baseDark,
            baseSemiDark,
            base,
            baseSemiLight,
            baseLight
        } = this.generatePalette();
        this.index.addPalette(
            {
                hex: [
                    "#" + fullColorHex(baseDark.color.r, baseDark.color.g, baseDark.color.b),
                    "#" + fullColorHex(baseSemiDark.color.r, baseSemiDark.color.g, baseSemiDark.color.b),
                    "#" + fullColorHex(base.color.r, base.color.g, base.color.b),
                    "#" + fullColorHex(baseSemiLight.color.r, baseSemiLight.color.g, baseSemiLight.color.b),
                    "#" + fullColorHex(baseLight.color.r, baseLight.color.g, baseLight.color.b)
                ],
            }
        );
    }
}

export default IndexTemplatePage;
