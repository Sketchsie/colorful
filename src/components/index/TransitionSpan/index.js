import "./styles.scss";

function TransitionSpan() {
    const spanString = `
        <span id="transition-span" class="hide"></span>
    `
    const spanNode = spanString.stringToHTML();

    let currentState = "hide";
    let isHidden = currentState === "hide";

    window.__toggleTransitionSpan = function () {
        if (isHidden) {
            spanNode.classList.remove("hide");
            spanNode.classList.add("visible");
        } else {
            spanNode.classList.remove("visible");
            spanNode.classList.add("hide");
        }
        currentState = isHidden ? "visible" : "hide";
        isHidden = currentState === "hide";
    }

    return spanNode;
}

export default TransitionSpan;