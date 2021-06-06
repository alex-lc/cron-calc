import { useState, useEffect } from 'react'

export default function Cron({ minute, hour, dayOfTheMonth, month, dayOfTheWeek }) {

    const [minuteString, setMinuteString] = useState("")
    const [hourString, setHourString] = useState("")
    const [dayOfTheMonthString, setDayOfTheMonthString] = useState("")
    const [monthString, setMonthString] = useState("")
    const [dayOfTheWeekString, setDayOfTheWeekString] = useState("")

    useEffect(() => {
        if (dayOfTheMonth === "*") {
            setDayOfTheMonthString(" every day")
        }
        else {
            setDayOfTheMonthString(` on day of the month ${dayOfTheMonth}`)
        }
    
        if (dayOfTheWeek === "*") {
            setDayOfTheWeekString("")
        }
        else {
            setDayOfTheWeekString(` and on ${dayOfTheWeek}`)
        }
    
        if (month === "*") {
            setMonthString(" of every month")
        }
        else {
            setMonthString(` in ${month}`)
        }

        if (minute === "*" && hour !== "*") {
            setHourString(` hour ${hour}`)
        }

        if (hour === "*" && minute !== "*") {
            setMinuteString(`At minute ${minute}`)
        }
    }, [minute, hour, dayOfTheMonth, dayOfTheWeek, month])

    if (minute === "*" || hour === "*") {
        if (minute !== "*" && hour === "*") {
            return (
                <div>
                    <p>At minute {minute} {dayOfTheMonthString} {dayOfTheWeekString} {monthString}</p>
                </div>
            )
        }
        else if (minute === "*" && hour !== "*") {
            return (
                <div>
                    <p>At every minute past {hourString} {dayOfTheMonthString} {dayOfTheWeekString} {monthString}</p> 
                </div>
            )
        }
    }

    if (minute === "*" && hour === "*" && dayOfTheMonth === "*" && dayOfTheWeek === "*" && month === "*") {
        return (
            <div>
                <p>Every minute</p>
            </div>
        )
    }

    return (
        <div>
            <p>{minuteString} {hourString} {dayOfTheMonthString} {monthString} {dayOfTheWeekString} {monthString}</p>
        </div>
    )
}
