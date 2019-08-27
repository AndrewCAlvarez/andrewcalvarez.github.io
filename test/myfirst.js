var http = require("http");
var dt = require("./myfristmodule");
var uc = require("upper-case"); //Module i imported with npm that uppercases it's argument

http.createServer(function(req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(uc("Fuck anyone who doesn't think I can do this!"));
}).listen(8080);
