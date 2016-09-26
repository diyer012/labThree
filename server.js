/**
 * Created by Dhruva Iyer on 9/25/2016.
 */
// reference connect package
var connect = require('connect');
var url = require('url');

// installing new connect

var app = connect();

//setting  the math function to the http request
var math = function(req, res, next)
{
    var queryString = url.parse(req.url,true).query;
    var p = queryString.p.valueOf();
    var q = queryString.q.valueOf();
    var method = queryString.method;
    // condition statements for add, subtract, multiply and divide
    if (method == 'add') {
        var added = +p + +q;
        res.end('addition: '+ p +'+'+ q +'=' + added.toString());
    }

    else if (method == 'subtract') {
        var sub = +p - +q;
        res.end('subtraction: '+ p + '-' + q +'=' + sub.toString());
    }

    else if (method == 'product') {
        var mul = +x * +y;
        res.end('product: '+ x + '*'+ y +'=' + pro.toString());
    }

    else if (method == 'Divide') {
        var div = +x/ +y;
        res.end('divide: '+ x + '/'+ y +'=' + div.toString());
    }

    else
    {
        res.end(' Please enter a valid number.');
    }

};
//Welcome statement on getting request
app.use(math);

// Start the server on port 3000
app.listen(3000);

// display the message that our server is running
console.log('Connected and running on port 3000');