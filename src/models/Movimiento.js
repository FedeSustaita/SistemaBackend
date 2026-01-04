import mongoose from 'mongoose';

const movimientoSchema = new mongoose.Schema({
  tipo: String, // VENTA, COMPRA, MODIFICACIÓN
  producto: String,
  cantidad: Number,
  fecha: { type: Date, default: Date.now }
});

export default mongoose.model('Movimiento', movimientoSchema);
