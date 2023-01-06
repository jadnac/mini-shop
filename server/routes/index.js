module.exports = (app) => {
    const category = require('./category.routes')
    app.use('/category', category)

    const product = require('./product.routes')
    app.use('/product', product)

    const payment = require('./payment.routes')
    app.use('/payment', payment)
}