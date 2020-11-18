import User from '../models/userModel.js'
import asyncHandler from 'express-async-handler'
import generateToken from '../utils/generateToken.js'


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
           token: generateToken(user._id)
         })
  }else{
    res.status(401)
    throw new Error('Invalid Email and Password')
  }
      
})

// @desc Register a new user
// @route post /api/users
// @access  public
const registerUser = asyncHandler(async(req,res)=>{
  const {name,email,password} = req.body
 
  const userExist = await User.findOne({email})

  if(userExist){
    res.status(400)
    throw new Error('User already exists')
  }

  const user = await User.create({
    name,
    email,
    password
  })
      if(user){
        res.status(201).json({
          _id:user._id,
          name:user.name,
          email:user.email,
          isAdmin:user.isAdmin,
          token: generateToken(user._id)
        })
      }else{
        res.status(400)
        throw new Error('Invalid user data')
      }
})

// @desc get User Profile
// @route post /api/users/profile
// @access  private
const getUserProfile = asyncHandler(async(req,res)=>{

  const user = await User.findById(req.user._id)
    if(user){
      res.json({
        _id:user._id,
        name:user.name,
        email:user.email,
        isAdmin:user.isAdmin,
      })
    }else{
      res.status(404)
      throw new Error('User not found')
    }
})

export {authUser ,registerUser ,getUserProfile} 


