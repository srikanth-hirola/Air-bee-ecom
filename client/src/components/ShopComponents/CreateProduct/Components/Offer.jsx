import React from 'react';
import AddAttribute from './AddAttribute';

const Offer = ({
    attributes,
    setAttributes,
    formData,
    setFormData,
    handleFormDataChange,
}) => {
    const handleCheckBox = (e) => {
        const updatedColorInputs = { ...formData };
        updatedColorInputs.attributeStock = !updatedColorInputs.attributeStock;
        setFormData(updatedColorInputs);
    };



    return (
        <>
            <div>
                <label className="pb-2 font-[500]">
                    Product Tax Code <span className="text-red-500">*</span>
                </label>
                <input
                    type="text"
                    name="productTaxCode"
                    value={formData.productTaxCode}
                    className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    onChange={handleFormDataChange}
                    placeholder="Enter Tax Code..."
                />
            </div>
            <br />
            <div>
                <label className="pb-2 font-[500]">
                    Total Tax in %
                </label>
                <input
                    type="number"
                    name="taxPercent"
                    value={formData.taxPercent}
                    className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    onChange={handleFormDataChange}
                />
            </div>
            <br />

            {!formData.showInputs && (
                <>
                    <div>
                        <label className="pb-2 font-[500]">
                            SKU <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            name="SKU"
                            value={formData.SKU}
                            className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            onChange={handleFormDataChange}
                            placeholder="Enter SKU..."
                        />
                    </div>
                    <br />
                    <div>
                        <label className="pb-2 font-[500]">
                            Original Price <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="number"
                            name="originalPrice"
                            value={formData.originalPrice}
                            className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            onChange={handleFormDataChange}
                            placeholder="Enter your product price..."
                        />
                    </div>
                    <br />
                    <div>
                        <label className="pb-2 font-[500]">
                            Price (With Discount) <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="number"
                            name="discountPrice"
                            value={formData.discountPrice}
                            className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            onChange={handleFormDataChange}
                            placeholder="Enter your product price with discount..."
                        />
                    </div>
                    <br />
                    <div className="mt-4">
                        <label className="pb-2 font-[500]">
                            Have attributes ?<span className="text-red-500">*</span>
                        </label>
                        <br />
                        <div className="d-flex ">
                            <div className="mr-2">
                                <input
                                    type="radio"
                                    name="assemblyReq"
                                    className="mr-1"
                                    onChange={(e) => {
                                        setFormData({ ...formData, haveAttributes: true });
                                    }}
                                    checked={formData.haveAttributes && true}
                                />
                                <label className="pb-2 font-[500]">Yes</label>
                            </div>
                            <div>
                                <input
                                    type="radio"
                                    name="assemblyReq"
                                    className="mr-1"
                                    onChange={(e) => {
                                        setFormData({ ...formData, haveAttributes: false });
                                    }}
                                    checked={!formData.haveAttributes && true}
                                />
                                <label className="pb-2 font-[500]">No</label>
                            </div>
                        </div>
                    </div>
                    <br />
                    {formData.haveAttributes && (
                        <>
                            <div className="mt-4">
                                <label className="pb-2 font-[500]">
                                    Have Seperate Stock Limit for each selectable attribute value ?
                                    <span className="text-red-500">*</span>
                                </label>
                                <input
                                    className='mx-2'
                                    type="checkbox"
                                    name="assemblyReq"
                                    onChange={(e) => {
                                        handleCheckBox(e);
                                    }}
                                    checked={formData.attributeStock ? true : false}
                                />
                            </div>
                            <div>
                                <label className="pb-2 font-[500]">
                                    Attributes <span className="text-red-500">*</span>
                                </label>
                                <AddAttribute
                                    attributes={attributes}
                                    setAttributes={setAttributes}
                                    formData={formData}
                                />
                            </div>
                            <br />
                        </>
                    )}
                </>
            )}

            <div>
                <label className="pb-2 font-[500]">
                    Item Condition <span className="text-red-500">*</span>
                </label>
                <select
                    className="w-full mt-2 border h-[35px] rounded-[5px]"
                    name="itemCondition"
                    value={formData.itemCondition}
                    onChange={handleFormDataChange}
                >
                    <option value="New">New</option>
                    <option value="Refurbished">Refurbished</option>
                </select>
            </div>
            <br />
            <div>
                <label className="pb-2 font-[500]">Condition Note</label>
                <textarea
                    cols="30"
                    rows="8"
                    type="text"
                    name="conditionNote"
                    value={formData.conditionNote}
                    className="mt-2 appearance-none block w-full pt-2 px-3 border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    onChange={handleFormDataChange}
                    placeholder="Eg : Slightly used with no scratches or cracks..."
                ></textarea>
            </div>
            <br />
            <div>
                <label className="pb-2 font-[500]">Max Order Quantity</label>
                <input
                    type="number"
                    name="maxOrderQuantity"
                    value={formData.maxOrderQuantity}
                    className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    onChange={handleFormDataChange}
                />
            </div>
            <br />
            <div>
                <label className="pb-2 font-[500]">Can be gift messaged ?</label>
                <select
                    className="w-full mt-2 border h-[35px] rounded-[5px]"
                    name="giftMessaged"
                    value={formData.giftMessaged}
                    onChange={handleFormDataChange}
                >
                    <option>--Select--</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                </select>
            </div>
            <br />
            <div>
                <label className="pb-2 font-[500]">Is Gift Wrap Available ?</label>
                <select
                    className="w-full mt-2 border h-[35px] rounded-[5px]"
                    name="giftWrapAvailable"
                    value={formData.giftWrapAvailable}
                    onChange={handleFormDataChange}
                >
                    <option>--Select--</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                </select>
            </div>
            <br />
            <div>
                <label className="pb-2 font-[500]">
                    HSN Code <span className="text-red-500">*</span>
                </label>
                <input
                    type="number"
                    name="hsnCode"
                    value={formData.hsnCode}
                    className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    onChange={handleFormDataChange}
                />
            </div>
            <br />
        </>
    );
};

export default Offer;
