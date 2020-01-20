const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const morgan = require("morgan");

const app = express();
const PORT_ = 3000;
const DB_URL = "mongodb+srv://JoseLuRu95:1234@cluster0-nwvg7.mongodb.net/test?retryWrites=true&w=majority";

app.set("port", process.env.PORT || PORT_);

//MIDDLEWARE
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

//ROUTES
app.use("/", require("./routes/contacts.route"));
//STATIC FILES
app.use(express.static(path.basename(__dirname, "public")));
//CONECT DATABASE
mongoose
   .connect(DB_URL, {
      useNewUrlParser: true,
      useFindAndModify: false,
      useUnifiedTopology: true
   })
   .catch((err) => console.log(err));

//START SERVER

app.listen(app.get("port"), () => {
   console.log(`Server started`);
});
