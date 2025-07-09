const {
  getAll,
  getById,
  post,
  deleteOne,
  updateOne,
  getTotalCount,
} = require("../services/newsService");
const formatMongoData = require("../utils/formatMongoData");

// GET all news
exports.getNews = async (req, res, next) => {
  try {
    const {
      page = 1,
      limit = 10,
      search = "",
      sortBy = "createdAt",
      order = "desc",
    } = req.query;

    const pageNumber = parseInt(page, 10);
    const pageSize = parseInt(limit, 10);
    const sortOrder = order.toLowerCase() === "asc" ? 1 : -1;

    // Filter by title if search provided
    const filter = {};
    if (search.trim()) {
      filter.title = { $regex: search.trim(), $options: "i" };
    }

    // MongoDB query with pagination and sort
    const news = await getAll()
      .then(items => items
        .filter(item => item.title.toLowerCase().includes(search.toLowerCase()))
        .sort((a, b) =>
          sortOrder === 1
            ? a[sortBy] > b[sortBy] ? 1 : -1
            : a[sortBy] < b[sortBy] ? 1 : -1
        )
        .slice((pageNumber - 1) * pageSize, pageNumber * pageSize)
      );

    const total = await getTotalCount();

    res.status(200).json({
      total,
      page: pageNumber,
      pageSize: news.length,
      news: formatMongoData(news),
    });
  } catch (error) {
    next(error);
  }
};

// GET single news by ID
exports.getNewsById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const item = await getById(id);
    if (!item) {
      return res.status(404).json({ message: "News not found" });
    }
    res.status(200).json(formatMongoData(item));
  } catch (error) {
    next(error);
  }
};

// POST - create new news
exports.createNews = async (req, res, next) => {
  try {
    const { title, coverImage } = req.body;

    if (!title || !coverImage) {
      return res.status(400).json({ message: "Title and coverImage are required" });
    }

    const created = await post({ title, coverImage });

    res.status(201).json(formatMongoData(created));
  } catch (error) {
    next(error);
  }
};

// PUT - update existing news
exports.updateNews = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { title, coverImage } = req.body;

    const updated = await updateOne(id, { title, coverImage });

    if (!updated) {
      return res.status(404).json({ message: "News not found" });
    }

    res.status(200).json(formatMongoData(updated));
  } catch (error) {
    next(error);
  }
};

// DELETE - remove news
exports.deleteNews = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deleted = await deleteOne(id);
    if (!deleted) {
      return res.status(404).json({ message: "News not found" });
    }
    res.status(200).json(formatMongoData(deleted));
  } catch (error) {
    next(error);
  }
};
