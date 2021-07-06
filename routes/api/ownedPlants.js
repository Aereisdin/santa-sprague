const router = require("express").Router();
const ownedPlantsController = require("../../controllers/ownedPlantsController");

// Matches with "/api/ownedPlants"
router.route("/")
  .get(ownedPlantsController.findAll)
  .post(ownedPlantsController.create);

// Matches with "/api/ownedPlants/:id"
router
  .route("/:id")
  .get(ownedPlantsController.findById)
  .put(ownedPlantsController.update)
  .delete(ownedPlantsController.remove);

module.exports = router;
