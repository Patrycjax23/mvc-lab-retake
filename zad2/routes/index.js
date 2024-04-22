const fs = require('fs');

const home = require("../views/home");
const car = require("../views/car");
const addCar = require("../views/add-car");
const querystring = require('querystring');

function handleHome(response) {
    response.setHeader("Content-Type", "text/html");
    response.write(home.renderPage());
    response.end();
}


const handleAddCar = (method, request, response) => {
    if (method === 'GET') {
        response.setHeader("Content-type", "text/html");
        response.write(addCar.renderPage());
        response.end();
    } else if (method === 'POST') {
        let body = [];
        request.on('data', (chunk) => {
            body += chunk.toString();
        });
        request.on('end', () => {
            const formData = querystring.parse(body);
            fs.writeFile('formData.json', JSON.stringify(formData), () => {
                response.statusCode = 302;
                response.setHeader('Location', '/car');
                response.end();
            });
        });
    }
};

const handleCar = (response) => {
    fs.readFile('formData.json', (err,data) => {
        response.setHeader("Content-type", "text/html");
        response.write(car.renderPage(data));
        response.end();
    });
};


function handlePageNotFound(response) {
    response.statusCode = 404;
    response.setHeader('Content-Type', 'text/html');
    response.write('404 Page Not Found');
    response.end();
}
module.exports = {
    handleHome,
    handleAddCar,
    handleCar,
    handlePageNotFound
};

