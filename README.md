# nodejs cheatsheet

Run a Javascript file with NodeJs:
```javascript
node [filename]
```
e.g.
```javascript
node server.js
```
Install Express:
```
npm install --save express
```
Install nodemon locally
```
npm install --save-dev express
```
After this, create a nodemon script in package.json file:
```
{
...
   "scripts": {
	    "start:server": "nodemon server.js"
  },
...
}
```
Run server with nodemon:
```
npm run start:server
```
Useful dependencies:

For validation of unique properties in mongoose model files:
```
npm install --save mongoose-unique-validator
```
Encrypting passwords in DB:
```
npm install --save bcrypt
```

