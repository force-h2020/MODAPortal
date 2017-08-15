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
      let parsedBody = JSON.parse(body)
      // !error && response.statusCode == 200 
      if (!error && parsedBody.status === 'ok') {
        let user = new User()
        user.email = parsedBody.user.email
        user.password = ''
        return done(null, user, { message: "Success" })
      } else {
        return done(null, false, { message: "Invalid email or password" })
      }
    }
  )
})
