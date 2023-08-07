const router = require("express").Router();
const controller = require ("../controller/combo-controller")

router.get("/combo", controller.listAllCombo)

router.get("/combo/:combo_id", controller.listOneCombo)

router.post("/combo", controller.createCombo)

router.put("/combo/:combo_id", controller.updateCombo)

router.delete("/combo/:combo_id", controller.deleteCombo)

module.exports = router;

