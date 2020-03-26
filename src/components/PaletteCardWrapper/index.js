import "./styles.scss";

import { generateRandomNumber } from "../../scripts/utils";

import PaletteCard from "../PaletteCard";

function PaletteCardWrapper(colorsArray) {

    const dataAppear = generateRandomNumber(0, 1) === 1 ? "right" : "left";

    const paletteString = `
       <section class="p-item-container" data-appear="${dataAppear}">
       
       </section>
    `
    const paletteContainerColorsString = `
        <div class="p-item-colors-wrapper"></div>
    `
    const paletteNode = paletteString.stringToHTML();
    const paletteContainerColorsNode = paletteContainerColorsString.stringToHTML();
    
    colorsArray.forEach(color => {
        paletteContainerColorsNode.appendChild(PaletteCard(color));
    });

    paletteNode.appendChild(paletteContainerColorsNode);

    return paletteNode;
}

export default PaletteCardWrapper;