const { NotFound } = require("http-errors");
const {User} =require("../../models")

const patchSubscription = async(req,res)=>{
const {id}=req.params;
const {subscription}=req.body;
const result = await User.findByIdAndUpdate(id,{subscription},{new:true})
if(!result){
    throw new NotFound(`Not found`);
}
res.json({
    status:"success",
    code:200,
    data:{result}
})
}

module.exports=patchSubscription;  