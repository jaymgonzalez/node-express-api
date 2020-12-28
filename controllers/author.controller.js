import Author from '../models/authors.model.js'

const list = async (req, res) => {
  try {
    let authors = await Author.find()
    res.json(authors)
  } catch (err) {
    return res.status(400).json({
      error: err
    })
  }
}
const authorByID = async (req, res) => {
  try {
    let authors = await Author.findById(req.params.authorId)
    res.json(authors)
  } catch (err) {
    return res.status(400).json({
      error: err
    })
  }
}

const create = async (req, res) => {
  const author = new Author(req.body)
  try {
    await author.save()
    return res.status(200).json({
      message: "Author created successfully!",
      author
    })
  } catch (err) {
    return res.status(400).json({
      error: err
    })
  }
}


export default { list, authorByID, create }