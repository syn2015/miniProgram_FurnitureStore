const express=require('express')
const app=express();
const fs=require('fs');
// 路由
app.get('/contact',(req,res)=>{
    fs.readFile('./data.json',(err,data)=>{
        if(err) throw err;
        res.end(data)
    })
   
})

app.listen(3000,()=>{
    console.log('server running')
})