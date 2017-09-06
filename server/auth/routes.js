import express from 'express'
import handlers from './controllers'

const router = express.Router()

router.get('/logout', handlers.logout)
router.post('/login', handlers.login)
router.post('/register', handlers.register)

export default router
