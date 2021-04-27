/* Validate input when user is selecting cron job */

function validateMinutes(minutes) {

    let allowedStringValues = ["*", "/", ","]
    
    // only wildcard should be accepted as a string
    if (typeof minutes === "string") {
        // string value combos
    }
    // numbers should be between 0 and 59 inclusive
    else if (typeof minutes === "number" && (minutes < 0 || minutes > 59)) {
        return false
    }
    
    return true;
}

function validateHours(hours) {

}

function validateDayOfMonth(dayOfMonth) {

}

export function validateMonth(month) {
    if (month.length < 2) {
        if (Number(month) <= 9 && Number(month) >= 1) {
            let formatMonth = "0" + month
            
            return formatMonth
        }
    }
    if (month.length === 2) {
      if (Number(month) <= 12) {
        return month
      }
    }

    return false
}

function validateDayOfWeek(dayOfWeek) {

}