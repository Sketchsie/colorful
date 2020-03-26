import { generateRandomNumber } from "../../scripts/utils";

import PaletteCard from "../PaletteCard";

function PaletteCardWrapper(colorsArray) {

    const dataAppear = generateRandomNumber(0, 1) === 1 ? "right" : "left";

    const paletteString = `
       <section class="p-item-container" data-appear="${dataAppear}"></section>
    `
    const paletteNode = paletteString.stringToHTML();
    colorsArray.forEach(color => {
        paletteNode.appendChild(PaletteCard(color));
    });

    return paletteNode;
}

export default PaletteCardWrapper;