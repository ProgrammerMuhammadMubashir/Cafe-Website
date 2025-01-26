import express from "express"
import updatetotalnumberfunc from "../controllers/count.js"
const updatetotalnumberroute=express.Router()


updatetotalnumberroute.post("/",updatetotalnumberfunc)

export default updatetotalnumberfunc