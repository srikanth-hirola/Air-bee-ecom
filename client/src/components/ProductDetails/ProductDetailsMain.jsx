// import React, { useState } from 'react'
// import { LapProductdet } from '../Product1details/LapProductdet'
// import { ProductTapContent } from '../Product1details/ProductTapContent'
// import useDetailsPageHandler from '../../hooks/useDetailsPageHandler';
// import { Product1Cramp } from '../Product1details/ProductCramp';
// import { MobileCase1 } from '../Product1details/MobileCase1';
// import { RatedProducts } from '../Product1details/RatedProducts';
// import { StyleConfig } from '../../utils/StyleConfig';
// import Loader from '../../utils/Loader';

// const ProductDetailsMain = () => {

//     const [data, setData] = useState(null);
//     const [active, setActive] = useState(false);
//     const [seller, setSeller] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const styles = StyleConfig();

//     useDetailsPageHandler({ data, setActive, setData, setLoading, setSeller })

//     return (
//         <>
//             {loading ?
//                 <Loader />
//                 :
//                 <>
//                     {data ?
//                         <>
//                             <Product1Cramp name={data?.name} />
//                             <LapProductdet data={data} active={active} seller={seller} styles={styles} key={1} />
//                             <ProductTapContent data={data} />
//                             <MobileCase1 data={data} />
//                             <RatedProducts data={data} />
//                         </> :
//                         <p>No Product Found</p>
//                     }
//                 </>
//             }
//         </>
//     )
// }

// export default ProductDetailsMain
import React, { useState, useEffect } from 'react';
import { LapProductdet } from '../Product1details/LapProductdet';
import { ProductTapContent } from '../Product1details/ProductTapContent';
import useDetailsPageHandler from '../../hooks/useDetailsPageHandler';
import { Product1Cramp } from '../Product1details/ProductCramp';
import { MobileCase1 } from '../Product1details/MobileCase1';
import { RatedProducts } from '../Product1details/RatedProducts';
import { StyleConfig } from '../../utils/StyleConfig';
import Loader from '../../utils/Loader';

const ProductDetailsMain = () => {
    const [data, setData] = useState(null);
    const [active, setActive] = useState(false);
    const [seller, setSeller] = useState(null);
    const [loading, setLoading] = useState(true);
    const styles = StyleConfig();

    useDetailsPageHandler({ data, setActive, setData, setLoading, setSeller });

    useEffect(() => {
        // Scroll to a height of 500px in the viewport
        window.scrollTo(0, 5000);
    }, []); // Empty dependency array ensures this effect runs only once after the initial render

    return (
        <>
            {loading ? (
                <Loader />
            ) : (
                <>
                    {data ? (
                        <>
                            <Product1Cramp name={data?.name} />
                            <LapProductdet data={data} active={active} seller={seller} styles={styles} key={1} />
                            <ProductTapContent data={data} />
                            <MobileCase1 data={data} />
                            <RatedProducts data={data} />
                        </>
                    ) : (
                        <p>No Product Found</p>
                    )}
                </>
            )}
        </>
    );
};

export default ProductDetailsMain;
