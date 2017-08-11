import uuidv1 from 'uuid/v1'
import validator from 'validator'

import Moda from './models'


export function getModas(req, res) {
  var query = {}
  if ('query' in req.query) {
    query = {
      $text: {
        $search: req.query['query'],
        $caseSensitive: false,
      }
    }
  }
  Moda.find(query).sort('-dateAdded').exec((err, modas) => {
    if (err) {
      res.status(500).send(err)
    } else {
      res.json({ modas })
    }
  })
}

export function addModa(req, res) {
  const newModa = new Moda(req.body.moda);

  newModa.userCase = validator.escape(newModa.userCase);
  newModa.creationDate = Date();
  newModa.version = "6";
  newModa.slug = 'slug' //slug(newModa.userCase.toLowerCase(), { lowercase: true });
  newModa.cuid = uuidv1();
  newModa.save((err, saved) => {
    if (err) {
      console.log(err);
      return res.status(500).send(err);
    }
    return res.json({ moda: saved });
  });
}

export function putModa(req, res) {
  const moda = req.body
  moda.modificationDate = Date();
  Moda.update({ cuid: moda.cuid }, moda, (err) => {
    if (err) {
      res.status(500).send(err);
    }
    return res.json({ moda: moda });
  });
}

export function getModa(req, res) {
  Moda.findOne({ cuid: req.params.cuid }).exec((err, moda) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ moda });
  });
}

export function deleteModa(req, res) {
  Moda.findOne({ cuid: req.params.cuid }).exec((err, moda) => {
    if (err || !moda) {
      res.status(500).send(err);
    }

    moda.remove(() => {
      res.status(200).end();
    });
  });
}
