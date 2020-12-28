import mongoose from 'mongoose'

const { Schema } = mongoose

const courseModel = new Schema({
  id: { type: Number },
  slug: { type: String },
  title: { type: String },
  authorId: { type: Number },
  category: { type: String }
})

export default mongoose.model('Course', courseModel)