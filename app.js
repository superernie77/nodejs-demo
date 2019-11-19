const express = require('express')

const app = express();

app.use('/api/posts',(req,res,next) => {
  const posts = [
    {
      id : "fffff",
      title: "test",
      content : "test"
  },
  {
    id : "abg",
    title: "test2",
    content : "test2"
}

  ];
  res.status(200).json({
    message : "Result",
    posts : posts 
  });
});

module.exports = app;
