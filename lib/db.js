import mongoose from 'mongoose'


const connectDB = async()=>{
    try{
        if(mongoose.connection.readyState === 1){
            return
        }
        else{
            await mongoose.connect(process.env.MONGODB_URI);
            console.log("Mongo Db connected...")
        }
    }
    catch(err){
        console.log(err)
    }
}
export default connectDB