import "./styles.scss";

import { copyToClipboard } from "../../../scripts/utils";

function PaletteCard(color) {

    const cardString = `
        <div style="background: ${color}" class="p-item">
            <p>${color}</p>
        </div>
    `

    const cardNode = cardString.stringToHTML();
    cardNode.onclick = () => copyToClipboard(color);

    return cardNode
}

export default PaletteCard;