const TrackModel = require('../models/tracks.models');

class TrackController {
  async fetchAllTracks(req, res) {
    try {
      const tracks = await TrackModel.getAllTracks();
      res.status(200).send(tracks);
    } catch (error) {
      res.status(500).send({ error: error.message });
    }
  }

  async fetchTrack(req, res) {
    try {
      const { id } = req.params;
      const track = await TrackModel.getTrackById(id);
      res.status(200).send(track);
    } catch (error) {
      res.status(500).send({ error: error.message });
    }
  }

  async addingTrack(req, res) {
    try {
      const { title, url, album } = req.body;
      const track = await TrackModel.addTrack(title, url, album);
      res.status(201).send(track);
    } catch (error) {
      res.status(500).send({ error: error.message });
    }
  }

  async updatingTrack(req, res) {
    try {
      const { id, title, url, album } = req.body;
      await TrackModel.updateTrack(id, title, url, album);
      res.sendStatus(204);
    } catch (error) {
      res.status(500).send({ error: error.message });
    }
  }

  async deletingTrack(req, res) {
    try {
      const { id } = req.body;
      await TrackModel.deleteTrack(id);
      res.sendStatus(204);
    } catch (error) {
      res.status(500).send({ error: error.message });
    }
  }
}

module.exports = new TrackController();
