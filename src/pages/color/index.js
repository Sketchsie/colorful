import color from "./component";

import { removeAllChildsOf } from "../../scripts/utils";

const ColorPage = {
    render: () => {
        const root = document.getElementById("root");
        removeAllChildsOf(root);
        root.innerHTML = color();
    }
}

export default ColorPage;
