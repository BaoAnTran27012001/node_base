import { Sequelize } from "sequelize";
import sequelize from "../configs/db.js"; // Đường dẫn tới file cấu hình kết nối DB của bạn
import defineUserModule from "./user.js"; // Tên file định nghĩa model User

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Khởi tạo model User
db.User = defineUserModule(sequelize, Sequelize.DataTypes);

export default db;
