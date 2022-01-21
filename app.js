const express=require('express');
const path= require('path');

const app=express();
const port=80;

// const staticPath=path.join(__dirname,"./src");

//built-in middleware
app.use(express.static(__dirname));

app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"./home.html"));
});

app.listen(port,()=>{
    console.log(`listening at the port ${port}`);
});

