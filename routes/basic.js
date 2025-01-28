import express, { Router } from "express"
const basicroute=express.Router()
import bcrypt from 'bcrypt'
import countcollection from "../models/count.js"
import {emailsenderfunc,clearfeedbacksfunc,removeorderfunc,declineemailsenderfunc}  from "../controllers/adminpage.js"

import feedbackcollection from "../models/contactus.js"
import onlinereservationcollection from "../models/onlinereservation.js"

basicroute.post("/admindashboard",emailsenderfunc)
basicroute.post("/admindashboard/clearfeedbacks",clearfeedbacksfunc)
basicroute.post("/admindashboard/removeorder",removeorderfunc)
basicroute.post("/admindashboard/declineorder",declineemailsenderfunc)



basicroute.get("/menu",(req,res)=>{
    res.render("menu.ejs")

})
basicroute.get("/onlinereservation",(req,res)=>{
    res.render("onlinereservation.ejs",{msg:""})
})
basicroute.get("/contactus",(req,res)=>{
    res.render("contactus.ejs",{msg:""})

})

basicroute.get("/adminlogin", async (req, res) => {
    if (req.session && req.session.signin) {
   let communal=await countcollection.findOne({planname:"communal"})
   let tableandchair=await countcollection.findOne({planname:"tableandchair"})
   let booth=await countcollection.findOne({planname:"booth"})
   let allfeedbacks=await feedbackcollection.find({})
   let allreservations=await onlinereservationcollection.find({})
        res.render("adminpage.ejs", {
           recommunal:communal.reserved,
           retableandchair:tableandchair.reserved,
           rebooth:booth.reserved,
           tcommunal:communal.numberoftables,
           ttableandchair:tableandchair.numberoftables,
           tbooth:booth.numberoftables,
          arrayoffeedback:allfeedbacks,
          arrayofreservations:allreservations,
        });
    } else {
        res.render("adminlogin.ejs", { msg: "" });
    }
});

basicroute.get("/admindashboard", async (req, res) => {
    if (req.session && req.session.signin) {
        let communal=await countcollection.findOne({planname:"communal"})
        let tableandchair=await countcollection.findOne({planname:"tableandchair"})
        let booth=await countcollection.findOne({planname:"booth"})
        let allfeedbacks=await feedbackcollection.find({})
        let allreservations=await onlinereservationcollection.find({})
        
             res.render("adminpage.ejs", {
                recommunal:communal.reserved,
                retableandchair:tableandchair.reserved,
                rebooth:booth.reserved,
                tcommunal:communal.numberoftables,
                ttableandchair:tableandchair.numberoftables,
                tbooth:booth.numberoftables,
                arrayoffeedback:allfeedbacks,
                arrayofreservations:allreservations,
             });
         }  else {
        res.render("adminlogin.ejs", { msg: "" });
    }
});


export default basicroute