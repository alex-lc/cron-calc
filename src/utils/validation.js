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