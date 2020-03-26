let router = null;

let redirect = function (pathname) {
    if (pathname === router.pathname) return;
    router.redirectTo(pathname);
}

let init = function (routerInstance) {
    router = routerInstance;
}

export {
    redirect,
};

export default init;