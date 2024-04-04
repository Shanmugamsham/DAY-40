const router=require("express").Router()
const usermdal=require("./database")
// const bcrypt = require("bcrypt");
//  const nodemailer=require("nodemailer")

//  const saltRounds = 10;
//  const salt = bcrypt.genSaltSync(saltRounds);


router.post("/create", async(req,res,next)=>{
    try {
        const {email}=req.body
        const user= await usermdal.findOne({email})
        if(!user){
                    // const hash = bcrypt.hashSync(req.body.password, salt);
                    // req.body.password = hash;
                     new_user = new usermdal(req.body);
                    await new_user.save()
                    console.log(new_user);
          // const hashpassword=await bcrypt.hash(password,10);
          // const newuser= new usermdal({email,password:hashpassword})
          // await newuser.save()
          return res.status(200).json({messege:"user is created"})
         
        }

        else{
           console.log("user mail id already taken");
          return res.status(404).json({messege:"user mail already taken"})

        }


    } catch (error) {
        res.json({
            success:false,
            messege:"server error"
        })
     
    }
    
  })

  // router.post("/resetpassword",async(req,res)=>{
  //   const {email} =req.body
  //   const user=  await usermdal.findOne({email})
  //   if(!user){
  //     return res.status(404).json({messege:"user is not found"})
  //   }
  //   const token=Math.random().toString(36).slice(-8)
  //   user.resetpassword=token
  //   user.restpasswordexpire=Date.now()+360000
  //   await user.save()

  //   const transpor=nodemailer.createTransport({
  //     service:"gmail",
  //     auth:{
  //       user:"abdeshandy@gmail.com",
  //       pass:"",
  //     }
  //   })

  //   const messege={
  //     from:"abdeshandy@gmail.com",
  //     to:user.email,
  //     subject:"password reset",
  //     text:`this is yor password code ${token}`
  //   }

  //   transpor.sendMail(messege,(err,info)=>{
  //     if(err){
  //       return res.status(404).json({messege:"something is wrong"})
  //     }
  //     res.status(200).json({messege:"reset password mail sent"})
  //   })


  // })
  


module.exports=router