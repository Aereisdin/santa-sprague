const router = require("express").Router();
const chosenController = require("../../controllers/chosenController");

// Matches with "/api/ownedPlants"
router.route("/")
  .get(chosenController.findAll)
  .post(chosenController.create);

// Matches with "/api/ownedPlants/:id"
router
  .route("/:id")
  .get(chosenController.findById)
  .put(chosenController.update)
  .delete(chosenController.remove);

module.exports = router;
