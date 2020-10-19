import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import connectDB from './config/db.js'
import productRoutes from './routes/productRoutes.js'
import {errorHandler,notFound} from './middleware/errorMiddleware.js'
dotenv.config()

connectDB();
const app = express()



app.get('/',(req,res)=>{
    res.send('API running..')
})

// routes
app.use('/api/products',productRoutes)

// error handler for 404
app.use(notFound)
// error handler middleware 
app.use(errorHandler)

const PORT = process.env.PORT || 5000

app.listen(PORT,()=>{
    console.log(`server running in ${process.env.NODE_ENV} mode in port ${PORT}`.yellow.bold)
})