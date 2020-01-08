import * as mongoose from 'mongoose';
import { UserSchema } from '../models/userModel';
import { Request, Response } from 'express';

const User = mongoose.model('User', UserSchema);

export class UserController {
  public addNewUser(request: Request, response: Response) {
    let newUser = new User(request.body);

    newUser.save((error, user) => {
      if(error){
        response.send(error);
      }
      response.json(user);
    });
  }

  public getUsers(request: Request, response: Response) {
    User.find({}, (error, user) => {
      if(error){
        response.send(error);
      }
      response.json(user);
    });
  }

  public getUserWithId(request: Request, response: Response) {
    User.findById(request.params.userId, (error, user) => {
      if(error){
        response.send(error);
      }
      response.json(user);
    });
  }

  public updateUser(request: Request, response: Response) {
    User.findOneAndUpdate({ _id: request.params.userId }, request.body, { new: true }, (error, user) => {
      if(error){
        response.send(error);
      }
      response.json(user);
    });
  }

  public deleteUser(request: Request, response: Response) {
    User.remove({ _id: request.params.userId }, (error, user) => {
      if(error){
        response.send(error);
      }
      response.json({ message: 'Successfully deleted user!'});
    });
  }

}