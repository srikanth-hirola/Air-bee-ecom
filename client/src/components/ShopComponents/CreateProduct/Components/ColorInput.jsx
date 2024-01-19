import React from 'react';
import { StyleConfig } from '../../../../utils/StyleConfig';

const ColorInput = ({
    colorInputs,
    setColorInputs,
    dimensions,
    weight,
    materialTypeStatus,
}) => {

    const styles = StyleConfig();
    const handleInputChange = (index, field, value) => {
        const updatedColorInputs = [...colorInputs];
        if (field === "SKU") {
            const exp = /^[a-zA-Z0-9]*$/;
            if (exp.test(value)) {
                const val = value.toUpperCase();
                updatedColorInputs[index][field] = val;
            }
            setColorInputs(updatedColorInputs);
            return;
        }
        updatedColorInputs[index][field] = value;
        setColorInputs(updatedColorInputs);
    };

    // const handleAttributeChange = (index, attributeIndex, field, value) => {
    //   const updatedColorInputs = [...colorInputs];
    //   if (field === 'name') {
    //     updatedColorInputs[index].attributes[attributeIndex].name = value;
    //   } else if (field === 'values') {
    //     updatedColorInputs[index].attributes[attributeIndex].values = value
    //       .split(',')
    //       .map((val) => val.trim());
    //   }
    //   setColorInputs(updatedColorInputs);
    // };

    const handleAttributeChange = (
        index,
        attributeIndex,
        field,
        value,
        valueIndex
    ) => {
        const updatedColorInputs = [...colorInputs];
        if (field === 'name') {
            updatedColorInputs[index].attributes[attributeIndex].name = value;
        } else if (field === 'values') {
            updatedColorInputs[index].attributes[attributeIndex].values[
                valueIndex
            ].valName = value;
        } else if (field === 'stock') {
            updatedColorInputs[index].attributes[attributeIndex].values[
                valueIndex
            ].stock = value;
        }
        setColorInputs(updatedColorInputs);
    };

    const handleImageChange = (index, event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                const base64Image = reader.result;
                const updatedColorInputs = [...colorInputs];
                updatedColorInputs[index].image.url = base64Image;
                setColorInputs(updatedColorInputs);
            };
            reader.readAsDataURL(file);
        }
    };

    const addColorInput = (e) => {
        e.preventDefault();
        setColorInputs((prevInputs) => [
            ...prevInputs,
            {
                SKU: '',
                image: {
                    public_id: '',
                    url: '',
                },
                imageColor: '',
                originalPrice: '',
                discountPrice: '',
                eventPrice: '',
                eventStock: null,
                stock: null,
                sold_out: 0,
                length: '',
                width: '',
                height: '',
                weight: '',
                materialType: '',
                haveAttributes: false,
                attributeStock: false,
                attributes: [
                    {
                        name: '',
                        values: [
                            {
                                valName: '',
                                stock: null,
                                eventStock: null,
                                sold_out: 0,
                            },
                        ],
                    },
                ],
            },
        ]);
    };

    const removeAttribute = (e, index, attributeIndex) => {
        e.preventDefault();
        const updatedColorInputs = [...colorInputs];
        updatedColorInputs[index].attributes.splice(attributeIndex, 1);
        setColorInputs(updatedColorInputs);
    };

    const removeAttributeValue = (e, index, attributeIndex, attrValueIndex) => {
        e.preventDefault();
        const updatedColorInputs = [...colorInputs];
        updatedColorInputs[index].attributes[attributeIndex].values.splice(
            attrValueIndex,
            1
        );
        setColorInputs(updatedColorInputs);
    };

    const addAttribute = (e, index) => {
        e.preventDefault();
        const updatedColorInputs = [...colorInputs];
        updatedColorInputs[index].attributes.push({
            name: '',
            values: [
                {
                    valName: '',
                    stock: null,
                    eventStock: null,
                    sold_out: 0,
                },
            ],
        });
        setColorInputs(updatedColorInputs);
    };

    const addAttributeValue = (e, index, attrIndex) => {
        e.preventDefault();
        const updatedColorInputs = [...colorInputs];
        updatedColorInputs[index].attributes[attrIndex].values.push({
            valName: '',
            stock: null,
            eventStock: null,
            sold_out: 0,
        });
        setColorInputs(updatedColorInputs);
    };

    const removeColorInput = (e, index) => {
        e.preventDefault();
        const updatedColorInputs = [...colorInputs];
        updatedColorInputs.splice(index, 1);
        setColorInputs(updatedColorInputs);
    };

    const handleCheckBox = (e, index) => {
        const updatedColorInputs = [...colorInputs];
        updatedColorInputs[index].attributeStock =
            !updatedColorInputs[index].attributeStock;
        setColorInputs(updatedColorInputs);
    };

    const handleHaveAttrCheckBox = (e, index) => {
        const updatedColorInputs = [...colorInputs];
        updatedColorInputs[index].haveAttributes =
            !updatedColorInputs[index].haveAttributes;
        setColorInputs(updatedColorInputs);
    };

    return (
        <div>
            {colorInputs.map((colorInput, index) => (
                <div key={index}>
                    <h4 className='mt-5'> <b>Varient {index + 1}</b> </h4>
                    <div className="mt-3 mb-4">
                        <label>
                            Varient Image <span className="text-red-500">*</span>
                        </label>&nbsp;&nbsp;

                        <input
                            type="file"
                            accept="image/*"
                            className='mt-1'
                            onChange={(e) => handleImageChange(index, e)}
                        />
                    </div>
                    {colorInput.image.url && (
                        <>
                            <img
                                className="mt-4 mb-3"
                                src={colorInput.image.url}
                                alt={`Color ${index + 1}`}
                                style={{ width: '100px', height: '100px' }}
                            />
                        </>
                    )}

                    <div>
                        <label className="pb-2">
                            SKU Code<span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            name="SKU"
                            value={colorInput.SKU}
                            className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            onChange={(e) =>
                                handleInputChange(index, 'SKU', e.target.value)
                            }
                            placeholder="Enter SKU..."
                        />
                    </div>
                    <br />

                    <div>
                        <label>
                            Varient Name: <span className="text-red-500">*</span>
                        </label>
                        <input
                            maxLength={15}
                            className="w-full mt-2 border pl-2 h-[35px] rounded-[5px]"
                            type="text"
                            value={colorInput.imageColor}
                            onChange={(e) =>
                                handleInputChange(index, 'imageColor', e.target.value)
                            }
                        />
                    </div>
                    <div className="mt-4">
                        <label>
                            Discount Price: <span className="text-red-500">*</span>
                        </label>
                        <input
                            className="w-full mt-2 border pl-2 h-[35px] rounded-[5px]"
                            type="number"
                            value={colorInput.discountPrice}
                            onChange={(e) =>
                                handleInputChange(index, 'discountPrice', e.target.value)
                            }
                        />
                    </div>
                    <div className="mt-4">
                        <label>
                            Original Price: <span className="text-red-500">*</span>
                        </label>
                        <input
                            className="w-full mt-2 border pl-2 h-[35px] rounded-[5px]"
                            type="number"
                            value={colorInput.originalPrice}
                            onChange={(e) =>
                                handleInputChange(index, 'originalPrice', e.target.value)
                            }
                        />
                    </div>
                    <div className="mt-4">
                        <label className="pb-2 mr-2">Have attributes ?</label>
                        <input
                            className='mx-2'
                            type="checkbox"
                            name="assemblyReq"
                            onChange={(e) => {
                                handleHaveAttrCheckBox(e, index);
                            }}
                            checked={colorInput.haveAttributes ? true : false}
                        />
                    </div>
                    {colorInput.haveAttributes && (
                        <div className="mt-4">
                            <label className="pb-2">
                                Have Seperate Stock Limit for each selectable attribute value ?{' '}
                            </label>
                            <input
                                className='mx-2'
                                type="checkbox"
                                name="assemblyReq"
                                onChange={(e) => {
                                    handleCheckBox(e, index);
                                }}
                                checked={colorInput.attributeStock ? true : false}
                            />
                        </div>
                    )}
                    {!colorInput.attributeStock && (
                        <div className="mt-4">
                            <label>
                                Stock: <span className="text-red-500">*</span>
                            </label>
                            <input
                                className="w-full mt-2 border pl-2 h-[35px] rounded-[5px]"
                                type="number"
                                value={colorInput.stock}
                                onChange={(e) =>
                                    handleInputChange(index, 'stock', e.target.value)
                                }
                            />
                        </div>
                    )}
                    {colorInput.haveAttributes && (
                        <div className="mt-4">
                            <label>
                                Selectable Attributes: <span className="text-red-500">*</span>
                                <span className="attribute-eg">
                                    <i>Eg :- RAM(key) : 8GB, 12GB(value)</i>
                                </span>
                            </label>
                            {colorInput.attributes.map((attribute, attributeIndex) => (
                                <div key={attributeIndex}>
                                    <input
                                        className="w-half mt-2 mr-2 border pl-2 h-[35px] rounded-[5px]"
                                        type="text"
                                        placeholder="Key"
                                        value={attribute.name}
                                        onChange={(e) =>
                                            handleAttributeChange(
                                                index,
                                                attributeIndex,
                                                'name',
                                                e.target.value
                                            )
                                        }
                                    />
                                    <br />
                                    {attribute.values.map((val, valueIndex) => {
                                        return (
                                            <>
                                                <>
                                                    <input
                                                        className="w-half mt-2 mr-2 border pl-2 h-[35px] rounded-[5px]"
                                                        type="text"
                                                        placeholder="Value"
                                                        value={val.valName}
                                                        onChange={(e) =>
                                                            handleAttributeChange(
                                                                index,
                                                                attributeIndex,
                                                                'values',
                                                                e.target.value,
                                                                valueIndex
                                                            )
                                                        }
                                                    />
                                                    {colorInput.attributeStock && (
                                                        <input
                                                            className="w-half mt-2 mr-2 border pl-2 h-[35px] rounded-[5px]"
                                                            type="text"
                                                            placeholder="Stock"
                                                            value={val.stock}
                                                            onChange={(e) =>
                                                                handleAttributeChange(
                                                                    index,
                                                                    attributeIndex,
                                                                    'stock',
                                                                    e.target.value,
                                                                    valueIndex
                                                                )
                                                            }
                                                        />
                                                    )}
                                                    <button
                                                        className='rounded px-4 py-2 mx-2' style={{ backgroundColor: styles?.mainColor, color: styles?.fontColor }}
                                                        onClick={(e) =>
                                                            addAttributeValue(e, index, attributeIndex)
                                                        }
                                                    >
                                                        Add Value
                                                    </button>
                                                    <button
                                                        className="varient-btn cat-btn5"
                                                        onClick={(e) =>
                                                            removeAttributeValue(
                                                                e,
                                                                index,
                                                                attributeIndex,
                                                                valueIndex
                                                            )
                                                        }
                                                    >
                                                        Remove Value
                                                    </button>
                                                </>
                                                <br />
                                            </>
                                        );
                                    })}

                                    <button
                                        className="varient-btn cat-btn5"
                                        onClick={(e) => removeAttribute(e, index, attributeIndex)}
                                    >
                                        Remove Attribute
                                    </button>
                                </div>
                            ))}
                            <button
                                className='rounded px-4 py-2' style={{ backgroundColor: styles?.mainColor, color: styles?.fontColor }}
                                onClick={(e) => addAttribute(e, index)}
                            >
                                Add Attribute
                            </button>
                        </div>
                    )}

                    {!dimensions && (
                        <>
                            <div className="mt-4">
                                <label className="pb-2">
                                    <b>Item Dimensions L X W X H </b>
                                </label>
                                <div className="">
                                    <label className='mt-3'>Item length head to toe <span className="text-gray-500 text-[13px]">(in cm)</span></label>
                                    <br />
                                    <input
                                        type="number"
                                        name="itemLength"
                                        value={colorInput.itemLength}
                                        className="w-half mt-2 mr-2 border pl-2 h-[35px] rounded-[5px]"
                                        onChange={(e) =>
                                            handleInputChange(index, 'itemLength', e.target.value)
                                        }
                                    />
                                    {/* <select
                    className="w-half mt-2 border h-[35px] rounded-[5px]"
                    name="itemLengthUnit"
                    value={colorInput.itemLengthUnit}
                    onChange={(e) =>
                      handleInputChange(index, 'itemLengthUnit', e.target.value)
                    }
                  >
                    <option value="Centemeter">Centemeter</option>
                    <option value="Meter">Meter</option>
                    <option value="Feet">Feet</option>
                  </select> */}
                                </div>
                                <div className="">
                                    <label className='mt-3'>Item width side to side<span className="text-gray-500 text-[13px]">(in cm)</span></label>
                                    <br />
                                    <input
                                        type="number"
                                        name="itemWidth"
                                        value={colorInput.itemWidth}
                                        className="w-half mt-2 mr-2 border pl-2 h-[35px] rounded-[5px]"
                                        onChange={(e) =>
                                            handleInputChange(index, 'itemWidth', e.target.value)
                                        }
                                    />
                                    {/* <select
                    className="w-half mt-2 border h-[35px] rounded-[5px]"
                    name="itemWidthUnit"
                    value={colorInput.itemWidthUnit}
                    onChange={(e) =>
                      handleInputChange(index, 'itemWidthUnit', e.target.value)
                    }
                  >
                    <option value="Centemeter">Centemeter</option>
                    <option value="Meter">Meter</option>
                    <option value="Feet">Feet</option>
                  </select> */}
                                </div>
                                <div className="">
                                    <label className='mt-3'>Item Height floor to top<span className="text-gray-500 text-[13px]">(in cm)</span></label>
                                    <br />
                                    <input
                                        type="number"
                                        name="itemHeight"
                                        value={colorInput.itemHeight}
                                        className="w-half mt-2 mr-2 border pl-2 h-[35px] rounded-[5px]"
                                        onChange={(e) =>
                                            handleInputChange(index, 'itemHeight', e.target.value)
                                        }
                                    />
                                    {/* <select
                    className="w-half mt-2 border h-[35px] rounded-[5px]"
                    name="itemHeightUnit"
                    value={colorInput.itemHeightUnit}
                    onChange={(e) =>
                      handleInputChange(index, 'itemHeightUnit', e.target.value)
                    }
                  >
                    <option value="Centemeter">Centemeter</option>
                    <option value="Meter">Meter</option>
                    <option value="Feet">Feet</option>
                  </select> */}
                                </div>
                            </div>
                            <br />
                        </>
                    )}
                    {!weight && (
                        <>
                            <div className="">
                                <label className="mt-2">
                                    Item Weight<span className="text-gray-500 text-[13px]">(in kg)</span> <span className="text-red-500">*</span>
                                </label>
                                <br />
                                <input
                                    type="number"
                                    name="itemWeight"
                                    value={colorInput.itemWeight}
                                    className="w-half mt-2 mr-2 border pl-2 h-[35px] rounded-[5px]"
                                    onChange={(e) =>
                                        handleInputChange(index, 'itemWeight', e.target.value)
                                    }
                                />
                                {/* <select
                  className="w-half mt-2 border h-[35px] rounded-[5px]"
                  name="itemWeightUnit"
                  value={colorInput.itemWeightUnit}
                  onChange={(e) =>
                    handleInputChange(index, 'itemWeightUnit', e.target.value)
                  }
                >
                  <option value="Gram">Gram</option>
                  <option value="Kilogram">Kilogram</option>
                  <option value="Ton">Ton</option>
                </select> */}
                            </div>
                            <br />
                        </>
                    )}
                    {!materialTypeStatus && (
                        <>
                            <div>
                                <label className="pt-3">
                                    Material Type
                                    <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    name="materialType"
                                    value={colorInput.materialType}
                                    className="mt-2 appearance-none block w-full px-3 h-[35px] border border-gray-300 rounded-[3px] placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                    onChange={(e) =>
                                        handleInputChange(index, 'materialType', e.target.value)
                                    }
                                />
                            </div>
                            <br />
                        </>
                    )}
                    <button
                        className="varient-btn generate-add-btn cat-btn5 remove-varient mt-3"
                        onClick={(e) => removeColorInput(e, index)}
                    >
                        Remove Varient {index + 1}
                    </button>
                </div>
            ))}
            <button className='rounded px-4 py-2 my-2' style={{ backgroundColor: styles?.mainColor, color: styles?.fontColor }} onClick={addColorInput}>
                Add Varient
            </button>
        </div>
    );
};

export default ColorInput;
