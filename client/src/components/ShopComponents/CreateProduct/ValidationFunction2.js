import toast from "react-hot-toast";

const ValidationFunction2 = async (formData, setActiveError, images) => {


    const valArray = [];

    if (
        formData.name === '' ||
        formData.brandName === '' ||
        formData.category === '' ||
        formData.subCatgory === '' ||
        formData.subSubCategory === ''
    ) {
        // toast.error('All mandatory fields must be filled');
        valArray.push(1);
        // setActiveError(1);
        // return false;
    }

    if (formData.productIdState) {
        if (formData.productId === '') {
            // toast.error('All mandatory fields must be filled');
            valArray.push(1);
            // setActiveError(1);
            // return false;
        } else {
            const exp = /^[a-zA-Z0-9]+$/;
            if (!exp.test(formData.productId)) {
                valArray.push(1);
                // setActiveError(1);
            }
        }
    }

    if (
        formData.productTaxCode === '' ||
        formData.itemCondition === '' ||
        formData.hsnCode === null
    ) {
        valArray.push(2);
    }

    if (formData.mainImage.url === '' || images.length === 0) {
        if (formData.images.length === 0) {
            valArray.push(4);
        }
    }

    if (formData.description === '') {
        valArray.push(5);
    }

    const spec = await loopError(formData.specs);
    if (spec) {
        valArray.push(5);
    }

    const spec2 = await loopError(formData.specs2);
    if (spec2) {
        valArray.push(5);
    }

    if (
        formData.model === '' ||
        formData.noItem === '' ||
        formData.materialType === '' ||
        formData.manufacturer === ''
    ) {
        valArray.push(7);
    }

    if (formData.ataWeight && (formData.itemWeight === '' ||
        formData.itemWeightUnit === '')) {
        valArray.push(7);
    }

    if (formData.assemblyReq) {
        if (formData.noOfPieces === '' || formData.components === '' || formData.assemblyInstruction === '') {
            valArray.push(7);
        }
    }

    if (formData.searchTerms.length === 0) {
        valArray.push(3);
    }

    if (
        formData.safetyWarning === '' ||
        formData.shape === '' ||
        formData.packageWeight === '' ||
        formData.packageWeightUnit === '' ||
        formData.packageHeight === '' ||
        formData.packageHeightUnit === '' ||
        formData.packageLength === '' ||
        formData.packageLengthhUnit === '' ||
        formData.packageWidth === '' ||
        formData.packageWidthUnit === '' ||
        formData.productCareInstruction === '' ||
        formData.shape === '' ||
        formData.constructionType === ''
    ) {
        valArray.push(9);
    }

    if (formData.showInputs) {
        const variationVal = await VariationValidation(formData.colorInputs, formData);
        if (variationVal) {
            valArray.push(8);
        }

    } else {
        if (formData.sellerSKU === '' || formData.originalPrice === '' || formData.discountPrice === '') {
            valArray.push(2);
        }

        if (formData.haveAttributes) {
            const hasError = await attrValidate(formData.attributes, formData.attributeStock);
            if (hasError) {
                valArray.push(2);
            }
        } else if (formData.stock === null || formData.stock === '') {
            valArray.push(7);

        }

        if (formData.size === '' || formData.color === '') {
            valArray.push(7);
        }


    };


    const uniqueArr = new Set(valArray);
    const finalArray = Array.from(uniqueArr);

    if (finalArray.length > 0) {
        setActiveError(finalArray);
        toast.error('All mandatory fields must be filled');
        return false;
    } else {
        setActiveError([]);
        return true;
    }
}


const VariationValidation = async (variationData, formData) => {
    let hasError = false;
    for (const variation of variationData) {
        if (!hasError && (variation.image.url === '' || variation.discountPrice === '' || variation.originalPrice === '' || variation.varientSKU === '' || variation.imageColor === '')) {
            hasError = true;
        }

        if (!hasError && !formData.ataWeight) {
            if (variation.weight === '') {
                hasError = true;
            }
        }

        if (!hasError && !formData.ataMaterials) {
            if (variation.materialType === '') {
                hasError = true;
            }
        }

        if (!hasError && variation.haveAttributes) {
            const varAttr = await attrValidate(variation.attributes, variation.attributeStock);
            if (varAttr) {
                hasError = true;
            }
        }
    }
    return hasError;
}

const attrValidate = async (value, attrStock) => {
    for (const val of value) {
        if (val.name === '') {
            return true;
        }

        if (attrStock) {
            for (const val2 of val.values) {
                if (val2.valName === '' || val2.stock === null || val2.stock === '') {
                    return true;
                }
            }
        } else {
            for (const val2 of val.values) {
                if (val2.valName === '') {
                    return true;
                }
            }
        }
    }

    return false;
};

const loopError = async (value) => {
    let hasError = false;
    for (const val of value) {
        if (!hasError && (val.key.name === '' || val.key.value.length === 0)) {
            hasError = true;
        }
    }
    return hasError;
};

export default ValidationFunction2;