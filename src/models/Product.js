import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  nombre: String,
  cantidad: Number,
  precio: Number,
  descripcion: String,
  stockEst: Number
});

export default mongoose.model('Product', productSchema);
