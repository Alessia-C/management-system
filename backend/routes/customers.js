const express = require("express");
const db = require("../config/db");
const router = express.Router();

// get all customers data
router.get("/", (req, res) => {
  db.query("SELECT * FROM customers", (err, results) => {
    if (err)
      return res.status(500).json({ error: "Errore nel recupero dei dati" });
    res.json(results);
  });
});

// get customers details
router.get("/:id", (req, res) => {
  const customerId = req.params.id;
  db.query("SELECT * FROM customers WHERE id = ?", [customerId],
    (err, results) => {
      if (err)
        return res.status(500).json({ error: "Errore nel recupero dei dati" });
      if (results.length === 0)
        return res.status(404).json({ message: "Dipendente non trovato" });
      res.json(results[0]);
    }
  );
});

// delete customer
router.delete("/:id", (req, res) => {
    const customerId = req.params.id;
    db.query("DELETE FROM customers WHERE id = ?", [customerId], (err, result) => {
      if (err) return res.status(500).json({ error: "Errore nell'eliminazione del dipendente" });
      if (result.affectedRows === 0) return res.status(404).json({ message: "Dipendente non trovato" });
      res.json({ message: "Dipendente eliminato con successo" });
    });
  }); 

module.exports = router;
