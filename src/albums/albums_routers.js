const express = require('express');
const {
  fetchAllAlbums,
  fetchAlbum,
  fetchAlbumWithTrack,
  addingAlbum,
  updatingTrack,
  deletingTrack,
} = require('./controllers/albums.controllers');

const router = express.Router();

router.get('/', [fetchAllAlbums]);
router.get('/:id', [fetchAlbum]);
router.get('/:id/tracks', [fetchAlbumWithTrack]);
router.post('/', [addingAlbum]);
router.put('/', [updatingTrack]);
router.delete('/', [deletingTrack]);

module.exports = router;
