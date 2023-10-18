const http = require('http')
const os = require('os')
console.log("Test Server Starting...");

var handler = function(request, response)
{
        console.log("received request");
        response.writeHead(200);
        response.end("Container Hostname: " + os.hostname() + "git test change jenkins");
}

 var www = http.createServer(handler);
 www.listen(8080);
