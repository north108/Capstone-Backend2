"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Routes {
    routes(app) {
        app.route('/')
            .get((request, response) => {
            response.status(200).send({
                message: 'GET request successful!'
            });
        });
        app.route('/users')
            // get all users
            .get((request, response) => {
            response.status(200).send({
                message: 'GET request successful!'
            });
        })
            // create new user
            .post((request, response) => {
            response.status(200).send({
                message: 'POST request successful!'
            });
        });
        app.route('/users/:userId')
            // show user
            .get((request, response) => {
            response.status(200).send({
                message: 'GET request successful!'
            });
        })
            // Update a user
            .put((request, response) => {
            response.status(200).send({
                message: 'PUT request successful!'
            });
        })
            // Delete a user
            .delete((request, response) => {
            response.status(200).send({
                message: 'DELETE request successful!'
            });
        });
    }
}
exports.Routes = Routes;
//# sourceMappingURL=appRoutes.js.map