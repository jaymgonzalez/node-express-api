import coursesRoute from './routes/courses.routes.js'
import authorsRoute from './routes/authors.routes.js'
import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import helmet from 'helmet'
import compression from 'compression'

const app = express()
const db = mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
const port = process.env.PORT || 3000

app.use(helmet())
app.use(compression())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use('/', coursesRoute)
app.use('/', authorsRoute)


app.get('/', (req, res) => {
  res.send('wellcome to my API')
})

app.listen(port, () => {
  console.log(`Running on port ${port}`)
})
