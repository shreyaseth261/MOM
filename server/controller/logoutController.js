const logout = (req,res)=>{
    if(res.clearCookie("jwt")){
        res.send("User logged out")
    }
    else{
        res.send({err:"Failed to log out"})
    }
}

const adminlogout = (req,res)=>{
    if(res.clearCookie("adminjwt")){
        res.send("Admin logged out")
    }
    else{
        res.json({err:"Admin logout failed"})
    }
}

module.exports={
    logout,
    adminlogout

}