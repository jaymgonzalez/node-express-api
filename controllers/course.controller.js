import Course from '../models/courses.model.js'

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

const courseByID = async (req, res) => {
  try {
    let courses = await Course.findById(req.params.courseId)
    res.json(courses)
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


export default { list, courseByID, create }