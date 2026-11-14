import express from "express";
import cors from "cors";
import "dotenv/config";
import { getUserList } from "./controllers/user.controller";
import connectDB from "./config/db";
// 1
//  PORT ->Logical Port, Physical Port
const app = express();
// Dãy số -> 8888 Port Mail

app.use(cors());
// Data process
app.use(express.json()); // biến đổi dữ liệu client gửi lên thành kiểu json
app.use(express.urlencoded({ extended: true })); // cho phép gửi lên dữ liệu kiểu mảng

connectDB();

// 2
// 3: Lập Route
app.get("/users", getUserList);
const PORT = process.env.PORT || 6969;
// 4: Khai báo port
// 5:Chạy server này
app.listen(PORT, () => {
  console.log(`SERVER IS RUNNING ON http://localhost:${PORT}`);
});
// The connection was reject
// class
// unique
//username : root
//password:
