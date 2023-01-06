const { getProductById, createProduct } = require("../services/product.services")

module.exports = {
    GetProductById: async (req, res) => {
        try{
            const {id} = req.params
            await getProductById(id).then(response => {
                if(response.err){
                    return res.status(400).send({error: response.err, message: 'Error Getting Product By Id Controller'})
                }else{
                    return res.status(200).send({data: response, message: 'Product Successfully Found'})
                }
            })
        }catch(err){
            console.log('Error Getting Product By Id ', err)
            return res.status(500).send(err)
        }
    },
    CreateProduct: async (req, res) => {
        try{
            const data = req.body
            await createProduct(data).then(response => {
                if(response){
                    return res.status(200).send({ message: "Product Created Successfully"})
                }else {
                    return res.status(400).send({error: 'Error Getting products'})
                }
            })
        }catch(err){
            console.log('Error Creating All Products Controller ', err)
            return res.status(500).send(err)
        }
    }
}