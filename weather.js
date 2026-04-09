const searchInput = document.querySelector('.search-input');
const searchIcon = document.querySelector('.search-icon');

const apiKey = '1c95139e8fe15a7afb49de020f701cfd'
const weatherInfo = document.querySelector('.weather-info')
const notFound = document.querySelector('.not-found-section')
const searchCity = document.querySelector('.search-city-section')

const countryTxt = document.querySelector('.country-txt')
const tempTxt = document.querySelector('.temp-txt')
const humidityValue = document.querySelector('.humidity-value')
const windValue = document.querySelector('.wind-value')
const cloudsBold = document.querySelector('.clouds-bold')
const weatherSummaryImage = document.querySelector('.clear-sky')


searchIcon.addEventListener('click', () => {
    if (searchInput.value.trim() !== '') {
        (updateWeatherInfo(searchInput.value));
        searchInput.value = '';
        searchInput.blur();
    }
})

searchInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' && searchInput.value.trim() !== '') {
        (updateWeatherInfo(searchInput.value));
        searchInput.value = '';
        searchInput.blur();
    }
})

async function getFetchData(endPoint, city){
    const apiUrl = `https://api.openweathermap.org/data/2.5/${endPoint}?q=${city}&appid=${apiKey}&units=metric`

    const response = await fetch(apiUrl)

    return response.json()
}

function getWeatherIcon(id){
    if (id <= 232) return 'thunder-sky.png'
    if (id <= 321) return 'drizzle.png'
    if (id <= 531) return 'rainy-sky.png'
    if (id <= 622) return 'snowy-sky.png'
    if (id <= 781) return 'foggy-sky.png'
    if (id <= 800) return 'clear-sky.png'
    else return 'cloudy-sky.png'
}


async function updateWeatherInfo(city){
    const weatherData = await getFetchData('weather', city)
    
    if (weatherData.cod !== 200){
        showDisplaySection(notFound)
        return
    }
    console.log(weatherData)

    const {
        name: country,
        main: {temp, humidity},
        weather: [{id, main}],
        wind: {speed}
        
    } = weatherData

    countryTxt.textContent = country
    tempTxt.textContent = Math.round(temp) + '°C'
    cloudsBold.textContent = main
    humidityValue.textContent = humidity + '%'
    windValue.textContent = speed + ' M/s'
    
    weatherSummaryImage.src = `dynamic-icons/${getWeatherIcon(id)}`

    showDisplaySection(weatherInfo)

}

function showDisplaySection(section) {
    [weatherInfo, searchCity, notFound].forEach(section => section.style.display = 'none')

    section.style.display = 'block'

}