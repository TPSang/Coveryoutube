const express = require("express");
const siteRouter = express.Router();

const sitecontroller = require("../app/controller/SiteController");


siteRouter.get("/", sitecontroller.index);

module.exports = siteRouter;
