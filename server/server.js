const app = require('./app.js');
require('dotenv').config();

const port = process.env.PORT || 3000;

app.listen(port, (err) => {
  if (err) {
    console.log(err);
  }

  if (!process.env.SLIDE_SHOW_SERVER || !process.env.REVIEWS_SERVER) {
    const message = 'SLIDE_SHOW_SERVER and REVIEWS_SERVER .env variables have not been set';
    throw new Error(message);
  }

  console.log(`Server running on port ${port}`);
});