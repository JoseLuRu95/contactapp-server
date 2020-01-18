const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const morgan = require("morgan");

const app = express();
const PORT = 3000;
const DB_URL = "mongodb+srv://JoseLuRu95:1234@cluster0-nwvg7.mongodb.net/test?retryWrites=true&w=majority";

app.set("port", process.env.PORT || PORT);

//MIDDLEWARE
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

//ROUTES
app.use("/api", require("./routes/contacts.route"));
//STATIC FILES
app.use(express.static(path.basename(__dirname, "public")));
//CONECT DATABASE
mongoose
   .connect(DB_URL, {
      useNewUrlParser: true,
      useFindAndModify: false,
      useUnifiedTopology: true
   })
   .then((db) => console.log("DB is connected"))
   .catch((err) => console.log(err));

//START SERVER
app.listen(app.get("port"), () => {
   console.log(`Server started on ${PORT}`);
});