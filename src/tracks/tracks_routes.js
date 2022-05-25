const express = require('express');
const {
  fetchAllTracks,
  fetchTrack,
  addingTrack,
  deletingTrack,
  updatingTrack,
} = require('./controllers/tracks.controllers');

const router = express.Router();

router.get('/', [fetchAllTracks]);
router.get('/:id', [fetchTrack]);
router.post('/', [addingTrack]);
router.put('/', [updatingTrack]);
router.delete('/', [deletingTrack]);

module.exports = router;
