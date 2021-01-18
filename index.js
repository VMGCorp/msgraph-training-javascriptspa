const express = require('express');
const app = express();

app.use('/js', express.static(__dirname + '/views/js/'));
app.use('/styles', express.static(__dirname + '/views/styles'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.get('/calendar', function(req, res) {
    res.render("index.html");
})

const webserver = app.listen(8080, function() {
    console.log('Node web server is running...');
})