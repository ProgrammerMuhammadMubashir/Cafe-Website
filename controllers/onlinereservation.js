import onlinereservationcollection from "../models/onlinereservation.js";


const insertionofdatafunc=async(req,res)=>{
    let {
        fullName,
        email,
        phone,
        date,
        time,
        duration,
        numberOfGuests,
        seatingPlan
      } = req.body;
     
    let emailPresent=await onlinereservationcollection.find({email:email})



  
 console.log(emailPresent)
  if(emailPresent.length===0){
    await  onlinereservationcollection.insertMany({
        fullName: fullName,
        email: email,
        phone: phone,
        date: date,
        time: time,
        duration: duration,
        numberOfGuests: numberOfGuests,
        seatingPlan: seatingPlan
      })
      .then(async ()=>{
        let msgofdatadone="We will contact to you further about your provided details"
       
        console.log(msgofdatadone)
        res.render("onlinereservation.ejs",{msg:`${msgofdatadone}`})
      })
      .catch(()=>{
        let msgofdataerror="Something went wrong"
        console.log(msgofdataerror)
        res.render("onlinereservation.ejs",{msg:`${msgofdataerror}`})
      })
    }
    else{
      let msgofdataerror="There is already a reservation on this E-mail"
      console.log(msgofdataerror)
      res.render("onlinereservation.ejs",{msg:`${msgofdataerror}`})
    }

}

export default insertionofdatafunc