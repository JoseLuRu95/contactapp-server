const mongoose = require("mongoose");
const contactSchema = mongoose.Schema({
   first_name: { type: String, require: true },
   last_name: { type: String, require: true },
   birthday: { type: String, require: true }
});

module.exports = mongoose.model("Contact", contactSchema);
