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
                        <h3>Meet the minds behind Air Bee</h3>
                        <p>At Air Bee, our team is the heartbeat of our success. Comprising dedicated professionals with a passion for electronics, we work cohesively to bring you top-notch products and exceptional service. Meet the minds behind Air Bee, where innovation and expertise converge to shape the future of embedded electronics.</p>
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