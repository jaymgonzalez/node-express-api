import express from 'express'


const router = express.Router()

router.route('/api/authors')
  .get((req, res) => {
    const response = { hello: 'this is my API' }

    res.json(response)
  })

export default router