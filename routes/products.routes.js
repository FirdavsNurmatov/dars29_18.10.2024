import express from "express";
import { validationProductMidd } from '../middlewares/index.js';
import { createProducts, deleteByIdProducts, getAllProducts, getByIdProducts, updateByIdProducts } from "../controllers/products.controller.js";


export const productsRouter = express.Router()


//GET ALL
productsRouter.get("/", getAllProducts)

//GET BY ID
productsRouter.get("/:id", getByIdProducts)

//CREATE
productsRouter.post("/", validationProductMidd, createProducts)

//UPDATE BY ID
productsRouter.put("/:id", updateByIdProducts)

//DELETE BY ID
productsRouter.delete("/:id", deleteByIdProducts)




// export const productsRouter = 
