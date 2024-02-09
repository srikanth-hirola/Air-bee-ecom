import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'

const LazyLoadImageComponent = ({ img, height, width, alt }) => {
    return (
        <LazyLoadImage
            alt={alt}
            effect='blur'
            height={height}
            src={img}
            width={width} />
    )
}

export default LazyLoadImageComponent