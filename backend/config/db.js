import mongoose from 'mongoose';
const connectDB = async ()=>{
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useCreateIndex:true
        })

        console.log(`Mongodb Connected: ${conn.connection.host}`.blue.underline)
    } catch (error) {
            
        console.log(`Erorr:${error.message}`.red.underline.bold)
        process.exit(1)
    }
}

export default connectDB;