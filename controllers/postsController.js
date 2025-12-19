import posts from "../data.js";


export function index(req, res) {
    res.json(posts);
}

export function show(req, res) {
    const id = Number(req.params.id);
    const post = posts.find((post) => post.id === id);

    if (!post) {
        return res.status(404).json({ error: "Post non trovato" });
    }

    return res.json(post);
}

export function store(req, res) {
    console.log("Dati ricevuti:", req.body);
    res.send("Creazione di un nuovo post");
}

export function update(req, res) {
    const id = req.params.id;
    res.send("Aggiornamento completo del post " + id);
}

export function modify(req, res) {
    const id = req.params.id;
    res.send("Aggiornamento parziale del post " + id);
}

export function destroy(req, res) {
    const id = Number(req.params.id);

    const indexToRemove = posts.findIndex((post) => post.id === id);

    if (indexToRemove === -1) {
        res.status(404).json({ error: "Post non trovato" });
        return;
    }

    posts.splice(indexToRemove, 1);

    console.log("Lista aggiornata:", posts);

    res.status(204).send();
}
