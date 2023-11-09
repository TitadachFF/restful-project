const express = require('express');
const router = express.Router();
const Restaurantscontroller = require('../controller/restaurant.controller');


router.get("/restaurants" , Restaurantscontroller.getAllRestaurant);
router.get("/restaurants/:id" , Restaurantscontroller.getByIdRestaurant);
router.post("/restaurants" , Restaurantscontroller.createRestaurant);
router.delete("/restaurants/:id" , Restaurantscontroller.deleteRestaurant);
router.put("/restaurants/:id" , Restaurantscontroller.updateRestaurant);



module.exports = router;