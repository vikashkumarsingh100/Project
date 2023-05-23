var mongoose=require('mongoose');
const comment = require('./comment');
var schema=new mongoose.Schema({
    content:{
        type:String,
        required:true

    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'users'
    },
    comments:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'comment'
        }
    ]
},{
    timestamps:true
})

var posts=mongoose.model('post',schema);
module.exports=posts;