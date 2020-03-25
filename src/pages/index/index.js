import index from "./component";

import { generateRandomColor, generateRandomColorPalette, fullColorHex } from "../../scripts/utils";

import "../../assets/images/logo.svg"

import "./styles.scss";

const IndexPage = {

    index: null,

    render: function () {
        this.index = index();
        this.init();
    },
    init: function () {
        for (let index = 0; index < 30; index++) {
            this.renderPalette();
        }
        window.onscroll = function (e) {
            console.log("scrollY")
            console.log(window.scrollY);
            console.log("offset")
            console.log(window.pageYOffset);
        }
    },
    renderPalette: function () {
        const base = generateRandomColor();
        const baseDark = generateRandomColor({
            r: [0, base.color.r / 2],
            g: [0, base.color.g / 2],
            b: [0, base.color.b / 2],
        });
        const baseSemiDark = generateRandomColor({
            r: [base.color.r / 2, base.color.r],
            g: [base.color.g / 2, base.color.g],
            b: [base.color.b / 2, base.color.b],
        });
        const baseSemiLight = generateRandomColor({
            r: [base.color.r, getValidRgbValue(base.color.r + 30)],
            g: [base.color.g, getValidRgbValue(base.color.g + 30)],
            b: [base.color.b, getValidRgbValue(base.color.b + 30)],
        });
        const baseLight = generateRandomColor({
            r: [getValidRgbValue(base.color.r + 30), 255],
            g: [getValidRgbValue(base.color.g + 30), 255],
            b: [getValidRgbValue(base.color.b + 30), 255],
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
