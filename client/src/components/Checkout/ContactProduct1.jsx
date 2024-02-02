import React from 'react'

export const ContactProduct1 = ({ content }) => {
    console.log(content)

    return (
        <>
            {content?.features?.length > 0 &&
                <div className='ContactProduct1'>
                    <div className='ContactProduct1-sub'>
                        <div className='container'>
                            <div className='row'>
                                {content?.features?.map((item, i) => (
                                    <div className='col-md-4 text-center' key={i}>
                                        {item?.image?.url && <div className='ContactProduct1-image-1'>
                                            <img src={item?.image?.url} alt="pic" />
                                        </div>}
                                        <div className='text1-contact'>
                                            {item?.title && <h6>{item?.title}</h6>}
                                            {item?.summary && <p>{item?.summary}</p>}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}