const router = require("express").Router();
const { register, login } = require("../controllers/authControllers");

const { body } = require("express-validator");

router.post(
  "/register",
  [
    body("email").isEmail(),
    body("password").isLength({ min: 6 }),
    body("name").notEmpty()
  ],
  register
);
router.post("/login", login);

module.exports = router;