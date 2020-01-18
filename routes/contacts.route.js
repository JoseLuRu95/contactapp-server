const express = require("express");
const router = express.Router();
const controller = require("../controllers/contact.controllers");

router.get("/contacts", controller.getContacts);
router.post("/contact", controller.createContact);
router.delete("/contact/:id", controller.deleteContact);

module.exports = router;
