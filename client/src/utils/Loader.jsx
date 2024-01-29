// import React from 'react'

// const Loader = () => {
//     return (
//         <div className='loader-comp' >
//             <h3>Loading...</h3>
//         </div>
//     )
// }

// export default Loader

// // import React, { useState, useEffect } from 'react';
// // // import './AnimatedComponent.css';

// // const Loader = () => {
// //   const [isLoading, setIsLoading] = useState(true);

// //   useEffect(() => {
// //     const fetchData = async () => {
// //       // Simulate fetching data or other asynchronous operations
// //       await new Promise((resolve) => setTimeout(resolve, 100));
// //       setIsLoading(false);
// //     };

// //     fetchData();
// //   }, []);

// //   return (
// //     <div className="animated-component">
// //       {isLoading ? (
// //         <div className="loading-animation">
// //           <img
// //             src="https://res.cloudinary.com/duusv7nak/image/upload/v1706155713/siteImages/blizej8nowg95cgjpah7.jpg" // Replace with your image URL
// //             alt="Loading Animation"
// //           />
// //         </div>
// //       ) : (
// //         <div className="your-content">
// //           {/* Your actual content goes here */}
// //           {/* <p>This is your content</p> */}
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default Loader;


import React, { useEffect } from 'react';
// import './styles.css'; // Import your CSS file

const Loader = () => {
  useEffect(() => {
    // const openMediumLink = () => {
    //   window.open("https://medium.com/@nitinmaurya969543");
    // };

    const timeoutId = setTimeout( 500);

    // Clear the timeout if the component is unmounted
    return () => clearTimeout(timeoutId);
  }, []); // Empty dependency array ensures useEffect runs once after initial render

  return (
    <div className="loader-comp">
    <div className="socket">
      <div className="gel center-gel">
        <div className="hex-brick h1"></div>
        <div className="hex-brick h2"></div>
        <div className="hex-brick h3"></div>
      </div>
      <div className="gel c1 r1">
        <div className="hex-brick h1"></div>
        <div className="hex-brick h2"></div>
        <div className="hex-brick h3"></div>
      </div>
      <div className="gel c2 r1">
        <div className="hex-brick h1"></div>
        <div className="hex-brick h2"></div>
        <div className="hex-brick h3"></div>
      </div>
      {/* Repeat the pattern for other gel elements */}
    </div>
    </div>
  );
};

export default Loader;
