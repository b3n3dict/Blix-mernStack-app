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
// @route Get /api/users/profile
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
// @desc update User Profile
// @route PUT /api/users/profile
// @access  private
const updateUserProfile = asyncHandler(async(req,res)=>{

  const user = await User.findById(req.user._id)
    if(user){
       user.name = req.body.name || user.name,
       user.email = req.body.email  || user.email
       if(req.body.password){
         user.password = req.body.password
       }
       const updatedUser = await user.save()
       res.json({
        _id:updatedUser._id,
        name:updatedUser.name,
        email:updatedUser.email,
        isAdmin:updatedUser.isAdmin,
        token: generateToken(user._id)
      })
    }else{
      res.status(404)
      throw new Error('User not found')
    }
})

// @desc get all Users
// @route Get /api/users
// @access  private/admin
const getUsers = asyncHandler(async(req,res)=>{

  const users = await User.find({})
    res.json(users)
})

// @desc delete user
// @route DELETE /api/users/:id
// @access  private/admin
const deleteUser = asyncHandler(async(req,res)=>{

  const user = await User.findById(req.params.id)
    if(user){
        await user.remove()
        res.json({message: 'User Removed'})
    }else{
      res.status(404)
      throw new Error('User Not Found')
    }
})

export {authUser ,registerUser ,getUserProfile,updateUserProfile,getUsers,deleteUser} 


