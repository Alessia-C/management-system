const express = require("express");
const cors = require("cors");
const sequelize = require("./config/db");
const authRoutes = require("./routes/auth");

const app = express();
app.use(express.json());
app.use(cors({ origin: "http://localhost:3000" })); // Permetti richieste dal frontend

app.use("/auth", authRoutes);

sequelize.sync().then(() => console.log("✅ Database sincronizzato"));

app.listen(5000, () => console.log("🚀 Server avviato su http://localhost:5000"));
