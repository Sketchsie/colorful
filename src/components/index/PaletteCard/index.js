import "./styles.scss";

import { copyToClipboard } from "../../../scripts/utils"

function PaletteCard(color) {

    const colorString = `<p>${color}</p>`
    const colorNode = colorString.stringToHTML();

    const paletteString = `
        <div style="background-color: ${color}" class="p-item"></div>
    `
    const paletteNode = paletteString.stringToHTML();

    colorNode.onclick = () => copyToClipboard(color);

    paletteNode.appendChild(colorNode);

    return paletteNode;
}

export default PaletteCard;