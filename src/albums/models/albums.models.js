require("dotenv").config();

const mysql = require("mysql2");

class AlbumModel {
    connection = mysql.createConnection({
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
    })

    async getAllAlbums() {
        try {
          const sql = 'SELECT * FROM album';
          const result = await connection.promise().query(sql);
          return result[0];
        } catch (error) {
          throw error;
        }
      }
    async getAlbumById(id){
        try {
          const sql = 'SELECT * FROM album WHERE id = ?';
          const result = await connection.promise().query(sql, [id]);
          return result[0];
        } catch (error) {
          throw error;
        }
      }

      async getAlbumByIdWithTracks(id){
        try {
          const sql = 'SELECT * FROM track INNER JOIN album ON album.id = tracks.id_album WHERE id_album = ?';
          const result = await connection.promise().query(sql, [id]);
          return result[0];
        } catch (error) {
          throw error;
        }
    }

    async addAlbum(title, genre, picture, artist){
        try {
            const sql = 'INSERT INTO track (title, genre, picture, artist) VALUES (?, ?, ?, ?)';
            const result = await connection.promise().query(sql, [title, genre, picture, artist]);
            return result[0];
          } catch (error) {
            throw error;
          }
    }

    async updateAlbum(id, title, genre, picture, artist){
        try {
            const sql = 'UPDATE album SET title = ?, genre = ?, picture = ?, artist = ? WHERE id = ?';
            const result = await connection.promise().query(sql, [title, genre, picture, artist, id]);
            return result[0];
          } catch (error) {
            throw error;
          }
    }

    async deleteAlbum(id){
        try {
            const sql = 'DELETE from album WHERE id = ?)';
            const result = await connection.promise().query(sql, [id]);
            return result[0];
          } catch (error) {
            throw error;
          }
    }
}

module.exports = new AlbumModel();