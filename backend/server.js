import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import products from './data/products.js'
import connectDB from './config/db.js'

dotenv.config()

connectDB();
const app = express()

app.get('/',(req,res)=>{
    res.send('hello from node js')
})

app.get('/api/products',(req,res)=>{
    res.json(products)
})
app.get('/api/product/:id',(req,res)=>{
    const product = products.find(product=>product._id === req.params.id)
    res.json(product)
})

const PORT = process.env.PORT || 5000

app.listen(PORT,()=>{
    console.log(`server running in ${process.env.NODE_ENV} mode in port ${PORT}`.yellow.bold)
})