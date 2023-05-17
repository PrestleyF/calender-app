document.querySelector('.dark-mode-switch').onclick = () =>{
    document.querySelector('body').classList.toggle('dark')
    document.querySelector('body').classList.toggle('light')
}

isleapYear = (year) =>{
    return (year % 4 === 0 && year % 100!== 0 && year % 400!==0) || ( year % 100 === 0 && year % 400 === 0)
}

getFebDays = (year) =>{
    return isleapYear(year)? 29 : 28
}

let calender = document.querySelector('.calender')

const month_names = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
let month_picker = document.querySelector('#month-picker')

generateCalender = (month, year) =>{
    let calender_days = document.querySelector('.calender-days')

    calender_days.innerHTML = ''

    let calender_header_year = document.querySelector('#year')

    let days_of_month = [31, getFebDays(year), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

    let currentDate = new Date()

    month_picker.innerText = month_names[month]
    calender_header_year.innerHTML = year

    let first_day = new Date(year, month,1)

    calender_header_year.innerText = year

    for(let i= 0; i <= days_of_month[month] + first_day.getDay() - 1; i++){
           let day = document.createElement('div')
           if(i >= first_day.getDay()){
            day.classList.add('calender-day-hover')
            day.innerHTML = i - first_day.getDay() + 1
            day.innerHTML += `<span></span>
                              <span></span>
                              <span></span>
                              <span></span>`
            if( i - first_day.getDay() + 1 === currentDay.getDay() && currentDate.getFullYear() && month === currentDate.getMonth()){}
                 day.classList.add('curr-date')
           } 
           calender_days.appendChild(day)
    }

 }
let currentDate = new Date()

let currentMonth = {value:currentDate.month()}
let currentYear = {value:currentDate.getFullYear()}

generateCalender(currentMonth.value, currentYear.value)




































