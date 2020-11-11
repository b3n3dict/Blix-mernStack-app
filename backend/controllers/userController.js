import User from '../models/userModel.js'
import asyncHandler from 'express-async-handler'
import { EROFS } from 'constants'


// @desc Auth user & get token
// @route post /api/users/login
// @access  public
const authUser = asyncHandler(async(req,res)=>{
  const {email,password} = req.body
 
  const user = await User.findOne({email})

  if(user && (await user.matchPassword(password))){
         res.json({
           _id:user._id,
           name:user.name,
           email:user.email,
           isAdmin:user.isAdmin,
           token: null
         })
  }else{
    res.status(401)
    throw new Error('Invalid Email and Password')
  }
      
})

export {authUser} 