const db= require("../model/database")

const view=(req,res)=>{
    db.query("select *,DATE_FORMAT(date,'%d/%m/%Y') as date from doctors_portal.labtest",(err,result)=>{
        if(err){
            res.send(err)
        }
        if(result){
            res.send(result)
        }
        else{
            res.send({err:"No Lab test"})
        }
    })
}

module.exports={
    view
}