"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
exports.UserSessionSchema = new Schema({
    userId: {
        type: String,
        default: -1
    },
    timestamp: {
        type: Date,
        default: Date.now()
    },
    isDeleted: {
        type: Boolean,
        defualt: false
    }
});
//# sourceMappingURL=userSessionModel.js.map