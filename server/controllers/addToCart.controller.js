const { addProductToCart, getAllAddToCartProd, deleteAddToCartProd } = require("../services/addToCart.services")

module.exports = {
    AddProductToCart: async (req, res) => {
        try {
            const data = req.body
            await addProductToCart(data).then(response => {
                if (response?.error) {
                    return res.status(400).send({ error: response?.error })
                } else {
                    return res.status(200).send({ message: 'Product Added Successfully' })
                }
            })
        } catch (err) {
            console.log('Error Adding To Product Controller', err)
            return res.status(500).send(err)
        }
    },

    GetAllProductToCart: async (req, res) => {
        try {
            await getAllAddToCartProd().then(response => {
                if (response?.error) {
                    return res.status(400).send({ error: response?.error })
                } else {
                    return res.status(200).send({ data: response, message: 'All Products In Cart Found' })
                }
            })
        } catch (err) {
            console.log('Error Getting All Products To Cart')
        }
    },
    deleteAddToCartProduct: async (req, res) => {
        try {
            let id = req.body.id
            await deleteAddToCartProd(id).then(response => {
                if (response?.error) {
                    return res.sttus(400).send({ error: response?.error })
                } else {
                    return res.status(200).send({ data: response, message: 'Product In Cart Deleted' })
                }
            })
        }catch (err) {
            console.log('Error Deleting Product From Cart')
        }
    }
}