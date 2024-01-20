import React, { useState } from 'react';
import { Modal } from 'antd';

const Model2popup1 = ({ open, setOpen }) => {
  const [confirmLoading, setConfirmLoading] = useState(false);

  const handleOk = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 2000);
  };
  const handleCancel = () => {
    setOpen(false);
  };
  return (
    <>
      {/* <Button type="primary" onClick={showModal}>
      Model2popup1
      </Button> */}
      <Modal
        title=""
        open={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
        cancelText="Close"
        className='Model2Popups'
      >
        <div className='Model2popup1-parent'>
          <div className="row">
            <div className="col-md-5">
              <div className='Model2popup1-image'>
                <img src="./DronesHomepage/model2popup.png" alt="" />
              </div>
            </div>
            <div className="col-md-7">
              <div className='Model2popup1-text'>
                <p>Subscribe to our newsletter</p>
                <h3>Let us be your plug.</h3>
                <p>Get the latest articles and business updates that you need to know, you’ll even get special recommendations weekly.</p>
                <div className='Model2popup1-input-parent shadow-lg'>
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
export default Model2popup1;