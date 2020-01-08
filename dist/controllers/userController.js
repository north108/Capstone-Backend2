"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const userModel_1 = require("../models/userModel");
const User = mongoose.model('User', userModel_1.UserSchema);
class UserController {
    addNewUser(request, response) {
        let newUser = new User(request.body);
        newUser.save((error, user) => {
            if (error) {
                response.send(error);
            }
            response.json(user);
        });
    }
    getUsers(request, response) {
        User.find({}, (error, user) => {
            if (error) {
                response.send(error);
            }
            response.json(user);
        });
    }
    getUserWithId(request, response) {
        User.findById(request.params.userId, (error, user) => {
            if (error) {
                response.send(error);
            }
            response.json(user);
        });
    }
    updateUser(request, response) {
        User.findOneAndUpdate({ _id: request.params.userId }, request.body, { new: true }, (error, user) => {
            if (error) {
                response.send(error);
            }
            response.json(user);
        });
    }
    deleteUser(request, response) {
        User.deleteOne({ _id: request.params.userId }, (error, user) => {
            if (error) {
                response.send(error);
            }
            response.json({ message: 'Successfully deleted user!' });
        });
    }
}
exports.UserController = UserController;
//# sourceMappingURL=userController.js.map