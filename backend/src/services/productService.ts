import { productModel } from "../models/productModel";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
export const getAllProducts = async () => {
  return await productModel.find();
};

export const seedInitialProducts = async () => {
  try {
    const products = [
      {
        title: "Dell laptop",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc-Y6ScU7MVHuWFjD53a6fKw4nzmFApl2bug&s",
        price: 1200,
        stock: 10,
      },
      {
        title: "Asus laptop",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQEDdtaJV1kPgqm55cDgNDiOtQZTa0XNB9mA&s",
        price: 1500,
        stock: 15,
      },
      {
        title: "HP laptop",
        image:
          "https://www.cnet.com/a/img/resize/7b3fd0537aa3ac0dadc3c0e98410aaf79abd42b9/hub/2023/11/02/4a4b328b-853e-46cb-8ec5-587b36965655/hp-pavilion-plus-14-lid.jpg?auto=webp&width=1200",
        price: 1000,
        stock: 8,
      },
    ];

    const existingProducts = await getAllProducts();

    if (existingProducts.length === 0) {
      await productModel.insertMany(products);
    }
  } catch (err) {
    console.error("cannot see database", err);
  }
};
