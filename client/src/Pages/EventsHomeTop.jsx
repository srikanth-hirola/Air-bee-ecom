import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { StyleConfig } from '../utils/StyleConfig';
import EventCardWithProducts from '../components/Events/EventCardWithProducts';

const EventsHomeTop = () => {
    const { allEvents } = useSelector((state) => state.events);

    const [eventLayountOneSelectedEvents, setEventLayoutOneSelectedEvents] = useState([])

    const styles = StyleConfig();

    useEffect(() => {
        setEventLayoutOneSelectedEvents(styles?.eventLayountOneSelectedEvents)
    }, [styles?.eventLayountOneSelectedEvents])


    return (
        <>{allEvents &&
            // eslint-disable-next-line array-callback-return
            allEvents?.map((val, index) => {
                if (eventLayountOneSelectedEvents?.includes(val?._id)) {
                    return (
                        <EventCardWithProducts data1={val} key={index} />
                    );
                }
            })}
        </>
    )
}

export default EventsHomeTop