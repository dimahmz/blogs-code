const sendEmail = require("./emailConfig.js");

const emailData = {
  subject: "Node.js Email Example",
  website: "https://www.haamza.xyz",
  receiver: {
    name: "Hamza",
    email: "hamza.es.saadi@proton.me",
  },
  text: "This is a test email. thank you for understanding!",
};

async function start() {
  try {
    console.log("sending email ...");
    await sendEmail(emailData, "./emailTemplate.pug");
    console.log("email has been sent!");
  } catch (e) {
    console.log("An error has occured!");
    console.error(e);
  }
}

start();
