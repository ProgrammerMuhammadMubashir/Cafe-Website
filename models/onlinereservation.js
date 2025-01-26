
import mongoose from './connection.js';  


const onllinereservationschema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  date: { type: Date, required: true },
  time: { type: String, required: true },
  duration: { type: Number, required: true, min: 1, max: 5 },
  numberOfGuests: { type: Number, required: true, min: 1, max: 20 },
  seatingPlan: {
    type: String,
    required: true,
    enum: ["tableandchair", "communal", "booth"],
  },
  mailsent:{
   type:Boolean,
   default:false,
  }

});

const onlinereservationcollection=mongoose.model("onlinereservation", onllinereservationschema);

export default onlinereservationcollection

