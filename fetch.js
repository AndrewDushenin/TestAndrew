const url = "https://api.opendota.com/api/heroes";

async function fetchHandler() {

try {
    const response = await fetch(url);
    const data =  await response.json();
    console.log(data.filter(item => item['primary_attr'] == 'str'));

} catch (error) {
    console.log(error);
}

}

fetchHandler();