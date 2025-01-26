import express from "express"
const app=express()
import dotenv from "dotenv";
dotenv.config()
const port=3000 || process.env.port
import basicroute from "./routes/basic.js"
import onlinereservationroute from "./routes/onlinereservation.js"
import adminloginroute from "./routes/adminlogin.js"
import updatetotalnumberroute from "./routes/count.js"
import feedbackroute from "./routes/contactus.js"
import session from "express-session"


app.use(session({
  secret: 'secretkey',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false ,maxAge: 24*60*60*1000}
}))

app.set("use engine","ejs")
app.use(express.urlencoded({extended:false}))
app.use(express.static("public"))

app.use("/",basicroute)
app.use("/contactus",feedbackroute)
app.use("/onlinereservation",onlinereservationroute)
app.use("/adminlogin",adminloginroute)
app.use("/admindashboard/updatetotalnumber",updatetotalnumberroute)


app.listen(port,()=>{
console.log(`Server is listening at the ${port}`)
})
