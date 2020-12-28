import Author from '../models/authors.model.js'
import extend from 'lodash/extend.js'

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
const authorById = async (req, res) => {
  try {
    res.json(req.profile)
  } catch (err) {
    return res.status(400).json({
      error: err
    })
  }
}

const setAuthorId = async (req, res, next, id) => {
  try {
    let author = await Author.findById(id)
    req.profile = author
    next()
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

const update = async (req, res) => {
  try {
    let author = req.profile
    author = extend(author, req.body)
    await author.save()
    res.json(author)
  } catch (err) {
    return res.status(400).json({
      error: err
    })
  }
}

const remove = async (req, res) => {
  try {
    let author = req.profile
    let deletedAuthor = await author.remove()
    res.status(204).json(deletedAuthor)
  } catch (err) {
    return res.status(400).json({
      error: err
    })
  }
}


export default { list, authorById, create, setAuthorId, update, remove }