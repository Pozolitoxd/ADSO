const mongoose = require("../config/conection");

// los nombres y tipos deben coincidir con los datos en la bd que ya se encuentran almacenados
const schemaProducto = new mongoose.Schema({
  referencia: {
    type: [Number,"la referencia debe ser numerica"],
    required: [true,"la referencia es obligatoria"]
  },
  nombre: {
    type: [String,"el nombre debe ser alfanumerico"],
    required: [true,"el nombre es obligatorio"]
  },
  precio:{
    type:[Number,"el precio debe ser numerico"],
    default:0.0,
    min:[0,"el precio no debe ser negativo"]
  },
},{versionKey: false});


const modeloProducto = mongoose.model("products", schemaProducto);

module.exports = modeloProducto;