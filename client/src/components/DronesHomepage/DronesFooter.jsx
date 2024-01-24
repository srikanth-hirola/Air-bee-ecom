import React from 'react'
import { Footer } from './DroneHomepageData'

const DronesFooter = () => {
    const data = Footer
    return (
        <>
            <div className="Drones-footer-parent">
                <div className="Drones-footr-logo-parent">
                    <div className="row">
                        <div className="col-md-6 col-lg-3">
                            <div className="Drones-footer-logo-content">
                                <div className='Drones-footer-logo-image'>
                                    <img src="./images/logo.png" alt="" />
                                </div>
                                <p>Best information about the company gies here but now lorem ipsum is</p>
                                {data?.SocialMedia?.Links?.content?.img?.length > 0 &&
                                    <div className='col-md-12'>
                                        <div className="Drones-footer-social-icons">
                                            <div className="row">
                                                {data?.SocialMedia?.Links?.content?.img?.map((item, index) => (
                                                    <div key={index} className="col-2">
                                                        <div className='Drones-social-icons-image'>
                                                            <img src={item?.url} alt="" />
                                                        </div>
                                                    </div>
                                                ))} </div>
                                        </div>
                                    </div>}
                            </div>
                        </div>
                        <div className='col-md-10 col-lg-7'>
                            <div className="row">
                                {data?.FooterItems?.navigate?.content?.items?.items?.length > 0 &&
                                    data?.FooterItems?.navigate?.content?.items?.items?.map((item, index) => (

                                        <div className="col-sm-6 col-md-3" key={index}>
                                            <div className="DronesFooter-links">
                                                <h6 key={index}>{item?.Title}</h6>
                                                {item?.drop?.length > 0 && item?.drop?.map((dropitem, index1) => (
                                                   <a href=""> <li key={index1}>{dropitem?.SubTitle}</li></a>
                                                ))}
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-2 col-lg-2">
                            <div className="Drones-footer-apps-parent">
                                <h6>Get app</h6>
                                <div className='col-md-12'>
                                    <div className='DronesFooter-apps-image'>
                                        <img src="./DronesHomepage/app1.png" alt="" />
                                    </div>
                                </div>
                                <div className='col-md-12'>
                                    <div className='DronesFooter-apps-image'>
                                        <img src="./DronesHomepage/app1.png" alt="" />
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

export default DronesFooter