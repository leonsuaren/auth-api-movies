require('dotenv').config({ path: './.config.env' });

const sendSms = (phonenumber) => {
  console.log(phonenumber);
  const accountSid = process.env.SMS_TWILIO_SID;
  const authToken = process.env.SMS_TWILIO_TOKEN;
  const client = require('twilio')(accountSid, authToken);

  client.messages
    .create({
      body: 'Welcome to Movies Auth App!!',
      from: '+12512748879',
      to: `+${phonenumber}`
    })
    .then(message => console.log(message));
}

module.exports = sendSms;