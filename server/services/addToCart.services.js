const addtocart = require('../models/addtocart.models')
const products = require('../models/product.models')

module.exports = {
    async addProductToCart(data) {
        try {
            if (data?.product_size && data?.product_color && data?.product_image && data?.product_price && data?.product_name) {
                let addingProduct = await addtocart.create(data)
                if (addingProduct) {
                    return { message: 'Product Has Been Added' }
                } else {
                    return { error: 'Error Adding Product' }
                }
            } else {
                return { error: 'Error Adding Product' }
            }
        } catch (err) {
            console.log('Error Adding Product To Cart ', err)
            return err
        }
    },

    async getAllAddToCartProd() {
        try {
            let cartProduct = await addtocart.find()
            return cartProduct
        } catch (err) {
            console.log('Error Getting All Product To Cart ', err)
            return err
        }
    },

    async deleteAddToCartProd(id) {
        try {
            if (id) {
                await addtocart.deleteOne({
                    product_id: id
                }).then(() => {
                    return { message: 'Card Product was succesfully deleted' }
                })
            }
        } catch (err) {
            console.log('Error Deleting Product from Cart ', err)
            return err
        }
    }

}