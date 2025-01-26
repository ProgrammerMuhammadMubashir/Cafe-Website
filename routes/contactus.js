import express from "express"
import feedbackfunc from "../controllers/contactus.js"
const feedbackroute=express.Router()

feedbackroute.post("/",feedbackfunc)
export default feedbackroute