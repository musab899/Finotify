import express from "express";
import connectDB from "./config/connection.js";
import router from "./routes/user.routes.js";
import cors from 'cors'
import cookieparser from 'cookie-parser';



const app = express();
app.use(express.json());
app.use(cors())
app.use(cookieparser())

await connectDB(); // 🔥 wait until DB connects

app.use("/users", router);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});