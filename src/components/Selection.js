// Input for setting up cron job

import { useState } from 'react'

// data
import { months } from '../data/data'

// validation
import { validateMonth, validateMinutes } from '../utils/validation'

const Selection = () => {

    const [cron, setCron] = useState({
        minute: "*",
        hour: "*",
        dayOfTheMonth: "*",
        month: "*",
        dayOfTheWeek: "*"
    })

    const updateValue = (e) => {
        if (e.target.name === "minute") {
            console.log("Editing minute field...")

            let status = validateMinutes(e.target.value)

            if (status !== false) {
                console.log("Valid minute entered.")
                setCron({
                    ...cron,
                    [e.target.name]: e.target.value
                })
            }
            else {
                console.log("Please enter a valid minute.")
                setCron({
                    ...cron,
                    [e.target.name]: false
                })
            }
        }

        // validate month input
        if (e.target.name === "month") {
            let status = validateMonth(e.target.value)
            
            if (status !== false) {
                let m = months[status]
                console.log("M: ", m)
                setCron({
                    ...cron,
                    [e.target.name]: m
                })
            }
            else {
                console.log("Please enter a valid month.")
                setCron({
                    ...cron,
                    [e.target.name]: '!'
                })
            }
        }
    }

    const submitCron = (data) => {
        setCron({
            ...cron,
            data
        })
    }
    
    return (
        <div className="flex flex-col bg-purple-900 text-white">
                <div>
                    {cron.minute !== false && cron.minute !== "*" && <p>At minute {cron.minute}</p>}
                    {cron.minute === "*" || cron.minute === "" && <p>*</p>}
                    {cron.minute === false && <p>!</p>}

                    {cron.hour === 0 && <p>0 hour</p>}
                    {cron.hour !== 0 && <p>{cron.hour} hour</p>}

                    {cron.dayOfTheMonth === 0 && <p>no day of the month</p>}
                    {cron.dayOfTheMonth !== 0 && <p>{cron.dayOfTheMonth}</p>}

                    {cron.month === 0 && <p>*</p>}
                    {cron.month !== 0 && <p>in {cron.month}</p>}

                    {cron.dayOfTheWeek === 0 && <p>no day of the week</p>}
                    {cron.dayOfTheWeek !== 0 && <p>{cron.dayOfTheWeek}</p>}
                </div>
                <div className="container mx-auto bg-purple-50">
                    <form>
                        <div className="flex">
                            <input type="text" name="minute" onChange={updateValue} placeholder="*" />
                            <input type="text" name="hour" onChange={updateValue} placeholder="*" />
                            <input type="text" name="dayOfTheMonth" onChange={updateValue} placeholder="*" />
                            <input type="text" name="month" onChange={updateValue} placeholder="*" />
                            <input type="text" name="dayOfTheWeek" onChange={updateValue} placeholder="*" />
                        </div>
                        <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded" type="submit">CRON</button>
                    </form>
                </div>
        </div>
    )
}

export default Selection