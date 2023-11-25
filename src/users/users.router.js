const router = require("express").Router();
const pastesRouter = require("../pastes/pastes.router");
const controller = require("./users.controller");

router.use("/:userId/pastes", controller.userExists, pastesRouter);

router.route("/:userId").get(controller.read);

router.route("/").get(controller.list);

module.exports = router;