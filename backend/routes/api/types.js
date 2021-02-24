const express = require('express')
const asyncHandler = require('express-async-handler')
const {Shift_type} = require('../../db/models')
const router = express.Router();


router.get('/', asyncHandler(async(req,res) => {
   const types = await Shift_type.findAll()
   console.log(res.json({types}))
   return res.json({types})
}))

module.exports = router