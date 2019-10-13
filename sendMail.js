const nodemailer = require('nodemailer');

const sendMail = async(ip) => {
  let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
        user: process.env.GMAIL_USERNAME,
        pass: process.env.GMAIL_PASSWORD
    },
    tls: {
      rejectUnauthorized: false
  }
});
  let info;
  try {
    info = await transporter.sendMail({
      from: '"Julia Finarovsky" <Juliafinarovsky@gmail.com>',
      to: 'juliafinarovsky@gmail.com',
      subject: 'Updated IP ✔', // Subject line
      html: `<b>Hey:) Your ip address has changed. The new one is :<span style="color: green">${ip}</span></b>` // html body
    });
  } catch (err) {
    console.log('Error sending mail', err);
}

console.log('Message sent: %s', info.messageId);

}

module.exports = sendMail;