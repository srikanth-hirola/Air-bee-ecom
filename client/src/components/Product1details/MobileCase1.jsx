import React from 'react'

export const MobileCase1 = ({ data }) => {

    return (
        <div className='Mobile-case-1'>
            {data?.productDescription?.length > 0 &&
                <div className="Mobile-case-sub">
                    <div className="container">
                        {data?.productDescription?.map((item, i) => (
                            <>
                                {i % 2 === 0
                                    ?
                                    <div className='row mobilespage-row1' key={i}>
                                        <div className="col-md-6 col-sm-6 col-12">
                                            <div className='mobile-image1-one'>
                                                <img src={item?.img?.url} alt="desc" />
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-sm-6 col-12 mobile-text1-two">
                                            <div className=" ">
                                                <h1>{item?.content?.heading}</h1>
                                                <p>{item?.content?.description}</p>
                                                {/* <div className='flex mobile-get'>
                                            <h6>Get Started</h6>
                                            <img src="/images/product-details/arrowicon.png" alt="" />
                                        </div> */}

                                            </div>
                                        </div>
                                    </div>
                                    :
                                    <div className='row mobilespage-row2' key={i}>
                                        <div className="col-md-6 col-sm-6 col-12 mobile-text1-two">

                                            <div className=" ">
                                                <h1>{item?.content?.heading}</h1>
                                                <p>{item?.content?.description}</p>
                                                {/* <div className='flex mobile-get'>
                                                    <h6>Get Started</h6>
                                                    <img src="/images/product-details/arrowicon.png" alt="" />
                                                </div> */}

                                            </div>
                                        </div>
                                        <div className="col-md-6 col-sm-6 col-12">
                                            <div className='mobile-image1-one'>
                                                <img src={item?.img?.url} alt="desc" />
                                            </div>
                                        </div>
                                    </div>}

                            </>
                        ))}



                    </div>
                </div>
            }
        </div>
    )
}
