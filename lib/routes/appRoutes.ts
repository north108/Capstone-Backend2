import {Request, Response} from 'express';

export class Routes {
  public routes(app): void {
    app.route('/')
    .get((request: Request, response: Response) => {
      response.status(200).send({
        message: 'GET request successful!'
      })
    })
  }
}