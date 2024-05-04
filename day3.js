// DAY 3

/* With the World Cup approaching, you wondered about the total goals scored in the finals.*/

const { fifaData } = require('./fifa.js'); // 

const finaller = (fifaData) => {
  const finalMac = fifaData.filter((mac) => mac.Stage == 'Final');

  let toplamGol = 0;

  finalMac.forEach(
    (gol) => (toplamGol += gol['Home Team Goals'] + gol['Away Team Goals'])
  );

  return `2014 yılında kadar finallerde ${toplamGol} gol atılmıştır.`;
  
};


/*You wondered about the winning teams in the finals by year.*/

const { fifaData } = require('./fifa.js');

const kazananlar = (fifaData) => {
  const finalMatchs = fifaData.filter((mac) => mac.Stage == 'Final');
  const sonuc = [];

  finalMatchs.forEach((gol) => {
    if (gol['Home Team Goals'] > gol['Away Team Goals']) {
      sonuc.push(`${gol['Year']} kazananı ${gol['Home Team Name']}`);
    } else {
      sonuc.push(`${gol['Year']} kazananı ${gol['Away Team Name']}`);
    }
  });
  return sonuc;
};

/*Average Number of Goals Scored in World Cup Matches*/

const { fifaData } = require('./fifa.js');

const ortalamaGol = (fifaData) => {
  const toplamGol = fifaData.reduce((toplam, mac) => {
    return toplam + (mac['Home Team Goals'] + mac['Away Team Goals']);
  }, 0);
  let ortalama = toplamGol / fifaData.length;

  return ortalama.toFixed(2);
};


/*calculate how many times digits are used in a number*/


const rakamlar = (sayi) => {
    const rakamSayilari = {};
  
    const sayiStr = sayi.toString();
    for (let rakam of sayiStr) {
      rakamSayilari[rakam] = rakamSayilari[rakam] ? rakamSayilari[rakam] + 1 : 1;
    }
  
    return rakamSayilari;
  };


  /*The team that scored the most goals in the World Cup finals*/

  const { fifaData } = require('./fifa.js');

const finallerdekiGolSayilari = (fifaData) => {
  const obj = {};
  fifaData
    .filter((mac) => mac.Stage == 'Final')
    .forEach((sayı) => {
      obj[sayı['Home Team Name']] =
        (obj[sayı['Home Team Name']] || 0) + sayı['Home Team Goals'];
      obj[sayı['Away Team Name']] =
        (obj[sayı['Away Team Name']] || 0) + sayı['Away Team Goals'];
    });
  return obj;
  
};
