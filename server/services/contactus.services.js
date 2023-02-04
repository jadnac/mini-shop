const contacts = require('../models/contactus.models')
const mailerConfig = require('../emails/mailer.config')


module.exports = {
    async saveContactUS(data){
        try{
            let saveMessage = await contacts.create(data)
            if(saveMessage){
                let mailOptions = {
                    from: `Jad Nacouzi<${process.env.GMAIL}`,
                    to: data?.email,
                    subject: "Thank you",
                    html: '<b>Thank you for contacting us</b>'
                }
                mailerConfig.smtpTransport.sendMail(mailOptions, (err, resp) => {
                    if(err){
                        return {error: err}
                    }else{
                        return {message: "Your Message Has Been Sent"}
                    }
                })
            }else{
                return {error: 'Error Message Not Sent'}
            }
        } catch(err){
            console.log('Error Saving Message', err)
            return err
        }
    }
}