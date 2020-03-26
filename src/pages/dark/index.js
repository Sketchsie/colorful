import IndexTemplate from "../index-template"

import { generateRandomColor } from "../../scripts/utils";

function generatePalette() {
    const base = generateRandomColor({
        r: [0, 160],
        g: [0, 160],
        b: [0, 160],
    });
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
    return {
        baseDark,
        baseSemiDark,
        base,
        baseSemiLight,
        baseLight
    }
}

const DarkPage = {
    render: function () {
        console.log("voce esta na dark");
        IndexTemplate.render(generatePalette);
    }
}

export default DarkPage;
