
export default function Cron({ minute, hour, dayOfTheMonth, month, dayOfTheWeek }) {
    if (minute !== "*" && hour !== "*") {
        return (
            <div>
                {hour}:{minute}

                {dayOfTheMonth === "*" ? ` every day` : ` on day of month ${dayOfTheMonth}`}

                {dayOfTheWeek === "*" ? null : ` and on ${dayOfTheWeek}`}

                {month === "*" ? ` of every month` : ` in ${month}`}

            </div>
        )
    }

    return (
        <div>
            {minute} {hour} {dayOfTheMonth} {month} {dayOfTheWeek}
        </div>
    )
}
