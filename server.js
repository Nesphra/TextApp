const express = require('express');
const app = express();
const path = require('path');
// const io = require('socket.io')(server);
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, '/public')));

app.get('/', function(req, res) {
  res.sendFile('/index.html');
});
app.listen(port, function() {
  console.log(`Listening on port ${port}`);
});