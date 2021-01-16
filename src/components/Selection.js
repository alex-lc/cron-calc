// Input for setting up cron job

import { useState } from 'react'

const Selection = () => {

    const [cron, setCron] = useState({
        minute: 0,
        hour: 0,
        dayOfTheMonth: 0,
        month: 0,
        dayOfTheWeek: 0
    })

    const updateValue = (e) => {
        setCron({
            ...cron,
            [e.target.name]: e.target.value
        })
    } 
    
    return (
        <div>
            <div>
                <input type="text" name="minute" onChange={updateValue} value={cron.minute} />
                <input type="text" name="hour" onChange={updateValue} value={cron.hour} />
                <input type="text" name="dayOfTheMonth" onChange={updateValue} value={cron.dayOfTheMonth} />
                <input type="text" name="month" onChange={updateValue} value={cron.month} />
                <input type="text" name="dayOfTheWeek" onChange={updateValue} value={cron.dayOfTheWeek} />
            </div>
        </div>
    )
}

export default Selection