import React from 'react'
import useFilterHandler from '../../hooks/useFilterHandler'

const FilteredContext = ({ checkedItems, setCheckedItems, data, setFilteredData, selectedBrands, setSelectedBrands, setSelectedPriceRange, setFilteredAttr }) => {

    const { handleClearFilter, removeTag } = useFilterHandler()

    return (
        <div className="shoppage1-row2">
            {checkedItems?.map((item, index) => (
                <div key={index} className="tag">
                    {item}
                    <span
                        className="close-icon"
                        onClick={() => removeTag({ valueToRemove: item, checkedItems, setCheckedItems, selectedBrands, setSelectedBrands, setFilteredAttr })}
                    >
                        &#x2715;
                    </span>
                </div>
            ))}
            <button onClick={(e) => handleClearFilter({ e, data, setFilteredData, setSelectedBrands, setSelectedPriceRange, setFilteredAttr, setCheckedItems })}>clear all icons</button>
        </div>
    )
}

export default FilteredContext