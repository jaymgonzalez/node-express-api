import express from 'express'
import courseCtrl from '../controllers/course.controller.js'

const router = express.Router()

router.route('/api/courses')
  .get(courseCtrl.list)
  .post(courseCtrl.create)

router.route('/api/courses/:courseId')
  .get(courseCtrl.courseById)
  .put(courseCtrl.update)

router.param('courseId', courseCtrl.setUserId)


export default router