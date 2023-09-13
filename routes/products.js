const express = require('express')
const router = express.Router()

const productsController = require('../controller/productController')

//create product
router.post('/products',productsController.createProduct)

//Show all products
router.get('/products',productsController.getProducts)

//show by id
router.get('/products/:id',productsController.getProductById)

//delete product
router.delete('/products/:id',productsController.DeleteProduct)

router.put('/products/:id',productsController.UpdateProduct)

module.exports = router;
