import express from "express";
import router from "./routes/user.routes.js";
import connectDB from "./config/connection.js";

const app = express();
app.use(express.json());

await connectDB(); // 🔥 wait until DB connects

app.use("/users", router);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});