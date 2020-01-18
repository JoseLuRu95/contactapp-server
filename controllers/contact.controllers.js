const Contact = require("../models/contact");
const contactsController = {};

contactsController.getContacts = async (req, res) => {
   const contacts = await Contact.find().catch((err) => console.log(err));
   return res.json(contacts);
};

contactsController.createContact = async (req, res) => {
   const { first_name, last_name, birthday } = req.body;
   let newContact = new Contact({
      first_name: first_name,
      last_name: last_name,
      birthday: birthday
   });
   await newContact.save().catch((err) => console.log(err));
   return res.json();
};

contactsController.deleteContact = async (req, res) => {
   await Contact.findByIdAndRemove(req.params.id).catch((err) => console.log(err));
   return res.json();
};

module.exports = contactsController;
