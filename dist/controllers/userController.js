"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const userModel_1 = require("../models/userModel");
// import { UserSession } from '../models/UserSession'
const UserSession = require('../models/UserSession');
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
    // source: https://www.youtube.com/watch?v=s1swJLYxLAA
    login(request, response, next) {
        // const { body } = request.body
        console.log('HEEEERE');
        console.log(request.body.firstName);
        // const {
        //   firstName,
        //   lastName,
        //   password
        // } = body;
        // let {
        //   email
        // } = body;
        const userLogin = request.body;
        if (!userLogin.email) {
            return response.send({
                success: false,
                message: 'Error: Email cannot be blank.'
            });
        }
        if (!userLogin.password) {
            return response.send({
                success: false,
                message: 'Error: Password cannot be blank.'
            });
        }
        User.find({
            email: userLogin.email
        }, (error, users) => {
            if (error) {
                return response.send({
                    success: false,
                    message: 'Error: Server error'
                });
            }
            if (users.length != 1) {
                return response.send({
                    success: false,
                    message: 'Error: Invalid'
                });
            }
            const user = users[0];
            if (user.password != userLogin.password) {
                return response.send({
                    success: false,
                    message: 'Error: Invalid password'
                });
            }
            const userSession = new UserSession();
            userSession.userId = user._id;
            userSession.save((error, doc) => {
                if (error) {
                    return response.send({
                        success: false,
                        message: 'Error: Server error'
                    });
                }
                return response.send({
                    success: true,
                    message: 'Valid login',
                    token: doc._id
                });
            });
        });
    }
}
exports.UserController = UserController;
//# sourceMappingURL=userController.js.map