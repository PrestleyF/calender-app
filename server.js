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

generateCalender = (month, year) =>{
    let calender_days = document.querySelector('.caleder-days')
    let calender_header_year = document.querySelector('#year')
    let days_of_month = 
}