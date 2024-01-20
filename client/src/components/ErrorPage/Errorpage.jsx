import React from 'react'

const Errorpage = () => {
    return (
        <>
            <div className='Errorpage-parent'>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className='error-page-image'>
                                <img src="DronesHomepage/errorcode.png" alt="" />
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="Error-page-text">
                                <h3>Oops! Something went Wrong</h3>
                                <p>Internal server error, please try again later</p>
                                <button>Return to Homepage</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Errorpage