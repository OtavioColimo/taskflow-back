const { Router } = require("express");
const taskController = require("../controllers/task.controller");

const router = Router();

router.get("/", taskController.getAll);
router.post("/", taskController.create);
router.put("/:id", taskController.update);
router.delete("/:id", taskController.delete);
router.patch("/:id/complete", taskController.complete);

module.exports = router;
