import index from "./component";

import { generateRandomColor, generateRandomColorPalette, rgbToHex } from "../../scripts/utils";

import "../../assets/images/logo.svg"

import "./styles.scss";

const IndexPage = {

    index: null,

    render: function () {
        this.index = index();
        this.init();
    },
    init: function () {
        this.renderPalette();
        setTimeout(() => {
            this.init();
        }, 2000);
    },
    renderPalette: function () {
        const base = generateRandomColor({
            r: [0, 60],
            g: [0, 160],
            b: [140, 255]
        });
        const baseDark = generateRandomColor({
            r: [0, base.color.r / 2],
            g: [0, base.color.g],
            b: [0, getValidRgbValue(base.color.b + 30)],
        });
        const baseSemiDark = generateRandomColor({
            r: [base.color.r / 2, base.color.r],
            g: [base.color.g / 2, base.color.g],
            b: [base.color.b / 2, base.color.b],
        });
        const baseSemiLight = generateRandomColor({
            r: [base.color.r, getValidRgbValue(base.color.r + 30)],
            g: [base.color.g, getValidRgbValue(base.color.g + 30)],
            b: [getValidRgbValue(base.color.b + 30), getValidRgbValue(base.color.b + 60)],
        });
        const baseLight = generateRandomColor({
            r: [getValidRgbValue(base.color.r + 30), 255],
            g: [getValidRgbValue(base.color.g + 30), 255],
            b: [getValidRgbValue(base.color.b + 60), 255],
        });

        function getValidRgbValue(value) {
            return value > 255 ? 255 : value;
        }
        console.log(baseDark);
        console.log(baseSemiDark);
        console.log(base);
        console.log(baseSemiLight);
        console.log(baseLight);

        this.index.addPalette([
            rgbToHex(baseDark.color.r, baseDark.color.g, baseDark.color.a),
            rgbToHex(baseSemiDark.color.r, baseSemiDark.color.g, baseSemiDark.color.a),
            rgbToHex(base.color.r, base.color.g, base.color.a),
            rgbToHex(baseSemiLight.color.r, baseSemiLight.color.g, baseSemiLight.color.a),
            rgbToHex(baseLight.color.r, baseLight.color.g, baseLight.color.a),
        ]);
    }
}

export default IndexPage;
