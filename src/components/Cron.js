
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
    else if (minute === "*" || hour === "*") {
        return (
            <div>
                {minute === "*" ? `Every minute` : `At minute ${minute}` }

                {hour === "*" ? ` every hour` : ` past hour ${hour}`}

                {dayOfTheMonth === "*" ? ` every day` : ` on day of month ${dayOfTheMonth}`}

                {dayOfTheWeek === "*" ? null : ` and on ${dayOfTheWeek}`}

                {month === "*" ? ` of every month` : ` in ${month}`}
            </div>
        )
    }

    if (minute === "*" && hour === "*" && dayOfTheMonth === "*" && month === "*" && dayOfTheWeek === "*") {
        return <p>Every minute</p>
    }

    return (
        <div>
            {minute} {hour} {dayOfTheMonth} {month} {dayOfTheWeek}
        </div>
    )
}
