import express from 'express'
import authorCtrl from '../controllers/author.controller.js'

const router = express.Router()

router.route('/api/authors')
  .get(authorCtrl.list)

export default router