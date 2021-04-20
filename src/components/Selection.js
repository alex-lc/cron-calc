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
                    {cron.minute === 0 && <p>0 minutes</p>}
                    {cron.minute !== 0 && <p>{cron.minute} minutes</p>}

                    {cron.hour === 0 && <p>0 hour</p>}
                    {cron.hour !== 0 && <p>{cron.hour} hour</p>}
                </div>
                <form>
                    <input type="text" name="minute" placeholder="*" />
                    <input type="text" name="hour" placeholder="*" />
                    <input type="text" name="dayOfTheMonth" placeholder="*" />
                    <input type="text" name="month" placeholder="*" />
                    <input type="text" name="dayOfTheWeek" placeholder="*" />
                    <button type="submit">CRON</button>
                </form>
            </div>
        </div>
    )
}

export default Selection