const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const dadosSchema = new Schema({
  Municipio: { type: String, required: true },
  any: Schema.Types.Mixed
}, {
  collection: 'dados'
});

const Dados = mongoose.model('Dados', dadosSchema);

module.exports = Dados;