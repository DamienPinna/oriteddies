const express = require('express'); //Framework permettant de construire des applis web basées sur Node.JS
const bodyParser = require('body-parser'); // Middleware chargé de récupérer le body d'une requête POST
const mongoose = require('mongoose'); //Permet d'utiliser MongoDB avec Node.JS
const path = require('path'); //Permet d'utiliser un ensemble de fonctions et de propriétés pour manipuler et construire des chemins vesr des fichiers et répertoires

const cameraRoutes = require('./routes/camera');
const teddyRoutes = require('./routes/teddy');
const furnitureRoutes = require('./routes/furniture');

const app = express();

/**
 * Connection à la base de données
 */
mongoose.set('useUnifiedTopology', true);
mongoose.connect(
  'mongodb+srv://will:nAcmfCoHGDgzrCHG@cluster0-pme76.mongodb.net/test?retryWrites=true',
  { useNewUrlParser: true })
  .then(() => {
    console.log('Successfully connected to MongoDB Atlas!');
  })
  .catch((error) => {
    console.log('Unable to connect to MongoDB Atlas!');
    console.error(error);
  });

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.use('/images', express.static(path.join(__dirname, 'images')));

app.use(bodyParser.json());

app.use('/api/cameras', cameraRoutes);
app.use('/api/teddies', teddyRoutes);
app.use('/api/furniture', furnitureRoutes);

module.exports = app;