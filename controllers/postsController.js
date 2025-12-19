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
    const newPost = req.body;
    const lastId = posts.length > 0 ? posts[posts.length - 1].id : 0;
    newPost.id = lastId + 1;

    posts.push(newPost);

    console.log("Lista aggiornata:", posts);

    return res.status(201).json(newPost);
}

export function update(req, res) {
    const id = Number(req.params.id);
    const post = posts.find((post) => post.id === id);

    if (!post) {
        return res.status(404).json({ error: "Post non trovato" });
    }

    post.titolo = req.body.titolo;
    post.contenuto = req.body.contenuto;
    post.immagine = req.body.immagine;
    post.tags = req.body.tags;

    console.log("Lista aggiornata:", posts);

    return res.json(post);
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
