const express = require("express");
const fs = require("fs");
const app = express();
const users = require("./MOCK_DATA .json");
const PORT = 8000;
app.get('/api/user',(req,res)=>{
 return res.json(users);
});
app.get('/api/user/origin/:id',(req ,res)=>{
   const id = Number(req.params.id);
   const foundUser = users.find(user =>(user.id ===id ));
   return res.json(foundUser); 
});
app.listen(PORT ,() =>console.log(`Server started at :${PORT} `));