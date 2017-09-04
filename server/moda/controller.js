import slug from 'slug'
import shortid from 'shortid'
import validator from 'validator'

import Moda from './models'
import User from '../auth/models'


export async function getModas(req, res) {
  var query = {}
  if ('query' in req.query) {
    query = {
      $text: {
        $search: req.query['query'],
        $caseSensitive: false,
      }
    }
  }

  const currentUser = await User.findById(req.session.passport.user).exec()
  if (!currentUser.capabilities.administrator) {
    query['submittedBy'] = currentUser.id
  }

  Moda.find(query).populate('submittedBy').sort('-dateAdded').exec((err, modas) => {
    if (err) {
      res.status(500).send(err)
    } else {
      res.json({ modas })
    }
  })
}

export function addModa(req, res) {
  const newModa = new Moda(req.body.moda)
  newModa.submittedBy = req.session.passport.user
  newModa.userCase = validator.escape(newModa.userCase)
  newModa.creationDate = Date()
  newModa.version = "6"
  newModa.slug = slug(newModa.title.toLowerCase())
  newModa.cuid = shortid.generate().replace('-', '_')
  newModa.save((err, saved) => {
    if (err) {
      console.log(err)
      return res.status(500).send(err)
    }
    Moda.populate(newModa, {path: 'submittedBy'},
      (err, mda) => {
        if (err) {
          console.log(err)
          return res.status(500).send(err)
        }
        return res.json({ moda: mda })
      })
  })
}

export function putModa(req, res) {
  const moda = req.body
  moda.modificationDate = Date()

  Moda.findOne({ cuid: moda.cuid }, (err, currentModa) => {
    if (err)
      return res.status(500).send(err)

    const updatedModa = Object.assign(currentModa, moda)
    updatedModa.save((err, savedModa) => {
      if (err)
        return res.status(500).send(err)
      return res.json({ moda: savedModa })
    })
  })
}

export function getModa(req, res) {
  Moda.findOne({ cuid: req.params.cuid }).populate('submittedBy').exec((err, moda) => {
    if (err) {
      res.status(500).send(err)
    }
    if (!moda) {
      return res.status(404).send()
    }
    //Moda.VersionedModel.findOne({ refId: moda._id }, (err, hist) => {console.log(hist); return res.json({ moda, hist })})
    res.json({ moda })
  })
}

export function deleteModa(req, res) {
  Moda.findOne({ cuid: req.params.cuid }).exec((err, moda) => {
    if (err || !moda) {
      res.status(500).send(err)
    }
    moda.remove(() => {
      res.status(200).end()
    })
  })
}

export function getModaHistory(req, res) {
  Moda.findOne({ cuid: req.params.cuid }).populate('submittedBy').exec((err, moda) => {
    if (err) {
      return res.status(500).send(err)
    }
    if (!moda) {
      return res.status(404).send()
    }
    Moda.VersionedModel.findOne({ refId: moda._id }, (err, history) => {
      if (err) {
        return res.status(500).send(err)
      }
      return res.json({ moda, history })
    })
  })
}