import mongoose from './connection.js';  

const countschema=new mongoose.Schema({
    planname:"String",
    numberoftables:"Number",
    reserved:"Number",
    availability:{
      type:"Boolean",
      default:true
    }
})

const countcollection=mongoose.model("count",countschema)

export default countcollection