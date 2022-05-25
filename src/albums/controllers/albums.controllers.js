const AlbumModel = require('../models/albums.models');

class AlbumController {
  async fetchAllAlbums(req, res) {
    try {
      const albums = await AlbumModel.getAllAlbums();
      res.status(200).send(albums);
    } catch (error) {
      res.status(500).send({ error: error.message });
    }
  }

  async fetchAlbum(req, res) {
    try {
      const { id } = req.params;
      const track = await AlbumModel.getAlbumById(id);
      res.status(200).send(track);
    } catch (error) {
      res.status(500).send({ error: error.message });
    }
  }

  async fetchAlbumWithTrack(req, res) {
    try {
      const { id } = req.params;
      const album = await AlbumModel.getAlbumByIdWithTracks(id);
      res.status(200).send(album);
    } catch (error) {
      res.status(500).send({ error: error.message });
    }
  }

  async addingAlbum(req, res) {
    try {
      const { title, genre, picture, artist } = req.body;
      const album = await AlbumModel.addAlbum(title, genre, picture, artist);
      res.status(201).send(album);
    } catch (error) {
      res.status(500).send({ error: error.message });
    }
  }

  async updatingTrack(req, res) {
    try {
      const { id, title, genre, picture, artist } = req.body;
      await AlbumModel.updateAlbum(id, title, genre, picture, artist);
      res.sendStatus(204);
    } catch (error) {
      res.status(500).send({ error: error.message });
    }
  }

  async deletingTrack(req, res) {
    try {
      const { id } = req.body;
      await AlbumModel.deleteTrack(id);
      res.sendStatus(204);
    } catch (error) {
      res.status(500).send({ error: error.message });
    }
  }
}

module.exports = new AlbumController();
