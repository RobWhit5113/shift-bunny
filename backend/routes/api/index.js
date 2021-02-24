const router = require('express').Router();
const sessionRouter = require('./session.js')
const usersRouter = require ('./users')
const shiftsRouter = require('./shifts');
const typesRouter = require('./types');





router.use('/session', sessionRouter)
router.use('/users', usersRouter)
router.use('/shifts', shiftsRouter)
router.use('/types', typesRouter)

module.exports = router;