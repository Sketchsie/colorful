import "./styles.scss";

import Hammer from "hammerjs";

const interfacePreview = function () {

    const interfaceString = `
        <div id="interface-preview-wrapper" class="hide">
            <div class="interface-preview-item"></div>
            <div class="interface-preview-item"></div>
            <div class="interface-preview-item"></div>
            <div class="interface-preview-item"></div>
            <div class="interface-preview-item"></div>
        </div>
    `

    const interfaceNode = interfaceString.stringToHTML();

    window.__openInterfacePreview = function (palette) {
        interfaceNode.classList.remove("hide");
        interfaceNode.classList.add("visible");

        const interfaceItens = [...document.getElementsByClassName("interface-preview-item")];
        interfaceItens.forEach((item, i) => item.style.backgroundColor = palette[i]);
    }
    window.__closeInterfacePreview = function () {
        interfaceNode.classList.remove("visible");
        interfaceNode.classList.add("hide");
    }

    const interfaceHammer = new Hammer(interfaceNode);
    interfaceHammer.get("pan").set({ direction: Hammer.DIRECTION_ALL });

    interfaceHammer.on("pandown", () => window.__closeInterfacePreview());
    interfaceHammer.on("panup", () => window.__closeInterfacePreview());
    interfaceHammer.on("tap", () => window.__closeInterfacePreview());

    return interfaceNode;
}

export default interfacePreview;