import { dbConnection } from "../../database/dbConnection.js";
const con = dbConnection();
const addPost = (req, res) => {
  con.query("insert into posts set?", req.body);
  res.status(201).json({ message: "success" });
};
const getAllPosts = (req, res) => {
  con.execute(
    `select users.id,users.name,posts.id as postId,posts.title,posts.description from users join posts on users.id = posts.user_id`,
    (err, data) => {
      res.status(200).json({  message:"success",allPosts: data });
    }
  );
};

export { addPost, getAllPosts };
