import axios from 'axios';
import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { server } from '../../server';

const DronesNewsletter = ({ content }) => {
  const [email, setEmail] = useState('');

  const handleEmailSubscribe = async (e) => {
    if (!email) {
      toast.error('Email Id is required')
      return;
    }
    try {
      await axios.post(`${server}/newsletter/subscribe-to-newsletter`, { email })
      toast.success('Subscribed successfully')
    } catch (error) {
      toast.error(error.response.data.message)
    }
  }

  return (
    <>
      <div className="DronesNewsletter-parent">
        <div className='DronesNewsletter-text'>
          {content?.title && <h5>
            {content?.title}
          </h5>}
          {content?.subTitle && <p>{content?.subTitle}</p>}
        </div>
        <div className='DronesNewsletter-email-parent'>
          <input type="email" placeholder='Email' onChange={(e) => setEmail(e.target.value)} value={email}
            required />
          <div className='DronesNewsletter-email-image'>
            <img src="./DronesHomepage/email.png" alt="newsletter" />
          </div>
          {content?.btnTitle && <button onClick={handleEmailSubscribe}>{content?.btnTitle}</button>}
        </div>
      </div>
    </>

  )
}

export default DronesNewsletter