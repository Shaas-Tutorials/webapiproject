const mongoose = require('mongoose');
const db = 'mongodb://jia:abc123@ds141043.mlab.com:41043/jiamovie';

//debugging
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => {
    console.log('Connected to database');
  })
  .catch(error => {
    console.log('Mongoose connetion error: ', error);
  });

const schema = mongoose.Schema({
  title: { type: String },
  year: { type: String },
  rated: { type: String },
  released: { type: String },
  runtime: { type: String },
  genre: { type: String },
  director: { type: String },
  writer: { type: String },
  actors: { type: String },
  plot: { type: String },
  language: { type: String },
  country: { type: String },
  awards: { type: String },
  poster: { type: String },
  imdbrating: { type: String },
  imdbvotes: { type: String },
  boxoffice: { type: String },
  production: { type: String },
  website: { type: String }
});

const Movie = mongoose.model('Movie', schema, 'movieCollection');

module.exports = Movie;
