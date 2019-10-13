const nodemailer = require('nodemailer');

const sendMail = async (ip) => {
  const {
    SMTP_SERVER,
    EMAIL_PASSWORD,
    EMAIL_USERNAME,
    USER_FIRST_NAME,
    USER_LAST_NAME,
    SMTP_PORT
  } = process.env;
  let transporter = nodemailer.createTransport({
    host: SMTP_SERVER,
    port: parseInt(SMTP_PORT),
    secure: false, // true for 465, false for other ports
    auth: {
      user: EMAIL_USERNAME,
      pass: EMAIL_PASSWORD
    },
    tls: {
      rejectUnauthorized: false
    }
  });
  let info;
  const from = `${USER_FIRST_NAME} ${USER_LAST_NAME} <${EMAIL_USERNAME}>`
  try {
    info = await transporter.sendMail({
      from,
      to: EMAIL_USERNAME,
      subject: 'Updated IP ✔', // Subject line
      html: `<b>Hey:) Your ip address has changed. The new one is :<span style="color: green">${ip}</span></b>` // html body
    });
  } catch (err) {
    console.log('Error sending mail', err);
  }

  console.log('Message sent: %s', info.messageId);

}

module.exports = sendMail;