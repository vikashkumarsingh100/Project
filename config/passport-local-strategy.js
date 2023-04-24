var passport=require('passport')
var PassportLocalStrategy=require('passport-local').Strategy;
var users=require('../models/user')
passport.use(new PassportLocalStrategy({usernameField:"email"},
    async function(email,password,done){
     const a=await users.findOne({email:email})
     if(a)
     {
        if(a.password!=password)
        return done('wrong password',false)
     return done(null,a)
     }
     else{
        return done('error',null)
     }
     })
     
  
)
passport.serializeUser(function(user,done){
    done(null,user.id)
})
passport.deserializeUser( async function(id,done){
user=await users.findById(id)
if(user)
return done(null,user)
})
passport.authenticateUser=function(req,res,next){
    if(req.isAuthenticated())
    {
        return next();
    }
    return res.redirect('/sign-in')
}
passport.setAuthenticated=function(req,res,next){
    if(req.isAuthenticated())
    res.locals.user=req.user;
    next();
}
module.exports=passport;