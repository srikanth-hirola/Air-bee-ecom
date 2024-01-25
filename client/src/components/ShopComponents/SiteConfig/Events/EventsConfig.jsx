import React, { useState } from 'react'
// import { ToggleSwitch } from '../ToggleSwitch/ToggleSwitch'
// import { StyleConfig } from '../../../../utils/StyleConfig'
import { EventLayoutOne } from './Layouts/EventLayoutOne'
import { EventLayoutTwo } from './Layouts/EventLayoutTwo'

export const EventsConfig = () => {
    // const [eventCardLayoutOne, setEventCardLayoutOne] = useState(true)
    // const [eventCardLayoutTwo, setEventCardLayoutTwo] = useState(true)
    // eslint-disable-next-line no-unused-vars
    const [logoLoading, setLogoLoading] = useState(false);

    // const styles = StyleConfig();

    // useEffect(() => {
    //     setEventCardLayoutOne(styles?.eventCardLayoutOne)
    //     setEventCardLayoutTwo(styles?.eventCardLayoutTwo)
    // }, [styles?.eventCardLayoutOne, styles?.eventCardLayoutTwo])

    return (
        <div className="w-full min-h-[45vh] pt-5 rounded flex justify-center outer1-div" >
            <div className='w-full'>

                {/* Event Layout One Starts Here */}
                <div className="w-[97%] flex justify-center border-1 rounded h-fit mx-auto mb-3" >
                    <div className='w-full'>
                        <div className='flex mt-12 justify-between mx-6'>
                            <label className='pb-2'>Events Card Layout 1<span className="text-red-500">*</span></label>
                            {/* <ToggleSwitch display={eventCardLayoutOne} setDisplay={setEventCardLayoutOne} name="eventCardLayoutOne" /> */}
                        </div>
                        <EventLayoutOne setLogoLoading={setLogoLoading} active={1} />
                    </div>
                </div>
                {/* Event Layout One Ends Here */}

                {/* Event Layout Two Starts Here */}
                <div className="w-[97%] flex justify-center border-1 rounded h-fit mx-auto mb-3" >
                    <div className='w-full'>
                        <div className='flex mt-12 justify-between mx-6'>
                            <label className='pb-2'>Events Card Layout 2<span className="text-red-500">*</span></label>
                            {/* <ToggleSwitch display={eventCardLayoutTwo} setDisplay={setEventCardLayoutTwo} name="eventCardLayoutTwo" /> */}
                        </div>
                        <EventLayoutTwo setLogoLoading={setLogoLoading} active={1} />
                    </div>
                </div>
                {/* Event Layout Two Ends Here */}

            </div>
        </div>
    )
}
