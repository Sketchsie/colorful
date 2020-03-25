import color from "./component";

const ColorPage = {
    render: () => {
        const root = document.getElementById("root");
        root.innerHTML = "";
        root.innerHTML = color();
    }
}

export default ColorPage;
