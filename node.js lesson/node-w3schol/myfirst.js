let http=require("http");
let dt =require('./myfirstmodul');
http.createServer(function(req,res){
    res.writeHead(200,{'content-type':'text/html'});
    res.write('the date and time are currently:' +dt.myDateTime());
    res.end();
    
}).listen(8080);