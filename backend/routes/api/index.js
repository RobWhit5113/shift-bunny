const router = require('express').Router();
const sessionRouter = require('./session.js')
const usersRouter = require ('./users')
const shiftsRouter = require('./shifts');
const typesRouter = require('./types');
const workersRouter = require('./workers')
const reviewsRouter = require('./reviews')





router.use('/session', sessionRouter)
router.use('/users', usersRouter)
router.use('/shifts', shiftsRouter)
router.use('/types', typesRouter)
router.use('/workers', workersRouter)
router.use('/reviews', reviewsRouter)

module.exports = router;