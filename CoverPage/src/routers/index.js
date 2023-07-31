const siteRouter = require("./site");
const couseRouter = require("./couse");
function route(app) {
  // home page
  app.use("/", siteRouter);
  app.use("/couses", couseRouter);
}

module.exports = route;
