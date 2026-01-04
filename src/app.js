import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

// Rutas
import authRoutes from './routes/auth.routes.js';
import productRoutes from './routes/product.routes.js';
import movimientoRoutes from './routes/movimiento.routes.js';

dotenv.config();

const app = express();

// Middlewares
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

// Conexión a MongoDB
mongoose.set('strictQuery', false);
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected!'))
  .catch(err => console.error('MongoDB connection error:', err));

// Rutas
app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);
app.use('/api/movimientos', movimientoRoutes);

// Ruta de prueba
app.get('/', (req, res) => {
  res.send('Backend de Stock SaaS funcionando!');
});

export default app;
