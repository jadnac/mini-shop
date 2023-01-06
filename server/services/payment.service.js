const stripe = require('stripe')(process.env.SECRET_KEY)
const orders = require('../models/order.models')

module.exports = {
    async payment(product, data){
        try{
            if(product && data){
                let obj = {
                    product_id: product?._id,
                    client_name: data?.card?.name,
                    client_country: data?.card?.address_country,
                    client_city: data?.card?.address_city,
                    client_ip: data?.client_ip,
                    card_type: data?.card?.brand,
                    card_id: data?.card?.id
                }
                await orders.create(obj)
                await stripe.charges.create({
                    amount: product?.product_prize,
                    currency: 'usd',
                    source: data.id,
                    description: `Payment for ${product.title}`,
                    metadata: {
                        productId: product?._id
                    }
                })
                return 'Successfully Purchased'
            }else{
                return 'No Product Found'
            }
            
        }catch(err){
            console.log('Error Payment Service ', err)
            return err
        }
    }
}