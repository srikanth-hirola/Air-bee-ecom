import React from 'react';

const MoreDetails = ({ formData, handleFormDataChange, setFormData }) => {
    return (
        <>
            <div>
                <label className="pb-2">
                    Safety Warning <span className="text-red-500">*</span>
                </label>
                <input
                    type="text"
                    name="safetyWarning"
                    value={formData.safetyWarning}
                    className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    onChange={handleFormDataChange}
                    placeholder="Consult with a Doctor befor using this product"
                />
            </div>
            <br />
            <div>
                <label className="pb-2">
                    Package Dimensions <span className="text-red-500">*</span>
                </label>
                <div>
                    <label className="mt-2">Package Height <span className="text-gray-500 text-[13px]">(in cm)</span> </label>
                    <br />
                    <input
                        type="number"
                        name="packageHeight"
                        value={formData.packageHeight}
                        className="w-half mt-2 mr-2 border pl-2 h-[35px] rounded-[5px]"
                        onChange={handleFormDataChange}
                    />
                    {/* <select
            className="w-half mt-2 border h-[35px] rounded-[5px]"
            name="packageHeightUnit"
            value={formData.packageHeight}
            onChange={handleFormDataChange}
          >
            <option value="Centemeter">Centemeter</option>
            <option value="Meter">Meter</option>
            <option value="Feet">Feet</option>
          </select> */}
                </div>
                <div>
                    <label className="mt-2">Package Length <span className="text-gray-500 text-[13px]">(in cm)</span> </label>
                    <br />
                    <input
                        type="number"
                        name="packageLength"
                        value={formData.packageLength}
                        className="w-half mt-2 mr-2 border pl-2 h-[35px] rounded-[5px]"
                        onChange={handleFormDataChange}
                    />
                    {/* <select
            className="w-half mt-2 border h-[35px] rounded-[5px]"
            name="packageLengthhUnit"
            value={formData.packageLengthhUnit}
            onChange={handleFormDataChange}
          >
            <option value="Centemeter">Centemeter</option>
            <option value="Meter">Meter</option>
            <option value="Feet">Feet</option>
          </select> */}
                </div>
                <div>
                    <label className="mt-2">Package Width <span className="text-gray-500 text-[13px]">(in cm)</span> </label>
                    <br />
                    <input
                        type="number"
                        name="packageWidth"
                        value={formData.packageWidth}
                        className="w-half mt-2 mr-2 border pl-2 h-[35px] rounded-[5px]"
                        onChange={handleFormDataChange}
                    />
                    {/* <select
            className="w-half mt-2 border h-[35px] rounded-[5px]"
            name="packageWidthUnit"
            value={formData.packageWidthUnit}
            onChange={handleFormDataChange}
          >
            <option value="Centemeter">Centemeter</option>
            <option value="Meter">Meter</option>
            <option value="Feet">Feet</option>
          </select> */}
                </div>
            </div>
            <br />
            <div>
                <label className="mt-2">
                    Package Weight <span className="text-gray-500 text-[13px]">(in kg)</span>  <span className="text-red-500">*</span>
                    {/* {formData.showInputs && (
            <div>
              <label className="pb-2">Applies for all Varients</label>
              <input
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
          )} */}
                </label>
                <br />
                <input
                    type="number"
                    name="packageWeight"
                    value={formData.packageWeight}
                    className="w-half mt-2 mr-2 border pl-2 h-[35px] rounded-[5px]"
                    onChange={handleFormDataChange}
                />
                {/* <select
          className="w-half mt-2 border h-[35px] rounded-[5px]"
          name="packageWeightUnit"
          value={formData.packageWeightUnit}
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
                    Product Care Instructions <span className="text-red-500">*</span>
                </label>
                <input
                    type="text"
                    name="productCareInstruction"
                    value={formData.productCareInstruction}
                    className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    onChange={handleFormDataChange}
                    placeholder="Hand Wash"
                />
            </div>
            <br />
            <div>
                <label className="pb-2">
                    Package shape <span className="text-red-500">*</span>
                </label>
                <input
                    type="text"
                    name="shape"
                    value={formData.shape}
                    className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    onChange={handleFormDataChange}
                    placeholder="Round, Box"
                />
            </div>
            <br />
            <div>
                <label className="pb-2">
                    Warrenty Description
                </label>
                <input
                    type="text"
                    name="warrentyDescription"
                    value={formData.warrentyDescription}
                    className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    onChange={handleFormDataChange}
                    placeholder="7 year manufacturer warrenty is non-transferable and valid for 7 year from the original date of purchase"
                />
            </div>
            <br />
            <div>
                <label className="pb-2">
                    Construction / Build type <span className="text-red-500">*</span>
                </label>
                <input
                    type="text"
                    name="constructionType"
                    value={formData.constructionType}
                    className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    onChange={handleFormDataChange}
                    placeholder="Fold-Away, Memory Foam"
                />
            </div>
            <br />
        </>
    );
};

export default MoreDetails;
