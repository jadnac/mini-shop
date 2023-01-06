const products = require('../models/product.models')

module.exports = {
    async getProductById (id){
        try{
            let product = await products.find({ _id : id})
            return product
        }catch(err){
            console.log('Error Getting Product By Id ', err)
            return err
        }
    },
    async createProduct(data){
        try{
            let product = await products.create(data)
            return product
            
        }catch(err){
            console.log('Error Creating Category Services ', err)
            return err
        }
    },
}