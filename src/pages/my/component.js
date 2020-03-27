import Layout from "../../components/index/Layout"

const myPalettes = function () {
    const root = document.getElementById("root");

    root.innerHTML = "";

    const instance = {
        noPalettesWrapper: `
            <div id="no-palette-wrapper">
            </div>
        `,

        noPalettesWrapperNode: null,

        init: function () {
            root.innerHTML = "";

            this.noPalettesWrapperNode = this.noPalettesWrapper.stringToHTML();

            const contentNodes = Layout(() => this.noPalettesWrapperNode);

            contentNodes.forEach((content, i) => {
                const nodeElement = content();

                if (!nodeElement.customTratative) {
                    root.appendChild(nodeElement);
                } else {
                    // Do a custom tratative by Layout HTML order
                    switch (i) {
                        case 1:
                            const { navNode, EmblaCarousel, options } = nodeElement;

                            root.appendChild(navNode);

                            EmblaCarousel(navNode, options);
                            break;
                    }
                }
            });
        }
    };
    instance.init.call(instance);

    return instance;
}

export default myPalettes;