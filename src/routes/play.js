'use strict';

const express = require('express');
const auth = require('../auth/middleware');
const router = express.Router();
const Role = require('../auth/roles-models');
const User = require('../auth/users-model');

router.get('/read', auth('read'), (req, res, next) => {
  res.status(200).send('You can read');
});

router.get('/update', auth('update'), (req, res, next) => {
  res.status(200).send('You can update');
});

router.get('/delete', auth('delete'), (req, res, next) => {
  res.status(200).send('You can delete');
});

router.get('/create', auth('create'), (req, res, next) => {
  res.status(200).send('You can create');
});

router.post('/roles', (req, res, next) => {
  let role = new Role(req.body);
  role.save()
    .then( (role) => {
      res.send(role);
    }) .catch(next);
});

module.exports = router;