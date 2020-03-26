import NavBar from "../NavBar";
import ThemeButton from "../ThemeButton";

const Layout = function (children) {
    return [NavBar(), children(), ThemeButton()];
}
export default Layout;