"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const appRoutes_1 = require("./routes/appRoutes");
class App {
    constructor() {
        this.routePrv = new appRoutes_1.Routes();
        this.app = express();
        this.config();
        this.routePrv.routes(this.app);
    }
    config() {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }
}
exports.default = new App().app;
//# sourceMappingURL=app.js.map