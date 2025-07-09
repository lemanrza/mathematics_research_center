const express = require("express");
const { getNews, getNewsById, createNews, updateNews, deleteNews } = require("../controller/NewsController");
const newsValidator = require("../middlewares/newsValidator")
const router = express.Router();

// GET all news (with pagination, search, sort)
router.get("/", getNews);

// GET one news by ID
router.get("/:id", getNewsById);

// CREATE new news
router.post("/", newsValidator, createNews);

// UPDATE news by ID
router.put("/:id", updateNews);

// DELETE news by ID
router.delete("/:id", deleteNews);

module.exports = router;
