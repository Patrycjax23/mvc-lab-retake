const http = require("http");
const { getCars, getCarInformation, getCarAge } = require('./cars.js');
const PORT = 3000;
const server= http.createServer(requestListener);
//const cars = require("./cars.js");
const htmlGenerator = require("./htmlGenerator.js");
function requestListener(req,res){
    const cars = getCars();
    console.log(cars);

    res.setHeader('Content-Type', 'text/html');
    res.write(htmlGenerator.getHTMLDocumentStart());
    res.write(`
    <body>
    `)
    const carInfo = getCarInformation(3);
    res.write(`<p>${carInfo}</p>`);
    const carAge = getCarAge(3); 
    res.write(`<p>${carAge}</p>`);

    res.write('</body>');

    res.write(htmlGenerator.getHTMLDocumentEnd());
    res.end();
}
function listeningListener() {
    console.log(`Server is running on ${PORT}`);
}
server.listen(PORT, listeningListener);

