import countcollection from "../models/count.js";

const updatetotalnumberfunc=async(req,res)=>{
let {communalupdated,tableandchairupdated,boothupdated}=req.body

 communalupdated=parseInt(communalupdated)
tableandchairupdated=parseInt(tableandchairupdated)
boothupdated=parseInt(boothupdated)

await countcollection.updateOne({planname:"communal"},{numberoftables:communalupdated})
await countcollection.updateOne({planname:"tableandchair"},{numberoftables:tableandchairupdated})
await countcollection.updateOne({planname:"booth"},{numberoftables:boothupdated})

    if (req.session && req.session.signin) {
        let communal=await countcollection.findOne({planname:"communal"})
        let tableandchair=await countcollection.findOne({planname:"tableandchair"})
        let booth=await countcollection.findOne({planname:"booth"})
     res.redirect("/admindashboard")
    }
}
export default updatetotalnumberfunc