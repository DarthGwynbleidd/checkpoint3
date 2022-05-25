const express = require('express');
const { updateDatabase } = require('./controllers/tracks.controllers');
const {
  storeFile,
  sheetName,
  compareData,
  test,
} = require('./middlewares/tracks.middlewares');

const router = express.Router();

// router.post('/', [storeFile, sheetName, compareData, updateDatabase])
router.get('/', []);
router.get('/:id', []);
router.post('/', []);
router.put('/', []);
router.delete('/', []);

module.exports = router;
