



const express = require('express')
const { createUser } = require('../modules/users')
const { existUsername } = require('../modules/users')
const router = express.Router()

router.get('/checkusername/:username', async (req, res) => {
  try {
    const { username } = req.params;
    const response = await existUsername(username)
    res.status(200).json({ exist: response })
  }

  catch (error) {
    res.status(500).send(error.message)

  }
})
router.post('/create', express.json(), async (req, res) => {
    try {
      const user = req.body;
      const newUser = await createUser(user)
      res.status(201).json(newUser)
    }
    catch (error) {
      if (error.type) {
        console.log({ error });
        res.status(error.type).send(error.message)
      }
      else {
        res.status(500).send(error.message)
      }
  
    }
  
  })
  module.exports = router