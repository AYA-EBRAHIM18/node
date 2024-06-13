
import bcrypt from "bcrypt";
import { dbConnection } from "../database/dbConnection.js";
const con = dbConnection();
export const checkEmailExist = (req, res, next) => {
  con.execute(
    `SELECT email from users WHERE email='${req.body.email}'`,
    (err, data) => {
      if (data.length != 0)
        return res.status(401).json({ message: "user already exists" });
      req.body.password = bcrypt.hashSync(req.body.password, 8);
      next();
    }
  );
};
