const figlet = require('figlet');
const colors = require('colors/safe');
const axios = require('axios');
figlet.text('Your result : ',function (error, data) { if (error) console.error(error); else console.log(data);});

console.log('--------------------------------------------------------------------------');


async function getStrHero() {
    try { 
    
    const response = await axios.get('https://api.binance.com/api/v3/depth?symbol=BTCUSDT&limit=20')
        
        const resultResponce = response.data;

        [...resultResponce.asks].slice(0,10).reverse().forEach(item => console.log(colors.red(item[0],item[1])));
        //resultResponce.asks.slice(0,10).map(item => console.log(colors.red(item[0],item[1]))).reverse();

        resultResponce.bids.slice(0,10).forEach(item => console.log(colors.green(item[0],item[1])));

        console.log('--------------------------------------------------------------------------');

    } catch (error) {
      console.error(error);
    }
}

getStrHero();
