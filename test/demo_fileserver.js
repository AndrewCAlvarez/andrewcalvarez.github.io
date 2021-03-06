var http = require("http");
var url = require("url");
var fs = require("fs");

http.createServer(function(req, res) {
    var q = url.parse(req.url, true);
    var filename = "." + q.pathname;
    fs.readFile("demofile1.html", function(err, data) {
        if (err) {
            res.writeHead(404, { "Content-Type": "text/html" });
            return res.end("404 Not Found");
        }
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
        return res.end();
    });
    fs.readFile("style.css", function(err, data) {
        if (err) {
            res.writeHead(404, { "Content-Type": "text/css" });
            return res.end("404 Not Found");
        }
        res.writeHead(200, { "Content-Type": "text/css" });
        res.write(data);
        return res.end();
    });
}).listen(8080);
