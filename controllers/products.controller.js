import { v4 } from "uuid"
import { readDB, writeDB } from "../services/index.js"

export const createProducts = (req, res, next) => {
  try {
    const newProduct = req.body
    newProduct.id = v4()

    let allData = readDB()
    allData.forEach(product => {
      if(product.id === +newProduct.id) {
        throw new Error("This data is already has!")
      }
    });

    allData.push(newProduct)
    writeDB(allData)

    res.send({ message: "New product added successfully!" })
  } catch (error) {
    next(error)
  }
}

export const getAllProducts = (req, res, next) => {
  try {
    const allData = readDB()

    res.send(allData)
  } catch (error) {
    next(error)
  }
}

export const getByIdProducts = (req, res, next) => {
  try {
    const id = req.params.id

    let result = "Product not found!"
    let allData = readDB()
    allData.forEach(product => {
      if(product.id === id) {
        result = product
      }
    });

    if(typeof result === "string"){
      return res.status(404).send({ message: result })
    }
    res.send(result)
  } catch (error) {
    next(error)
  }
}


export const updateByIdProducts = (req, res, next) => {
  try {
    const { model, price, company } = req.body
    const updateProductId = req.params.id

    let allData = readDB()
    allData.forEach(product => {
      if(product.id === updateProductId) {
        product.model = model
        product.price = price
        product.company = company 
      }
    });

    writeDB(allData)

    res.send({ message: "Product updated successfully!" })
  } catch (error) {
    next(error)
  }
}


export const deleteByIdProducts = (req, res, next) => {
  try {
    const deleteProductId = req.params.id

    const newDataArr = []
    let allData = readDB()
    allData.forEach(product => {
      if(product.id !== deleteProductId) {
        newDataArr.push(product)
      }
    });

    writeDB(newDataArr)

    res.send({ message: "Product deleted successfully!" })
  } catch (error) {
    next(error)
  }
}