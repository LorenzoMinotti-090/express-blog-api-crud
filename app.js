import express from "express";
import postsRouter from "./routers/posts.js";
import notFound from "./middlewares/notFound.js";
import errorHandler from "./middlewares/errorHandler.js";

const app = express();
const port = 3000;

// asset statici (per immagini)
app.use(express.static("public"));

// rotta base
app.get("/", (req, res) => {
  res.send("Server del mio blog");
});

app.use(express.json());

// registro il router con prefisso /posts
app.use("/posts", postsRouter);

// middleware 404
app.use(notFound);

// middleware per gestione errori
app.use(errorHandler);

app.listen(port, () => {
  console.log("Server pronto sulla porta " + port);
});