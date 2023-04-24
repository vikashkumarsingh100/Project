module.exports.signup=function(req,res){
    // console.log(req.body)
    if(req.isAuthenticated())
    return res.redirect('/profile')
    return res.render('sign-up')
}