import "./styles/style.scss"

import "./github-config/.gh-pages.yml";

// Router
import Router from "./routes"

import "./scripts/customPrototypes"

// Local Storage To Storage Palette's
import initLocalStorage from "./scripts/useLocalStorage";

// Redirect
import Redirect from "./scripts/redirectTo";

// Pages
import Index from "./pages/index"
import Dark from "./pages/dark"
import Page404 from "./pages/page404"
import MyPalettes from "./pages/my"
import Color from "./pages/color"

document.addEventListener('DOMContentLoaded', () => {
    const routes = Router();

    initLocalStorage();

    routes.get("/", () => {
        Index.render();
    });
    routes.get("/dark", () => {
        Dark.render();
    });
    routes.get("/my", () => {
        MyPalettes.render();
    });
    routes.get("*", () => {
        Page404.render();
    });

    Redirect(routes);

    routes.init();
});