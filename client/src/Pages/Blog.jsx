import React from 'react'
import DronesHeader from '../components/Headers/DronesHeader'
import DronesHeader2 from '../components/Headers/DronesHeader2'
import DronesFooter from '../components/DronesHomepage/DronesFooter'
import BlogBanner from '../components/blog/BlogBanner'

const Blog = () => {
  return (
<>

    <DronesHeader/>
    <DronesHeader2/>
    <BlogBanner/>
    <>
       <div className="blog-page">
        <div className="blog-sec">
        <section class="container">
<div className="row">
    <div className="col-md-12 col-sm-12 col-lg-4 col-xl-4 col-xxl-4">
        <div class="card-container">
  <div class="card-image">
    <img src="/DronesHomepage/blog-1.png" alt="a brand new sports car" />
  </div>
  <div class="card-body">
    <span class="card-badge card-badge-blue">Iot</span>
    <h1>
    Navigating the IoT Landscape: A Guide to Air Bee's IoT Solutions

    </h1>
    <p class="card-subtitle">
    Delve into the Internet of Things (IoT) with Air Bee's comprehensive solutions. Our blog provides insights into the latest trends, applications, and how our IoT products can transform your projects.
    </p>
 
  </div>
</div>
    </div>
    <div className="col-md-12 col-sm-12 col-lg-4 col-xl-4 col-xxl-4">
        <div class="card-container">
  <div class="card-image">
    <img src="/DronesHomepage/blog-2.png" alt="a brand new sports car" />
  </div>
  <div class="card-body">
    <span class="card-badge card-badge-blue">Electronics</span>
    <h1>
    Behind the Scenes: Meet the Faces Shaping Air Bee's Embedded Electronics
    </h1>
    <p class="card-subtitle">
    Take a closer look at the dedicated team driving innovation at Air Bee. Our blog introduces you to the passionate individuals crafting quality embedded electronics and shaping the future of the industry.
    </p>
   
  </div>
</div>
    </div>
    <div className="col-md-12 col-sm-12 col-lg-4 col-xl-4 col-xxl-4">
        <div class="card-container">
  <div class="card-image">
    <img src="/DronesHomepage/blog-3.png" alt="a brand new sports car" />
  </div>
  <div class="card-body">
    <span class="card-badge card-badge-blue">Tech</span>
    <h1>
    Tech Trends 2024: A Sneak Peek into Air Bee's Cutting-Edge Offerings
    </h1>
    <p class="card-subtitle">
    Stay ahead of the curve with our blog highlighting the latest technology trends in 2024. Explore how Air Bee's products align with the evolving landscape, providing insights into the future of embedded electronics.
    </p>

  </div>
</div>
    </div>
</div>

</section>
        </div>
       </div>
<DronesFooter/>
</>

    </>
  )
}

export default Blog