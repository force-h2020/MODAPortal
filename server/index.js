import path from 'path'
import express from 'express'
import passport from 'passport'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import session from 'express-session'
import connectMongo from 'connect-mongo'

import modaRouter from './moda/routes'
import authRouter from './auth/routes'
import configurePassport from './auth/passport'
import config from './config'


const app = express()
const MongoStore = connectMongo(session)
const sessionConfig = {
  resave: true,
  saveUninitialized: true,
  secret: config.sessionSecret,
  proxy: false,
  name: "sessionId",
  cookie: {
    httpOnly: true,
    secure: false
  },
  store: new MongoStore({
    url: config.mongoURL,
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

app.use(session(sessionConfig))
app.use(passport.initialize())
app.use(passport.session())

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use('/api/modas', modaRouter)
app.use('/api/auth', authRouter)

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

const listener = app.listen(config.port, (error) => {
  if (!error) {
    console.log(`MODA Portal is listening on port ${listener.address().port}`)
  }
})

export default app
