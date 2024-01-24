import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
export const Product1Header = () => {
  return (
    <div className='cantactUs1-header'>
      <div className='container'>
        <Navbar expand="lg" >
          <Container fluid className='container-xxl'>
            <Navbar.Brand href="#" ><img src="logo.png" alt="logo" className=' w-[120px] mx-auto' /></Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" className='text-center' />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className='col-md-6 '
                style={{ maxHeight: '100px' }}
                navbarScroll

              >

              </Nav>

              <div className="col-md-6">
                <div className='contact-header-icons row'>
                  <div className='Contact-icon-image col-md-3'>
                    <img src="/shoppage1/headericon1.jpg" alt="" className='' />
                    <p>My cart</p>
                  </div>
                  <div className='Contact-icon-image col-md-3'>
                    <img src="/shoppage1/headericon2.jpg" alt="" />
                    <p>Orders</p>
                  </div>
                  <div className='Contact-icon-image col-md-3'>
                    <img src="/shoppage1/headericon3.jpg" alt="" />
                    <p>Message</p>
                  </div>
                  <div className='Contact-icon-image col-md-3'>
                    <img src="/shoppage1/headericon4.jpg" alt="" />
                    <p>Profile</p>
                  </div>
                </div>
              </div>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>

    </div>

  )
}
