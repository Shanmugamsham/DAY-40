// const router=require("express").Router()
// const usermodale=require("./database")
// const bcrypt = require("bcrypt");

// const saltRounds = 10;
// const salt = bcrypt.genSaltSync(saltRounds);



// router.get("/",(req,res,next)=>{
//   res.json({"name":"shanmugam","email":"abdesham@gmail.com","password":"shan456"})
// })


// router.post("/create", async(req,res,next)=>{
//     try {
//         if (!req.body.password || !req.body.email) {
//             return res.status(401).json({
//               success: false,
//               message: "Bad credentials",
//             })}
//             else{
//                 const hash = bcrypt.hashSync(req.body.password, salt);
//                 req.body.password = hash;
//                 const NEW_USER = new usermodale(req.body);
//                 console.log(NEW_USER);
//                 if (NEW_USER) {
//                   const response = await NEW_USER.save();
//                   if (response) {
//                     return res.status(201).json({
//                       success: true,
//                       message: "Account creation successful",
//                       user: response,
//                     });
//                   } else {
//                     throw new Error("Account creation failed");
//                   }
//                 }
//               }

    


//     } catch (error) {
//         res.json({
//             success:false,
//             messege:"user name already"
//         })
//       }
    
//   })
  


// module.exports=router