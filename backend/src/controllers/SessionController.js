const User = require('../models/User')

module.exports = {
  async store(req, res) {
    const { email } = req.body
    const model = { email }

    const user = await User.findOneAndUpdate(model, model, { new: true, upsert: true })

    return res.json(user)
  }
}
