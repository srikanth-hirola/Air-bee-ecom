import React, { useState } from 'react'
import CheckoutBredCrumbs from '../components/Checkout/CheckoutBredCrumbs';
import CheckoutSteps from '../components/Checkout/CheckoutSteps';
import CheckoutAddress from '../components/Checkout/CheckoutAddress';
import DronesHeader from '../components/Headers/DronesHeader';
import DronesFooter from '../components/DronesHomepage/DronesFooter';


const CheckoutPage = () => {
    const [showNext, setShowNext] = useState(false);


    return (
        <>
            <DronesHeader />
            <div className='Checkoutpage-parent'>
                <div CheckoutStepsclassName="Checkoutpage-sub1">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 col-md-12 col-lg-12">
                                <div className='Checkoutpage-sub1-text-parent'>
                                    <CheckoutBredCrumbs />
                                    <div className='Checkoutpage-sub1-text-sub2'>
                                        <h3>Checkout</h3>
                                        {/* <button>Sign In</button> */}
                                    </div>
                                </div>
                            </div>
                            <CheckoutSteps active={1} />
                        </div>
                        <div className="Checkoutpage-content">
                            <div className="row">
                                <CheckoutAddress showNext={showNext} setShowNext={setShowNext} />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <DronesFooter/>

        </>

    )
}

export default CheckoutPage