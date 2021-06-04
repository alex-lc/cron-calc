// Input for setting up cron job

import { useState, useEffect } from 'react'

// data
import { months } from '../data/data'

// validation
import { validateMonth, validateMinutes, validateHours, validateDayOfMonth, validateDayOfWeek } from '../utils/validation'

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
        // validate minutes input
        if (e.target.name === "minute") {

            let status = validateMinutes(e.target.value)

            if (status !== false) {
                console.log("Valid minute entered.")
                setCron({
                    ...cron,
                    [e.target.name]: e.target.value
                })
            }
            else {
                setCron({
                    ...cron,
                    [e.target.name]: false
                })
            }
        }

        // validate hours input
        if (e.target.name === "hour") {

            let status = validateHours(e.target.value)

            if (status !== false) {
                setCron({
                    ...cron,
                    [e.target.name]: e.target.value
                })
            }
            else {
                setCron({
                    ...cron,
                    [e.target.name]: false
                })
            }
        }

        // validate dayOfTheMonth input
        if (e.target.name === "dayOfTheMonth") {

            let status = validateDayOfMonth(e.target.value)

            if (status !== false) {
                setCron({
                    ...cron,
                    [e.target.name]: e.target.value
                })
            }
            else {
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
                    [e.target.name]: false
                })
            }
        }

        // validate day of week input
        if (e.target.name === "dayOfTheWeek") {
            let status = validateDayOfWeek(e.target.value)

            if (status !== false) {
                setCron({
                    ...cron,
                    [e.target.name]: e.target.value
                })
            }
            else {
                setCron({
                    ...cron,
                    [e.target.name]: false
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
        <div className="flex flex-col w-4/5 bg-blue-100 text-white border border-blue-100 rounded">
                <div className="flex justify-evenly bg-blue-900 text-white py-5 mb-5 rounded-t">
                    {cron.minute !== "" && cron.minute !== "*" && cron.minute !== false && <p>{cron.minute} minute</p>}
                    {cron.minute === "*" && <p>Every minute</p>}
                    {cron.minute === false && <p>INVALID!</p>}

                    {cron.hour !== "" && cron.hour !== "*" && cron.hour !== false && <p>{cron.hour} hour</p>}
                    {cron.hour === "*" && <p>Every hour</p>}
                    {cron.hour === false && <p>INVALID!</p>}

                    {cron.dayOfTheMonth !== "" && cron.dayOfTheMonth !== "*" && cron.dayOfTheMonth !== false && <p>{cron.dayOfTheMonth} month</p>}
                    {cron.dayOfTheMonth === "*" && <p>Every day of the month</p>}
                    {cron.dayOfTheMonth === false && <p>INVALID!</p>}

                    {cron.month !== "" && cron.month !== "*" && cron.month !== false && <p>{cron.month} month</p>}
                    {cron.month === "*" && <p>Every month</p>}
                    {cron.month === false && <p>INVALID!</p>}

                    {cron.dayOfTheWeek !== "" && cron.dayOfTheWeek !== "*" && cron.dayOfTheWeek !== false && <p>{cron.dayOfTheWeek} day</p>}
                    {cron.dayOfTheWeek === "*" && <p>Every day of the week</p>}
                    {cron.dayOfTheWeek === false && <p>INVALID!</p>}

                </div>
                <div className="flex justify-evenly w-full">
                    <form className="text-black w-full flex-col content-evenly px-2">
                        <div className="grid grid-cols-5 gap-2">
                            <input 
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                type="text" name="minute" onChange={updateValue} placeholder="*" />
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                type="text" name="hour" onChange={updateValue} placeholder="*" />
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                type="text" name="dayOfTheMonth" onChange={updateValue} placeholder="*" />
                            <input 
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                type="text" name="month" onChange={updateValue} placeholder="*" />
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                type="text" name="dayOfTheWeek" onChange={updateValue} placeholder="*" />
                        </div>
                        <div className="flex justify-center bg-blue-100 py-3">
                            <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded" type="submit">CRON</button>
                        </div>
                    </form>
                </div>
        </div>
    )
}

export default Selection