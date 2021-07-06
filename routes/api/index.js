const router = require("express").Router();
const userRoutes = require("./users");
const plantRoutes = require("./plants");
const ownedPlantRoutes = require("./ownedPlants");

// Book routes
router.use("/users", userRoutes);
router.use("/plants", plantRoutes);
router.use("/ownedPlants", ownedPlantRoutes);

module.exports = router;
