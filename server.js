const express = require('express')
const productRouter = require('./routes/products')
const mongoose = require('mongoose')
const app = express()
mongoose.connect('mongodb://127.0.0.1:27017/product', {
    useNewUrlParser : true,
    useUnifiedTopology: true
})
app.use(express.json());
app.use(express.urlencoded({extended: true}))

app.use('/',productRouter)


app.get('/', (req,res)=> {
    res.send('hello world')
})

app.listen(8080,()=>{
    console.log('Server started');
})