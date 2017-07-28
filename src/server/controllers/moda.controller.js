import Moda from '../models/moda';
import cuid from 'cuid';
import slug from 'limax';
import sanitizeHtml from 'sanitize-html';

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

  // Let's sanitize inputs
  newModa.userCase = sanitizeHtml(newModa.userCase);
  newModa.creationDate = Date();
  newModa.version = "6";
  newModa.slug = slug(newModa.userCase.toLowerCase(), { lowercase: true });
  newModa.cuid = cuid();
  newModa.save((err, saved) => {
    if (err) {
      console.log(err);
      return res.status(500).send(err);
    }
    return res.json({ moda: saved });
  });
}

export function putModa(req, res) {
  req.body.moda.modificationDate = Date();
  Moda.update({ cuid: req.body.moda.cuid }, req.body.moda, (err) => {
    if (err) {
      res.status(500).send(err);
    }
    return res.json({ moda: req.body.moda });
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
