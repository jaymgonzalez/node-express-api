import express from 'express'
import authorCtrl from '../controllers/author.controller.js'
import authCtrl from '../controllers/auth.controller.js'

const router = express.Router()

router.route('/api/authors')
  .get(authorCtrl.list)
  .post(authCtrl.requireSignin, authorCtrl.create)

router.route('/api/authors/:authorId')
  .get(authorCtrl.authorById)
  .put(authCtrl.requireSignin, authorCtrl.update)
  .delete(authCtrl.requireSignin, authorCtrl.remove)

router.param('authorId', authorCtrl.setAuthorId)

export default router