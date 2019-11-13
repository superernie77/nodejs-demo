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
