const expres=require('express')
const bodyparser=require('body-parser')
const mongoose=require("mongoose")
const app = expres()
const cors=require('cors')
const jwt=require('jsonwebtoken')
const env=require('dotenv').config().parsed;
console.log(env)
async function connect(){
    await mongoose.connect("mongodb+srv://Kanish:Kanish%400603@kanish0603.p7ibjps.mongodb.net/Expences")
    console.log("connected to db");
    app.listen(Number(env.PORT),()=>{
        console.log("Server is Running")
    })
}

connect()
const expenseRoutes=require('./Routes/expenseRoutes')
const  userRoutes=require('./Routes/userRoutes')
app.use(bodyparser.json())
app.use(cors())
app.use('/expences',expenseRoutes)
app.use('/User',userRoutes)
