const router = require('express').Router();
const sessionRouter = require('./session.js')
const usersRouter = require ('./users')
const shiftsRouter = require('./shifts');




router.use('/session', sessionRouter)
router.use('/users', usersRouter)
router.use('/shifts', shiftsRouter)

module.exports = router;