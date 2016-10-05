var connect = require('connect');

var app = new connect();

app.use(function(req, res){
    res.end('hello world\n');
});

app.listen(3000);