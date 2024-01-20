import React, { useState } from 'react'

const ShippingDetails = ({ handleSelectCourierPartner }) => {

    const [postCode, setPostCode] = useState(null);
    const [deliveryData, setDeliveryDate] = useState();
    const [btnLoading, setBtnLoading] = useState(false);


    return (
        <>
            {deliveryData && <p className='font-semibold mb-1'><i>Fastest Delivery available at. <span className='text-green-600'>{deliveryData}</span></i></p>}
            <div className='flex space-x-2 mt-4'>
                <input placeholder='ENTER PIN CODE' type='number' value={postCode} onChange={(e) => setPostCode(e.target.value)} className='border-1 border-gray-200 rounded w-[250px] p-2' />
                {btnLoading ? <button className=' text-white font-semibold rounded px-4 bg-[#fa8232]'>Loading..</button>
                    : <button className=' text-white font-semibold rounded px-4 bg-[#fa8232]' onClick={(e) => handleSelectCourierPartner({ e, postCode, setBtnLoading, setDeliveryDate })}>Check</button>
                }
            </div>
        </>
    )
}

export default ShippingDetails