import path from 'path'
import express from 'express'
import passport from 'passport'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import session from 'express-session'
import connectMongo from 'connect-mongo'

import modas from './moda/routes'
import auth from './auth/routes'
import configurePassport from './auth/passport'
import secrets from './auth/secrets'
import config from './config'


const app = express()
const MongoStore = connectMongo(session)
const sess = {
  resave: true,
  saveUninitialized: true,
  secret: secrets.sessionSecret,
  proxy: false,
  name: "sessionId",
  cookie: {
    httpOnly: true,
    secure: false
  },
  store: new MongoStore({
    url: secrets.db,
    autoReconnect: true
  })
}

configurePassport(app, passport)

mongoose.Promise = global.Promise
mongoose.connect(config.mongoURL, {useMongoClient: true}, (error) => {
  if (error) {
    console.error('Please make sure Mongodb is installed and running!')
    throw error
  }
})

app.use(session(sess))
app.use(passport.initialize())
app.use(passport.session())

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.resolve(__dirname, '../dist')))
app.use('/api', modas)
app.use('/auth', auth)

app.listen(config.port, (error) => {
  if (!error) {
    console.log(`MODA Portal is running on port ${config.port}`)
  }
})

export default app
