const axios = require('axios');

const options = {
  method: 'POST',
  url: 'https://api.telegram.org/bot6297387966%3AAAFeR_WUjm7okAsP55SCMKRrSJbSQtQSw1Q/sendPhoto',
  headers: {accept: 'application/json', 'content-type': 'application/json'},
  data: {
    photo: 'https://img.freepik.com/free-vector/valentines-day-love-you-message-card-design_1017-36426.jpg',
    caption: 'tets',
    disable_notification: false,
    reply_to_message_id: null,
    chat_id: '5251512924'
  }
};

axios
  .request(options)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });