const express =require('express')


const app = express()

app.get('/',(req,res)=>{
    res.send('holle word')
}).listen(3000,'127.0.0.1',err=>{
    if(err){
        console.log(err)
    }
    console.log('start ok')

})