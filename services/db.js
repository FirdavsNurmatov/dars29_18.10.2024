import fs from "fs"
import path from "path"

const productsFilePath = path.join(process.cwd(), "database", "products.json")

export const readDB = () => {
    let alldata = fs.readFileSync(productsFilePath, "utf-8", (err, data) => {
        if(err) throw err;
        return data
    })

    let parsedData = JSON.parse(alldata)
    return parsedData
}

export const writeDB = (data) => {
    fs.writeFileSync(productsFilePath, JSON.stringify(data), (err) => {
        if(err) throw err;
    })
}