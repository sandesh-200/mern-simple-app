import express from 'express'

import { getProducts,createProduct,updateProduct,deleteProduct } from '../controllers/product.controller.js'

const router = express.Router();

//UPDATE THE PRODUCT
router.put("/:id",updateProduct)

//GET ALL  PRODUCTS
router.get("/",getProducts)

//CREATE PRODUCT
router.post("/",createProduct)

//DELETE PRODUCT
router.delete("/:id",deleteProduct)

export default router;