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
            const user = createUser(parsedBody.user)
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
  user.email = userInfo.email
  user.password = userInfo.password
  user.displayname = userInfo.displayname
  user.firstname = userInfo.firstname
  user.lastname = userInfo.lastname
  Object.assign(user.capabilities, userInfo.capabilities)
  return user
}