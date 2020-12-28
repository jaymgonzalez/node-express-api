import Author from '../models/authors.model.js'

const list = async (req, res) => {
  try {
    let courses = await Author.find()
    res.json(courses)
  } catch (err) {
    return res.status(400).json({
      error: err
    })
  }
}

export default { list }