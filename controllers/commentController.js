
const comment1=require('../models/comment');
const post=require('../models/post')
module.exports.comment10=async function(req,res){
    //  console.log(req.body.postId)
    //  console.log(req.body.contentComment)
    const p1=await post.findById(req.body.postId);
    if(p1){
        const c=await comment1.create({
            content:req.body.contentComment,
            user:req.user._id,
            post:req.body.postId
            
        
        })
        p1.comments.push(c);
        p1.save();
    }

// const commentp=await comment1.find().populate('user').populate({path:'post',populate:{path:'user'}})
// console.log(comment)

return res.redirect('/')
// return res.render('index',{posts1:a})
}