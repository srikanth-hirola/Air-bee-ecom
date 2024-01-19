import React, { useState } from 'react';
import NewCategory from '../Components/NewCategory';

const DraftProductIdentity = ({
    handleCheckChange,
    handleCategoryChange,
    categories,
    handleSubCategoryChange,
    subCat,
    subSubCat,
    handleFormDataChange,
    formData,
    setFormData,
    wantNewCategory,
    setWantNewCategory,
}) => {
    const productID = formData?.productId;
    // useEffect(() => {
    //   setProductID(setProductID)
    // }, [formData?.productId])
    const [productIdState, setProductIdState] = useState(formData.productIdState);

    const handleStateChange = () => {
        if (productIdState === false) {
            setFormData({ ...formData, productIdState: true });
            setProductIdState(true);
        } else {
            setFormData({ ...formData, productIdState: false });
            setProductIdState(false);
        }
    };

    return (
        <>
            <div>
                <label className="pb-2">
                    Item Name <span className="text-red-500">*</span>
                </label>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    onChange={handleFormDataChange}
                    placeholder="Enter your product name..."
                />
            </div>
            <br />
            <div>
                <label className="pb-2">
                    Does Product have variations ? <span className="text-red-500">*</span>
                </label>
                {/* <input
          type="checkbox"
          onChange={handleCheckChange}
          checked={formData.showInputs === true ? true : false}
        /> */}
                <div className="d-flex ">
                    <div className="mr-2">
                        <input
                            type="radio"
                            name="assemblyReq"
                            className="mr-1"
                            onChange={(e) => {
                                setFormData({ ...formData, showInputs: true });
                            }}
                            checked={formData.showInputs && true}
                        />
                        <label className="pb-2">Yes</label>
                    </div>
                    <div>
                        <input
                            type="radio"
                            name="assemblyReq"
                            className="mr-1"
                            onChange={(e) => {
                                setFormData({ ...formData, showInputs: false });
                            }}
                            checked={!formData.showInputs && true}
                        />
                        <label className="pb-2">No</label>
                    </div>
                </div>
            </div>
            <br />
            <div>
                <label className="pb-2">
                    Brand Name <span className="text-red-500">*</span>
                </label>
                <input
                    maxLength={10}
                    type="text"
                    name="brandName"
                    value={formData.brandName}
                    className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    onChange={handleFormDataChange}
                    placeholder="Enter your Brand name..."
                />
            </div>
            <br />
            {!productID && (
                <>
                    <div>
                        <label className="pb-2">Have Product ID ?</label>
                        <input
                            className='mx-2'
                            type="checkbox"
                            onChange={handleStateChange}
                            checked={productIdState === true ? true : false}
                        />
                        <br />
                        <span className="attribute-eg">
                            <i>Note :- Product ID can't be changed once submitted.</i>
                        </span>
                    </div>
                    <br />
                    {formData.productIdState && (
                        <>
                            <div>
                                <label className="pb-2">
                                    Product ID<span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    name="productId"
                                    value={formData.productId}
                                    className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                    onChange={handleFormDataChange}
                                    placeholder="Enter your Product ID..."
                                />
                            </div>
                            <br />
                        </>
                    )}
                </>
            )}
            <div>
                <label className="pb-2">
                    Category <span className="text-red-500">*</span>
                </label>
                <select
                    className="w-full mt-2 border h-[35px] rounded-[5px]"
                    value={formData.category}
                    onChange={(e) => handleCategoryChange(e)}
                >
                    <option value="Choose a category">Choose a category</option>
                    {categories &&
                        categories.map((i) => (
                            <option value={i.name} key={i.name}>
                                {i.name}
                            </option>
                        ))}
                </select>
            </div>
            <br />
            <div>
                <label className="pb-2">
                    Sub Category <span className="text-red-500">*</span>
                </label>
                <select
                    className="w-full mt-2 border h-[35px] rounded-[5px]"
                    value={formData.subCatgory}
                    onChange={(e) => handleSubCategoryChange(e)}
                >
                    <option value="Choose a category">Choose Sub category</option>
                    {categories &&
                        subCat.map((i) => {
                            return (
                                <option value={i.name} key={i.name}>
                                    {i.name}
                                </option>
                            );
                        })}
                </select>
            </div>
            <br />
            <div>
                <label className="pb-2">
                    Sub Sub-Category <span className="text-red-500">*</span>
                </label>
                <select
                    className="w-full mt-2 border h-[35px] rounded-[5px]"
                    value={formData.subSubCategory}
                    name="subSubCategory"
                    onChange={handleFormDataChange}
                >
                    <option value="Choose a category">Choose Sub category</option>
                    {categories &&
                        subSubCat.map((i) => {
                            return (
                                <option value={i} key={i}>
                                    {i}
                                </option>
                            );
                        })}
                </select>
            </div>
            <br />
            <div>
                <label className="pb-2">Want New Category?</label>
                <input
                    className='mx-2'
                    type="checkbox"
                    onChange={(e) => {
                        wantNewCategory === false
                            ? setWantNewCategory(true)
                            : setWantNewCategory(false);
                    }}
                    checked={wantNewCategory === true ? true : false}
                />
                <br />
            </div>

            {wantNewCategory && <NewCategory categories={categories} />}
        </>
    );
};

export default DraftProductIdentity;
