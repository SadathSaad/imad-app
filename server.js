var express = require('express');
var morgan = require('morgan');
var path = require('path');
var Pool = require('pg').Pool;
var app = express();
app.use(morgan('combined'));
var crypto = require('crypto');

var config = {
    user: 'sadathullakhaliq',
    database: 'sadathullakhaliq',
    host: 'db.imad.hasura-app.io',
    port: '5432',
    password: process.env.DB_PASSWORD
};

function createTemplate (data){
    var title = data.title;
    var date = data.date;
    var text = data.text;
var htmlTemplate=`
  <html>
  <body>
 <h1>
 ${title}
 </h1>
 <p>${date.toDateString()}</p>
 <hr>
 <p>${text}</p>
  </body>
  </html>
`;
return htmlTemplate;
}
var pool = new Pool(config);
app.get('/article/:articleName', function (req, res){
pool.query("SELECT * FROM articles where title = $1", [req.params.articleName], function(err, result) {
if(err){
res.status(500).send(err.toString());
}else{
    if(result.rows.length===0){
        res.status(404).send('Article Not Found');
    }
    else{
        var articleData = result.rows[0];
res.send(createTemplate(articleData));}
}
});

});
var counter = 0;
function hash (input, salt){
    var hashed = crypto.pbkdf2Sync(input, 'salt', 10000, 512, 'sha512');
    return hashed.toString('hex');
}
app.get('/hash/:input',function (req, res){
   var hashedString = hash(req.params.input,'this-some');
   res.send(hashedString);
});
app.get('/counter',function(req,res){
    counter = counter+1;
    res.send(counter.toString());
});

app.get('/ui/SmArt.ico', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'SmArt.ico'));
});
app.get('/ui/SmArt.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'SmArt.png'));
});

app.get('/ui/imadSecnd.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'imadSecnd.jpg'));
});
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/MyProfile', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'MyProfile.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});
app.get('/ui/Tweet.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'Tweet.png'));
});
app.get('/ui/cntct.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'cntct.png'));
});
app.get('/ui/imadAn.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'imadAn.png'));
});
app.get('/ui/imadL.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'imadL.png'));
});

app.get('/ui/imadStrt.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'imadStrt.jpg'));
});
app.get('/ui/socialF.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'socialF.png'));
});
app.get('/ui/socialG.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'socialG.png'));
});
app.get('/ui/socialL.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'socialL.png'));
});
app.get('/ui/socialT.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'socialT.png'));
});

// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
