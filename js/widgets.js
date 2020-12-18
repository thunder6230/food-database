let visibility = false
const days = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']
let dailyForecast = []
let nextDaysArr = []


const dateAndTimeWidget = () => {
    
    
    let date = new Date()
    let hour = date.getHours()
    let minutes = date.getMinutes()
    
    let day = days[date.getDay() - 1]
    let todayDate = date.getDate()
    let month = date.getMonth()
    let year = date.getFullYear()
    let interval = 60000 - date.getSeconds() * 1000
    let doublecolon = `<span>:</span>`
    minutes = minutes < 10 ? `0${minutes}` : minutes
    
    $(".current_time").html(`${hour} ${doublecolon} ${minutes}`)
    $(".current_date").html(`${day}, ${todayDate}. ${month}. ${year}`)
    
    

    setInterval(dateAndTimeWidget, interval);
}


const tiktak = () => {
    visibility = !visibility
    if(visibility) {
        $(".current_time span").css("visibility", "visible")
    }else {
        $(".current_time span").css("visibility", "hidden")
    }
}

const getNextDaysArr = () => {
    let date = new Date()
    let today = date.getDay()
    for ( let i = 0; i < 3; i++) {
        if(i == 0) {
           nextDaysArr.push("Tomorrow")

        } else {
            if(days[today] == undefined){
                today = today-7
            }
            nextDaysArr.push(days[today])
        }
        today++
    }
}


const getGeoLocation = () => {
  
    const succesCallback = (pos) => {
        let lat = pos.coords.latitude
        let lon = pos.coords.longitude
        getWeather(lat, lon)
    }

    const errorCallback = (error) => {
        console.error(`Error: ${error.code}: ${error.message}`)
    }
    //get current location
    navigator.geolocation.getCurrentPosition(succesCallback , errorCallback)
    
}

const getWeather = (lat, lon) => {
    
    let key = '7d427ae79bf8f5a26954295a12ca5c14'
    // let url = `api.openweathermap.org/data/2.5/weather?q=Vienna&appid=${key}`
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&units=metric`

    $.get(url, {
        format: "json"
    }).done((data) => {
        $(".widget.weather").html(`
            <img class="bg_image" src="/images/widget/badacsony.jpg" alt="weather">
            <div class="widget_header">
                <h1>${data.name}, ${data.sys.country}</h1>
                <h1>${Math.round(data.main.temp)} °C</h1>
                <img src="http://openweathermap.org/img/wn/${data.weather[0].icon}.png" alt="">
            </div>
            <div class="details">
                <div>
                    <p>Feels Like:</p>
                    <p>${data.main.feels_like}  °C</p>
                </div>
                <div>
                    <p>Humidty:</p>
                    <p>${data.main.humidity} %</p>
                </div>
                <div>
                    <p>Pressure:</p>
                    <p>${data.main.pressure} hPa</p>
                </div>
            </div>
            <div class="widget_forecast"></div>
        `)
    })
    url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${key}&units=metric&cnt=24`
    $.get(url, {
        format: "json"
    }).done((data) => {
        data.list.map((forecast,index) => {
            if (index % 8 == 0) {
                dailyForecast.push(forecast)
            }
        })
        dailyForecast.map( (forecast,index) => {
        
        document.querySelector(".widget_forecast").innerHTML += `
                    <div>
                        <p>${nextDaysArr[index].toUpperCase()}</p>
                        <img src="http://openweathermap.org/img/wn/${forecast.weather[0].icon}.png"
                        <p>${Math.round(forecast.main.temp_max)} / ${Math.round(forecast.main.temp_min)} °C</p>
                    </div>
                `
    })
})
    
    
}
getNextDaysArr()
getGeoLocation()
dateAndTimeWidget()
setInterval(tiktak, 1000)