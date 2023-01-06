const { getAllCategories, createCategory } = require("../services/category.services")

module.exports = {
    GetAllCategories: async (req, res) => {
        try{
            await getAllCategories().then(response => {
                if(response){
                    return res.status(200).send({ data: response, message: "All Categories Found"})
                }else {
                    return res.status(400).send({error: 'Error Getting Categories'})
                }
            })
        }catch(err){
            console.log('Error Getting All Categories Controller ', err)
            return res.status(500).send(err)
        }
    },

    CreateCategory: async (req, res) => {
        try{
            const data = req.body
            await createCategory(data).then(response => {
                if(response){
                    return res.status(200).send({ message: "Category Created Successfully"})
                }else {
                    return res.status(400).send({error: 'Error Getting Categories'})
                }
            })
        }catch(err){
            console.log('Error Creating All Categories Controller ', err)
            return res.status(500).send(err)
        }
    },
}