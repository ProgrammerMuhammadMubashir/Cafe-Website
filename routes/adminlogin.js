import express from "express"
import adminloginfunc from "../controllers/adminlogin.js"
const adminloginroute=express.Router()

adminloginroute.post("/",adminloginfunc)


export default adminloginroute