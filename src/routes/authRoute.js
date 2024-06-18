const express = require('express')
const authRoute = express.Router()

authRoute.post("/register", register)
authRoute.post("/login", login)

module.exports = authRoute;
