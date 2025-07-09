const express = require("express");
const { getAdvertisements, getAdvertisementById, createAdvertisement, updateAdvertisement, deleteAdvertisement } = require("../controller/AdvertisementController");
const advertisementValidator = require("../middlewares/advertisementValidator")
const router = express.Router();

// GET all
router.get("/", getAdvertisements);

// GET by ID
router.get("/:id", getAdvertisementById);

// POST with image link
router.post("/", advertisementValidator, createAdvertisement);

// PUT (update title or image link)
router.put("/:id", updateAdvertisement);

// DELETE
router.delete("/:id", deleteAdvertisement);

module.exports = router;
