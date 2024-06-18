const bcrypt = require('bcrypt')
const { saltRounds, hashPassword } = require('../utils');
const { handleResponseSuccess, handleResponseError } = require('../utils/responses.js');

const users = [
  { email: 'user1@gmail.com', password: bcrypt.hashSync("user1", saltRounds), role: "admin" },
  { email: 'user2@gmail.com', password: bcrypt.hashSync("user2", saltRounds), role: "user" }
]

const register = async (req, res) => {
  const newUser = req.body;
  console.lop({ newUser })
  const { password } = newUser
  try {
    newUser.password = await hashPassword(password)
    users.push({ ...newUser, role: 'user' })
    const cloneNewUser = { ...newUser, role: 'user' }
    delete cloneNewUser.password
    handleResponseSuccess(res, 201, "Register successfully", { ...cloneNewUser })
  } catch (error) {
    handleResponseError(res, 500, "Internal server error")
  }
}








