import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';

import { StyleConfig } from '../../../../../utils/StyleConfig';
import useSaveLayoutContent from '../../../../../hooks/useSaveLayoutContent';
import { SelectEventModal } from '../Modals/SelectEventModal';
import EventCard from './EventCard';

export const EventLayoutOne = ({ setLogoLoading, active }) => {
    const { allEvents } = useSelector((state) => state.events);
    const { saveLayoutContent } = useSaveLayoutContent();
    const [selectedContentModalShow, setSelectedContentModalShow] = useState(false);

    const [eventLayountOneSelectedEvents, setEventLayoutOneSelectedEvents] = useState([])

    const styles = StyleConfig();

    useEffect(() => {
        setEventLayoutOneSelectedEvents(styles?.eventLayountOneSelectedEvents)
    }, [styles?.eventLayountOneSelectedEvents])

    return (
        <>
            <div className='py-10 evt container'>
                {allEvents &&
                    // eslint-disable-next-line array-callback-return
                    allEvents?.map((val, index) => {
                        if (eventLayountOneSelectedEvents?.includes(val?._id)) {
                            return (
                                <EventCard active={true} data={val} key={index} />
                            );
                        }
                    })}
            </div>

            {active === 1 &&
                <>
                    <div className='w-[95%] mx-auto mb-2 flex justify-between'>
                        <label className='rounded bg-blue-400 p-2 text-white cursor-pointer' onClick={() => setSelectedContentModalShow(true)}>
                            <i class="fa-solid fa-upload fa-1x"></i> Upload
                        </label>
                        <button className='rounded bg-green-400 p-2 text-white cursor-pointer' onClick={() => saveLayoutContent(eventLayountOneSelectedEvents, "eventLayountOneSelectedEvents", setLogoLoading)}>
                            <i class="fa-solid fa-floppy-disk fa-1x"></i> Save
                        </button>
                    </div>

                    {allEvents?.length > 0 && <SelectEventModal onHide={() => setSelectedContentModalShow(false)} show={selectedContentModalShow} setModalShow={setSelectedContentModalShow} setlayout={setEventLayoutOneSelectedEvents} layout={eventLayountOneSelectedEvents} uploadedEvents={allEvents} name={"eventLayountOneSelectedEvents"} multiple={true} />}
                </>
            }
        </>
    )
}
