import express from 'express';
const router = express.Router()
import {authUser, getUserProfile,getUsers,registerUser,updateUserProfile} from '../controllers/userController.js'
import {admin, protect} from '../middleware/authMiddleware.js'

router.route('/').post(registerUser).get(protect,admin,getUsers)

router.post('/login', authUser)

router.route('/profile').get(protect,getUserProfile).put(protect,updateUserProfile)





export default router