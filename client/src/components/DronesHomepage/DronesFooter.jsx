import React from 'react'
import { StyleConfig } from '../../utils/StyleConfig'
import { Link } from 'react-router-dom'

const DronesFooter = () => {
    const styles = StyleConfig();
    const footerContent = styles?.footerContent;
    const footerMapper = styles?.OtherFooterContent

    return (
        <>
            <div className="Drones-footer-parent">
                <div className="Drones-footr-logo-parent">
                    <div className="row">
                        <div className="col-md-6 col-lg-3">
                            <div className="Drones-footer-logo-content">
                                {footerContent?.logo?.image?.url &&
                                    <div className='Drones-footer-logo-image'>
                                        <img src={footerContent?.logo?.image?.url} alt="logo" className='mix-blend-multiply object-cover' />
                                    </div>
                                }
                                {footerContent?.summary && <p>{footerContent?.summary}</p>}
                                {footerContent?.socialIcons?.length > 0 &&
                                    <div className='col-md-12'>
                                        <div className="Drones-footer-social-icons">
                                            <div className="row">
                                                {footerContent?.socialIcons?.map((item, index) => (
                                                    <div key={index} className="col-2">
                                                        <Link to={item.url}>
                                                            <div className='Drones-social-icons-image'>
                                                                <img src={item?.image?.url} alt="socialIcons" />
                                                            </div>
                                                        </Link>
                                                    </div>
                                                ))} </div>
                                        </div>
                                    </div>}
                            </div>
                        </div>
                        <div className='col-md-10 col-lg-7'>
                            <div className="row">
                                {footerMapper?.length > 0 &&
                                    footerMapper?.map((item, index) => (
                                        <div className="col-sm-6 col-md-3" key={index}>
                                            <div className="DronesFooter-links">
                                                <h6 >{item?.heading}</h6>
                                                {item?.items?.length > 0 && item?.items?.map((dropitem, index1) => (
                                                    <Link key={index1} to={dropitem.url}> <li>{dropitem?.title}</li></Link>
                                                ))}
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-2 col-lg-2">
                            <div className="Drones-footer-apps-parent">
                                {footerContent?.ImgSecTitle && <h6>{footerContent?.ImgSecTitle}</h6>}
                                {footerContent?.apps?.length > 0 &&
                                    footerContent?.apps?.map((item, i) => (
                                        <div className='col-md-12' key={i}>
                                            <Link to={item?.url}>
                                                <div className='DronesFooter-apps-image'>
                                                    <img src={item?.image?.url} alt="apps" />
                                                </div>
                                            </Link>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <hr /> */}
            < div className='DronesFooter-copyrights' >
                <p>{footerContent?.copyright}{footerContent?.credits?.title && < Link to={footerContent?.credits?.url}> {footerContent?.credits?.title}.</Link>} </p>
            </div >
        </>
    )
}

export default DronesFooter