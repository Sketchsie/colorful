import index from "./component";

import "../../assets/images/logo.svg"

import "./styles.scss";

const IndexPage = {
    render: async () => {
        const page = index();

        const response = await fetch("https://palett.es/API/v1/palette");

        console.log(response);

        page.addPalette(data);

        setTimeout(this.render.bind(this), 2000);
    }
}

export default IndexPage;
