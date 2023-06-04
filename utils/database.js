import mongoose from "mongoose";

// track the connection status
let isConnected = false

export const connectToDB = async () => {
    // sets the mongoose option
    // setting strictQuery to true
    mongoose.set('strictQuery', true)
    if (isConnected) {
        console.log('mongodb is already connected')
        // return out of the function to stop it from running
        return
    } 
    // if we are not connected we can try to establish connection
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: 'todo_items',
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })

        isConnected = true
        console.log('mongo db is connected')
    } catch (error) {
        console.log(error)
    }
}
