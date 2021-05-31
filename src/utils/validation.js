/* Validate input when user is selecting cron job */

export function validateMinutes(minutes) {
    let step = false
  
    if (minutes.includes("/") === true) {
      step = true
    }
    else {
      if (minutes !== "*") {
        let num = Number(minutes)
  
        if ((num <= 59 && num >= 0)) {
          return num
        }
      }
      
      if (minutes === "*") {
        return minutes
      }
  
      return false
    }
}

function validateHours(hours) {

}

function validateDayOfMonth(dayOfMonth) {

}

export function validateMonth(month) {
    // default *
    if (month === "*" || month === "") {
        console.log("Asterisk identified successfully.")
        console.log(`Month is ${month}`)
        return month
    }
    // a single digit month is entered
    if (month.length === 1 && (Number(month) >= 1 && Number(month) <= 9)) {
        return month
    }
    // a double digit month is entered with a leading 0 - 01-09
    if (month.length === 2 && month[0] === "0") {
        console.log("We have a leading 0.")
        if (Number(month[1]) <= 9 && Number(month[1] >= 1)) {
            return month[1]
        }
    }
    // a double digit month is entered - 10-12
    if (month.length === 2) {
      if (Number(month) <= 12) {
        return month
      }
    }

    return false
}

function validateDayOfWeek(dayOfWeek) {

}