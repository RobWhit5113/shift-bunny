const express = require('express')
const asyncHandler = require('express-async-handler')
const{ setTokenCookie, restoreUser} = require('../../utils/auth')
const{User, Shift} = require('../../db/models')
const {handleValidationErrors} = require('../../utils/validation')
const router = express.Router();

//get all of the shifts for a user

router.get('/', restoreUser, asyncHandler(async(req,res) => {
  //works
  const {user} = req
  const shifts = await Shift.findAllShiftsForUser(user.id)
  return res.json({shifts})

}))

module.exports = router