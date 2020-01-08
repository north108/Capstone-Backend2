import {Request, Response} from 'express';

export class Routes {
  public routes(app): void {
    app.route('/')
    .get((request: Request, response: Response) => {
      response.status(200).send({
        message: 'GET request successful!'
      })
    })

    app.route('/users')
    // get all users
    .get((request: Request, response: Response) => {
      response.status(200).send({
        message: 'GET request successful!'
      })
    })
    // create new user
    .post((request: Request, response: Response) => {
      response.status(200).send({
        message: 'POST request successful!'
      })
    })

    app.route('/users/:userId')
    // show user
    .get((request: Request, response: Response) => {
      response.status(200).send({
        message: 'GET request successful!'
      })
    })
    // Update a user
    .put((request: Request, response: Response) => {        
      response.status(200).send({
        message: 'PUT request successful!'
      })
    })
    // Delete a user
    .delete((request: Request, response: Response) => {
      response.status(200).send({
        message: 'DELETE request successful!'
      })
    })
  }
}