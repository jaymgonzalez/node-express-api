import express from 'express'


const router = express.Router()

router.route('/api/courses')
  .get((req, res) => {
    const response = { hello: 'this is my API' }

    res.json(response)
  })

export default router