import "./styles.scss";

import { generateRandomNumber } from "../../scripts/utils";

import PaletteCard from "../PaletteCard";

function PaletteCardWrapper(colorsArray) {

    const dataAppear = generateRandomNumber(0, 1) === 1 ? "right" : "left";

    const paletteString = `
       <section class="p-item-container" data-appear="${dataAppear}"></section>
    `
    const paletteButtonString = `
        <div class="p-item-buttons-wrappers">
            <button class="p-item-button">
                <i class="far fa-heart"></i>
            </button>
            <button class="p-item-button">
                <i class="fas fa-expand"></i>
            </button>
        </div>
    `
    const paletteContainerColorsString = `
        <div class="p-item-colors-wrapper" data-appear="${dataAppear}"></div>
    `
    const paletteNode = paletteString.stringToHTML();
    const paletteButtonNode = paletteButtonString.stringToHTML();
    const paletteContainerColorsNode = paletteContainerColorsString.stringToHTML();

    colorsArray.forEach(color => {
        paletteContainerColorsNode.appendChild(PaletteCard(color));
    });

    paletteNode.appendChild(paletteContainerColorsNode);
    paletteNode.appendChild(paletteButtonNode);

    return paletteNode;
}

export default PaletteCardWrapper;