import IndexTemplate from "../index-template"

import NoPalettes from "./component";

import { useLocalStorage } from "../../scripts/useLocalStorage"

let palettes = null;

function renderPalette() {
    if (this.currentRenderIndex === palettes.length - 1) return this.loadMore = () => { };

    let paletteArray = palettes[this.currentRenderIndex];

    this.index.addPalette(
        {
            hex: paletteArray.colors,
        },
        paletteArray.id
    );

    console.log("renderizei num: " + this.currentRenderIndex);
    this.currentRenderIndex++;
}

const MyPalettesPage = {
    render: function () {
        console.log("my palette page");

        palettes = useLocalStorage().getPalettes();

        if (!palettes.length) {
            NoPalettes();
        } else {
            if (palettes.length <= 20) {
                IndexTemplate.render(undefined, useLocalStorage().getPalettes());
            } else {
                console.log(palettes.length);
                IndexTemplate.render(undefined, undefined, renderPalette);
            }
        }
    },
}

export default MyPalettesPage;
