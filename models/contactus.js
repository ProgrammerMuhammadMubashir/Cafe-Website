import mongoose from './connection.js';  

const feedbackschema=new mongoose.Schema({
nameofgiver:"String",
feedback:"String"
})

const feedbackcollection=mongoose.model("feedback",feedbackschema)

export default feedbackcollection