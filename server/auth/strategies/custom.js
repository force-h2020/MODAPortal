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
      if (error)
        return done(null, false, { message: "Error connecting Wordpress JSON API: " + error })
      const parsedBody = JSON.parse(body)
      if (parsedBody.status === 'ok') {
        User.findOne({ email: parsedBody.user.email }).exec((err, existingUser) => {
          if(err) {
            return done(null, false, { message: "Database error: " + err })
          }
          if (!existingUser) {
            user = createUser(parsedBody.user)
            user.save()
            return done(null, user, { message: "Success" })
          } else {
            return done(null, existingUser, { message: "Success" })
          }
        })
      } else {
        return done(null, false, { message: "Invalid email or password" })
      }
    }
  )
})

const createUser = (userInfo) => {
  const user = new User()
  user.email = parsedBody.user.email
  user.password = parsedBody.user.password
  user.displayname = parsedBody.user.displayname
  user.firstname = parsedBody.user.firstname
  user.lastname = parsedBody.user.lastname
  Object.assign(user.capabilities, parsedBody.user.capabilities)
  return user
}