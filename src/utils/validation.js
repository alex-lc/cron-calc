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

export function validateHours(hours) {
  // a valid hour between 0 and 24
  if (Number(hours) >= 0 && Number(hours) <= 23) {
    return hours
  } 
  // a double digit month is entered with a leading 0 - 01-09
  if (hours.length === 2 && hours[0] === "0") {
    console.log("We have a leading 0.")
    if (Number(hours[1]) <= 9 && Number(hours[1] >= 1)) {
        return hours[1]
    }
  }

  return false
}

export function validateDayOfMonth(dayOfMonth) {
  // default *
  if (dayOfMonth === "*" || dayOfMonth === "") {
    return dayOfMonth
  }
  // a valid day between 1 and 31 is entered
  if (Number(dayOfMonth) >= 1 && Number(dayOfMonth) <= 31) {
    return dayOfMonth
  }

  return false
}

export function validateMonth(month) {
    // default *
    if (month === "*" || month === "") {
        return month
    }
    // a single digit month is entered
    if (month.length === 1 && (Number(month) >= 1 && Number(month) <= 9)) {
        return month
    }
    // a double digit month is entered with a leading 0 - 01-09
    if (month.length === 2 && month[0] === "0") {
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