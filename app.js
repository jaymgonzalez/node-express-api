import dotenv from 'dotenv'
import coursesRoute from './routes/courses.routes.js'
import authorsRoute from './routes/authors.routes.js'
import authRoutes from './routes/auth.routes.js'
import userRoutes from './routes/user.routes.js'
import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import helmet from 'helmet'
import compress from 'compression'
import cors from 'cors'

dotenv.config()

const app = express()
const db = mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
const port = process.env.PORT || 3000

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cookieParser())
app.use(helmet())
app.use(compress())
app.use(cors())

app.use('/', coursesRoute)
app.use('/', authorsRoute)
app.use('/', authRoutes)
app.use('/', userRoutes)

app.get('/', (req, res) => {
  res.send('Welcome to my Courses API')
})

app.listen(port, () => {
  console.log(`Running on port ${port}`)
})

app.use((err, req, res, next) => {
  if (err.name === 'UnauthorizedError') {
    res.status(401).json({ "error": err.name + ": " + err.message })
  } else if (err) {
    res.status(400).json({ "error": err.name + ": " + err.message })
    console.log(err)
  }
})

export default app