import "./styles/style.scss"

// Router
import Router from "./routes"

// Pages
import Index from "./pages/index"
import Color from "./pages/color"

import "./scripts/customPrototypes"

document.addEventListener('DOMContentLoaded', () => {
    const routes = Router();

    routes.get("/", () => {
        Index.render();
    });
    routes.get("/:color", (req) => {
        Color.render(req.params);
    });

    routes.init();
});