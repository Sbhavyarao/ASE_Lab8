const express = require('express');
const jwt = require('jsonwebtoken');

const app=express();
var cors = require('cors')
app.use(cors());

app.post('/api/login', (req, res) =>{
  console.log(req);
  const user ={
    id:1,
    username: 'bhavya',
    email: 'bhavya@gmail.com'
  }

  jwt.sign({user}, 'secretkey', (err, token)=>{
    res.json(token);
  });
});

app.get('/api/getUserDetails', verifyToken, (req, res) =>{

  jwt.verify(req.token,'secretkey', (err, authData)=> {
    if (err) {
      res.sendStatus(403);
    } else {
      res.json(authData);
    }
  });

});

function verifyToken(req, res, next) {

  const bearerHeader = req.headers['authorization'];

  if(typeof bearerHeader!=='undefined') {

    req.token = bearerHeader;

    next();
  }
  else{
    res.sendStatus(403);
  }
}
app.listen(3000, ()=>{
    console.log("Sever started on 3000")
});
