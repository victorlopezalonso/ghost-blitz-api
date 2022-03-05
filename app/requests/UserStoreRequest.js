import validator from 'express-validator'
import { validate } from './validator.js'

export default (callback) => [
  validator.body('name', 'name is required').exists(),
  validator.body('email')
    .exists()
    .withMessage('email is required')
    .isEmail()
    .withMessage('must be at least 5 chars long'),
  validator.body('password')
    .exists()
    .withMessage('Password is required')
    .isLength({ min: 8 })
    .withMessage('Password must be at least 8 characters long'),
  (req, res) => validate(req, res, callback)
]
