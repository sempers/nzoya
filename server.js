const express = require('express');
const path = require('path');
const port = process.env.PORT || 8080;
const app = express();

// the __dirname is the current directory from where the script is running
app.use(express.static(__dirname));

//app.engine("html", cons.ejs);
//app.set('view engine', 'html');
//app.set("views", path.resolve(__dirname, 'client/views'));


// send the user to index html page inspite of the url
app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'index.html'));
});

app.listen(port, () => console.log("nzoya server is listening on port "+ port));