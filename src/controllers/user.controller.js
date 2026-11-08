import db from "../models/index.js";
const getUserList = async (req, res) => {
  try {
    // req: dữ liệu từ client (browser) gửi lên cho server
    // res: server trả về cho client
    const users = await db.User.findAll();
    return res.send("HELLO");
    // Mã mặc định:200
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};
export { getUserList };
