import NavBar from "../NavBar";
import ThemeButton from "../ThemeButton";
import ScrollTopButton from "../ScrollTopButton";
import TransitionSpan from "../TransitionSpan";
import NavTabs from "../NavTabs";

const Layout = function (children) {
    return [NavBar, NavTabs, children, ThemeButton, ScrollTopButton, TransitionSpan];
}
export default Layout;