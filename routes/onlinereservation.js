import express from "express"
import datainsertionfunc from "../controllers/onlinereservation.js"
const onlinereservationroute=express.Router()


onlinereservationroute.post("/",datainsertionfunc)

export default onlinereservationroute