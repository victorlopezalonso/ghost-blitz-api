import jwt from 'jsonwebtoken'

const config = process.env

const verifyToken = (req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(401).json({ message: 'Unauthorized' })
  }

  const [, token] = req.headers.authorization.split(' ')

  try {
    req.user = jwt.verify(token, config.TOKEN_KEY)
  } catch (err) {
    return res.status(401).json({ message: 'Token is invalid or has expired' })
  }

  return next()
}

export default verifyToken
