import { productModel } from "../models/productModel";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


export const getAllProducts = async () => {
    return await productModel.find();
}

export const seedInitialProducts = async () => {
    const products = [
        {title:  "Dell laptop", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc-Y6ScU7MVHuWFjD53a6fKw4nzmFApl2bug&s", price: 1200, stock: 10}
    ];

    const existingProducts = await getAllProducts();

    if(existingProducts.length === 0) {
        await productModel.insertMany(products)
    }
}
