import mongoose from "mongoose";
require('dotenv').config();

const dbUrl:string = process.env.MONGODB_URI || '';

const connectDB = async () => {
    try {
        await mongoose.connect(dbUrl).then((data: any) => {
            console.log(`MongoDB Connected to host: ${data.connection.host}`)
        })
    } catch (error : any ){
        console.log(error)
        console.log(error.message)
        setTimeout(connectDB, 5000);
    }
}

export default connectDB;