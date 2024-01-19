import React from 'react';

const VitalInfo = ({ formData, handleFormDataChange, setFormData }) => {
    return (
        <>
            <div>
                <label className="pb-2">
                    model <span className="text-red-500">*</span>
                </label>
                <input
                    type="text"
                    name="model"
                    value={formData.model}
                    className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    onChange={handleFormDataChange}
                    placeholder="A235"
                />
            </div>
            <br />
            <div>
                <label className="pb-2">No of items in the box <span className="text-red-500">*</span> </label>
                <input
                    type="number"
                    name="noItem"
                    value={formData.noItem}
                    placeholder='Number of items in box'
                    className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    onChange={handleFormDataChange}
                />
            </div>
            <br />
            <div>
                <label className="pb-2">What is in the box? <span className="text-red-500">*</span> </label>
                <input
                    type="text"
                    name="itemname"
                    value={formData.itemname}
                    placeholder='Item name..'
                    className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    onChange={handleFormDataChange}
                />
            </div>
            <br />
            {(!formData.showInputs && !formData.attributeStock) && (
                <div>
                    <label className="pb-2">
                        Stock <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="number"
                        name="stock"
                        value={formData.stock}
                        placeholder='Total number of stock availabe'
                        className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        onChange={handleFormDataChange}
                    />
                </div>
            )}
            <br />
            <div>
                <label className="pb-2">
                    COD Available ? <span className="text-red-500">*</span>
                </label>
                <div className="d-flex ">
                    <div className="mr-2">
                        <input
                            type="radio"
                            name="codAvailable"
                            className="mr-1"
                            onChange={(e) => {
                                setFormData({ ...formData, codAvailable: true });
                            }}
                            checked={formData.codAvailable && true}
                        />
                        <label className="pb-2">Yes</label>
                    </div>
                    <div>
                        <input
                            type="radio"
                            name="codAvailable"
                            className="mr-1"
                            onChange={(e) => {
                                setFormData({ ...formData, codAvailable: false });
                            }}
                            checked={!formData.codAvailable && true}
                        />
                        <label className="pb-2">No</label>
                    </div>
                </div>
            </div>
            <br />
            <div>
                <label className="pb-2">
                    Refund Available ? <span className="text-red-500">*</span>
                </label>
                <div className="d-flex ">
                    <div className="mr-2">
                        <input
                            type="radio"
                            name="assemblyReq"
                            className="mr-1"
                            onChange={(e) => {
                                setFormData({ ...formData, refundAvailable: true });
                            }}
                            checked={formData.refundAvailable && true}
                        />
                        <label className="pb-2">Yes</label>
                    </div>
                    <div>
                        <input
                            type="radio"
                            name="assemblyReq"
                            className="mr-1"
                            onChange={(e) => {
                                setFormData({ ...formData, refundAvailable: false });
                            }}
                            checked={!formData.refundAvailable && true}
                        />
                        <label className="pb-2">No</label>
                    </div>
                </div>
            </div>
            <br />
            <div>
                <label className="pb-2">
                    <b>Item Dimensions L X W X H</b>
                    <span>
                        {formData.showInputs && (
                            <div>
                                <label className="pb-2">Applies for all Varients</label>
                                <input
                                    className='mx-2'
                                    type="checkbox"
                                    onChange={(e) => {
                                        formData.ataDimension === false
                                            ? setFormData({ ...formData, ataDimension: true })
                                            : setFormData({ ...formData, ataDimension: false });
                                    }}
                                    checked={formData.ataDimension === true ? true : false}
                                />
                            </div>
                        )}
                    </span>
                </label>
                <div>
                    <label className="mt-2">Item length head to toe <span className="text-gray-500 text-[13px]">(in cm)</span> </label>
                    <br />
                    <input
                        type="number"
                        name="itemLength"
                        value={formData.itemLength}
                        className="w-half mt-2 mr-2 border pl-2 h-[35px] rounded-[5px]"
                        onChange={handleFormDataChange}
                    />
                    {/* <select
            className="w-half mt-2 border h-[35px] rounded-[5px]"
            name="itemLengthUnit"
            value={formData.itemLengthUnit}
            onChange={handleFormDataChange}
          >
            <option value="Centemeter">Centemeter</option>
            <option value="Meter">Meter</option>
            <option value="Feet">Feet</option>
          </select> */}
                </div>
                <div>
                    <label className="mt-2">Item width side to side <span className="text-gray-500 text-[13px]">(in cm)</span> </label>
                    <br />
                    <input
                        type="number"
                        name="itemWidth"
                        value={formData.itemWidth}
                        className="w-half mt-2 mr-2 border pl-2 h-[35px] rounded-[5px]"
                        onChange={handleFormDataChange}
                    />
                    {/* <select
            className="w-half mt-2 border h-[35px] rounded-[5px]"
            name="itemWidthUnit"
            value={formData.itemWidthUnit}
            onChange={handleFormDataChange}
          >
            <option value="Centemeter">Centemeter</option>
            <option value="Meter">Meter</option>
            <option value="Feet">Feet</option>
          </select> */}
                </div>
                <div>
                    <label className="mt-2">Item Height floor to top <span className="text-gray-500 text-[13px]">(in cm)</span> </label>
                    <br />
                    <input
                        type="number"
                        name="itemHeight"
                        value={formData.itemHeight}
                        className="w-half mt-2 mr-2 border pl-2 h-[35px] rounded-[5px]"
                        onChange={handleFormDataChange}
                    />
                    {/* <select
            className="w-half mt-2 border h-[35px] rounded-[5px]"
            name="itemHeightUnit"
            value={formData.itemHeightUnit}
            onChange={handleFormDataChange}
          >
            <option value="Centemeter">Centemeter</option>
            <option value="Meter">Meter</option>
            <option value="Feet">Feet</option>
          </select> */}
                </div>
            </div>
            <div>
                <label className="mt-2">
                    Item Weight <span className="text-red-500">*</span><span className="text-gray-500 text-[13px]">(in kg)</span>
                    {formData.showInputs && (
                        <div>
                            <label className="pb-2">Applies for all Varients </label>
                            <input
                                className='mx-2'
                                type="checkbox"
                                name="ataWeight"
                                value={formData.ataWeight}
                                onChange={(e) => {
                                    formData.ataWeight === false
                                        ? setFormData({ ...formData, ataWeight: true })
                                        : setFormData({ ...formData, ataWeight: false });
                                }}
                                checked={formData.ataWeight === true ? true : false}
                            />
                        </div>
                    )}
                </label>
                <br />
                <input
                    type="number"
                    name="itemWeight"
                    value={formData.itemWeight}
                    className="w-half mt-2 mr-2 border pl-2 h-[35px] rounded-[5px]"
                    onChange={handleFormDataChange}
                />
                {/* <select
          className="w-half mt-2 border h-[35px] rounded-[5px]"
          name="itemWeightUnit"
          value={formData.itemWeightUnit}
          onChange={handleFormDataChange}
        >
          <option value="Gram">Gram</option>
          <option value="Kilogram">Kilogram</option>
          <option value="Ton">Ton</option>
        </select> */}
            </div>
            <br />
            <div>
                <label className="pb-2">
                    Is Assembly required ?
                </label>
                <input
                    className='mx-2'
                    type="checkbox"
                    name="assemblyReq"
                    onChange={(e) => {
                        formData.assemblyReq === false
                            ? setFormData({ ...formData, assemblyReq: true })
                            : setFormData({ ...formData, assemblyReq: false });
                    }}
                    checked={formData.assemblyReq ? true : false}
                />
            </div>
            <br />
            {formData.assemblyReq && (
                <>
                    <div>
                        <label className="pb-2">
                            Number Of Pieces <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="number"
                            name="noOfPieces"
                            value={formData.noOfPieces}
                            className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            onChange={handleFormDataChange}
                        />
                    </div>
                    <br />
                    <div>
                        <label className="pb-2">
                            Included Components<span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            name="components"
                            value={formData.components}
                            className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            onChange={handleFormDataChange}
                        />
                    </div>
                    <br />
                    <div>
                        <label className="pb-2">
                            Assembly Instructions<span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            name="assemblyInstruction"
                            value={formData.assemblyInstruction}
                            className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            onChange={handleFormDataChange}
                        />
                    </div>
                    <br />
                </>
            )}
            {!formData.showInputs && (
                <>
                    <div>
                        <label className="pb-2">
                            Size<span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            name="size"
                            placeholder='Size displays in the serch terms'
                            value={formData.size}
                            className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            onChange={handleFormDataChange}
                        />
                    </div>
                    <br />
                    <div>
                        <label className="pb-2">
                            Color<span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            name="color"
                            value={formData.color}
                            className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            onChange={handleFormDataChange}
                        />
                    </div>
                    <br />
                </>
            )}
            <div>
                <label className="pb-2">
                    Material Type<span className="text-red-500">*</span>
                    {formData.showInputs && (
                        <div>
                            <label className="pb-2">Applies for all Varients</label>
                            <input
                                className='mx-2'
                                type="checkbox"
                                name="ataMaterials"
                                onChange={(e) => {
                                    formData.ataMaterials === false
                                        ? setFormData({ ...formData, ataMaterials: true })
                                        : setFormData({ ...formData, ataMaterials: false });
                                }}
                                checked={formData.ataMaterials === true ? true : false}
                            />
                        </div>
                    )}
                </label>
                <input
                    type="text"
                    name="materialType"
                    value={formData.materialType}
                    className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    onChange={handleFormDataChange}
                />
            </div>
            <br />
            <div>
                <label className="pb-2">
                    Manufacturer<span className="text-red-500">*</span>
                </label>
                <input
                    type="text"
                    name="manufacturer"
                    value={formData.manufacturer}
                    className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    onChange={handleFormDataChange}
                />
            </div>
            <br />
        </>
    );
};

export default VitalInfo;
