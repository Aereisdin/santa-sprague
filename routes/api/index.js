const router = require("express").Router();
const userRoutes = require("./users");
const chosenRoutes = require("./chosen");

// Book routes
router.use("/users", userRoutes);
router.use("/chosen", chosenRoutes);

module.exports = router;
