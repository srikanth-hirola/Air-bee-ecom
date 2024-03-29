/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';

export const AboutData = ({ content }) => {

    const [productCount, setProductCount] = useState(0);
    const [visitorCount, setVisitorCount] = useState(0);
    const [productsDeliveredCount, setProductsDeliveredCount] = useState(0);
    const [happyCustomersCount, setHappyCustomersCount] = useState(0);

    const formatCount = (count) => {
        if (count >= 1000) {
            const abbreviatedCount = Math.floor(count / 1000);
            return `${abbreviatedCount}k+`;
        }
        return `${count}+`;
    };

    useEffect(() => {
        const targetProductCount = 100000;
        const targetVisitorCount = 70000;
        const targetProductsDeliveredCount = 20000;
        const targetHappyCustomersCount = 100;

        const animationDuration = 3000; // 3 seconds
        const steps = 60; // Number of steps

        const productStep = Math.ceil(targetProductCount / steps);
        const visitorStep = Math.ceil(targetVisitorCount / steps);
        const deliveredStep = Math.ceil(targetProductsDeliveredCount / steps);
        const happyStep = Math.ceil(targetHappyCustomersCount / steps);

        let stepCount = 0;

        const interval = setInterval(() => {
            setProductCount((prevCount) => Math.min(prevCount + productStep, targetProductCount));
            setVisitorCount((prevCount) => Math.min(prevCount + visitorStep, targetVisitorCount));
            setProductsDeliveredCount((prevCount) => Math.min(prevCount + deliveredStep, targetProductsDeliveredCount));
            setHappyCustomersCount((prevCount) => Math.min(prevCount + happyStep, targetHappyCustomersCount));

            stepCount += 1;

            // Check if all counts have reached their target values
            if (stepCount >= steps) {
                clearInterval(interval);
            }
        }, animationDuration / steps);

        // Cleanup the interval on component unmount
        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <div className="about-couting-instant">
                <div className="about-couting-instant-sub">
                    <div className="container">
                        <div className="about-couting-instant-heading">
                            {content?.tagTitle && <h6>{content?.tagTitle}</h6>}
                            {content?.title && <h2>{content?.title}</h2>}
                            {content?.summary && <p>{content?.summary}</p>}
                        </div>
                        {content?.achivements?.length > 0 &&
                            <div className="row about-couting-instant-subject">
                                {content?.achivements?.map((item, i) => (
                                    <div className="col-md-3 col-sm-6 col-6" key={i}>
                                        <div className="about-couting-instant-text">
                                            <h2>{formatCount(item?.title)}</h2>
                                            <p>{item?.subTitle}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        }
                    </div>
                </div>
            </div>
        </>
    );
};
