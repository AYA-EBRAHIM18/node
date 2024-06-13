import { dbConnection } from "../../database/dbConnection.js";
import bcrypt from "bcrypt";

const con = dbConnection();
const singUp = (req, res) => {
  con.query("insert into users set?", req.body);
  res.status(201).json({ message: "success" });
};
const singIn = (req, res) => {
  con.execute(
    `SELECT id, email,password from users WHERE email='${req.body.email}'`,
    (err, data) => {
      if (data.length != 0) {
        let match = bcrypt.compareSync(req.body.password, data[0].password);
        if (match) {
          res.json({ message: "login..token", userId: data[0].id });
        } else {
          res.json({ message: "password is incorrect" });
        }
      } else {
        res.status(401).json({ message: "This user doesn't exist" });
      }
    }
  );
};
export { singUp, singIn };
