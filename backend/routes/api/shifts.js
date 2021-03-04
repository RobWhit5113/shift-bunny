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
      console.log('>>>>>>>>>>>>>>>>>>>>>',shifts)
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
   const newShift = await Shift.create(req.body)
   return res.json({newShift})
}))


//update a shift

router.put('/:id', asyncHandler(async (req,res) => {
   let shift = await Shift.findByPk(id)
   
   shift = await shift.update(req.body)
   
   
   const shifts = await Shift.findAll({
       where: {
        // [Op.gt]: Date.now(),
        user_id,
       },
      
      })
   return res.json({shifts})  
   
}))

module.exports = router