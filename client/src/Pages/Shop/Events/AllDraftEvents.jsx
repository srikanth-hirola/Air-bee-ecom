import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import axios from 'axios';
import { server } from '../../../server';
import toast from 'react-hot-toast';
import Loader from '../../../utils/Loader';
import DashboardHeader from '../../../components/Headers/DashboardHeader';
import DashboardSideBar from '../../../components/ShopComponents/Layout/DashboardSideBar';
import { DraftEvents } from '../../../components/ShopComponents/Events/DraftEvents';
import DronesFooter from '../../../components/DronesHomepage/DronesFooter';


const AllDraftEvents = () => {
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
                    <div className="flex justify-between w-full dasboard-user-width-mobile">
                        <div className="800px:w-[330px] dashboard-side-bar-res">
                            <DashboardSideBar active={12} />
                        </div>
                        <div className="w-full justify-center flex dashboard-side-bar-data-view">
                            <DraftEvents allEvents={allEvents} active={12} />
                        </div>
                    </div>
                    <DronesFooter />
                </div>
            )}
        </>
    );
}

export default AllDraftEvents