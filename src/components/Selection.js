// Input for setting up cron job

import { useState, useEffect } from 'react'

// data
import { months } from '../data/data'

// validation
import { validateMonth, validateMinutes, validateHours } from '../utils/validation'

const Selection = () => {

    const [cron, setCron] = useState({
        minute: "",
        hour: "",
        dayOfTheMonth: "",
        month: "",
        dayOfTheWeek: ""
    })

    useEffect(() => {
        // default fields to every (*) if they are empty
        if (cron.minute === "") {
            setCron({
                ...cron,
                minute: "*"
            })
        }

        if (cron.hour === "") {
            setCron({
                ...cron,
                hour: "*"
            })
        }

        if (cron.dayOfTheMonth === "") {
            setCron({
                ...cron,
                dayOfTheMonth: "*"
            })
        }

        if (cron.month === "") {
            setCron({
                ...cron,
                month: "*"
            })
        }

        if (cron.dayOfTheWeek === "") {
            setCron({
                ...cron,
                dayOfTheWeek: "*"
            })
        }
    }, [cron])

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

        // validate hours input
        if (e.target.name === "hour") {
            console.log("Editing hour field...")

            let status = validateHours(e.target.value)

            if (status !== false) {
                console.log("Valid hour entered.")
                setCron({
                    ...cron,
                    [e.target.name]: e.target.value
                })
            }
            else {
                console.log("Please enter a valid hour.")
                setCron({
                    ...cron,
                    [e.target.name]: false
                })
            }
        }

        // validate month input
        if (e.target.name === "month") {
            let status = validateMonth(e.target.value)
            let m;

            console.log(`Status equals: ${status}`)
            
            if (status !== false) {
                if (status !== "") {
                    m = months[status]
                    console.log("M: ", m)

                    setCron({
                        ...cron,
                        [e.target.name]: m
                    })
                }
                else {
                    m = ""

                    setCron({
                        ...cron,
                        [e.target.name]: m
                    })
                }
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
                <div className="flex justify-evenly">
                    {cron.minute !== "" && cron.minute !== "*" && <p>{cron.minute} minute</p>}
                    {cron.minute === "*" && <p>Every minute</p>}

                    {cron.hour !== "" && cron.hour !== "*" && <p>{cron.hour} hour</p>}
                    {cron.hour === "*" && <p>Every hour</p>}

                    {cron.dayOfTheMonth !== "" && cron.dayOfTheMonth !== "*" && <p>{cron.dayOfTheMonth} month</p>}
                    {cron.dayOfTheMonth === "*" && <p>Every day of the month</p>}

                    {cron.month !== "" && cron.month !== "*" && <p>{cron.month} month</p>}
                    {cron.month === "*" && <p>Every month</p>}

                    {cron.dayOfTheWeek !== "" && cron.dayOfTheWeek !== "*" && <p>{cron.dayOfTheWeek} day</p>}
                    {cron.dayOfTheWeek === "*" && <p>Every day of the week</p>}
                </div>
                <div className="flex justify-evenly bg-purple-50">
                    <form className="text-black">
                        <div className="flex">
                            <input type="text" name="minute" onChange={updateValue} placeholder="*" />
                            <input type="text" name="hour" onChange={updateValue} placeholder="*" />
                            <input type="text" name="dayOfTheMonth" onChange={updateValue} placeholder="*" />
                            <input type="text" name="month" onChange={updateValue} placeholder="*" />
                            <input type="text" name="dayOfTheWeek" onChange={updateValue} placeholder="*" />
                        </div>
                        <div className="flex justify-center py-3">
                            <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded" type="submit">CRON</button>
                        </div>
                    </form>
                </div>
        </div>
    )
}

export default Selection