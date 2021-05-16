# P.U.D.G 

## Getting Started


**Step 1** : Clone the repository by typing the below command into your terminal
```
git clone https://github.com/ZiaCodes/P.U.D.G-.git
```

**Step 2** : Open the file with your favorite Code Editor like mine is VS CODE -> https://code.visualstudio.com/download

**Step 3** : Now make Sure you have NodeJs Installed in your machine if not download from www.nodejs.org


**Step 4** : Installing npm Dependencies

*  First initialize npm package by typing the below command into your root directory of your project
```
npm init
```
    * * Name your package authors and all the stuff and type enter enter for the rest

* Installing Nodemon npm package
```
npm i nodemon
```
    * * Nodemon allows you to run your server continously even if you edit and upadte your code

* Installing Express npm package
```
npm i express
```
    * * Express is a HTTP helpers (redirection, caching, etc) and we will use it to create our server
 
* Installing ejs template
```
npm i ejs
```
    * * ejs allow you to write dynamic html document

* Installing axios
```
npm i axios
```
    * * Axios Makes XMLHttpRequests from the browser and http request from Nodejs

* Installing body-parser
```
npm i body-parser
```
    * * Node.js body parsing middleware. and we will define the body of the database

* Installing mongoose
```
npm i mongoose
```
    * * Mongoose is a MongoDB object modeling tool designed to work in an asynchronous environment

* Installing morgan
```
npm i morgan
```
    * * Morgan is a HTTP request logger middleware for node.js

* Installing dotenv
```
npm i dotenv
```
    * * It allow to Store configuration in the environment separate from code is based

# OR You can install all npm Dependencies with one command
```
npm i nodomon express dotenv body-parser morgan axios ejs mongoose 
```
---
**Step 3**: Now go to your package.json and you can see the installed dependencies with version like this
```
{
  "name": "crud_app",
  "version": "1.0.0",
  "description": "Crud Application with Express and mangoDB",
  "main": "server.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node server.js"
  },
  "keywords": [
    "Crud",
    "mangoDB"
  ],
  "author": "Ziaxdev",
  "license": "ISC",
  "dependencies": {
    "axios": "^0.21.1",
    "body-parser": "^1.19.0",
    "dotenv": "^9.0.2",
    "ejs": "^3.1.6",
    "express": "^4.17.1",
    "mongoose": "^5.12.9",
    "morgan": "^1.10.0",
    "nodemon": "^2.0.7"
  }
}
```

**Step 4**: Now replace the node with nodemon in the start of the script attribute of package.jason
```
 "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node server.js"
  },
```
**Step 5**: Now go to https://www.mongodb.com/ and create your free account and create a clustor and if you dont know how to set up mangodb cloud watch this tuitorial https://youtu.be/nwgQzuRRgec


**Step 6**: Now create a file congig.env and write 
```
PORT = 3000
MONGO_URI = mongodb+srv://Admin:YOUR-PASSWORD@cluster0.qukgp.mongodb.net/YOUR-DATABASE-NAME?retryWrites=true&w=majority

```
  ** Replace YOUR-PASSWORD with your mongoDB clustor created password and replace YOUR-DATABASE-NAME with users and make sure you have replaced YOUR-DATABASE-NAME with users it is because I had used users to connect the db in this code everywhere.
  
  
**Step 8**: Now from the root directory run your server.js file by
```
npm start
```

## If you need any help you can always contact me at @ziaxdev[Instagram] or ziaxdev@gmail.com.

## Happy Developement
