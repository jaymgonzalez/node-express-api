import express from 'express'
import courseCtrl from '../controllers/course.controller.js'

const router = express.Router()

router.route('/api/courses')
  .get(courseCtrl.list)
  .post(courseCtrl.create)

router.route('/api/courses/:courseId')
  .get(courseCtrl.courseByID)

export default router