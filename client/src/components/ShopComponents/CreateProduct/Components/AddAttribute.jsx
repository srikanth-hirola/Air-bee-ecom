import React from 'react';

const AddAttribute = ({ attributes, setAttributes, formData }) => {
    const handleChange = (index, field, value, valueIndex) => {
        const updatedSpecification = [...attributes];
        if (field === 'name') {
            updatedSpecification[index].name = value;
        } else if (field === 'values') {
            console.log(value);
            updatedSpecification[index].values[valueIndex].valName = value;
        } else if (field === 'stock') {
            updatedSpecification[index].values[valueIndex].stock = value;
        }
        setAttributes(updatedSpecification);
    };

    const addField = (e) => {
        e.preventDefault();
        setAttributes((prevSpecification) => [
            ...prevSpecification,
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
        ]);
    };

    const addAttributeValue = (e, index) => {
        e.preventDefault();
        const updatedColorInputs = [...attributes];
        updatedColorInputs[index].values.push({
            valName: '',
            stock: null,
            eventStock: null,
            sold_out: 0,
        });
        setAttributes(updatedColorInputs);
    };

    const removeAttributeValue = (e, index, attrValueIndex) => {
        e.preventDefault();
        const updatedColorInputs = [...attributes];
        updatedColorInputs[index].values.splice(attrValueIndex, 1);
        setAttributes(updatedColorInputs);
    };

    const removeField = (e, index) => {
        e.preventDefault();
        setAttributes((prevSpecification) =>
            prevSpecification.filter((_, i) => i !== index)
        );
    };

    return (
        <div>
            {attributes.map((spec, index) => (
                <div key={index}>
                    {/* <input
            className="spec"
            type="text"
            value={spec.heading}
            onChange={(e) => handleChange(index, 'heading', e.target.value)}
            placeholder="Enter heading"
          />
          <br /> */}
                    <input
                        className="w-half mt-2 mr-2 pl-2 border h-[35px] rounded-[5px]"
                        type="text"
                        value={spec.name}
                        onChange={(e) => handleChange(index, 'name', e.target.value)}
                        placeholder="Key"
                    />
                    <br />
                    {spec.values.map((val, valueIndex) => {
                        return (
                            <>
                                <>
                                    <input
                                        className="w-half mt-2 mr-2 pl-2 border h-[35px] rounded-[5px]"
                                        type="text"
                                        value={val.valName}
                                        onChange={(e) =>
                                            handleChange(index, 'values', e.target.value, valueIndex)
                                        }
                                        placeholder="Value"
                                    />
                                    {formData.attributeStock && (
                                        <input
                                            className="w-half mt-2 mr-2 pl-2 border h-[35px] rounded-[5px]"
                                            type="text"
                                            value={val.stock}
                                            onChange={(e) =>
                                                handleChange(index, 'stock', e.target.value, valueIndex)
                                            }
                                            placeholder="Stock"
                                            checked={formData.attributeStock ? true : false}
                                        />
                                    )}

                                    <button
                                        className="varient-btn mr-2 cat-btn3"
                                        onClick={(e) => addAttributeValue(e, index)}
                                    >
                                        Add Value
                                    </button>
                                    <button
                                        className="varient-btn cat-btn5"
                                        onClick={(e) => removeAttributeValue(e, index, valueIndex)}
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
                        onClick={(e) => removeField(e, index)}
                    >
                        Remove
                    </button>
                </div>
            ))}
            <button className="varient-btn cat-btn3" onClick={addField}>
                Add Field
            </button>

            {/* <div>
            <h2>Preview</h2>
            {specification.map((spec, index) => (
              <div key={index}>
                {spec.heading === '' ? null : <h3>{spec.heading}</h3>}
                <div className="spec-flex">
                  <p>
                    <strong>{spec.key.name}</strong>
                  </p>
                  <p>
                    <ul>
                      {spec.key.value.map((value, i) => (
                        <li key={i}>{value}</li>
                      ))}
                    </ul>
                  </p>
                </div>
              </div>
            ))}
          </div> */}
        </div>
    );
};

export default AddAttribute;
