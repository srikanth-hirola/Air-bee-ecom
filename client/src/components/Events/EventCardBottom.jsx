import React from 'react'
import CountDownBottom from './CountDownBottom';
import { Link } from 'react-router-dom';
import LazyLoadImageComponent from '../OptimizeComp/LazyLoadImageComponent';

const EventCardBottom = ({ data1, content }) => {

    return (
        <>
            <div className="DronesDealsoftheDay-parent">
                <div className='DronesDealsoftheDay-sub-parent'
                // style={{ backgroundImage: `url(${content?.bgImage?.image?.url})` }}
                >                    <div className="row">
                        <div className="col-md-12 col-lg-5">
                            <div className='DronesDealsoftheDay-sub1'>
                                {content?.MainImage?.image?.url && <div className='DronesDeals-image'>
                                    {/* <img src={content?.MainImage?.image?.url} alt="event" /> */}
                                    <LazyLoadImageComponent alt={"event"} height={"100%"} width={"100%"} img={content?.MainImage?.image?.url} />
                                </div>}
                                {content?.title && <h3>{content?.title}</h3>}
                            </div>
                        </div>
                        <div className="col-md-12 col-lg-7">
                            <div className='DronesDealsoftheDay-sub2'>
                                <div className="row">
                                    <div className="col-md-9 col-lg-9">
                                        <CountDownBottom data={data1} />
                                    </div>
                                    {content?.btnTitle &&
                                        <div className="col-md-3 event-btn-bottom">
                                            <Link to={`/event/${data1?.slug}`}>
                                                {content?.btnTitle}
                                            </Link>
                                        </div>}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default EventCardBottom