let visibility = false
const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
let dailyForecast = []
let nextDaysArr = []
let shownData = "days"
let currentDate = new Date()
let monthCounter = currentDate.getMonth()
let yearCounter = currentDate.getFullYear()
const months = ['January','February','March','April','May','June','July','August','September','October','November','December']
let monthDays
let calDays = []
let daysToDisplay = []

//Clock widget
const dateAndTimeWidget = () => {
    
    let date = new Date()
    let hour = date.getHours()
    let minutes = date.getMinutes()
    
    let day = days[date.getDay()]
    let todayDate = date.getDate()
    let month = date.getMonth() + 1
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


//Weather widget
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
                <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}.png" class="weather_icon" alt="">
                <img src="https://img.icons8.com/ultraviolet/40/000000/refresh--v1.png" class="refresh_btn" onclick="getGeoLocation()"/>
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

    setTimeout(() => {
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
                        <img src="https://openweathermap.org/img/wn/${forecast.weather[0].icon}.png"/>
                        <p>${Math.round(forecast.main.temp_max)} / ${Math.round(forecast.main.temp_min)} °C</p>
                    </div>
                `
        })
    })}, 1000);
}


//Calendar Widget




const getMonthDays = (month) => {
    let days
        if( month == "January" || month == "March" || month == "May" || month == "July" || month == "August" || month == "October" || month == "December") {
        days = 31
    } else{
        days = 30
    }
    if (month == "February"){
        if(yearCounter % 4 == 0){
            days = 29
        } else {
            days = 28
        }
    }
    return days
}
const getMissingDays = (firstDay) => {
let missingDays
let weekdays = 7
let difference = weekdays - firstDay + 1
if(difference == 8){
    difference = difference - 7
}
missingDays = weekdays - difference

return missingDays
}  
const monthToShow = (date) => {
    let isActualDate
    let controlDate = new Date()
    if (
        date.getDate() == controlDate.getDate() &&
        date.getMonth() == controlDate.getMonth() &&
        date.getFullYear() == controlDate.getFullYear()            
    ){
        isActualDate = true
    } else {
        isActualDate = false
    }
    let month = months[date.getMonth()]
    let monthDays = getMonthDays(month)
    console.log(monthDays)
    let year = date.getFullYear()
    let todayDate = date.getDate()
    let firstDayofMonthRaw = new Date(`${month} 1, ${year}`).getDay()
    let lastMonth = date.getMonth() - 1
    let LastMonthDays = getMonthDays(lastMonth)
    
    daysToDisplay = []
    // let nextMonth = date.getMonth() + 1
    let counter = 0
    daysToDisplay.push(`<tr>`)
    let missingDaysLastMonth = getMissingDays(firstDayofMonthRaw)
    let firstDayOfWeek = LastMonthDays - missingDaysLastMonth
    for ( let i = 0; i < missingDaysLastMonth; i++) {
        
        daysToDisplay.push(`<td>${firstDayOfWeek}</td>`)
        firstDayOfWeek++
        counter ++
    }
    for(let i = 0; i < monthDays; i++) {
        if(counter % 7 == 0){
            daysToDisplay.push(`</tr><tr>`)
        }
        if(isActualDate){
            if(i == todayDate - 1){
            daysToDisplay.push(`<td class="today">${i + 1}</td>`)
            }else {
            daysToDisplay.push(`<td class="actual_month">${i + 1}</td>`)
            } 
        } else {
            daysToDisplay.push(`<td>${i + 1}</td>`)
        }
        counter++
    } 
    let leftover =  42 - counter
    for(let i = 0; i < leftover; i++){
        if(counter % 7 == 0){
            daysToDisplay.push(`</tr><tr>`)
        }
        daysToDisplay.push(`<td>${i + 1}</td>`)
        counter++
    }
    daysToDisplay.push(`</tr>`)
    $("#table_body").html(daysToDisplay)
}


const setMonthToCalendar = (index) => {
    
    let calendarDate = document.querySelector('.calendar_date')
    $("#table_body").hide()
    monthCounter = index
    monthToShow(new Date(`${months[monthCounter]} 1, ${yearCounter}`))
    calendarDate.innerHTML = `${months[monthCounter]} ${yearCounter}`
    $("#table_body").fadeIn(300)
    $("#table_header").fadeIn(300)

    
    shownData = "days"
    console.log(shownData)
}
const displayMonths = () => {

    let tableMonths = []
    let counter = 0
    tableMonths.push(`<tr>`)
    months.map((month,index) => {
        if(counter % 3 == 0) {
            tableMonths.push(`</tr><tr>`)
        }
        tableMonths.push(`<td onclick="setMonthToCalendar(${index})">${month.slice(0, 3)}</td>`)
        counter++
    })
    tableMonths.push(`</tr>`)
    console.log(tableMonths)
    $("#table_header").hide()
    $("#table_body").hide()
    document.querySelector("#table_body").innerHTML = tableMonths.join('')
    $("#table_body").fadeIn(300)
    
}
    
const jumpUp = () => {
    
    let calendarDate = document.querySelector('.calendar_date')
    if (shownData == "days") {
        shownData = "months"
        calendarDate.innerHTML = `${yearCounter}`
        displayMonths()
    } else if ( shownData == "months"){
        // shownData = "years"
    }
    console.log(shownData)

}
//display current month


days.map(day => {
    calDays.push(`<th>${day.slice(0, 2)}</th>`)
})

calDays.push(calDays.shift())
$(".widget.calendar").hide()

$(".widget.calendar").html(`
    <div class="calendar_header">
        <p class="calendar_date" onclick="jumpUp()">${months[monthCounter]} ${yearCounter}</p>
        <div class="buttons">
            <img class="last_month" src="https://img.icons8.com/ios-filled/50/ffffff/chevron-up.png"/>
            <img class="next_month" src="https://img.icons8.com/ios-filled/50/ffffff/chevron-down.png"/>
        </div>
    </div>        
    <table>
        <thead id="table_header">
        </thead>
        <tbody id="table_body">
        </tbody>
    </table>
    
`)
document.querySelector("thead").innerHTML += calDays.join('')
    
//function to change the month
$(".last_month").click(() => {

    
    let calendarDate = document.querySelector('.calendar_date')
    $("#table_body").hide()
    $("#table_header").hide()

    if(shownData == "days") {
        monthCounter --
        if(monthCounter == -1) {
            yearCounter--
            monthCounter = 11
        }
        calendarDate.innerHTML = `${months[monthCounter]} ${yearCounter}`
        monthToShow(new Date(`${months[monthCounter]} 1, ${yearCounter}`))
         $("#table_header").fadeIn(300)
    } else if (shownData == "months") {
        yearCounter--
        calendarDate.innerHTML = `${yearCounter}` 
    }
    
    $("#table_body").fadeIn(300)
   
})
$(".next_month").click(() => {
    
    let calendarDate = document.querySelector('.calendar_date')
    $("#table_body").hide()
    $("#table_header").hide()

    if(shownData == "days") {
        monthCounter ++
        if(monthCounter == 12) {
            yearCounter++
            monthCounter = 0
        }
        calendarDate.innerHTML = `${months[monthCounter]} ${yearCounter}`
        monthToShow(new Date(`${months[monthCounter]} 1, ${yearCounter}`))
        $("#table_header").fadeIn(300)
    }else if (shownData == "months") {
        yearCounter++
        calendarDate.innerHTML = `${yearCounter}` 
    }
    
    $("#table_body").fadeIn(300)
    
})

//Generating
getNextDaysArr()
getGeoLocation()
dateAndTimeWidget()
setInterval(tiktak, 1000)
monthToShow(currentDate, true)


// Loading widgets with delay
setTimeout(() => {
    $(".widgets .weather").fadeIn(400)
}, 2000);
setTimeout(() => {
    $(".widgets .clock").fadeIn(400)
}, 2500);
setTimeout(() => {
    $(".widgets .calendar").fadeIn(400)
}, 3000);
