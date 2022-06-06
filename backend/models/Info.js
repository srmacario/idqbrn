const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const infoSchema = new Schema({
  formasdecontagio: { type: String, required: true },
  sintomas: { type: String, required: true },
  recomendacoes: { type: String, required: true },
  doenca: { type: String, required: true, unique:true },
}, {
  collection: 'info'
});

const Info = mongoose.model('Info', infoSchema);

module.exports = Info;