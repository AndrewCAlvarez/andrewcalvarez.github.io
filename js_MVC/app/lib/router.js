class Router {
    constructor(app) {
        this.app = app;
        this.routes = [];

        window.addEventListener("haschange", this.hashChange);
    }
    addRoute(name, url) {
        this.routes.push({
            name,
            url
        });
    }
    hashChange() {
        console.log(window.location);
    }
}
