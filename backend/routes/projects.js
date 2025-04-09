const express = require("express");
const db = require("../config/db");
const router = express.Router();

// get all projects data
router.get("/", (req, res) => {
  db.query("SELECT * FROM projects", (err, results) => {
    if (err)
      return res.status(500).json({ error: "Errore nel recupero dei dati" });
    res.json(results);
  });
});

// get projects details
router.get("/:id", (req, res) => {
  const projectId = req.params.id;
  db.query("SELECT * FROM projects WHERE id = ?", [projectId],
    (err, results) => {
      if (err)
        return res.status(500).json({ error: "Errore nel recupero dei dati" });
      if (results.length === 0)
        return res.status(404).json({ message: "Dipendente non trovato" });
      res.json(results[0]);
    }
  );
});

// delete project
router.delete("/:id", (req, res) => {
    const projectId = req.params.id;
    db.query("DELETE FROM projects WHERE id = ?", [projectId], (err, result) => {
      if (err) return res.status(500).json({ error: "Errore nell'eliminazione del dipendente" });
      if (result.affectedRows === 0) return res.status(404).json({ message: "Dipendente non trovato" });
      res.json({ message: "Dipendente eliminato con successo" });
    });
  }); 

module.exports = router;