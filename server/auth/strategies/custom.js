import request from 'request'
import mongoose from 'mongoose'
import CustomStrategy from "passport-custom"

import User from '../models'
import config from '../../config'

export default new CustomStrategy((req, done) => {
  const username = req.body.username
  const password = req.body.password
  request.post(
    `${config.wordpress}/api/auth/generate_auth_cookie?username=${username}&password=${password}`,
    {},
    (error, response, body) => {
      const parsedBody = JSON.parse(body)
      // !error && response.statusCode == 200 
      if (!error && parsedBody.status === 'ok') {
        const user = new User()
        user.email = parsedBody.user.email
        user.password = parsedBody.user.password
        user.displayname = parsedBody.user.displayname
        user.firstname = parsedBody.user.firstname
        user.lastname = parsedBody.user.lastname
        Object.assign(user.capabilities, parsedBody.user.capabilities)
        return done(null, user, { message: "Success" })
      } else {
        return done(null, false, { message: "Invalid email or password" })
      }
    }
  )
})
