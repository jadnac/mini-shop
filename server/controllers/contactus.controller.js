const { saveContactUS } = require("../services/contactus.services")

module.exports = {
    SaveContactUs: async (req, res) => {
        try{
            const data = req.body
            await saveContactUS(data).then(response => {
                if(response?.error){
                    return res.status(400).send({error: response?.error})
                }else{
                    return res.status(200).send({message: "Your Message Has Been Sent"})
                }
            })
        }catch(err){
            console.log('Error Saving Message', err)
            return res.status(500).send(err)
        }
    }
}