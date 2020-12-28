import express from 'express'
import authorCtrl from '../controllers/author.controller.js'

const router = express.Router()

router.route('/api/authors')
  .get(authorCtrl.list)
  .post(authorCtrl.create)

router.route('/api/authors/:authorId')
  .get(authorCtrl.authorByID)

export default router