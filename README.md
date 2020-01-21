# Sweater Weather API
This Sweater Weather API implementation is the backend for my Capstone project. It includes all the data for the users of the app.

## Set Up Notes

To download [Node.js](https://nodejs.org/en/download/)

To install Typescript, run
```
npm install -g typescript
```

To install all dependencies, run
```
npm install
```
To compile to Javascript, run
```
tsc
```
To start the server, run 
```
npm start
```

You will need to set up a [MongoDB Atlas Database].
You will need to create a .env file within the repository and add in your MongoDB connection string to a variable called DATABASE_URL.

[MongoDB Atlas Database]: https://docs.atlas.mongodb.com/getting-started/

## Functionality 

The following endpoints are implemented.

### Users

```
GET /users
```
List all users

```
POST /users
```
Create a new user

```
GET /users/:userId
```
Show a user by id

```
PUT /users/:userId
```
Update a user

```
DELETE /users/:userId
```
Delete a user

### Authentication

```
POST /login
```
Login a user

```
GET /logout
```
Log out a user