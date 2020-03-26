import Layout from "../../components/Layout"
import PaletteCardWrapper from "../../components/PaletteCardWrapper";

const index = function () {
    const root = document.getElementById("root");

    root.innerHTML = "";

    const instance = {
        paletteArray: [],
        paletteWrapper: `
            <div id="palette-wrapper">
            </div>
        `,
        paletteContainer: `
            <div id="palette-container">
            </div>
        `,
        paletteWrapperNode: null,
        paletteContainerNode: null,

        init: function () {
            root.innerHTML = "";


            this.paletteWrapperNode = this.paletteWrapper.stringToHTML();
            this.paletteContainerNode = this.paletteContainer.stringToHTML();

            this.paletteWrapperNode.appendChild(this.paletteContainerNode);

            const contentNodes = Layout(() => this.paletteWrapperNode);

            contentNodes.forEach(content => {
                root.appendChild(content);
            });
        },
        addPalette: function (colorsArray) {

            this.paletteArray.push(colorsArray);

            const palette = colorsArray.hex;
            const paletteCardWrapper = PaletteCardWrapper(palette);
            this.paletteContainerNode.appendChild(paletteCardWrapper);
        }
    };
    instance.init.call(instance);

    return instance;
}

export default index;