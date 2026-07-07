import express from "express"
const app=express()
import dotenv from "dotenv";
dotenv.config()
const port= process.env.PORT || 3000
import basicroute from "./routes/basic.js"
import onlinereservationroute from "./routes/onlinereservation.js"
import adminloginroute from "./routes/adminlogin.js"
import updatetotalnumberroute from "./routes/count.js"
import feedbackroute from "./routes/contactus.js"
import session from "express-session"

import MongoStore from "connect-mongo";

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
      mongoUrl: process.env.MONGO_URI
    }),
    cookie: {
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax"
    }
  })
);
app.set("view engine","ejs")
app.use(express.urlencoded({extended:false}))
app.use(express.static("public"))

app.use("/",basicroute)
app.use("/contactus",feedbackroute)
app.use("/onlinereservation",onlinereservationroute)
app.use("/adminlogin",adminloginroute)
app.use("/admindashboard/updatetotalnumber",updatetotalnumberroute)

app.get(["/mainpage", "/"],(req,res)=>{
  res.render("index.ejs")
  })

app.get("/admindashboard",(req,res)=>{
  if(req.session.signin){
    res.render("adminpagenew.ejs")
  }
  else{
    res.render("adminlogin.ejs")
  }
})

// app.listen(port,()=>{
//   console.log("Project is listening at 3000")
// })
export default app