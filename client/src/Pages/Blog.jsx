import React, { useState } from 'react'
import DronesHeader from '../components/Headers/DronesHeader'
import DronesHeader2 from '../components/Headers/DronesHeader2'
import DronesFooter from '../components/DronesHomepage/DronesFooter'
import BlogBanner from '../components/blog/BlogBanner'
import BlogsList from '../components/blog/BlogsList'
import { StyleConfig } from '../utils/StyleConfig'
import Loader from '../utils/Loader'
import usePageSEOHandle from '../hooks/Site-config/usePageSEOHandle'
import SEOHelmet from '../components/SEOHelmet'

const Blog = () => {
  const [isLoading, setLoading] = useState(true);
  const styles = StyleConfig();
  const [seoDetails, setSEODetails] = useState()

  usePageSEOHandle({ pageName: "blogSEO", setState: setSEODetails, setLoading })

  return (
    <>
      <SEOHelmet seoDetails={seoDetails} />
      {
        isLoading ? <Loader />
          :
          <>
            <DronesHeader />
            <DronesHeader2 />
            <BlogBanner content={styles?.blogSecOne} />
            <>
              <BlogsList />
              <DronesFooter />
            </>

          </>
      }
    </>
  )
}

export default Blog