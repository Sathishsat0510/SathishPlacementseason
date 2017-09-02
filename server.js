var http=require('http');

function onRequest(request,response){
    response.writeHead(200,{'Content-Type':'text/html'});
    response.write('Hello world');
    response.end();
}

http.createServer(onRequest).listen(4200);
