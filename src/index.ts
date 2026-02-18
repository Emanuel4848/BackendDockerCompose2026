import express from "express";
import cors from "cors";
import { sequelize } from "./config/database";
import authRoutes from "./routes/authRoutes";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/auth", authRoutes);

sequelize.sync()
  .then(() => {
    console.log("Database connected");

    app.listen(3000, () => {
      console.log("Server running on port 3000");
    });
  })
  .catch((error) => {
    console.error("Database error:", error);
  });