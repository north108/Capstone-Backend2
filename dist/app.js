"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
const express = require("express");
const bodyParser = require("body-parser");
const appRoutes_1 = require("./routes/appRoutes");
const mongoose = require("mongoose");
class App {
    constructor() {
        this.routePrv = new appRoutes_1.Routes();
        this.mongoUrl = process.env.DATABASE_URL;
        this.app = express();
        this.config();
        this.routePrv.routes(this.app);
        this.mongoSetup();
        // this.handleError(error);
    }
    handleError(error) {
        return ({
            success: false,
            error: error.message
        });
    }
    config() {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }
    mongoSetup() {
        mongoose.Promise = global.Promise;
        console.log("HEREEEEE");
        console.log(mongoose.Promise);
        mongoose.connect(this.mongoUrl, { useFindAndModify: false, useNewUrlParser: true, useUnifiedTopology: true })
            .catch(error => this.handleError(error));
    }
}
exports.default = new App().app;
//# sourceMappingURL=app.js.map