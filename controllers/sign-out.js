
module.exports.signOut=function(req,res){
    req.logOut((err)=>{
        if(err)
        return console.log(err)
      return res.redirect('/')

    });
}
