import React, { useState } from 'react';
import './Modals.css'
import { Button, Modal } from 'antd';
const Popup2 = () => {
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
      <Button type="primary" onClick={showModal} className='pop-two-btn' >
        pop up 2 - save
      </Button>
      <Modal
        title=""
        open={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        footer={null}
        onCancel={handleCancel}
        className='modal1popups'
      >
        <div className='popup2-parent'>
          <div className='popup2-image'>
            <img src="./DronesHomepage/popupimage.png" alt="" />
          </div>
          <h3>Save</h3>
          <p>This will discard the changes you have made to your file. Are you sure you want to continue?</p>
          <div className='popup2-buttons-parent'>
            <button className='cancel-button' onClick={handleCancel}>Cancel</button>
            <button className='done-button' onClick={handleOk}>Done</button>
          </div>
        </div>
      </Modal>
    </>
  );
};
export default Popup2;