import "./styles.scss";

import { lightOrDark } from "../../scripts/utils";

const interfacePreview = function () {
    const interfaceButtonBackString = `
        <button id="interface-preview-button-back">
            <i class="fas fa-arrow-down"></i>
        </button>
    `
    const interfaceString = `
        <div id="interface-preview-wrapper" class="hide">
            <div id="interface-preview-container-title">
                <h1 class="interface-preview-title">Text</h1>
            </div>

            <div id="interface-preview-span-container"></div>

            <div id="interface-preview-tabs-container">
                <div class="interface-preview-tab-item">ITEM 1</div>
                <div class="interface-preview-tab-item">ITEM 2</div>
                <div class="interface-preview-tab-item">ITEM 3</div>
            </div>

            <div id="interface-preview-button-add">
                <i class="fas fa-plus"></i>
            </div>
        </div>
    `

    const interfaceNode = interfaceString.stringToHTML();
    const interfaceButtonBackNode = interfaceButtonBackString.stringToHTML();

    interfaceNode.appendChild(interfaceButtonBackNode);

    window.__openInterfacePreview = function (palette) {
        interfaceNode.classList.remove("hide");
        interfaceNode.classList.add("visible");

        const interfaceHeader = document.getElementById("interface-preview-container-title");
        interfaceHeader.style.backgroundColor = palette[1];


        const interfaceBody = document.getElementById("interface-preview-span-container");
        interfaceBody.style.backgroundColor = palette[3];


        const interfaceTabs = document.getElementById("interface-preview-tabs-container");

        const useDarkColorInTabs = lightOrDark(palette[4]) === "light";

        interfaceTabs.style.backgroundColor = palette[4];
        interfaceTabs.style.color = useDarkColorInTabs ? "#000" : "#fff";


        const interfaceDemoButton = document.getElementById("interface-preview-button-add");

        const useDarkColorInButton = lightOrDark(palette[3]) === "light";

        interfaceDemoButton.style.backgroundColor = palette[3];
        interfaceDemoButton.style.color = useDarkColorInButton ? "#000" : "#fff";
    }
    window.__closeInterfacePreview = function () {
        interfaceNode.classList.remove("visible");
        interfaceNode.classList.add("hide");
    }
    interfaceButtonBackNode.onclick = window.__closeInterfacePreview;

    return interfaceNode;
}

export default interfacePreview;