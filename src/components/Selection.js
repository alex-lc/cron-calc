// Input for setting up cron job

import { useState } from 'react'

// data
import { months } from '../data/data'

const Selection = () => {

    const [cron, setCron] = useState({
        minute: 0,
        hour: 0,
        dayOfTheMonth: 0,
        month: 0,
        dayOfTheWeek: 0
    })

    const updateValue = (e) => {
        if (e.target.name === "minute") {
            console.log("Editing minute field...")

            if (e.target.value > 59) {
                console.log("Invalid value. It cannot be greater than 59.")
                setCron({
                    ...cron,
                    [e.target.name]: e.target.value
                })
            }
            else {
                console.log("Valid minute value: " + e.target.value)
            }
        }

        if (e.target.name === "month" && (e.target.value <= 12 && e.target.value >= 1)) {
            console.log("Valid month. Grabbing month...")
            console.log(`You selected ${months[e.target.value]}!`)

            setCron({
                ...cron,
                [e.target.name]: e.target.value
            })
        }
        else {
            console.log("Invalid month. It must be between 1 and 12.")
        }
        // setCron({
        //     ...cron,
        //     [e.target.name]: e.target.value
        // })
    }

    const submitCron = (data) => {
        setCron({
            ...cron,
            data
        })
    }
    
    return (
        <div>
            <div>
                <div>
                    {cron.minute === 0 && <p>0 minute</p>}
                    {cron.minute !== 0 && <p>{cron.minute} minutes</p>}

                    {cron.hour === 0 && <p>0 hour</p>}
                    {cron.hour !== 0 && <p>{cron.hour} hour</p>}

                    {cron.dayOfTheMonth === 0 && <p>no day of the month</p>}
                    {cron.dayOfTheMonth !== 0 && <p>{cron.dayOfTheMonth}</p>}

                    {cron.month === 0 && <p>no month selected</p>}
                    {cron.month !== 0 && <p>{cron.month}</p>}

                    {cron.dayOfTheWeek === 0 && <p>no day of the week</p>}
                    {cron.dayOfTheWeek !== 0 && <p>{cron.dayOfTheWeek}</p>}
                </div>
                <form>
                    <input type="text" name="minute" onChange={updateValue} placeholder="*" />
                    <input type="text" name="hour" onChange={updateValue} placeholder="*" />
                    <input type="text" name="dayOfTheMonth" onChange={updateValue} placeholder="*" />
                    <input type="text" name="month" onChange={updateValue} placeholder="*" />
                    <input type="text" name="dayOfTheWeek" onChange={updateValue} placeholder="*" />
                    <button type="submit">CRON</button>
                </form>
            </div>
        </div>
    )
}

export default Selection