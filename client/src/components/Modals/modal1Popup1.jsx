import React, { useState } from 'react';
import { Button, Modal } from 'antd';

const Popup1 = () => {
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
        pop up 1 - congratulations
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
        <div className='popup1-parent'>
          <div className='popup1-image'>
            <img src="./DronesHomepage/popupimage.png" alt="" />
          </div>
          <h3>Congratulations</h3>
          <p>The Big Oxmox advised her not to do so, because there were thousands of bad Commas</p>
          <div className='popup1-buttons-parent'>
            <button className='cancel-button' onClick={handleCancel}>Cancel</button>
            <button className='done-button' onClick={handleOk}>Done</button>
          </div>
        </div>
      </Modal>
    </>
  );
};
export default Popup1;