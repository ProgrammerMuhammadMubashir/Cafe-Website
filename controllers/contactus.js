import feedbackcollection from "../models/contactus.js";

const feedbackfunc=async(req,res)=>{
let {feedbackName,feedbackMessage}=req.body;
feedbackName=feedbackName.trim()
feedbackMessage=feedbackMessage.trim()

try{
await feedbackcollection.insertMany([{nameofgiver:feedbackName,feedback:feedbackMessage}])

    res.render("contactus.ejs",{msg:"Feedback submitted successfully"})
}catch(error){
    console.log(error)
}
}

export default feedbackfunc