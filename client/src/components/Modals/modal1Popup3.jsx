import React, { useState } from 'react';
import './Modals.css'
import { Button, Modal } from 'antd';
const Popup3 = () => {
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const showModal = () => {
    setOpen(true);
  };
  const handleOk = () => {
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
      <div className='Popup3-parent'>
        <Button type="primary" onClick={showModal}>
          pop up 3 - cart
        </Button>
        <Modal
          title=""
          open={open}
          onOk={handleOk}
          confirmLoading={confirmLoading}
          footer={null}
          onCancel={handleCancel}
          className='popup-three modal1popups'
        >
          <div className='Popup3-parent'>
            <div className='Popup3-image'>
              <img src="./DronesHomepage/popup-cart.png" alt="" />
            </div>
            <h3>Thank you for your purchase!</h3>
            <p>How do you like your shopping experience? Help us improve it by filling in our survey.</p>
            <p>This will only take a minute</p>
            <button className='start-button' onClick={handleOk}>Start the survey</button>
            <button className='skip-button' onClick={handleCancel}>Skip for now</button>
          </div>
        </Modal>
      </div>
    </>
  );
};
export default Popup3;


