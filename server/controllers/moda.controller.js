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
  if (!req.body.moda.name || !req.body.moda.title || !req.body.moda.content) {
    res.status(403).end();
  }

  const newModa = new Moda(req.body.moda);

  // Let's sanitize inputs
  newModa.title = sanitizeHtml(newModa.title);
  newModa.name = sanitizeHtml(newModa.name);
  newModa.content = sanitizeHtml(newModa.content);

  newModa.slug = slug(newModa.title.toLowerCase(), { lowercase: true });
  newModa.cuid = cuid();
  newModa.save((err, saved) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ moda: saved });
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
    if (err) {
      res.status(500).send(err);
    }

    post.remove(() => {
      res.status(200).end();
    });
  });
}
