const express = require("express");
const morgan = require("morgan");
const { engine } = require("express-handlebars");
const methodOverride = require("method-override");
const app = express();
const port = 3000;
// Connet to DB
const db = require("./config/db");

// DB connection
db.connect();
// const route = require( "route" );
const route = require("./routers");

// app.use(morgan("dev"));
app.use(morgan("dev"));

// Get files Static
app.use(express.static("./src/public"));

// xử lý request từ client và seversite

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method"));

// setting for headlebars
app.engine(
  "hbs",

  engine({
    extname: ".hbs",
    helpers: {
      formatDate: function (date) {
        const formattedDate = new Date(date).toLocaleDateString();
        return formattedDate;
      }, // },
    },
    allowProtoProperties: true,
    noCache: true,
  })
);

app.set("view engine", "hbs");
app.set("views", "./src/resources/views");
//router init
route(app);

// Lingting Port
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
