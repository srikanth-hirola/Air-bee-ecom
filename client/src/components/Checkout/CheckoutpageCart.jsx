import React from 'react'

const CheckoutpageCart = () => {
    return (
        <>
            <div className='CheckoutpageCart-parent'>
                <h3>Order Summery</h3>
                <div class="accordion" id="accordionPanelsStayOpenExample">
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                                2 Items in Cart
                            </button>
                        </h2>
                        <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show">
                            <div class="accordion-body">
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="Order-summery-image">
                                            <img src="./DronesHomepage/image 51.png" alt="" />
                                        </div>
                                    </div>
                                    <div className="col-md-8">
                                        <div className="Order-summery-text">
                                            <p>MSI MEG Trident X 10SD-1012AU Intel i7 10700K, 2070 SUPER...</p>
                                        </div>
                                        <div className='Order-summery-text-sub'>
                                            <p>Qty 1</p>
                                            <strong>$ 3,799.00</strong>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="Order-summery-image">
                                            <img src="./DronesHomepage/image 51.png" alt="" />
                                        </div>
                                    </div>
                                    <div className="col-md-8">
                                        <div className="Order-summery-text">
                                            <p>MSI MEG Trident X 10SD-1012AU Intel i7 10700K, 2070 SUPER...</p>
                                        </div>
                                        <div className='Order-summery-text-sub'>
                                            <p>Qty 1</p>
                                            <strong>$ 3,799.00</strong>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CheckoutpageCart