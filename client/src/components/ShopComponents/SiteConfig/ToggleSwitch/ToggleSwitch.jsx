import axios from 'axios';
import React from 'react'
import { server } from '../../../../server';
import toast from 'react-hot-toast';


export const ToggleSwitch = ({ display, setDisplay, name, number, position }) => {

    const onToggle = async () => {
        setDisplay(!display)
        try {
            await axios.put(`${server}/site/site-config-display`, { name, value: !display })
        } catch (error) {
            toast.error(error.response.data.message)
        }
    };

    const onPositionToggle = async () => {
        setDisplay(position)
        try {
            await axios.put(`${server}/site/site-config-display`, { name, value: position })
        } catch (error) {
            toast.error(error.response.data.message)
        }
    }


    return (
        <label className="toggle-switch">
            {number ?
                <>
                    <input type="checkbox" checked={position === display ? true : false} onChange={onPositionToggle} />
                    <span className="switch" />
                </>
                :
                <>
                    <input type="checkbox" checked={display} onChange={onToggle} />
                    <span className="switch" />
                </>}
        </label>
    );
}
