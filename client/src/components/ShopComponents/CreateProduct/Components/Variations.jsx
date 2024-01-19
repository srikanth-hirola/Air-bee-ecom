import React from 'react';
import ColorInput from './ColorInput';

const Variations = ({ colorInputs, setColorInputs, formData, setFormData }) => {
    return (
        <>
            <ColorInput
                colorInputs={colorInputs}
                setColorInputs={setColorInputs}
                dimensions={formData.ataDimension}
                weight={formData.ataWeight}
                materialTypeStatus={formData.ataMaterials}
                formData={formData}
                setFormData={setFormData}
            />
        </>
    );
};

export default Variations;
