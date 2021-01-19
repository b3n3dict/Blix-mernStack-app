import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import morgan from 'morgan';
import path from 'path'
import connectDB from './config/db.js'
import productRoutes from './routes/productRoutes.js'
import userRoutes from './routes/userRoutes.js'
import orderRoutes from './routes/orderRoutes.js'
import uploadRoutes from './routes/uploadRoutes.js'
import {errorHandler,notFound} from './middleware/errorMiddleware.js'
dotenv.config()

connectDB();
const app = express()

app.use(express.json())

if(process.env.NODE_ENV === 'development'){
  app.use(morgan('dev'))
}

app.get('/',(req,res)=>{
    res.send('API running..')
})

// routes
app.use('/api/products',productRoutes)
app.use('/api/users',userRoutes)
app.use('/api/orders',orderRoutes)
app.use('/api/upload',uploadRoutes)

app.get('/api/config/paypal', (req,res) => res.send(process.env.PAYPAL_CLIENT_ID) )

const __dirname = path.resolve()
app.use('/uploads', express.static(path.join(__dirname, '/uploads')))

// error handler for 404
app.use(notFound)
// error handler middleware 
app.use(errorHandler)

const PORT = process.env.PORT || 5000

app.listen(PORT,()=>{
    console.log(`server running in ${process.env.NODE_ENV} mode in port ${PORT}`.yellow.bold)
})