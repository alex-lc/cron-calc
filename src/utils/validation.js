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

function validateMonth(month) {

}

function validateDayOfWeek(dayOfWeek) {

}

console.log(validateMinutes(60))