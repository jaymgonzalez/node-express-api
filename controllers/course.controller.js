import Course from '../models/courses.model.js'

const list = async (req, res) => {
  try {
    let courses = await Course.find()
    res.json(courses)
  } catch (err) {
    return res.status(400).json({
      error: err
    })
  }
}

export default { list }