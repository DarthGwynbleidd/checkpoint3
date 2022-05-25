require('dotenv').config();
const express = require('express');
const tracksRouter = require('./tracks/tracks_routes');
const albumsRouter = require('./albums/albums_routers');

const app = express();
app.use(express.json());

const port = process.env.PORT ?? 5000;

app.listen(port, () => {
  console.log(`Server·listening·on·port·${port}`);
});

app.use('/api', albumsRouter);
app.use('/api', tracksRouter);
// Please keep this module.exports app, we need it for the tests !
module.exports = app;
