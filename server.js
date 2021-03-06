var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articleOne= {
    title: 'Article One | Ramakrishnan Jayasekaran',
    date: '27th September 2016',
    heading:'Article One',
    content:  `<p>
        This is the content for my article. I'm trying to create my own webapp!
    </p>
    <p>
        App development has become one of the most powerful skills in today's industries.
    </p>
    <p>
        It helps to develop our skills in App Development to secure good job opportunities.
    </p>
    <p>
        Java Script is an essential element of App development. It is used by various developers to write codes for modern apps that perform a variety of functions in our day to day life.
    </p>
    <p>
        Smart phones and tablets of today would have become useless if it wasn't for apps that were developed for the operating system that runs on the phones.
     </p>
     <p>
            App development is the study of creating and running apps that help us to solve day to day problems both at the commercial and industrial levels. It helps us to perform a complex task at ease.
      </p>
        <p>
            App development also creates job opportunites for many young developers. 
        </p>
        <p>
            Thank You!
            
        </p>`
};
    function createTemplate (data) {
        var title = data.title;
        var content = data.content;
        var heading = data.heading;
        var date = data.date;
        
    
    var htmlTemplate = `
    <html>
    <head>
        <title>
            ${title}
        </title>
        <link href="/ui/style.css" rel="stylesheet" />
    </head>
    <body>
    <div class="container">
    <h>
        <a href ='/'>Home</a>
     </h>
    <hr/>
    <h3>
    ${heading}
    </h3>
    <div>
        ${date}
    </div>
    <div>
    ${content}
        </div>
        </div>
    </body>
    </html>
    `;
    return htmlTemplate;
    }
    
    


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/article-one',function (req, res) {
  res.send(createTemplate(articleOne));
});
app.get('/article-two',function (req, res) {
  res.send(createTemplate(articleTwo));
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
