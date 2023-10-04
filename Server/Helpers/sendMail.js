const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",

  secure: true,
  auth: {
    // TODO: replace `user` and `pass` values from <https://forwardemail.net>
    user: "aakiltayyab@gmail.com",
    pass: "eibaffthpjvlcnzz",
  },
});

// async..await is not allowed in global scope, must use a wrapper
async function sendMail(to, subject, text, html) {
  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: 'aakiltayyab@gmail.com', // sender address
    to, // list of receivers
    subject,
    text,
    html,
  });

}

module.exports = sendMail