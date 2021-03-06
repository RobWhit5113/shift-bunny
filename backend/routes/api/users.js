const express = require('express')
const asyncHandler = require('express-async-handler');
const{ setTokenCookie, requireAuth} = require('../../utils/auth')
const{User} = require('../../db/models')
const {check} = require('express-validator')
const {handleValidationErrors} = require('../../utils/validation')
const router = express.Router();

//checking to make sure request has the correct keys-middleware
const validateSignup = [
  check('email')
    .exists({ checkFalsy: true })
    .isEmail()
    .withMessage('Please provide a valid email.'),
  check('username')
    .exists({ checkFalsy: true })
    .isLength({ min: 4 })
    .withMessage('Please provide a username with at least 4 characters.'),
  check('username')
    .not()
    .isEmail()
    .withMessage('Username cannot be an email.'),
  check('password')
    .exists({ checkFalsy: true })
    .isLength({ min: 6 })
    .withMessage('Password must be 6 characters or more.'),
  handleValidationErrors,
];

//sign up
router.post('/', validateSignup, asyncHandler(async(req,res) => {
  const {first_name, last_name, username, email, password} = req.body
  const user = await User.signup({first_name, last_name, email, username, password})

  await setTokenCookie(res, user)

  return res.json({user})
}))

module.exports = router;