import NavBar from "../../components/NavBar"
import PaletteCardWrapper from "../../components/PaletteCardWrapper";

const index = function () {
    const root = document.getElementById("root");

    root.innerHTML = "";

    return {
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
        addPalette: function (colorsArray) {
            root.innerHTML = "";

            this.paletteArray.push(colorsArray);

            this.paletteWrapperNode = this.paletteWrapper.stringToHTML();
            this.paletteContainerNode = this.paletteContainer.stringToHTML();

            this.paletteArray.forEach(palette => {
                const paletteCardWrapper = PaletteCardWrapper(palette);
                this.paletteContainerNode.appendChild(paletteCardWrapper);
            });

            this.paletteWrapperNode.appendChild(this.paletteContainerNode);
            root.appendChild(NavBar());
            root.appendChild(this.paletteWrapperNode);
        }
    };
}

export default index;