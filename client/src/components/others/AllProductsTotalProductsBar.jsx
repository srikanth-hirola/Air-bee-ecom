import React from 'react'

const AllProductsTotalProductsBar = ({ length, bredCrumb }) => {

    return (
        <div className='row shoppage-row1'>
            <div className='col-md-6 col-sm-10 col-10'>
                <b class="fw-semibold">{length || 0} items</b> {bredCrumb[bredCrumb?.length - 1]}
            </div>
            <div className="col-md-6 col-sm-2 col-2 icons1-shoppage1">
                <div className=''>
                    {/* <DropdownButton id="dropdown-basic-button" title="Features">
                        <Dropdown.Item href="/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="/action-2">Another action</Dropdown.Item>
                        <Dropdown.Item href="/action-3">Something else</Dropdown.Item>
                    </DropdownButton> */}
                </div>
                <div className="gridicon1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M11 3H3V11H11V3Z" fill="#1C1C1C" />
                        <path d="M11 13H3V21H11V13Z" fill="#1C1C1C" />
                        <path d="M21 3H13V11H21V3Z" fill="#1C1C1C" />
                        <path d="M21 13H13V21H21V13Z" fill="#1C1C1C" />
                    </svg>
                </div>

            </div>
        </div>
    )
}

export default AllProductsTotalProductsBar