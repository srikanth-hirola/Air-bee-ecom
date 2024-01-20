import React, { useEffect, useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import { StyleConfig } from '../../../../../utils/StyleConfig';


export const SelectEventModal = (props) => {
    const [eventIndexes, setEventIndexes] = useState([]);

    const style = StyleConfig();

    useEffect(() => {
        if (props && props?.multiple) {
            let updatedIndex = [...eventIndexes];
            props?.uploadedEvents.length > 0 &&
                props?.uploadedEvents.forEach((val, index) => {
                    let found = props?.layout?.find(
                        (layoutItem) => layoutItem === val._id
                    );
                    if (found) {
                        updatedIndex.push(index);
                    }
                });
            setEventIndexes(updatedIndex);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props]);


    const handleSelectMultipleContent = (e, index) => {
        e.preventDefault();

        let foundContent = props?.uploadedEvents[index];

        let updatedIndexes = [...eventIndexes];
        updatedIndexes.push(index);
        setEventIndexes(updatedIndexes);

        const layoutArray = [...(props.layout || [])];

        layoutArray.push(foundContent?._id);

        props.setlayout(layoutArray);
    };


    const handleUnSelectMultipleContent = (e, _id, index) => {
        e.preventDefault();
        let foundContent = props?.layout.filter((val) => val !== _id)
        let updatedIndexes = [...eventIndexes];
        updatedIndexes = updatedIndexes.filter((val) => val !== index)
        setEventIndexes(updatedIndexes)
        props.setlayout(foundContent);
    }

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Select Events
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {props?.uploadedEvents?.length > 0 ?
                    <div className='flex justify-between flex-wrap w-full'>
                        {props?.uploadedEvents?.map((content, index) => (
                            <React.Fragment key={index}>
                                <div className='w-10/12 space-x-2 my-2' >
                                    <input type='text' name='name' value={content?.name} className='border-1 rounded px-2 py-1 w-[49%]' placeholder='Feature Title' readOnly />
                                    <input type='text' name='id' value={content?._id} className='border-1 rounded px-2 py-1 w-[49%]' placeholder=' Feature Sub Title' readOnly />
                                </div>
                                {eventIndexes.includes(index) ? <button className='bg-red-600 px-3 py-1 rounded text-white my-2' onClick={(e) => handleUnSelectMultipleContent(e, content?._id, index)}>UNSELECT</button> : <button className='px-3 py-1 rounded my-2' style={{ backgroundColor: style?.mainColor, color: style?.fontColor }} onClick={(e) => handleSelectMultipleContent(e, index)}>SELECT</button>}
                            </React.Fragment>
                        ))}
                    </div> : <p>No Event is uploaded</p>}
            </Modal.Body>
        </Modal>
    );
}
