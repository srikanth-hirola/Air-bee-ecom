const useFilterHandler = () => {

    const handleCheckboxChange = ({ e, checkedItems, setCheckedItems }) => {
        const { value, checked } = e.target;
        if (checked) {
            setCheckedItems([...checkedItems, value]);
        } else {
            const updatedItems = checkedItems.filter((item) => item !== value);
            setCheckedItems(updatedItems);
        }
    };

    const handleFilterCheckswithValues = ({ checkedItems, setCheckedItems, value }) => {
        let updatedState = [...checkedItems];
        if (!updatedState.includes(value)) {
            updatedState.push(value)
        }
        setCheckedItems(updatedState)
    }

    const handleBrandCheckBox = async ({ e, selectedBrands, setSelectedBrands }) => {
        const brand = e.target.value;
        const isChecked = e.target.checked;

        if (isChecked) {
            setSelectedBrands([...selectedBrands, brand]);
        } else {
            setSelectedBrands(selectedBrands.filter((item) => item !== brand));
        }
    };

    const handleClearFilter = ({ e, data, setSelectedBrands, setSelectedPriceRange, setFilteredData, setFilteredAttr, setCheckedItems }) => {
        e.preventDefault();
        setSelectedBrands([]);
        setSelectedPriceRange();
        setFilteredAttr();
        setCheckedItems([])
        // navigate('/products?search=allproducts')
        setFilteredData(data)
    }

    const removeTag = ({ valueToRemove, checkedItems, setCheckedItems, selectedBrands, setSelectedBrands, setFilteredAttr }) => {
        const updatedItems = checkedItems?.filter((item) => item !== valueToRemove);
        setCheckedItems(updatedItems);
        const updatedBrandState = selectedBrands?.filter((item) => item !== valueToRemove);
        setSelectedBrands(updatedBrandState)
        setFilteredAttr()
    };

    return { handleCheckboxChange, handleBrandCheckBox, handleClearFilter, removeTag, handleFilterCheckswithValues }
}

export default useFilterHandler