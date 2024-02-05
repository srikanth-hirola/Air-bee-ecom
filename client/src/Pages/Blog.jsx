import React from 'react'
import DronesHeader from '../components/Headers/DronesHeader'
import DronesHeader2 from '../components/Headers/DronesHeader2'
import DronesFooter from '../components/DronesHomepage/DronesFooter'
import BlogBanner from '../components/blog/BlogBanner'
import BlogsList from '../components/blog/BlogsList'
import { StyleConfig } from '../utils/StyleConfig'

const Blog = () => {
  const styles = StyleConfig();
  return (
    <>

      <DronesHeader />
      <DronesHeader2 />
      <BlogBanner content={styles?.blogSecOne} />
      <>
        <BlogsList />
        <DronesFooter />
      </>

    </>
  )
}

export default Blog