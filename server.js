import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import authRoutes from './router/auth.js';
import appointmentRoutes from './router/appointment.js';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

mongoose.connect(process.env.MONGO_URI)

app.use('/api/auth', authRoutes);
app.use('/api/appointments', appointmentRoutes);

app.listen(3000, () => {
  app.listen(process.env.PORT || 3000);
});