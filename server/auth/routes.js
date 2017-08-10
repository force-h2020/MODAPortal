import { Router } from 'express'
import handlers from './controllers'

const router = new Router()

router.route('/login').post(handlers.login)
router.route('/logout').get(handlers.logout)
router.route('/register').post(handlers.register)

export default router;