const axios = require('axios');

async function getStrHero() {
    try {
    
    const response = await axios.get('https://api.opendota.com/api/heroes')
        .then((response)=> response.data.filter(item => item['primary_attr'] == 'str'));
        console.log(response);

    } catch (error) {
      console.error(error);
    }
}

getStrHero();
