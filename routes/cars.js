const express = require('express');
const router = express.Router();
const path = require('path');
const cheerio = require('cheerio');
const fs=require('fs');
let cars = [];
let nextId = 1;
router.get('/car', (request, response) => {
  const carHtmlPath = path.join(__dirname, '../views/car.html');
  fs.readFile(carHtmlPath, 'utf8', (err, html) => {

    const $ = cheerio.load(html);
    if (cars.length === 0) {
      $('.car').text('No cars has been found.');
    } else {
      $('.car').html('<h2>Last added car</h2>');
      cars.forEach(car => {
        $('.car').append(`
          <div>
            <div><span class="bold">Make:</span> ${car.make}</div>
            <div><span class="bold">Model:</span> ${car.model}</div>
            <div><span class="bold">Year:</span> ${car.year}</div>
            <div><span class="bold">Color:</span> ${car.color}</div>
          </div>
        `);
      });
    }
    response.send($.html());
  });
});


router.get('/car/add', (request, response) => {
  response.sendFile(path.join(__dirname, '../views/add-car.html'));
});

router.get('/car/list', (request, response) => {
  const carsListHtmlPath = path.join(__dirname, '../views/cars-list.html');
  fs.readFile(carsListHtmlPath, 'utf8', (err, html) => {
   
    const $ = cheerio.load(html);
    const carsDiv = $('.cars');
    if (cars.length === 0) {
      carsDiv.text('No cars has been found.');
    } else {
      carsDiv.html('<h2>Cars</h2>');
      const carsList = $('<ul></ul>');
      cars.forEach(car => {
        const carItem = $('<li></li>');
        carItem.append(`
          <p><span class="bold">Make:</span> ${car.make}</p>
          <p><span class="bold">Model:</span> ${car.model}</p>
          <p><span class="bold">Year:</span> ${car.year}</p>
          <p><span class="bold">Color:</span> ${car.color}</p>
        `);
        carsList.append(carItem);
      });
      carsDiv.append(carsList);
    }
    response.send($.html());
  });
});

router.post('/car/add', (request, response) => {
  const {make, model, year, color} = request.body;
  const newCar = {
      id: nextId,
      make,
      model,
      year,
      color
  };
  cars.push(newCar);
  nextId++;
  response.redirect('/car');
});

module.exports = router;
