const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/User');
require('dotenv').config();

const router = express.Router();

// Registrazione utente
router.post('/register', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Crea un nuovo utente nel database
    const newUser = await User.create({ email, password });

    res.status(201).json({
      message: 'Utente creato con successo',
      user: {
        id: newUser.id,
        email: newUser.email,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Errore nella registrazione' });
  }
});

// Login utente (restituisce il token JWT)
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Trova l'utente nel database
    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(401).json({ message: 'Credenziali non valide' });
    }

    // Verifica la password
    const isPasswordValid = await user.checkPassword(password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Credenziali non valide' });
    }

    // Genera un token JWT
    const token = jwt.sign(
      { id: user.id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: '1h' } // Token scade dopo un'ora
    );

    res.status(200).json({ message: 'Login effettuato con successo', token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Errore nel login' });
  }
});

module.exports = router;
