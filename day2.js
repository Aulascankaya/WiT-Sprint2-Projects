// DAY 2

/* Create a function that takes a car as an object 
and renders its properties as text in a certain format*/

function convertToSentence(car) {
    const uretimYili = new Date().getFullYear() - car.yas;
    const sentence = `${uretimYili} yılında trafiğe çıkışlı ${car.marka} ${
      car.model
    } model arabanın ${car.vites.toLowerCase()} vitesi var ve ${car.yakit.toLowerCase()} ile çalışmaktadır. Güncel satış fiyatı ${
      car.fiyat
    } TL'dir.`;
  
    return sentence;
  }


  /*Write a function that generates a random team score.
   A team can score between 10-25 points in a period.*/

   const takimPeriyotSkoru = () => {
    return Math.floor(Math.random() * 16) + 10;
  };


  /*A function that produces the match score*/


  const takimSkoru = () => {
    return Math.floor(Math.random() * 16) + 10;
   
  };
  
  function macSkoru(takimSkoru, period = 4) {
    let evSahibiSkor = 0;
    let deplasmanSkor = 0;
  
    for (let i = 0; i < period; i++) {
      evSahibiSkor += takimSkoru();
      deplasmanSkor += takimSkoru();
    }
    return { evSahibiTakim: evSahibiSkor, deplasmanTakimi: deplasmanSkor };
    
  }
  

  /*An application that gives the summary of the match in sentences*/

  const macOzeti = (evSahibiTakim, deplasmanTakimi) => {
    const periyotlar = [];
    let evSahibiSkor = 0;
    let deplasmanSkor = 0;
  
    for (let i = 1; i <= 4; i++) {
      const evSahibiPeriyotSkoru = Math.floor(Math.random() * 15) + 12; // 12-26 arasında rastgele bir sayı üretir
      const deplasmanPeriyotSkoru = Math.floor(Math.random() * 15) + 12;
  
      evSahibiSkor += evSahibiPeriyotSkoru;
      deplasmanSkor += deplasmanPeriyotSkoru;
  
      periyotlar.push(
        `${i}. Periyot: ${evSahibiTakim} ${evSahibiPeriyotSkoru} - ${deplasmanTakimi} ${deplasmanPeriyotSkoru}`
      );
    }
  
    let macSonucu = '';
  
    if (evSahibiSkor > deplasmanSkor) {
      macSonucu = `Maç Sonucu: ${evSahibiTakim} ${evSahibiSkor} - ${deplasmanSkor} kazandı`;
    } else if (evSahibiSkor < deplasmanSkor) {
      macSonucu = `Maç Sonucu: ${evSahibiTakim} ${evSahibiSkor} - ${deplasmanSkor} kaybetti`;
    } else {
      macSonucu = `Maç ${evSahibiSkor} - ${deplasmanSkor} ile uzatmalara gitti`;
    }
  
    periyotlar.push(macSonucu);
  
    return periyotlar;
  };