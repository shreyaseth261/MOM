const db = require("../model/database")


const view = (req,res)=>{
    db.query("select *,DATE_FORMAT(date,'%d/%m/%Y') as date from doctors_portal.appointment",(err,result)=>{
        if(err){
            res.send(err)
        }
        if(result){
            res.send(result)
        }
        else{
            res.send({err:"No appointments"})
        }
    })

}

module.exports={
    view
}