const { payment } = require("../services/payment.service")

module.exports = {
    Payment:async (req, res) => {
        try{
            const {product, data} = req.body
            await payment(product, data).then(response => {
                if(response.err){
                    return res.status(400).send({error: response.err})
                }else{
                    return res.status(200).send({data: response, message: "Payment Successfully Done"})
                }
            })
        }catch(err){
            console.log("Error In Payment ", err)
            return res.status(500).send(err)
        }
    }
}