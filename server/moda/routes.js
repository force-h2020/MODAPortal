/* More info on express routing: https://expressjs.com/en/guide/routing.html */
import express from 'express'
import * as handlers from './controller'


const router = express.Router()

// An sample express middleware
/*router.use((req, res, next) => {
  console.log('Time: ', Date.now())
  next()
})
*/
router.use((req, res, next) => {
  if (req.isAuthenticated()) {
    return next()
  }
  // See: http://expressjs.com/en/api.html#res.status
  res.sendStatus(403)
})

router.get('/', handlers.getModas)
router.get('/:cuid', handlers.getModa)
router.put('/:cuid', handlers.putModa)
router.get('/:cuid/history', handlers.getModaHistory)
router.post('/', handlers.addModa)
router.delete('/:cuid', handlers.deleteModa)


export default router
