import "./styles.scss";

function ScrollTopButton() {
    const buttonString = `
        <button id="scrolltop-button">
            <i class="fas fa-arrow-up"></i>
        </button>
    `
    const buttonNode = buttonString.stringToHTML();
    buttonNode.onclick = () => window.scroll({ top: 0, left: 0, behavior: "smooth" });
    return buttonNode;
}

export default ScrollTopButton;