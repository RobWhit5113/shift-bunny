const express = require('express')
const asyncHandler = require('express-async-handler')
const {Worker} = require('../../db/models')
const router = express.Router();


router.get('/', asyncHandler(async(req,res) => {
   const workers = await Worker.findAll()
   return res.json({workers})
}))

router.get('/:shiftType', asyncHandler(async(req,res) => {
  const shift_type = req.params.shiftType

  const relWorkers = await Worker.findAll({ where: {shift_type}})
  // console.log(res.json(relWorkers))
  return res.json({relWorkers})
}))

module.exports = router