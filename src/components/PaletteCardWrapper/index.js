import PaletteCard from "../PaletteCard";

function PaletteCardWrapper(colorsArray) {
    const paletteString = `
       <section class="p-item-container"></section>
    `
    const paletteNode = paletteString.stringToHTML();
    colorsArray.forEach(color => {
        paletteNode.appendChild(PaletteCard(color));
    });

    return paletteNode;
}

export default PaletteCardWrapper;