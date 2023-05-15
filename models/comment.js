var mongoose=require('mongoose');
var commentSchema=new mongoose.Schema({
    content:{
        type:String,
        required:true
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'users'
    },
    post:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'post'
    }
},{
    timestamps:true
})

var comment=mongoose.model('comment',commentSchema);
module.exports=comment;