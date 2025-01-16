const express = require('express');
const router = express.Router();



const { updateProduct, deleteProduct, createProduct } = require("../controller/productController")



router.route("/").post(createProduct)
router.route("/").patch(updateProduct)
router.route("/").delete(deleteProduct)


module.exports = router;