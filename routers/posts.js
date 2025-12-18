import express from "express";
import {
  index,
  show,
  store,
  update,
  modify,
  destroy,
} from "../controllers/postsController.js";

const router = express.Router();

// INDEX - GET /posts
router.get("/", index);

// SHOW - GET /posts/:id
router.get("/:id", show);

// STORE - POST /posts
router.post("/", store);

// UPDATE - PUT /posts/:id
router.put("/:id", update);

// MODIFY - PATCH /posts/:id
router.patch("/:id", modify);

// DESTROY - DELETE /posts/:id
router.delete("/:id", destroy);

export default router;
