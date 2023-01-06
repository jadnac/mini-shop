const categories = require('../models/category.models')

module.exports = {
    async getAllCategories () {
        try{
            let Allcategories = await categories.aggregate([{
                $lookup: {
                    from: "products",
                    localField: "_id",
                    foreignField: "category_id",
                    as: "Products"
                }
            }])
            return Allcategories
        }catch(err){
            console.log('Error Getting All Categories Services ', err)
            return err
        }
    },

    async createCategory(data){
        try{
            let category = await categories.create(data)
            return category
        }catch(err){
            console.log('Error Creating Category Services ', err)
            return err
        }
    },

}