const apikey = "efde5c7d126f207c5c2f7305a2425248"

const form1 = document.querySelector("#WeatherFore")
let city_name = form1.addEventListener("submit", (event)=> {
    event.preventDefault();
    weather_data = document.querySelector("#weather").value.toLowerCase()
    displayWeather(weather_data)
})

let getWeather = async (city_name) => {
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city_name}&units=imperial&appid=${apikey}`)
    const data = await res.json()
    console.log(data)
    return data
}
const displayWeather = async (city) => {
    const data = await getWeather(city);
    // createTemplate(data.name, data.weather[0].description, data.main.temp)
    createDisplay(data.name, data.weather[0].description, data.main.temp, data.weather[0].icon, data.main.humidity, data.main.temp_max, data.main.temp_min)
    // "https://openweathermap.org/img/wn/11d${icon}.png"


}

const createDisplay =(name, forecast, temp, iconimage, humidity, maxtemp, mintemp) => {
    const list = `
        <h3 class = "city">${name}</h3>
        <div class = "description">${forecast}</div>
        <h1 class = "temp">${temp} °F</h1>
        <img src="https://openweathermap.org/img/wn/${iconimage}.png" alt="" class="icon">
        <h6 class = "humidity">Humidity:    ${humidity}%</h6>
        <h6 class = "tempmax">H :   ${maxtemp} °F</h6>
        <h6 class = "tempmin">L :   ${mintemp} °F</h6>
        
    `
    document.querySelector(".city-weather").insertAdjacentHTML('afterbegin', list)
}

// const clear_button = document.getElementById("clear-button")
// clear_button.addEventListener("click", ()=>{clearData()})
// const clearData = () => {
//     document.querySelector(".city-weather").innerHTML = '';

// }

