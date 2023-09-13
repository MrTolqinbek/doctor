const express = require("express");
const doctorController = require("../controllers/doctorController");

const router = express.Router();

router.route("/").get(doctorController.getDoctors);
router.route("/:id").get(doctorController.getDoctor);
router.route("/:id/image").put(doctorController.params,doctorController.uploadUserPhoto,doctorController.uploadImage);
router.route("/").post(doctorController.createDoctor);
router.route("/:id").put(doctorController.updateDoctor);

module.exports = router;
