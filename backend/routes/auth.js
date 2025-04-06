const express = require("express");
const jwt = require("jsonwebtoken");
const db = require("../config/db");
require("dotenv").config();

const router = express.Router();

// Funzione per generare un token JWT
const generateToken = (user) => {
  return jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET, { expiresIn: "1h" });
};

// Login
router.post("/", (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) return res.status(400).json({ message: "Email e password sono obbligatorie" });

  db.query("SELECT * FROM users WHERE email = ?", [email], (err, results) => {
    if (err) return res.status(500).json({ message: "Errore nel database" });
    if (results.length === 0 || results[0].password !== password) {
      return res.status(401).json({ message: "Credenziali errate" });
    }
    const token = generateToken(results[0]);
    res.json({ token });
  });
});

module.exports = router;
