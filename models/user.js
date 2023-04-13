var mongoose=require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/test1').then((err)=>{
if(err)
{
    return console.log(err)
}
console.log("connected123")
})
const user=new mongoose.Schema({
    name:{
        type:String,
        required:true
    }
},
{
    timestamps:true
}
)
const users=mongoose.model('users',user)
module.exports=users;
