const express = require('express')

const router = express.Router();
const { getAllProducts,getProductById} = require("../controller/productController")

// 26125
// to get all product from db  ......// route- GET /api/products
router.get("/", getAllProducts)

//to get a product by id from db      // route   /api/products/:id
router.get("/:id", getProductById)

module.exports = router