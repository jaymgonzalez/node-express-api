import coursesRoute from './routes/courses.routes.js'
import authorsRoute from './routes/authors.routes.js'

import express from 'express'

const app = express()
const port = process.env.PORT || 3000

app.use('/', coursesRoute)
app.use('/', authorsRoute)


app.get('/', (req, res) => {
  res.send('wellcome to my API')
})

app.listen(port, () => {
  console.log(`Running on port ${port}`)
})
