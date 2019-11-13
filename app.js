const express = require('express')

comst app = express();

app.use((req,res,next) => {
  console.log('first');
  next();
});

app.use((req,res,next) => {
  res.send('hello from express');
});

module.export = app;
