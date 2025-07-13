const express = require("express");
const { getAdvertisements, getAdvertisementById, createAdvertisement, updateAdvertisement, deleteAdvertisement } = require("../controller/AdvertisementController");
const advertisementValidator = require("../middlewares/advertisementValidator");
const protectRoute = require("../middlewares/protectRoute");
const router = express.Router();

// GET all advertisements (public access)
router.get("/", getAdvertisements);

// GET advertisement by ID (public access)
router.get("/:id", getAdvertisementById);

// POST new advertisement (protected, only authenticated users can create)
router.post("/", protectRoute("admin"), advertisementValidator, createAdvertisement);

// PUT (update advertisement) (protected, only authenticated users can update)
router.put("/:id", protectRoute("admin"), updateAdvertisement);

// DELETE (protected, only authenticated users can delete)
router.delete("/:id", protectRoute("admin"), deleteAdvertisement);

module.exports = router;
