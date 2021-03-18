const { Router } = require('express')
const User = require('../models/users')
const router = Router()
//Получение данных
router.get('/', async (req, res) => {
  const user = await User.find({})
  res.send(JSON.stringify(user))
})
//Добавление
router.post('/', async (req, res) => {
  const user = new User({
    name: req.body.name,
    age: req.body.age,
    email: req.body.email,
  })
  await user.save()
})
//Удаление
router.delete('/:id', async (req, res) => {
  const user = await User.deleteOne({ _id: req.params.id })
})
//Редактирование
router.put('/', async (req, res) => {
  const user = await User.updateOne(
    { _id: req.body._id },
    { $set: { name: req.body.name, age: req.body.age, email: req.body.email } }
  )
})
module.exports = router
