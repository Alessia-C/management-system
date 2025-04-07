const express = require("express");
const db = require("../config/db");
const router = express.Router();

// Ottenere tutti i dipendenti
router.get("/", (req, res) => {
  db.query("SELECT * FROM employees", (err, results) => {
    if (err) return res.status(500).json({ error: "Errore nel recupero dei dati" });
    res.json(results);
  });
});

// Aggiungere un nuovo dipendente
router.post("/", (req, res) => {
  const { full_name, date_of_birth, fiscal_code, address, phone_number, email, start_date, position, department, seniority_level, salary, contract_type, probation_period, working_hours, work_location } = req.body;

  const sql = `INSERT INTO employees (full_name, date_of_birth, fiscal_code, address, phone_number, email, start_date, position, department, seniority_level, salary, contract_type, probation_period, working_hours, work_location) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

  const values = [full_name, date_of_birth, fiscal_code, address, phone_number, email, start_date, position, department, seniority_level, salary, contract_type, probation_period, working_hours, work_location];

  db.query(sql, values, (err, result) => {
    if (err) return res.status(500).json({ error: "Errore nell'inserimento dei dati" });
    res.status(201).json({ message: "Dipendente aggiunto con successo", id: result.insertId });
  });
});

// Ottenere i dettagli di un dipendente
router.get("/:id", (req, res) => {
  const employeeId = req.params.id;
  db.query("SELECT * FROM employees WHERE id = ?", [employeeId], (err, results) => {
    if (err) return res.status(500).json({ error: "Errore nel recupero dei dati" });
    if (results.length === 0) return res.status(404).json({ message: "Dipendente non trovato" });
    res.json(results[0]);
  });
});

// Aggiorna i dati di un dipendente
router.put("/:id", (req, res) => {
  const employeeId = req.params.id;

  const {
    full_name,
    date_of_birth,
    fiscal_code,
    address,
    phone_number,
    email,
    start_date,
    position,
    department,
    seniority_level,
    salary,
    contract_type,
    probation_period,
    working_hours,
    work_location,
  } = req.body;

  const sql = `UPDATE employees SET 
    full_name = ?, 
    date_of_birth = ?, 
    fiscal_code = ?, 
    address = ?, 
    phone_number = ?, 
    email = ?, 
    start_date = ?, 
    position = ?, 
    department = ?, 
    seniority_level = ?, 
    salary = ?, 
    contract_type = ?, 
    probation_period = ?, 
    working_hours = ?, 
    work_location = ?
    WHERE id = ?`;
  
  const values = [
    full_name,
    date_of_birth,
    fiscal_code,
    address,
    phone_number,
    email,
    start_date,
    position,
    department,
    seniority_level,
    salary,
    contract_type,
    probation_period,
    working_hours,
    work_location,
    employeeId,
  ];

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error("Errore nell'aggiornamento dei dati:", err);
      return res
        .status(500)
        .json({ error: "Errore nell'aggiornamento dei dati", details: err });
    }
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Dipendente non trovato" });
    }
    res.json({ message: "Dati del dipendente aggiornati con successo" });
  });
});

// Eliminare un dipendente
router.delete("/:id", (req, res) => {
  const employeeId = req.params.id;
  db.query("DELETE FROM employees WHERE id = ?", [employeeId], (err, result) => {
    if (err) return res.status(500).json({ error: "Errore nell'eliminazione del dipendente" });
    if (result.affectedRows === 0) return res.status(404).json({ message: "Dipendente non trovato" });
    res.json({ message: "Dipendente eliminato con successo" });
  });
});

module.exports = router;