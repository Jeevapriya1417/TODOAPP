import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import router from './route.js'
import userRoute from './userRoute.js'


dotenv.config()

const app=express()

app.use(express.json())
app.use(cors())
app.use(router)
app.use(userRoute)

const PORT=process.env.PORT ||5000
const MONGO_URI=process.env.MONGO_URI

async function DBconnect(){
    try{
        await mongoose.connect(process.env.MONGO_URI)
        console.log("DB connected")
    }
    catch(e){
        console.log(e.message)
    }
}
DBconnect();

app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
})