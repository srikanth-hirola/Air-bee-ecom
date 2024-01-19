import React from 'react';
import { ProductDescription } from './ProductDescription';
import AddSpecifications from './AddSpecifications';
import AddSpecification2 from './AddSpecification2';

const Description = ({
    specification,
    setSpecification,
    specification2,
    setSpecification2,
    formData,
    handleFormDataChange,
    productDetails, setProductDetails
}) => {

    console.log(productDetails)
    return (
        <>
            <div>
                <label className="pb-2">
                    Description <span className="text-red-500">*</span>
                </label>
                <textarea
                    cols="30"
                    required
                    rows="8"
                    type="text"
                    name="description"
                    value={formData.description}
                    className="mt-2 appearance-none block w-full pt-2 px-3 border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    onChange={handleFormDataChange}
                    placeholder="Enter your product description..."
                ></textarea>
            </div>
            <br />
            <div>
                <label className="pb-2">
                    Bullet points<span className="text-red-500">*</span> <span className='text-gray-500 text-[13px]'>(heading is optional)</span>
                </label>
                <AddSpecifications
                    specification={specification}
                    setSpecification={setSpecification}
                />
            </div>
            <br />
            <div>
                <label className="pb-2">
                    Specifications<span className="text-red-500">*</span> <span className='text-gray-500 text-[13px]'>(heading is optional)</span>
                </label>
                <AddSpecification2
                    specification2={specification2}
                    setSpecification2={setSpecification2}
                />
            </div>
            <br />
            <div>
                <label className="pb-2">
                    Product Description
                </label>
                <ProductDescription productDetails={productDetails}
                    setProductDetails={setProductDetails} />
            </div>
            <br />
        </>
    );
};

export default Description;
