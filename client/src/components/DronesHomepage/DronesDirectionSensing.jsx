import React from 'react'
// import './Drones.css'
import DronesEyePlayground from './DronesEyePlayground'
const DronesDirectionSensing = () => {
    return (
        <>
            <div className='DronesDirectionSensing-parent'>
                <div className="row">
                    <div className="col-md-4">
                        <div className='DronesDirectionSEnsingsub1'>
                            <div className="DronesDirectionSensing-image">
                                <img src="./DronesHomepage/image 129.png" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-8">
                    <div className='DRonesDirectionSnsing-right'>
                    <div className='DronesDirectionSEnsingsub1-text'>
                                <div className='DronesDirectionSEnsingsub1-text-heading'>
                                    <h1>Direction sensing</h1>
                                </div>
                                <p>The limitations and different types of object avoidance in this article I’ll go through the best drones with obstacle avoidance.</p>
                            </div>
                       <div className="DronesDirectionSEnsingsub2-parent">
                            <div className='DronesDirectionSEnsingsub2-sub1'>
                                <div className='DronesDirectionSEnsingsub2-sub1-image'>
                                    <img src="./DronesHomepage/Avatar.png" alt="" />
                                </div>
                                <p>Directions Sensing</p>
                            </div>
                            <div className='DronesDirectionSEnsingsub2-sub1'>
                                <div className='DronesDirectionSEnsingsub2-sub1-image'>
                                    <img src="./DronesHomepage/Avatar.png" alt="" />
                                </div>
                                <p>Directions Sensing</p>
                            </div>
                            <div className='DronesDirectionSEnsingsub2-sub1'>
                                <div className='DronesDirectionSEnsingsub2-sub1-image'>
                                    <img src="./DronesHomepage/Avatar.png" alt="" />
                                </div>
                                <p>Directions Sensing</p>
                            </div>
                        </div>


                    </div>
                    </div>
                </div>

            </div>
            <DronesEyePlayground/>
        </>

    )
}

export default DronesDirectionSensing