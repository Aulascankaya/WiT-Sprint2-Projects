// End of Sprint

/* Prices will only be listed in TL instead of dollars.*/


const convertCurrency = (carList, exchangeRate) => {
    return carList.map((car) => {
      return {
        ...car,
        selling_price: Math.round(car.selling_price * exchangeRate),
      };
    });
  };


  /*They want you to make a list of cars that are risky to sell.*/

  const getRiskyCarList = (arabaListesi) => {
    return arabaListesi.filter((araba) => {
      return (
        araba.km_driven >= 250000 ||
        araba.year <= 2023 - 20 ||
        araba.owner === 'Dördüncü veya Daha Fazla Sahibi'
      );
    });
  };

  /*Total Sales Revenues According to Whom the Cars Are Purchased From*/

  
function calculateRevenue(arabalar, kimden) {
    return arabalar
      .filter((araba) => araba.seller_type === kimden)
      .reduce((toplamGelir, araba) => (toplamGelir += araba.selling_price), 0);
  }
  

  /*Number of Vehicles by Model Year of the Desired Brand*/

  function countStock(arabaStogu, marka) {
    const stok = {};
  
    arabaStogu
      .filter((araba) => araba.name.includes(marka))
      .forEach((araba) => {
        const yil = araba.year;
        if (stok[yil]) {
          stok[yil]++;
        } else {
          stok[yil] = 1;
        }
      });
  
    return stok;
  }

  /*A function that returns the number of models
   and the total sales value by brand */


   function analyzeData(arabaStogu, marka, yil) {
    const filtrelenmisArabalar = arabaStogu.filter(
      (araba) => araba.name.includes(marka) && araba.year === yil
    );
  
    if (filtrelenmisArabalar.length === 0) {
      return `Model yılı ${yil} olan ${marka} marka araba stoklarda bulunamamıştır!`;
    }
  
    const toplamAdet = filtrelenmisArabalar.length;
    const toplamPiyasaDegeri = filtrelenmisArabalar.reduce(
      (toplam, araba) => toplam + araba.selling_price,
      0
    );
  
    return `Model yılı ${yil} olan ${marka} marka ${toplamAdet} arabanın toplam piyasa değeri ${toplamPiyasaDegeri} TL'dir.`;
  }