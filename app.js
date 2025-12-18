import express from "express";
import postsRouter from "./routers/posts.js";

const app = express();
const port = 3000;

// asset statici (per immagini)
app.use(express.static("public"));

// rotta base
app.get("/", (req, res) => {
  res.send("Server del mio blog");
});

// registro il router con prefisso /posts
app.use("/posts", postsRouter);

app.listen(port, () => {
  console.log("Server pronto sulla porta " + port);
});