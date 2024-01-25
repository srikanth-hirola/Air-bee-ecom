import React, { useState } from 'react';
import { StyleConfig } from '../../../../utils/StyleConfig';
import toast from 'react-hot-toast';


const Keywords = ({ searchTerms, setSearchTerms, formData, colorInputs }) => {

    const styles = StyleConfig();
    const [term, setTerm] = useState('');

    const handleChange = (e) => {
        e.preventDefault();
        const value = e.target.value;
        setTerm(value);
    };

    const handleAdd = (e) => {
        e.preventDefault();

        const lowercaseTerm = term.toLowerCase();

        if (!searchTerms.includes(lowercaseTerm)) {
            const updatedArray = [...searchTerms, lowercaseTerm];

            setSearchTerms(updatedArray);
            setTerm('');
        } else {
            toast.error('Term already exists in searchTerms');
        }
    };

    const removeItem = (e, index) => {
        e.preventDefault();
        const updatedItems = [...searchTerms];
        updatedItems.splice(index, 1);
        setSearchTerms(updatedItems);
    };

    const generateSearchTerms = () => {
        const {
            brandName,
            name,
            productId,
            category,
            subCatgory,
            subSubCategory,
            sellerSKU,
            discountPrice,
            itemCondition,
            model,
            size,
            color,
            materialType,
            manufacturer,
        } = formData;

        const searchingTerms = [];

        // Search by brand and product name
        if (brandName) {
            searchingTerms.push(brandName);
        }

        if (name) {
            searchingTerms.push(name);
        }

        // Search by product ID
        if (productId) {
            searchingTerms.push(productId);
        }

        // Search by category and subcategories
        if (category) {
            searchingTerms.push(category);
        }
        if (subCatgory) {
            searchingTerms.push(subCatgory);
        }
        if (subSubCategory) {
            searchingTerms.push(subSubCategory);
        }

        // Search by sellerSKU
        if (sellerSKU) {
            searchingTerms.push(sellerSKU);
        }

        // Search by price
        if (discountPrice) {
            searchingTerms.push(discountPrice);
        }

        // Search by item condition
        if (itemCondition) {
            searchingTerms.push(itemCondition);
        }

        // Search by model
        if (model) {
            searchingTerms.push(model);
        }

        // Search by size, color, and material type
        if (size) {
            searchingTerms.push(size);
        }
        if (color) {
            searchingTerms.push(color);
        }
        if (materialType) {
            searchingTerms.push(materialType);
        }

        // Search by manufacturer
        if (manufacturer) {
            searchingTerms.push(manufacturer);
        }

        return searchingTerms;
    };

    const generateVarientSearchTerms = async () => {
        const {
            brandName,
            name,
            productId,
            category,
            subCategory,
            subSubCategory,
            itemCondition,
            model,
            materialType,
            manufacturer,
        } = formData;

        const varientObj = {
            skuCode: [],
            varientName: [],
            price: [],
            materialType: [],
        };

        colorInputs.forEach((val) => {
            const { varientSKU, imageColor, discountPrice, inputMaterialType } = val;

            varientObj.skuCode.push(varientSKU?.toLowerCase());
            varientObj.varientName.push(imageColor?.toLowerCase());
            varientObj.price.push(discountPrice?.toLowerCase());
            varientObj.materialType.push(inputMaterialType?.toLowerCase());
        });

        const termArrays = Object.values(varientObj);

        const flattenedTerms = termArrays.flatMap((terms) =>
            terms.filter((term) => typeof term === 'string')
        );

        const searchingTerms = [...flattenedTerms];

        // Search by brand and product name
        if (brandName) {
            searchingTerms.push(brandName);
        }

        if (name) {
            searchingTerms.push(name);
        }

        // Search by product ID
        if (productId) {
            searchingTerms.push(productId);
        }

        // Search by category and subcategories
        if (category) {
            searchingTerms.push(category);
        }
        if (subCategory) {
            searchingTerms.push(subCategory);
        }
        if (subSubCategory) {
            searchingTerms.push(subSubCategory);
        }

        // Search by item condition
        if (itemCondition) {
            searchingTerms.push(itemCondition);
        }

        // Search by model
        if (model) {
            searchingTerms.push(model);
        }

        if (materialType) {
            searchingTerms.push(materialType);
        }

        // Search by manufacturer
        if (manufacturer) {
            searchingTerms.push(manufacturer);
        }
        return searchingTerms;
    };

    const generatingSearchTerms = async (e) => {
        e.preventDefault();

        let searchingTerms;

        if (formData.showInputs) {
            searchingTerms = await generateVarientSearchTerms();
        } else {
            searchingTerms = generateSearchTerms();
        }

        const existingSearchTermsSet = new Set(
            searchTerms.map((term) =>
                typeof term === 'string' ? term.toLowerCase() : term
            )
        );

        for (const term of searchingTerms) {
            if (typeof term === 'string') {
                existingSearchTermsSet.add(term.toLowerCase());
            }
        }

        const updatedArray = [...existingSearchTermsSet];

        setSearchTerms(updatedArray);
    };

    return (
        <>
            <div>
                <label className="pb-2">
                    Search Terms <span className="text-red-500">*</span>
                </label>
                <div className="d-flex">
                    <input
                        type="text"
                        value={term}
                        name="searchTerms"
                        className="appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        onChange={handleChange}
                    />
                    <button className='rounded px-2 py-1 mx-2 bg-green-500 text-light' style={{ backgroundColor: styles?.mainColor, color: styles?.fontColor }} onClick={handleAdd}>
                        Add
                    </button>
                </div>
                <button className='rounded px-4 py-2 mt-3 bg-blue-500 text-light' style={{ backgroundColor: styles?.mainColor, color: styles?.fontColor }} onClick={generatingSearchTerms}>
                    Generate Search Terms
                </button>
                <span className="attribute-eg">
                    <i>Note :- Re-generate search terms after every changes.</i>
                </span>
            </div>
            <br />
            <div className="keyword-array-div gnrt">
                {searchTerms.map((val, index) => {
                    return (
                        <>
                            <p className='gnrt-p1'>
                                {val}&nbsp;&nbsp;
                                <button
                                    className='gnrt-btn'
                                    onClick={(e) => {
                                        removeItem(e, index);
                                    }}
                                >
                                    x
                                </button>
                            </p>
                        </>
                    );
                })}
            </div>
        </>
    );
};

export default Keywords;
