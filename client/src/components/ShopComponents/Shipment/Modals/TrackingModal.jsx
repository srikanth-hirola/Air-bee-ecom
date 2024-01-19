import React from 'react';
import Modal from 'react-bootstrap/Modal';

const TrackingModal = (props) => {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Tracking Details
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className='mx-auto w-fit'>
                    {props.trackingData.map((track) => (
                        <div className='mb-12 w-[500px]'>
                            <p className='mb-0 text-[18px]'>{track?.activity}</p>
                            <p className='mb-0 text-xs'><strong>Date : </strong>{track?.date}</p>
                            <p className='mb-0 text-xs'><strong>Location : </strong>{track?.location}</p>
                        </div>
                    ))}
                </div>
            </Modal.Body>
            {/* <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer> */}
        </Modal>
    );
}

export default TrackingModal