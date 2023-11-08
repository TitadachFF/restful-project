const express = require('express');
const router = express.Router();
const productscontroller = require('../controller/controller');

router.get("/" , productscontroller.getAllproduct);
router.get("/:id" , productscontroller.getByIdproduct);
router.post("/" , productscontroller.createproduct);
router.delete("/:id" , productscontroller.deleteproduct);
router.put("/:id" , productscontroller.updateproduct);





module.exports = router;