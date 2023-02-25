const express= require("express");
const { fetchData, deleteData, getData } = require("../controller/Data.controller");

const Router= express.Router();

// All routes are created

Router.route("/").post(fetchData)
Router.route("/").delete(deleteData)
Router.route("/").get(getData)

module.exports= Router;