const logout = (req,res)=>{
    if(res.clearCookie("jwt")){
        res.send("User logged out")
    }
    else{
        res.send({err:"Failed to log out"})
    }
}

module.exports={
    logout
}