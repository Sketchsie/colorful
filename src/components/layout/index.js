import NavBar from "../NavBar";
import ThemeButton from "../ThemeButton";
import ScrollTopButton from "../ScrollTopButton";
import TransitionSpan from "../TransitionSpan";

const Layout = function (children) {
    return [NavBar(), children(), ThemeButton(), ScrollTopButton(), TransitionSpan()];
}
export default Layout;