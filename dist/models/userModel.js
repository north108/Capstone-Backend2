"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
exports.UserSchema = new Schema({
    firstName: {
        type: String,
        required: 'Enter a first name'
    },
    lastName: {
        type: String,
        required: 'Enter a last name'
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    location: {
        type: String,
        required: 'Enter a location'
    },
    created_date: {
        type: Date,
        default: Date.now
    }
});
//# sourceMappingURL=userModel.js.map