const express = require('express');
const router = express.Router();
const Restaurantscontroller = require('../controller/restaurant.controller');


router.get("/" , Restaurantscontroller.getAllRestaurant);
router.get("/:id" , Restaurantscontroller.getByIdRestaurant);
router.post("/" , Restaurantscontroller.createRestaurant);
router.delete("/:id" , Restaurantscontroller.deleteRestaurant);
router.put("/:id" , Restaurantscontroller.updateRestaurant);



module.exports = router;