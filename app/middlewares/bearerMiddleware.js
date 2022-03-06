import jwt from 'jsonwebtoken'
import { addDays, compareAsc, toDate } from 'date-fns'

const config = process.env

const canBeUpdated = (expiredAt) => {
  const maxRefreshDate = addDays(toDate(expiredAt), 30)

  return compareAsc(maxRefreshDate, new Date()) !== -1
}

const bearerPresent = (req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(401).json({ message: 'Unauthorized' })
  }

  const [, token] = req.headers.authorization.split(' ')

  try {
    jwt.verify(token, config.TOKEN_KEY)
  } catch (err) {
    if (err.name !== 'TokenExpiredError') {
      return res.status(401).json({ message: 'Token is invalid' })
    }

    if (!canBeUpdated(err.expiredAt)) {
      return res.status(401).json({ message: 'Token has expired' })
    }
  }

  req.user = jwt.decode(token)

  return next()
}

export default bearerPresent
