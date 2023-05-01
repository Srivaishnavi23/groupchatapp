const express =require('express');
const fs=require('fs');


const router =express.Router();

router.get('/',(req,res,next)=>{
    fs.readFile("message.txt","utf-8",(err,data)=>{
        if(err){
            console.log(err);
        }
            
            res.send(`<h4>${data}<h4><form action="/" onsubmit="document.getElementById('username').value=localStorage.getItem('username')" method="POST"><input id="message" type="text" name="message" placeholder="message"><input id="username" type="hidden" name="username"><button type="submit">add</button></form>`);
        })
});

router.post('/',(req,res,next)=>{
  fs.writeFile('message.txt',`${req.body.username}:${req.body.message} `,{ flag: 'a+' },(err)=>{
            res.statusCode=302;
            return res.end();
        });
    res.redirect('/');
})

module.exports=router;