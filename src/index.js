import "./styles/style.scss"

// Router
import Router from "./routes"

// Redirect
import Redirect from "./scripts/redirectTo";

// Pages
import Index from "./pages/index"
import Dark from "./pages/dark"
import Color from "./pages/color"

import "./scripts/customPrototypes"

document.addEventListener('DOMContentLoaded', () => {
    const routes = Router();

    routes.get("/", () => {
        Index.render();
    });
    routes.get("/dark", () => {
        Dark.render();
    });

    Redirect(routes);

    routes.init();

});