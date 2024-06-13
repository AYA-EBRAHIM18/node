import mysql from "mysql2";
export const dbConnection = () => {
  const con = mysql.createConnection(
    "mysql://udoveuxyfjsg8zaz:n7xTS1gFVRJRaNSDB2CS@bivdbd2p0luoddjkpuhj-mysql.services.clever-cloud.com:3306/bivdbd2p0luoddjkpuhj"
  );
  con.connect((err) => {
    if (err) return console.log("Database error");
    console.log("database connected");
  });
  return con;
};
