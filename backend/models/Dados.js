const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const dadosSchema = new Schema({
  Municipio: { type: String, required: true },
  UF: { type: String, required: true },
  Municipio: { type: String, required: true },
  IBGE: { type: String, required: true },
  IBGE7: { type: String, required: true },
  'Município': { type: String, required: true },
  latitude: { type: String, required: true },
  longitude: { type: String, required: true },
  'Região': { type: String, required: true },
  'População 2010': { type: String, required: true },
  Porte: { type: String, required: true },
  doencas: {
    type: Map,
    of: String
  }
}, {
  collection: 'dados'
});

const Dados = mongoose.model('Dados', dadosSchema);

module.exports = Dados;