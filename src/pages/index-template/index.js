import index from "./component";

import { debounce, fullColorHex } from "../../scripts/utils";

import "../../assets/images/logo.png"

import "./styles.scss";

const IndexTemplatePage = {

    index: null,
    generatePalette: null,
    doc: document.documentElement,

    render: function (functionToGenerateColors) {
        this.generatePalette = functionToGenerateColors,
            this.index = index();
        this.init();
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
    scrollToAppear: function () {
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
        window.addEventListener("scroll", debounce(updateInView.bind(this)));
        updateInView.call(this);
    },
    infiniteScroll: function () {
        window.addEventListener("scroll", debounce(function () {
            const value = parseInt(100 * this.doc.scrollTop / (this.doc.scrollHeight - this.doc.clientHeight))
            if (value >= 50)
                this.loadMore();
        }.bind(this)));
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
                    "#" + fullColorHex(baseLight.color.r, baseLight.color.g, baseLight.color.b)],
                rgb: [
                    baseDark.string,
                    baseSemiDark.string,
                    base.string,
                    baseSemiLight.string,
                    baseLight.string,
                ]
            }
        );
    }
}

export default IndexTemplatePage;
