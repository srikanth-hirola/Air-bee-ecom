import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import axios from 'axios';
import { server } from '../../../server';
import toast from 'react-hot-toast';
import Loader from '../../../utils/Loader';
import DashboardHeader from '../../../components/Headers/DashboardHeader';
import DashboardSideBar from '../../../components/ShopComponents/Layout/DashboardSideBar';
import { DraftEvents } from '../../../components/ShopComponents/Events/DraftEvents';


export const AllDraftEvents = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [allEvents, setAllEvents] = useState([]);
    const { seller } = useSelector((state) => state.seller)

    useEffect(() => {

        const apiCall = async () => {
            try {
                const { data } = await axios.get(`${server}/event/get-all-draft-events/${seller._id}`)
                setAllEvents(data?.events)
                setIsLoading(false)
            } catch (error) {
                toast.error(error.response.data.message)
            }
        }
        apiCall()
    }, [seller])

    return (
        <>
            {isLoading ? (
                <Loader />
            ) : (
                <div>
                    <DashboardHeader />
                    <div className="flex justify-between w-full">
                        <div className="w-[80px] 800px:w-[330px]">
                            <DashboardSideBar active={5} />
                        </div>
                        <div className="w-full justify-center flex">
                            <DraftEvents allEvents={allEvents} />
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
