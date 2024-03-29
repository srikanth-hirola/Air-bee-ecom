import React from 'react'
import DronesHeader from '../components/Headers/DronesHeader'
import DronesHeader2 from '../components/Headers/DronesHeader2'
import BlogDetails from '../components/blog/BlogDetails'
import DronesFooter from '../components/DronesHomepage/DronesFooter'

const BlogDetailsPage = () => {
    return (
        <>

            <DronesHeader />
            <DronesHeader2 />
            <BlogDetails />
            <DronesFooter/>
        </>
    )
}

export default BlogDetailsPage