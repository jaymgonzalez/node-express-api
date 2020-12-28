import mongoose from 'mongoose'

const { Schema } = mongoose

const authorModel = new Schema({
  id: { type: Number },
  name: { type: String }
})

export default mongoose.model('Author', authorModel)