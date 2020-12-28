import Course from '../models/courses.model.js'
import extend from 'lodash/extend.js'

const list = async (req, res) => {
  try {
    const query = {}
    if (req.query.category) {
      query.category = req.query.category
    }
    if (req.query.authorId) {
      query.authorId = req.query.authorId
    }
    let courses = await Course.find(query)
    res.json(courses)
  } catch (err) {
    return res.status(400).json({
      error: err
    })
  }
}

const courseById = async (req, res) => {
  try {
    let course = await Course.findById(req.params.courseId)
    res.json(course)
  } catch (err) {
    return res.status(400).json({
      error: err
    })
  }
}

const setUserId = async (req, res, next, id) => {
  try {
    let course = await Course.findById(id)
    req.profile = course
    next()
  } catch (err) {
    return res.status(400).json({
      error: err
    })
  }
}

const create = async (req, res) => {
  const course = new Course(req.body)
  try {
    await course.save()
    return res.status(200).json({
      message: "Course created successfully!"
    }, course)
  } catch (err) {
    return res.status(400).json({
      error: err
    })
  }
}

const update = async (req, res) => {
  try {
    let course = req.profile
    course = extend(course, req.body)
    await course.save()
    res.json(course)
  } catch (err) {
    return res.status(400).json({
      error: err
    })
  }
}


export default { list, courseById, create, update, setUserId }