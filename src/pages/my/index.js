import IndexTemplate from "../index-template"

import { useLocalStorage } from "../../scripts/useLocalStorage"

const MyPalettesPage = {
    render: function () {
        console.log("voce esta na my palettes");
        console.log(useLocalStorage().getPalettes())
        IndexTemplate.render(undefined, useLocalStorage().getPalettes());
    }
}

export default MyPalettesPage;
