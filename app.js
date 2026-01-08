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

app.use(express.json());

// registro il router con prefisso /posts
app.use("/posts", postsRouter);

// middleware 404

app.use((req, res) => {
  res.status(404).json({
    error: "Endpoint non trovato"
  });
});

// middleware per gestione errori
app.use((err, req, res, next) => {
  console.error(err.stack);

  res.status(500).json({
    error: "Errore interno del server"
  });
});

app.listen(port, () => {
  console.log("Server pronto sulla porta " + port);
});