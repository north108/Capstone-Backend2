"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const userController_1 = require("../controllers/userController");
class Routes {
    constructor() {
        this.userController = new userController_1.UserController();
    }
    routes(app) {
        app.route('/')
            .get((request, response) => {
            response.status(200).send({
                message: "Welcome to Elizabeth's Capstone API"
            });
        });
        app.route('/users')
            // get all users
            .get(this.userController.getUsers)
            // create new user
            .post(this.userController.addNewUser);
        app.route('/users/:userId')
            // Show user
            .get(this.userController.getUserWithId)
            // Update a user
            .put(this.userController.updateUser)
            // Delete a user
            .delete(this.userController.deleteUser);
    }
}
exports.Routes = Routes;
//# sourceMappingURL=appRoutes.js.map