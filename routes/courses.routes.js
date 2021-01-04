import express from 'express'
import courseCtrl from '../controllers/course.controller.js'
import authCtrl from '../controllers/auth.controller.js'

const router = express.Router()

router.route('/api/courses')
  .get(courseCtrl.list)
  .post(authCtrl.requireSignin, courseCtrl.create)

router.route('/api/courses/:courseId')
  .get(courseCtrl.courseById)
  .put(authCtrl.requireSignin, courseCtrl.update)
  .delete(authCtrl.requireSignin, courseCtrl.remove)

router.param('courseId', courseCtrl.setCourseId)


export default router