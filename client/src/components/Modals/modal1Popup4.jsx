import React, { useState } from 'react';
import './Modals.css'
import { Button, Modal } from 'antd';
const Popup4 = () => {
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
      <Button type="primary" onClick={showModal}>
        pop up 4 - Delete account
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
        <div className='popup4-parent'>
          <div className='popup4-sub'>
            <div className='popup4-image-bg'>
              <div className='popup4-image'>
                <img src="./DronesHomepage/popup4.png" alt="" />
              </div>
            </div>
            <div className='popup-4-text'>
              <h3>Delete Account</h3>
              <p>All your data will be removed permanently. Are you sure you want to continue?</p>
            </div>
          </div>
          <div className='popup4-buttons-parent'>
            <button className='cancel-button' onClick={handleCancel}>Cancel</button>
            <button className='delete-button' onClick={handleOk}>Yes. Deactivate</button>
          </div>
        </div>
      </Modal>
    </>
  );
};
export default Popup4;