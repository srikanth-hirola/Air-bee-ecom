import React from 'react';
import DraftColorInput from './DraftColorInput';

const DraftVariations = ({ colorInputs, setColorInputs, formData, setFormData, setColorInputsIndexUpdateImage, colorInputsIndexUpdateImage }) => {
    return (
        <>
            <DraftColorInput
                colorInputs={colorInputs}
                setColorInputs={setColorInputs}
                dimensions={formData.ataDimension}
                weight={formData.ataWeight}
                materialTypeStatus={formData.ataMaterials}
                formData={formData}
                setFormData={setFormData}
                setColorInputsIndexUpdateImage={setColorInputsIndexUpdateImage}
                colorInputsIndexUpdateImage={colorInputsIndexUpdateImage}
            />
        </>
    );
};

export default DraftVariations;
