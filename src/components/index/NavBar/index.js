import "./styles.scss";

const NavBar = function () {
    const navString = `
        <nav id="nav-wrapper">
            <nav id="nav-container">
                <div id="nav-logo-wrapper">
                    <img 
                        src="${process.env.PATH_BASE === "/" ? "/assets/logo.png" : `${process.env.PATH_BASE}/assets/logo.png`}" 
                            height="60" alt="Logo"
                        >
                    <h1>Colorful</h1>
                </div>
                <div id="nav-icons-wrapper">
                    <p>Created By</p>
                    <a id="nav-link-github" target="_blank" rel="noopener noreferrer external"
                    href="https://github.com/LaksCastro">
                        <i class="fab fa-github-square"></i>
                    </a>
                    <a id="nav-link-twitter" target="_blank" rel="noopener noreferrer external"
                    href="https://twitter.com/LaksCastro">
                        <i class="fab fa-twitter-square"></i>
                    </a>
                </div>
            </nav>
        </nav>
    `
    const navNode = navString.stringToHTML();
    return navNode;
}
export default NavBar;