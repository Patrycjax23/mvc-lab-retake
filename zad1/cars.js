const cars=
[
  {
    id:1,
    make:'Toyota',
    model:'Yaris',
    year:2001,
    color:'White',
  },
  {
    id:2,
    make:'Fiat',
    model:'Punto',
    year:2014,
    color:'Black',
  },
  {
    id:3,
    make:'Porshe',
    model:'Carrera',
    year:2020,
    color:'Pink',
  },
  {
    id:4,
    make:'Mercedes',
    model:'G',
    year:2015,
    color:'Grey',
  },
  {
    id:5,
    make:'Lamborgini',
    model:'Urus',
    year:2023,
    color:'Red',
  },
];
const getCars = () => {
    return cars;
};
const getCarInformation = (id) => {
    const car = cars.find(car => car.id === id);
    if (car) {
        return `Make: ${car.make}, Model: ${car.model}, Year: ${car.year}, Color: ${car.color}.`;
    } else {
        return "Car doesn’t exist";
    }
};
const getCarAge = (id) => {
    const car = cars.find(car => car.id === id);
    if (car) {
        
        const CAR_AGE = 2024 - car.year;
        return `Car is ${CAR_AGE} years old.`;
    } else {
        return "Car doesn’t exist";
    }
};
module.exports = { getCars, getCarInformation, getCarAge };