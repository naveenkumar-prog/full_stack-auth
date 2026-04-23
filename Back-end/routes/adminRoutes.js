const router = require("express").Router();

const auth = require("../middleware/authMiddleware");
const role = require("../middleware/roleMiddleware");

const { getAllUsers } = require("../controllers/adminControllers");

router.get("/users", auth, role("admin"), getAllUsers);

module.exports = router;