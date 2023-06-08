'use strict'

const express = require('express');
const router = express.Router();

const midwares = require('./helps/midwares');
const utils = require('./helps/utils');

router.get('/dynamic/:name/princess', function (req, res) {
  
  let items = [];

  for (let pos = 0; pos < 300; pos++) {
    let name = req.params['name'];
    items[pos] = `É muito linda essa ${name}.`;
  }

  if (req.query.startPage && req.query.sizePage) {

    let pagination = utils.getByPage(items, req.query.startPage, req.query.sizePage);

    res.status(200).json({data:pagination, size: items.length});
  } else {
    res.status(200).json({data:items, size: items.length});
  }
})

module.exports = router