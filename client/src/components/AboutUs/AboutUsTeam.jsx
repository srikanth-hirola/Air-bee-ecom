import React from 'react'
const AboutUsTeam = () => {
    const mappingdata = [
        {
            img: '/DronesHomepage/team1.png',
            title1: 'Martin Donin',
            subtitle: 'Software Engineer',
            text: 'There are many variations of passages of Lorem Ipsum available'
        },
        {
            img: '/DronesHomepage/team2.png',
            title1: 'Martin Donin',
            subtitle: 'Software Engineer',
            text: 'There are many variations of passages of Lorem Ipsum available'
        },
        {
            img: '/DronesHomepage/team3.png',
            title1: 'Martin Donin',
            subtitle: 'Software Engineer',
            text: 'There are many variations of passages of Lorem Ipsum available'
        },
        {
            img: '/DronesHomepage/team4.png',
            title1: 'Martin Donin',
            subtitle: 'Software Engineer',
            text: 'There are many variations of passages of Lorem Ipsum available'
        },
        {
            img: '/DronesHomepage/team5.png',
            title1: 'Martin Donin',
            subtitle: 'Software Engineer',
            text: 'There are many variations of passages of Lorem Ipsum available'
        },
        {
            img: '/DronesHomepage/team6.png',
            title1: 'Martin Donin',
            subtitle: 'Software Engineer',
            text: 'There are many variations of passages of Lorem Ipsum available'
        },
        {
            img: '/DronesHomepage/team7.png',
            title1: 'Martin Donin',
            subtitle: 'Software Engineer',
            text: 'There are many variations of passages of Lorem Ipsum available'
        },
        {
            img: '/DronesHomepage/team8.png',
            title1: 'Martin Donin',
            subtitle: 'Software Engineer',
            text: 'There are many variations of passages of Lorem Ipsum available'
        }
    ]
    return (
        <>
            <div className='AboutUsTeam-parent'>
                <div className="container">
                    <div className='AboutUsTeam-main-text'>
                        <h3>Our Team</h3>
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered in some form, by injected humour</p>
                    </div>
                    <div className='AboutUsTeam-sub'>
                        <div className="row">

                            {mappingdata.map((item, index) => (
                                <div className="col-sm-6 col-md-4 col-lg-3">
                                    <div key={index} className='card'>
                                        <div className='AboutUsTeam-sub-card-image'>
                                            <img src={item?.img} alt="" />
                                        </div>
                                        <div className="card-body">
                                            <h6>{item?.title1} </h6>
                                            <p>{item?.subtitle} </p>
                                            <p>{item?.text}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}

                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default AboutUsTeam;