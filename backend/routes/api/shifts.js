const express = require('express')
const asyncHandler = require('express-async-handler')
const{ setTokenCookie, restoreUser} = require('../../utils/auth')
const{User, Shift, Shift_Type} = require('../../db/models')
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

// get one shift 
// router.get('/:id', asyncHandler(async(req,res) => {
//    const shiftId = req.params.id
//    const shift = await Shift.findByPk(shiftId)
//    return res.json({shift})
// }))

router.delete('/:id', restoreUser, asyncHandler(async(req,res) => {
   const {user} = req
   const shiftId = req.params.id
   await Shift.destroy({where: {id: shiftId} })

   const shifts = await Shift.findAll({
       where: {
        // [Op.gt]: Date.now(),
        user_id: user.id,
       },
      
      })
   return res.json({shifts})  
   
}))

// create new shift for the user
router.post('/', asyncHandler(async(req,res) => {
   const {
      name,
      user_id,
      worker_id,
      shift_type_id,
      shift_Type,
      start_date,
      location,
      duration,
      description,
      completed 
   } = req.body

   let worker = +worker_id.split('-')[0]

   
   let newShiftTypeId = 0
   if (shift_Type === 'Bartender'){
      newShiftTypeId = 1
   }else if (shift_Type === 'Server') {
      newShiftTypeId = 2
   } else if (shift_Type === 'Cleaner'){
      newShiftTypeId = 3
   }


   const newShift = await Shift.create({
      name,
      user_id, 
      worker_id: worker,
      shift_type_id: newShiftTypeId,
      shift_type: shift_Type,
      start_date,
      location,
      duration,
      description,
      completed
   })
   return res.json({newShift})
}))


//update a shift

router.put('/:id', asyncHandler(async (req,res) => {
   const {
      id,
      name,
      user_id,
      worker_id,
      shift_type_id,
      shift_Type,
      start_date,
      location,
      duration,
      description,
      completed 
   } = req.body

   let worker = worker_id
   if (!Number.isInteger(worker)) {
      worker = +worker_id.split('-')[0]
   }

   
   let newShiftTypeId = 0
   if (shift_Type === 'Bartender'){
      newShiftTypeId = 1
   }else if (shift_Type === 'Server') {
      newShiftTypeId = 2
   } else if (shift_Type === 'Cleaner'){
      newShiftTypeId = 3
   }
   let shift = await Shift.findByPk(id)
   
   shift = await shift.update({
      name,
      user_id, 
      worker_id: worker,
      shift_type_id: newShiftTypeId,
      shift_type: shift_Type,
      start_date,
      location,
      duration,
      description,
      completed
   })
   
   
   const shifts = await Shift.findAll({
       where: {
        // [Op.gt]: Date.now(),
        user_id,
       },
      
      })
   return res.json({shifts})  
   
}))

module.exports = router