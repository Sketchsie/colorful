const Router = function () {

    const instance = {
        routes: [],

        pathname: null,

        match: function () {
            const { pathname } = this;

            const useIndex = pathname === "/";

            if (useIndex) return this.routes.forEach(route => route.pathname === "/" && route.callback());

            const params = pathname.divide("/");

            let req = {
                params: null,
            }
            let useReq = false;

            this.routes.filter(route => route.pathname !== "/").forEach(route => {
                const routeParams = route.pathname.divide("/");
                if (routeParams.length !== params.length) return;
                let isTheRoute = true;
                routeParams.forEach((item, i) => {
                    const isParam = item.charAt(0) === ":";
                    const paramName = item.slice((isParam ? 1 : 0), item.length);
                    if (isParam) {
                        req.params = Object.assign({}, req, {
                            ...req.params,
                            params: {
                                [paramName]: params[i],
                            }
                        });
                        useReq = true;
                        return;
                    }
                    if (paramName !== params[i]) isTheRoute = false;
                });
                return isTheRoute && route.callback(useReq ? req : undefined);
            });
        },
        get: function (pathname, callback) {
            if (!pathname || !callback) {
                throw new Error("No Route or Callback provided :(");
            }
            if (typeof pathname !== "string") {
                throw new Error("The Route must be a string :(");
            }
            if (this.routes.some(route => route.pathname === pathname)) {
                throw new Error("Already have a route with this path :(");
            }

            this.routes.push({
                pathname,
                callback
            });
        },
        redirectTo: function (pathname) {
            this.pathname = pathname;
            history.pushState({}, pathname, pathname);
            this.match();
        },
        init: function () {
            if (!window) return;

            this.pathname = window.location.pathname;

            window.onpopstate = this.match.bind(this);

            this.match();
        }
    }

    return instance;
}

export default Router;