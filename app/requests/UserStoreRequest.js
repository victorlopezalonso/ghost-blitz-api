import validator from 'express-validator'
import { User } from '../models/user.js'

export default [
  validator.body('username', 'username is required').exists(),
  validator.body('username')
    .custom(async (username) => await User.findOne({ username }).exec() && Promise.reject(Error))
    .withMessage('username already exists'),
  validator.body('email')
    .exists()
    .withMessage('email is required')
    .isEmail()
    .withMessage('must be at least 5 chars long')
    .custom(async (email) => await User.findOne({ email }) && Promise.reject(Error))
    .withMessage('email already exists'),
  validator.body('password')
    .exists()
    .withMessage('Password is required')
    .isLength({ min: 8 })
    .withMessage('Password must be at least 8 characters long')
]
