const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Importa le route
const employeeRoutes = require("./routes/employees");
const customersRoutes = require("./routes/customers");
const projectRoutes = require("./routes/projects");
const authRoutes = require("./routes/auth");

// Usa le route
app.use("/projects", projectRoutes);
app.use("/employees", employeeRoutes);
app.use("/customers", customersRoutes);
app.use("/auth", authRoutes);

// Avvia il server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server avviato sulla porta ${PORT}`);
});
