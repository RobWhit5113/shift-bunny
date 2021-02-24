const express = require('express')
const asyncHandler = require('express-async-handler')
const{ setTokenCookie, restoreUser} = require('../../utils/auth')
const{User, Shift} = require('../../db/models')
const {handleValidationErrors} = require('../../utils/validation')
const router = express.Router();

//get all of the shifts for a user

router.get('/', restoreUser, asyncHandler(async(req,res) => {
  //works
  // const date = new Date(year,month,day)
  const {Op} = require('sequelize')
  const {user} = req
  const shifts = await Shift.findAll({
       where: {
        // [Op.gt]: Date.now(),
        user_id: user.id,
       },
      
      })
      return res.json({shifts})  

   }))

// create new shift for the user
router.post('/', restoreUser, asyncHandler(async(req,res) => {
   const {
      name,
      user_id,
      worker_id,
      shift_type_id,
      start_date,
      location,
      duration,
      description,
      completed 
   } = req.body

   const newShift = await Shift.create({
      name,
      user_id, 
      worker_id,
      shift_type_id,
      start_date,
      location,
      duration,
      description,
      completed
   })
   return res.json({newShift})
}))


module.exports = router