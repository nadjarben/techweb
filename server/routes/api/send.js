const router = require('express').Router()
const nodemailer = require('nodemailer');
const creds = require('../../config/keysGmail');


module.exports = router;

let transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  auth: {
  user: creds.USER,
  pass: creds.PASS
  },
  tls: {
      rejectUnauthorized: false
  }
});

router.post('/', (req, res) => {
  // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        auth: {
        user: creds.USER,
        pass: creds.PASS
        },
        tls: {
            rejectUnauthorized: false
        }
    });

    // setup email data with unicode symbols
    var name = req.body.values.name
    var email = req.body.values.email
    var message = req.body.values.message

    var content= `Nouveau message de : ${name}<br/>
    Email: ${email}<br/>
    Message: ${message}`

    let mailOptions = {
        from: creds.USER, // sender address
        to: 'nadjarbenj@gmail.com', // list of receivers
        subject: 'Nouveau message Devis', // Subject line
        text: 'Bonjour, nouveau message devis', // plain text body
        html: content // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log(req.body)
        console.log('Message sent: %s', info.messageId);
    });
});
