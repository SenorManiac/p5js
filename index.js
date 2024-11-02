const key = '4PLBY2X7A4A532Z6USJEJS8HZ'
const submit = document.getElementById('submit')


async function retrieveWeather() {
    let city = document.getElementById('city').value
    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=${key}`
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
    displayWeather(data)
}

function displayWeather(data) {
    let input = document.getElementById('city')
    let city = data.resolvedAddress
    let weather = data.days[0].conditions
    let temp = data.days[0].temp
    let humidity = data.days[0].humidity
    let wind = data.days[0].windspeed
    let weatherDisplay = document.getElementById('weather-display')
    weatherDisplay.innerHTML = `<h2>${city}</h2>
                                <p>Weather: ${weather}</p>
                                <p>Temperature: ${temp}°F</p>
                                <p>Humidity: ${humidity}%</p>
                                <p>Wind: ${wind} km/h</p>`
    input.value = city
}

function checkSubmitValue(e) {
    let city = document.getElementById('city').value
    let cityError = document.getElementById('city')
    if (city === '') {
        cityError.style.border = '2px solid red'
        e.preventDefault()
        return false
    } else {
        cityError.style.border = 'none'
        return true
    }

}
submit.addEventListener('click', e => {
    if (checkSubmitValue(e) === false) {    
        return
    } else {
        retrieveWeather()
    }
})
