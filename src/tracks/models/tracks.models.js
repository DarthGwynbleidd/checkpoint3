require("dotenv").config();

const mysql = require("mysql2");

class TrackModel {
    connection = mysql.createConnection({
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
    })

    async getAllTracks() {
        try {
          const sql = 'SELECT * FROM track INNER JOIN album ON album.id = tracks.id_album';
          const result = await connection.promise().query(sql);
          return result[0];
        } catch (error) {
          throw error;
        }
      }
    async getTrackById(id){
        try {
          const sql = 'SELECT * FROM track INNER JOIN album ON album.id = tracks.id_album WHERE track.id = ?';
          const result = await connection.promise().query(sql, [id]);
          return result[0];
        } catch (error) {
          throw error;
        }
      }

    async addTrack(title, url, album){
        try {
            const sql = 'INSERT INTO track (title, youtube_url, id_album) VALUES (?, ?, SELECT id FROM album WHERE title = ?)';
            const result = await connection.promise().query(sql, [title, url, album]);
            return result[0];
          } catch (error) {
            throw error;
          }
    }

    async updateTrack(id, title, url, album){
        try {
            const sql = 'UPDATE track SET title = ?, youtube_url = ?, id_album = (SELECT id FROM album WHERE title = ?) WHERE id = ?';
            const result = await connection.promise().query(sql, [title, url, album, id]);
            return result[0];
          } catch (error) {
            throw error;
          }
    }

    async deleteTrack(id){
        try {
            const sql = 'DELETE from track WHERE id = ?)';
            const result = await connection.promise().query(sql, [id]);
            return result[0];
          } catch (error) {
            throw error;
          }
    }
    
}

module.exports = new TrackModel();