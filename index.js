const express = require('express');

const app = express();

app.use('/reports', require('./routes/reports'));

app.listen(3001, ()=>{
  'Server Listening on port 3001'
})