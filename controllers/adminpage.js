import dotenv from "dotenv";
import nodemailer from "nodemailer"
import feedbackcollection from "../models/contactus.js";
import onlinereservationcollection from "../models/onlinereservation.js";
import countcollection from "../models/count.js"

dotenv.config()
const emailsenderfunc=(req,res)=>{
  const {
    fullName,
    email,
    phone,
    date,
    time,
    duration,
    numberOfGuests,
    seatingPlan,
    discoforderbyadmin
  } = req.body;
const transporter = nodemailer.createTransport({

     
  service: 'gmail',
  auth: {
    user: process.env.ADMIN_EMAIL,  //  email
    pass: process.env.APP_PASSWORD,  // App Password
  },
});

const mailOptions = {
    from: process.env.ADMIN_EMAIL,
    to:email , 
    subject: `Reservation Confirmation and Important Information`,
    text: `Dear ${fullName},
  
  Your table has been reserved with the details mentioned below. Please make sure to review your reservation. We may have adjusted your reservation plan:
  
  - Full Name: ${fullName}
  - Email: ${email}
  - Phone: ${phone}
  - Date: ${date}
  - Time: ${time}
  - Duration: ${duration} hours
  - Number of Guests: ${numberOfGuests}
  - Seating Plan: ${seatingPlan}
  
  ### Admin Remarks
  ${discoforderbyadmin ? discoforderbyadmin : `Make sure that you check it out. If there are any questions or you need further assistance, feel free to contact us.` } 
  
  We look forward to welcoming you!
  
  Best regards,  
  Cafe Website`
  };

transporter.sendMail(mailOptions,async (error, info) => {
  if (error) {
    console.log('Error:', error);
    res.json({Note:"Failed"})
} else {
  let updateonefunc=async()=>{
    let a=await onlinereservationcollection.updateOne({email:email},{mailsent:true})
  }
  updateonefunc()
  const plannametoupdate=req.body.seatingPlan
  let reservedvalue=await countcollection.findOne({planname:plannametoupdate})
  
    await countcollection.updateOne({planname:plannametoupdate},{reserved:reservedvalue.reserved+1})
  res.redirect("/admindashboard")
  }
});
}

const clearfeedbacksfunc=async(req,res)=>{
  try{
  
    
let z=await feedbackcollection.deleteMany({})
res.redirect("/admindashboard")

  
  }
  catch(error){
    console.log(error)
  }

}

const removeorderfunc=async(req,res)=>{
  try{
  const emailtoremove=req.body.emailtoremove
await onlinereservationcollection.deleteOne({email:emailtoremove})

res.redirect("/admindashboard")
}
catch(error){
  console.log(error)
}

}
const declineemailsenderfunc=(req,res)=>{
  let {
 discoforderbyadmin,
 emailtodecline
  } = req.body;
  emailtodecline=emailtodecline.trim()
  console.log(emailtodecline)
const transporter = nodemailer.createTransport({

     
  service: 'gmail',
  auth: {
    user: process.env.ADMIN_EMAIL,  //  email
    pass: process.env.APP_PASSWORD,  // App Password
  },
});

const mailOptions = {
    from: process.env.ADMIN_EMAIL,
    to:"itismubashiratcode@gmail.com" , 
    subject: `Reservation Alert!`,
    text: `Dear Customer,
  
 Your order of reservation has cancelled!
 ${discoforderbyadmin}
  
  Best regards,  
  Cafe Website`
  };

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log('Error:', error);
    res.json({Note:"Failed"})
} else {
  let updateonefunc=async()=>{
    let a=await onlinereservationcollection.updateOne({email:emailtodecline},{mailsent:true})
  }
  updateonefunc()
  res.redirect("/admindashboard")
  }
});
}
export  {emailsenderfunc,clearfeedbacksfunc,removeorderfunc,declineemailsenderfunc}