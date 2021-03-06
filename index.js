const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const morgan = require("morgan");

const app = express();
// const DB_URL = "mongodb+srv://Peppy:1234@cluster0-dpyu2.mongodb.net/test?retryWrites=true&w=majority";
const DB_URL = "mongodb+srv://JoseLuRu95:1234@cluster0-nwvg7.mongodb.net/test?retryWrites=true&w=majority";

app.set("port", process.env.PORT || 3000);

//MIDDLEWARE
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

//ROUTES
app.use("/api", require("./routes/contacts.route"));
app.get("/", (req, res) => res.send("Page not found"));
//STATIC FILES
app.use("/public", express.static(path.resolve("public")));

async function main() {
   //CONECT DATABASE
   await mongoose
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
}

main();
