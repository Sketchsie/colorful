import index from "./component";

import { generateRandomColor, debounce, fullColorHex } from "../../scripts/utils";

import "../../assets/images/logo.svg"

import "./styles.scss";

const IndexPage = {

    index: null,
    doc: document.documentElement,

    render: function () {
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
                else
                    palette.setAttribute("data-appear", "right");
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
        const base = generateRandomColor();
        const baseDark = generateRandomColor({
            r: [0, base.color.r / 2],
            g: [0, base.color.g / 2],
            b: [0, base.color.b / 2],
        });
        const baseSemiDark = generateRandomColor({
            r: [base.color.r / 2 + 1, base.color.r],
            g: [base.color.g / 2 + 1, base.color.g],
            b: [base.color.b / 2 + 1, base.color.b],
        });
        const baseSemiLight = generateRandomColor({
            r: [base.color.r + 1, getValidRgbValue(base.color.r + 30)],
            g: [base.color.g + 1, getValidRgbValue(base.color.g + 30)],
            b: [base.color.b + 1, getValidRgbValue(base.color.b + 30)],
        });
        const baseLight = generateRandomColor({
            r: [getValidRgbValue(base.color.r + 30) + 1, 255],
            g: [getValidRgbValue(base.color.g + 30) + 1, 255],
            b: [getValidRgbValue(base.color.b + 30) + 1, 255],
        });

        function getValidRgbValue(value) {
            return value > 255 ? 255 : value;
        }
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

export default IndexPage;
