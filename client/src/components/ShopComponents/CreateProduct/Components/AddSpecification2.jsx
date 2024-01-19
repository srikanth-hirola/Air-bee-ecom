import React from 'react';
import { StyleConfig } from '../../../../utils/StyleConfig';

const AddSpecification2 = ({ specification2, setSpecification2 }) => {

    const styles = StyleConfig();
    const handleChange = (index, field, value) => {
        const updatedSpecification = [...specification2];
        if (field === 'heading') {
            updatedSpecification[index].heading = value;
        } else if (field === 'name') {
            updatedSpecification[index].key.name = value;
        } else if (field === 'value') {
            updatedSpecification[index].key.value = value;
            // .split(',')
            // .map((val) => val.trim());
        }
        setSpecification2(updatedSpecification);
    };

    const addField = (e) => {
        e.preventDefault();
        setSpecification2((prevSpecification) => [
            ...prevSpecification,
            {
                heading: '',
                key: {
                    name: '',
                    value: '',
                },
            },
        ]);
    };

    const removeField = (index) => {
        setSpecification2((prevSpecification) =>
            prevSpecification.filter((_, i) => i !== index)
        );
    };

    return (
        <div>
            {specification2.map((spec, index) => (
                <div key={index}>
                    <input
                        className="w-full mt-2 border pl-2 h-[35px] rounded-[5px]"
                        type="text"
                        value={spec.heading}
                        onChange={(e) => handleChange(index, 'heading', e.target.value)}
                        placeholder="Enter heading"
                    />
                    <br />
                    <input
                        type="text"
                        value={spec.key.name}
                        onChange={(e) => handleChange(index, 'name', e.target.value)}
                        placeholder="Enter key name"
                        className="w-half mt-2 mr-2 border pl-2 h-[35px] rounded-[5px]"
                    />
                    <input
                        type="text"
                        value={spec.key.value}
                        onChange={(e) => handleChange(index, 'value', e.target.value)}
                        placeholder="Enter key description"
                        className="w-half mt-2 mr-2 border pl-2 h-[35px] rounded-[5px]"
                    />
                    <button className="varient-btn cat-btn1 cat-btn5" onClick={() => removeField(index)}>Remove</button>
                </div>
            ))}
            <button className='rounded px-4 py-2' style={{ backgroundColor: styles?.mainColor, color: styles?.fontColor }} onClick={addField}>Add Field</button>
        </div>
    );
};

export default AddSpecification2;
