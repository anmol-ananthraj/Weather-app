const searchInput = document.querySelector('.search-input');
const searchIcon = document.querySelector('.search-icon');

const apiKey = '1c95139e8fe15a7afb49de020f701cfd'

searchIcon.addEventListener('click', () => {
    if (searchInput.value.trim() !== '') {
        console.log(updateWeatherInfo(searchInput.value));
        searchInput.value = '';
        searchInput.blur();
    }
})

searchInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' && searchInput.value.trim() !== '') {
        console.log(updateWeatherInfo(searchInput.value));
        searchInput.value = '';
        searchInput.blur();
    }
})

async function getFetchData(endPoint, city){
    const apiUrl = `https://api.openweathermap.org/data/2.5/${endPoint}?q=${city}&appid=${apiKey}`

    const response = await fetch(apiUrl)

    return response.json()
}


async function updateWeatherInfo(city){
    const weatherData = await getFetchData('weather', city)
    
    console.log(weatherData)

}