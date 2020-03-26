import "./styles.scss";

function ThemeButton() {
    const buttonString = `
        <button id="theme-button">
            <i class="far fa-lightbulb"></i>
        </button>
    `
    const buttonNode = buttonString.stringToHTML();
    return buttonNode;
}

export default ThemeButton;