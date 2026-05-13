const express = require("express");
const cors = require("cors");

const taskRoutes = require("./routes/task.routes");
const healthRoutes = require("./routes/health.routes");
const notFound = require("./middlewares/notFound.middleware");
const errorHandler = require("./middlewares/errorHandler.middleware");

const app = express();

// ── Middlewares globais ──────────────────────────────────────────────────────
app.use(cors());
app.use(express.json());

// ── Rotas ────────────────────────────────────────────────────────────────────
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "TaskFlow API",
    version: "1.0.0",
    endpoints: {
      health: "/health",
      tasks: "/tasks"
    }
  });
});

app.use("/tasks", taskRoutes);
app.use("/health", healthRoutes);

// ── Tratamento de erros ──────────────────────────────────────────────────────
app.use(notFound);
app.use(errorHandler);

module.exports = app;
