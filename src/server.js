import express from "express";
import cors from "cors";
import "dotenv/config";
// 1
//  PORT ->Logical Port, Physical Port
const app = express();
// Dãy số -> 8888 Port Mail

app.use(cors());
// Data process
app.use(express.json()); // biến đổi dữ liệu client gửi lên thành kiểu json
app.use(express.urlencoded({ extended: true })); // cho phép gửi lên dữ liệu kiểu mảng
// 2
// 3: Lập Route
app.get("/", (req, res) => {
  // req: dữ liệu từ client (browser) gửi lên cho server
  // res: server trả về cho client
  return res.send("GET HOMEPAGE");
  // Mã mặc định:200
});
const PORT = process.env.PORT || 6969;
// 4: Khai báo port
// 5:Chạy server này
app.listen(PORT, () => {
  console.log(`SERVER IS RUNNING ON http://localhost:${PORT}`);
});
// The connection was reject
