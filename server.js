const cons = require("consolidate");
const express = require('express');
const path = require('path');
const port = process.env.PORT || 3000;

const app = express();


// the __dirname is the current directory from where the script is running
app.use(express.static(__dirname));

app.engine("html", cons.ejs);
app.set('view engine', 'html');
app.set("views", path.resolve(__dirname));


// send the user to index html page inspite of the url
app.get('/', (req, res) => {
  res.render('index');
});

app.listen(port, () => console.log("nzoya server is listening on port "+ port));