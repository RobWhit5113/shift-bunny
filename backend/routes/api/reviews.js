const express = require('express')
const asyncHandler = require('express-async-handler')
const{restoreUser} = require('../../utils/auth')
const{Review} = require('../../db/models')
const {handleValidationErrors} = require('../../utils/validation')
const router = express.Router();

// Get all of the reviews for a user

router.get('/', restoreUser, asyncHandler(async(req,res)=> {
  const {user} = req
  const reviews = await Review.findAll({
    where: {
      user_id: user.id 
    }
  })
  return res.json({reviews})
}))

module.exports = router