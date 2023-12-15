const pug = require("pug");
const nodemailer = require("nodemailer");
require("dotenv").config();

async function main(emailData, pugTemplatePath) {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    secure: true,
    auth: {
      user: process.env.user_email,
      pass: process.env.user_password,
    },
  });

  const compiledFunction = pug.compileFile(pugTemplatePath);

  const emailHTML = compiledFunction(emailData);

  let info = await transporter.sendMail({
    from: process.env.user_email,
    to: emailData.receiver.email,
    subject: emailData.subject,
    html: emailHTML,
  });

  return info;
}

module.exports = main;
