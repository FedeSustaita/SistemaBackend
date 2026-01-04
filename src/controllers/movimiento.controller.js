import Movimiento from '../models/Movimiento.js';

export const getMovimientos = async (req, res) => {
  const movimientos = await Movimiento.find();
  res.json(movimientos);
};

export const createMovimiento = async (req, res) => {
  const movimiento = new Movimiento(req.body);
  await movimiento.save();
  res.json(movimiento);
};
