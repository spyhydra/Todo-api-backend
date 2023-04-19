const User=require('../models/user');


//register a user

module.exports.user= async function (req,res){

    const{name,email,password}=req.body;
    try {
        let user= await User.findOne({email});
        if(!user){
            const newUser=new User({
                name,
                email,
                password
            });
            await newUser.save();
            return res.status(200).json(newUser);
        }
        return res.status(406).json({message:'User Already Exists'})

    }catch (err){
        console.log(err);
        return res.status(500).json({message:'Internal Server Error'})
    }

}