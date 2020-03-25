import index from "./component";

import "../../assets/images/logo.svg"

import "./styles.scss";

const IndexPage = {

    render: async () => {
        const indexPage = index();

        const response = await fetch("http://www.colr.org/json/schemes/random/7");

        console.log(response);

        const data = await response.json();
        data.schemes.forEach(palette => {
            const { colors } = palette;
            const hex = colors.map(item => `#${item}`);
            indexPage.addPalette(hex);
        })
    }
}

export default IndexPage;
