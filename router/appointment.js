import express from 'express';
const router = express.Router();

import Appointment from '../models/application.js';

router.post('/', async (req, res) => {
  try {
    const { doctor, time, date } = req.body;

   
    const existingAppointment = await Appointment.findOne({ doctor, date, time });

    if (existingAppointment) {
      return res.status(409).json({
        message: 'This slot is already booked, please try another.',
      });
    }

    const newAppointment = new Appointment(req.body);
    await newAppointment.save();

    return res.status(201).json({
      message: 'Appointment booked successfully!',
    });
  } catch (error) {
    console.error('Error booking appointment:', error);
    return res.status(500).json({
      message: 'Failed to book appointment.',
      error: error.message,
    });
  }
});

export default router;
