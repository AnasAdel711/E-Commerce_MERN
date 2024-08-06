import express from 'express'
import { getAllProducts } from '../services/productService'

const router = express.Router()

router.get('/', async (req, res)  => {
    try {
        const product = await getAllProducts();
        res.status(200).send(product)
    } catch(err) {
        res.status(500).send("Something went wrong!")
    }
})

export default router;