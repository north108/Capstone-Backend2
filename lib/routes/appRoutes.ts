import {Request, Response} from 'express';
import { UserController } from '../controllers/userController';



export class Routes {
  public userController: UserController = new UserController();

  public routes(app): void {
    app.route('/')
    .get((request: Request, response: Response) => {
      response.status(200).send({
        message: "Welcome to Elizabeth's Capstone API"
      })
    })

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
    .delete(this.userController.deleteUser)

    app.route('/login')
    // login
    .post(this.userController.login)

    // app.route('/verify')
    // // verify session
    // .get(this.userController.verify)

    app.route('/logout')
    // logout
    .get(this.userController.logout)
  }
}