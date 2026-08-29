import express, { json } from 'express'
import userSchema from './userschema.js'
import bcrypt from 'bcryptjs'
import userschema from './userschema.js';
import verifytoken from './authmiddleware.js';
import jwt from 'jsonwebtoken'

const router=express.Router();
const jwt_secret = 'secret_key_1417'

router.post('/postuser', async(req,res)=>{
    try{
         const {username,email,password}= req.body;

         const userexist= await userschema.findOne({email});
         if(userexist){
            return res.status(400).send('user already exist')
         }

        const salt = await bcrypt.genSalt(10);
        const hashedpassword= await bcrypt.hash(password,salt);

    const savedata = new userSchema({
        username: username,
        email:email,
        password:hashedpassword,
    });
    const saveddata=await savedata.save();
    res.status(200).send(saveddata)
    }
    catch(e){
        console.log(e)
    }
})

router.post('/login',async (req,res)=>{
    try{
        const {email,password}= req.body;
         const  user = await userschema.findOne({email});
         if(!user){
            return res.status(404).send("user not found")
         }
         const ismatch= await bcrypt.compare(password,user.password);
         if(!ismatch){
            return res.status(400).send('invalid password')
         }
         const payload={
            userId:user.id,
            username:user.username
         };
         const token = jwt.sign(payload,jwt_secret,{expiresIn:'1h'})
         return res.status(200).json({message:'login successful',token:token})
    }
    catch(e){
        console.log(e);
        return res.status(500).send("Error during login");
    }
})

// A simple protected route to test your JWT middleware
router.get('/protected-test', verifytoken, (req, res) => {
  
    res.status(200).json({
        message: "Success! You have accessed a protected route.",
        yourDecodedData: req.user
    });
});

export default router
 