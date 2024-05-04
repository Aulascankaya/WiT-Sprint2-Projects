// DAY 1


/* 
 Creating Objects 
 
 Let this function take the id, model, fuel, gear, age, price and mileage values ​​of a car as parameters, respectively.
It calculates the production year with these incoming values ​​and returns an object with id, model, fuel, gear, production year, price and mileage information.

*/

function getCarObject(id, model, yakit, vites, yas, fiyat, kilometre) {
  let car = {};

  car = {
    id: id,
    model: model,
    yakit: yakit,
    vites: vites,
    uretimYili: new Date().getFullYear() - yas,
    fiyat: fiyat,
    kilometre: kilometre,
  };

  return car;
}

/* 
  Working with Arrays and Objects
  
  
  It calculates the average score in the list and returns a list 
  consisting only of the names of people who are lower than the average.
  
  */

function getBelowTheAverage(list) {
  let ortalama = 0;
  let toplam = 0;
  for (let i = 0; i < list.length; i++) {
    toplam += list[i].puan;
  }

  ortalama = toplam / list.length;

  let belows = [];

  for (let i = 0; i < list.length; i++) {
    if (list[i].puan < ortalama) {
      belows.push(list[i].isim);
    }
  }

  return belows;
}

/*Copy with spread*/

function newCar(car) {
  const newCarObject = { ...car };

  const modelArray = newCarObject.model.split(" ");
  newCarObject.marka = modelArray[0];
  newCarObject.model = modelArray.slice(1).join(" ");

  newCarObject.otv = newCarObject.fiyat < 1450000 ? 10 : 40;

  newCarObject.mtv = newCarObject.yas <= 10 ? 1773 : 520;

  newCarObject.isDomestic = newCarObject.marka === "TOGG";

  delete newCarObject.yas;

  return newCarObject;
}

/*Adding Methods to Objects*/

function addMethods(car) {
  let cars = { ...car };
  // .getKilometers() metodu
  cars.getKilometers = () =>
    `Arabanın güncel kilometresi ${car.kilometre} km'dir.`;

  // .getYear() metodu
  cars.getYear = function () {
    const currentYear = new Date().getFullYear();
    const year = currentYear - cars.yas;
    return `Araba ${year} modeldir.`;
  };

  // .changePrice(percentage) metodu
  cars.changePrice = function (percentage) {
    cars.fiyat = cars.fiyat + (cars.fiyat * percentage) / 100;
    return `Araba'nın güncel fiyatı ${Math.floor(cars.fiyat)} TL'dir.`;
  };

  return cars;
}

/*In this simulator, users should be able to take information (brand, model, mileage, price) 
and create a car, and define some methods and perform some actions in this car.*/

function carSimulator(marka, model, kilometre, fiyat) {
    const car = {
      marka: marka,
      model: model,
      kilometre: kilometre,
      fiyat: fiyat,
      depo: 50,
      getPrice: () => `Arabanın güncel piyasa değeri ${car.fiyat} TL'dir.`,
      drive: function (km) {
        car.kilometre += km;
        car.depo -= km / 20;
        car.fiyat -= km / 2;
        return `Araba'nın güncel kilometresi: ${car.kilometre}`;
      },
      refuel: function (litre) {
        car.depo += litre;
        if (car.depo > 100) {
          car.depo = 100;
        }
        return `Depo %${this.depo} doludur.`;
      },
    };
    return car;
  }

  
