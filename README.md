# LAB - 13

## 

### Author: Joseph Hangarter & Alvian Joseph

### Links and Resources
* [submission PR](http://xyz.com)
* [travis](http://xyz.com)

#### Documentation
* [api docs](http://xyz.com) (API servers)
* [jsdoc](http://xyz.com) (Server assignments)
* [styleguide](http://xyz.com) (React assignments)

### Modules
#### `index.js` - starts app; `app.js` required in
#### `app.js` - `app.use()` for `404.js`, `500.js`, and `router.js`; required in: express, cors, morgan 
#### `404.js` - 404 Resource not found middleware function
#### `500.js` - 500 Server Error middleware function
#### `middleware.js` - `users-model.js` required in
#### `router.js` - required in: `express`, `middleware.js`, and `users-model.js`
#### `users-model.js` - required in: `mognoose`, `bcrypt`, and `jwt` 
#### `supergoose.js` - Combines SuperTest and Mongoose Memory Server
#### `middleware.test.js` - tests for `middleware.js`
#### `router.test.js` - tests for `router.js`

##### Exported Values and Methods
### `middleware.js`
  * `function _authBearer(authString)`
  * `function _authBasic(str)`
  * `function _authenticate(user)`
  * `function _authError()`
### `users-model.js`
  * `users.pre('save', function(next)`
  * `users.statics.authenticateToken = function(token)`
  * `users.statics.authenticateBasic = function(auth)`
  * `users.methods.comparePassword = function(password)`
  * `users.methods.generateToken = function()`

### Setup
#### `.env` requirements
* `PORT` - 3000
* `MONGODB_URI` - mongodb://localhost:27017/auth
* `SECRET` = 

#### Running the app
* `nodemon` -  monitors for any changes in your source and automatically restart your server
* `mongo` - database
* `echo '{"username": "joseph", "password": "joseph"}' | http post :3000/signup` - syntax for signing up
* `http post :3000/signin -a joseph:joseph` - syntax to sign in and provides key
* `http post :3000/signin "authorization:bearer ENTERKEYHEREhereasdsadsadas` syntax for authorization bearer
* `db.users.find().pretty();` in mongo to find generated key
  
#### Tests
* `npm test` - to run jest test

#### UML
Link to an image of the UML for your application and response to events
