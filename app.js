
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const carsRoutes = require('./routes/cars');
const homeRoutes = require('./routes/home');

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(carsRoutes);

app.use(homeRoutes);
app.use((request, response, next) => {
  response.status(404);
  response.setHeader("Content-Type", "text/html");
  response.send("404 Not Found");
});
function listeningListener() {
  console.log(`Server is running on http://localhost${PORT}`);
}
app.listen(PORT, listeningListener);
