// Twilio Credentials
const accountSid = 'ACdc86b4aa9724e7637dc48e4be51f7589';
const authToken = '5235dbf054732664f73fc3f2e499a34a';

// require the Twilio module and create a REST client
const client = require('twilio')(accountSid, authToken);

client.messages.create(
  {
    to: '+918299689170',
    from: '+12063396774',
    body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
  },
  (err, message) => {
    if(err){
      //console.log(err);
      return {"err": err}
    } else {
      //console.log(message.sid);
      return {"sid": message.sid}
    }
  }
);
