var mongoose=require('mongoose');
var schema=new mongoose.Schema({
    content:{
        type:String,
        required:true

    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'users'
    }
},{
    timestamps:true
})

var posts=mongoose.model('post',schema);
module.exports=posts;