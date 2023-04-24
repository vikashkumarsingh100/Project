module.exports.signin=function(req,res){
 if(req.isAuthenticated())
 return res.redirect('/profile')
   return res.render('sign-in')
}