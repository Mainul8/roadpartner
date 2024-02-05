const Router = require("express");
const userController = require("../controllers/userController");
const contactUsController = require("../controllers/contactUsController");
const paymentController = require("../controllers/paymentController");
const dropdownController = require("../controllers/dropdownController");

const User = require("../models/user.js");
const ContactUs = require("../models/contactUs");
const Service = require("../models/service");
const Country = require("../models/country");
const State = require("../models/state");
const City = require("../models/city");
const Shop = require("../models/shop");

const router = Router();
//POST Routes
router.post("/signup", userController.signup);
router.post("/login", userController.login);
router.post("/contactus", contactUsController.contactus);
router.post("/processPayment", paymentController.processPayment);

//GET Routes

router.get("/", userController.userHome);
router.get("/get-services", dropdownController.getServices);
router.get("/get-countries", dropdownController.getCountries);
router.get("/get-states/:country", dropdownController.getStates);
router.get("/get-cities/:state", dropdownController.getCities);
router.get(
  "/get-shops/:service/:country/:state/:city",
  dropdownController.getShops
);

//PUT Routes+

module.exports = router;
