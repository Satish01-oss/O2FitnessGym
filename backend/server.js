require('dotenv').config();
const app = require('./src/app');
const db = require('./src/db/db');
db();

app.listen( process.env.PORT || 3000, () => {
  console.log('Server is running on port ' + (process.env.PORT || 3000))
})