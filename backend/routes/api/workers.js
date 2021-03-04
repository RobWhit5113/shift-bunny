const express = require('express')
const asyncHandler = require('express-async-handler')
const {Worker} = require('../../db/models')
const router = express.Router();


router.get('/', asyncHandler(async(req,res) => {
   const workers = await Worker.findAll()
   return res.json({workers})
}))

router.get('/:shift_type_id', asyncHandler(async(req,res) => {
  const shift_type_id = req.params.shift_type_id

  const relWorkers = await Worker.findAll({ where: {shift_type_id}})
  // console.log(res.json(relWorkers))
  return res.json({relWorkers})
}))

module.exports = router