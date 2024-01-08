var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'jgqsdjh@gmail.com',
    pass: 'khfkqskfq'
  }
});

var mailOptions = {
  from: 'lqkhslq@gmail.com',
  to: 'qshkqsdhq@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});