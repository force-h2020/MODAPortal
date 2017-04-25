import Moda from '../models/moda';
import cuid from 'cuid';
import slug from 'limax';
import sanitizeHtml from 'sanitize-html';

/**
 * Get all modas
 * @param req
 * @param res
 * @returns void
 */
export function getModas(req, res) {
  Moda.find().sort('-dateAdded').exec((err, modas) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ modas });
  });
}

/**
 * Save a moda
 * @param req
 * @param res
 * @returns void
 */
export function addModa(req, res) {
  const newModa = new Moda(req.body.moda);

  // Let's sanitize inputs
  newModa.userCase = sanitizeHtml(newModa.userCase);

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

/**
 * Update a moda
 * @param req
 * @param res
 * @returns void
 */
export function putModa(req, res) {
  Moda.update({ cuid: req.body.moda.cuid }, req.body.moda, (err) => {
    if (err) {
      res.status(500).send(err);
    }
    return res.json({ moda: req.body.moda });
  });
}

/**
 * Get a single moda
 * @param req
 * @param res
 * @returns void
 */
export function getModa(req, res) {
  Moda.findOne({ cuid: req.params.cuid }).exec((err, moda) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ moda });
  });
}

/**
 * Delete a moda
 * @param req
 * @param res
 * @returns void
 */
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
