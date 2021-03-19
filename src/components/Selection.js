// Input for setting up cron job

import { useState } from 'react'
import { useForm } from 'react-hook-form'

const Selection = () => {

    // react-hook-form
    const { register, error, handleSubmit } = useForm()

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
                <form onSubmit={handleSubmit(submitCron)}>
                    <input type="text" name="minute" ref={register({ required: true })} />
                    <input type="text" name="hour" ref={register({ required: true })} />
                    <input type="text" name="dayOfTheMonth" ref={register({ required: true })} />
                    <input type="text" name="month" ref={register({ required: true })} />
                    <input type="text" name="dayOfTheWeek" ref={register({ required: true })} />
                    <button type="submit"></button>
                </form>
            </div>
        </div>
    )
}

export default Selection