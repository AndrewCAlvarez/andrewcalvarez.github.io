// //Use require to include other files. "http" in this case allows node.js to transfer data via http.
// var http = require("http");
// //Web server. createServer() creates an HTTP server that listens to server ports and gives a response back to the client.
// http.createServer(function(req, res) {
//     res.writeHead(200, { "Content-Type": "text/html" }); //tells the server to return the response as HTML
//     res.write(req.url); //write a response to the client, req.url returns the part after the domain name (e.g. summer in g.com/summer)
//     res.end(); // end the response
// }).listen(8080); //Server object listens on port 8080

//split the query string
var http = require("http");
var url = require("url");

http.createServer(function(req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    var q = url.parse(req.url, true).query;
    var txt = q.year + " " + q.month;
    res.end(txt);
}).listen(8080);
