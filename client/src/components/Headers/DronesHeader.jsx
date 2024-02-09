import React, { memo, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import SearchBar from '../Search/SearchBar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus, faHeart, faMessage, faUser } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux'
import { StyleConfig } from '../../utils/StyleConfig'
import { socketId } from './socket'
import { createNewReceivedMessage, updateReceivedMessage } from '../../redux/actions/socket'
import LazyLoadImageComponent from '../OptimizeComp/LazyLoadImageComponent'
import { Helmet } from 'react-helmet-async'



const DronesHeader = memo(() => {

  const { wishlist } = useSelector((state) => state.wishlist);
  const { cart } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.user);
  const { newMessageDate } = useSelector((state) => state.messages);
  const dispatch = useDispatch();
  const [msgLength, setMsgLength] = useState(0)


  const styles = StyleConfig();

  const [arrivalMessage, setArrivalMessage] = useState(null);

  useEffect(() => {
    if (newMessageDate) {
      let found = newMessageDate?.find((item) => item?.userId === user?._id)
      if (found) {
        setMsgLength(found?.messageLength)
      }
    }
  }, [newMessageDate, user?._id])

  useEffect(() => {
    socketId.on("getMessage", (data) => {
      setArrivalMessage({
        sender: data.senderId,
        text: data.text,
        createdAt: Date.now(),
      });
    });
  }, []);

  useEffect(() => {
    let data = {
      userId: user?._id,
      messageLength: 1
    }
    if (arrivalMessage) {
      let found = newMessageDate?.find((item) => item?.userId === data?.userId)
      if (found) {
        dispatch(updateReceivedMessage(data))
      } else {
        dispatch(createNewReceivedMessage(data))
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [arrivalMessage]);




  return (
    <>
      <Helmet>
        <link
          rel="preload"
          as="image"
          href={styles?.logo?.url}
        />
      </Helmet>
      <div className='DronesHeader-parent bg-light '>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              <div className='Drones-header-logo'>
                <LazyLoadImageComponent alt={"logo"} height={"100%"} width={"100%"} img={styles?.logo?.url} />

                {/* <img src={styles?.logo?.url} alt="logo" lazy /> */}
              </div>
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <div className='Drones-header-input-parent'>
                <SearchBar />
              </div>
              <form className="d-flex">
                <div className='Drones-header-icons'>
                  <Link to="/cart">
                    <div className='Drones-header-icon drones-header-cart'>
                      {/* <FontAwesomeIcon icon={faCartShopping} style={{ color: '#8b96a5', fontSize: '20px' }} /> */}
                      <FontAwesomeIcon icon={faCartPlus} style={{ color: '#8b96a5', fontSize: '20px' }} />

                      <span className="absolute right-0 top-0 rounded-full bg-[#fa8232] w-4 h-4 top right p-0 m-0 text-white font-mono text-[12px] leading-tight text-center">
                        {cart && cart.length}
                      </span>
                    </div>
                  </Link>
                  <Link to="/wishlist">
                    <div className='Drones-header-icon drones-header-cart drones-header-wishlist'>
                      {/* <FontAwesomeIcon icon={faHeart} style={{ color: '#8b96a5', fontSize: '20px' }} /> */}
                      <FontAwesomeIcon icon={faHeart} style={{ color: '#8b96a5', fontSize: '20px' }} />
                      <span className="absolute right-0 top-0 rounded-full bg-[#fa8232] w-4 h-4 top right p-0 m-0 text-white font-mono text-[12px] leading-tight text-center">
                        {wishlist && wishlist.length}
                      </span>
                    </div>
                  </Link>
                  <Link to="/inbox">
                    <div className='Drones-header-icon drones-header-wishlist drones-header-cart'>
                      <FontAwesomeIcon icon={faMessage} style={{ color: '#8b96a5', fontSize: '20px' }} />
                      <span className="absolute right-0 top-0 rounded-full bg-[#fa8232] w-4 h-4 top right p-0 m-0 text-white font-mono text-[12px] leading-tight text-center">
                        {msgLength}
                      </span>
                    </div>
                  </Link>
                  <Link to="/profilepage">
                    <div className='Drones-header-icon'>
                      <FontAwesomeIcon icon={faUser} style={{ color: '#8b96a5', fontSize: '20px' }} />
                    </div>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </nav>

      </div>

    </>
  )
})

export default DronesHeader