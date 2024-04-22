const http=require('http');
const routes = require('./routes/index');

const PORT=3000;
const server= http.createServer(requestListener)
function requestListener(request,response){
    const {  method } = request;
  
  if (request.url === '/' && request.method === 'GET') {
      routes.handleHome(response);
  }

  else if (request.url === '/add-car') {
      routes.handleAddCar(method, request, response);
  }
  
  else if (request.url === '/car' && request.method === 'GET') {
      routes.handleCar(response);
  }

  else {
      routes.handlePageNotFound(response);
  }
};
function listeningListener() {
    console.log(`Server is running on ${PORT}`);
}
server.listen(PORT, listeningListener);
