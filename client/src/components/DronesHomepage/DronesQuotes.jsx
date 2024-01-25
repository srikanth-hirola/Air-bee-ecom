import React from 'react'

const DronesQuotes = () => {
    return (
        <>
            <div className='DronesQuotes-parent'>
                <div className='DronesQuotes-parent-bg-image'style={{backgroundImage:`url('./DronesHomepage/image 102.png')`}}>
                <div className='row' >
                    <div className="col-md-6">
                        <div className='DronesQuotes-sub-left'>
                            <h5>Can't Find the Embedded Product You Need? Inquire Now for Tailored Solutions!</h5>
                            <p>kindly provide detailed information of required product, including specifications, pricing, and any available customization options.</p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className='DronesQuotes-sub-right'>
                            <form action="">
                                <h6>Get Quote for a Desired Products</h6>
                                <input className='Drones-Quotes-input1' type="text" placeholder='What item You need ?' /><br />
                                <textarea name="" id="" cols="25" rows="3"></textarea><br />
                                
                                <div className='DronesQuotes-sub-right-dropdown'>
                                <input className='Drones-Quotes-input2' type="text" placeholder='Quantity' />
                                    <select name="" id="">
                                        <option value="Pcs">Pcs</option>
                                        <option value="Pcs">Pcs</option>
                                        <option value="Pcs">Pcs</option>
                                        <option value="Pcs">Pcs</option>
                                    </select>
                                </div>
                                <button>Send Inquiry</button>
                            </form>
                        </div>
                    </div>


                </div>
                </div>
               

            </div>
        </>

    )
}

export default DronesQuotes;