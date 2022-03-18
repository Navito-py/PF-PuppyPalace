const nodemailer = require('nodemailer');

const { 
    USER_NODE_MAILER,
    USER_PASSWORD_NODEMAILER} = process.env

// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: USER_NODE_MAILER, // generated ethereal user
      pass: USER_PASSWORD_NODEMAILER, // generated ethereal password
    },
  });

  transporter.verify().then( () => {
      console.log('Ready for send mails');
  } )

module.exports = {
    transporter   
}