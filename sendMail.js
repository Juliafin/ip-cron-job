const nodemailer = require('nodemailer');

const sendMail = async(ip) => {
  let transporter = nodemailer.createTransport({
    host: process.SMTP_SERVER,
    port: process.env.SMTP_PORT,
    secure: false, // true for 465, false for other ports
    auth: {
        user: process.env.USERNAME,
        pass: process.env.PASSWORD
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