const express = require('express');
const router = express.Router();
const UserController= require("../controller/userController")
const OrderController= require("../controller/orderController")
const ProductController= require("../controller/productController")

const mid1 = function (req, res, next) 
{    let freeUser = req.headers["isfreeappuser"]
console.log(freeUser)
     if (freeUser) {
        next()
    } else { 
        res.send("request is missing a mandatory header")
    }
}

router.post("/createUser", mid1, UserController.createUser  )

router.post("/createProduct", ProductController.createProduct )

router.post("/createOrder", mid1, OrderController.createOrder  )

module.exports = router;