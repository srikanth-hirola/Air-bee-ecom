import React from 'react';
import './Models2.css';
const Newsletter = () => {

  return (
    <>
       <div className='Newsletter-parent'>
        <div className="container">
          <div className="Newsletter-bg" style={{backgroundImage:`url(https://images.pexels.com/photos/3254556/pexels-photo-3254556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)`}}>
          <div className='newsletter-component-content'>
              <div className='newsletter-component-sub1'>
                <h2>Explore the world to experience the beauty of nature</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lobortis maximus</p>
              </div>
              <div className='newsletter-component-sub2'>
                <p>Ready to travel with us? Enter your email to create or restart your membership.</p>
                <div className='newsletter-component-email-parent'>
                  <input type="text" placeholder='Email Address' />
                  <button>Get started</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Newsletter;
