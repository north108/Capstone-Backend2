import * as mongoose from 'mongoose';
import { UserSchema } from '../models/userModel';
import { Request, Response } from 'express';
import { UserSessionSchema } from '../models/userSessionModel'

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
    User.deleteOne({ _id: request.params.userId }, (error, user) => {
      if(error){
        response.send(error);
      }
      response.json({ message: 'Successfully deleted user!'});
    });
  }

  // source: https://www.youtube.com/watch?v=s1swJLYxLAA
  public login(request: Request, response: Response, next) {
    const { body } = request.body

    const {
      firstName,
      lastName,
      password
    } = body;
    let {
      email
    } = body;

    if(!email) {
      return response.send({
        success: false,
        message: 'Error: Email cannot be blank.'
      });
    }
    if(!password) {
      return response.send({
        success: false,
        message: 'Error: Password cannot be blank.'
      });
    }

    User.find({
      email: email
    }, (error, users) => {
      if(error) {
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

      const user = users[0]
      if (user.password != password) {
        return response.send({
          success: false,
          message: 'Error: Invalid password'
        });
      }

      const userSession = new UserSessionSchema();
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