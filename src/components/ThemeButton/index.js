import "./styles.scss";

function ThemeButton() {
    const buttonString = `
        <button id="theme-button">
            <i class="fas fa-paint-roller"></i>
        </button>
    `
    const buttonNode = buttonString.stringToHTML();
    buttonNode.onclick = () => window.__setPreferredTheme(window.__theme === "dark" ? "light" : "dark");
    return buttonNode;
}

export default ThemeButton;