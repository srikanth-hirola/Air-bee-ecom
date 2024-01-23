import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { StyleConfig } from '../../utils/StyleConfig';
import EventCardWithProducts from '../../components/Events/EventCardWithProducts';

const EventsHomeMiddle = () => {
    const { allEvents } = useSelector((state) => state.events);

    const [eventLayountTwoSelectedEvents, setEventLayoutTwoSelectedEvents] = useState([])

    const styles = StyleConfig();

    useEffect(() => {
        setEventLayoutTwoSelectedEvents(styles?.eventLayountTwoSelectedEvents)
    }, [styles?.eventLayountTwoSelectedEvents])


    return (
        <>{allEvents &&
            // eslint-disable-next-line array-callback-return
            allEvents?.map((val, index) => {
                if (eventLayountTwoSelectedEvents?.includes(val?._id)) {
                    return (
                        <EventCardWithProducts data1={val} key={index} />
                    );
                }
            })}
        </>
    )
}

export default EventsHomeMiddle