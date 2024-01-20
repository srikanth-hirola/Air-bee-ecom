import React, { useState } from 'react';
import { Button, Modal } from 'antd';
const Model2popup3 = () => {
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  // const [modalText, setModalText] = useState('Content of the modal');
  const showModal = () => {
    setOpen(true);
  };
  const handleOk = () => {
    // setModalText('The modal will be closed after two seconds');
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 2000);
  };
  const handleCancel = () => {
    console.log('Clicked cancel button');
    setOpen(false);
  };
  return (
    <>
      <Button type="primary" onClick={showModal}>
        Model2popup3
      </Button>
      <Modal
        title=""
        open={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        cancelText="Close"
        onCancel={handleCancel}
        className='Model2Popups'
      >
        <div className='Model2popup3-parent'>
          <div className="row">
            <div className="col-md-5">
              <div className='Model2popup3-image'>
                <img src="./DronesHomepage/modelpopup3.png" alt="" />
              </div>
            </div>
            <div className="col-md-7">
              <div className='Model2popup3-text'>
                <p>Subscribe to our newsletter</p>
                <h3>Let us be your plug.</h3>
                <p>Get the latest articles and business updates that you need to know, you’ll even get special recommendations weekly.</p>
                <div className='Model2popup3-input-parent shadow-lg'>
                  <input type="text" placeholder='Email' />
                  <button>Subscribe</button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </Modal>
    </>
  );
};
export default Model2popup3;