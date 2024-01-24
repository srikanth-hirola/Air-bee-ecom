import React from 'react'
import useFilterHandler from '../../hooks/useFilterHandler'
const FilteredContext = ({ checkedItems, setCheckedItems, data, setFilteredData, selectedBrands, setSelectedBrands, setSelectedPriceRange, setFilteredAttr, toggleDataVisible,isVisibleData }) => {

    const { handleClearFilter, removeTag } = useFilterHandler()
  

    return (
        <div className='d-flex align-items-center'>
        <div className="shoppage1-row2">
            {checkedItems?.map((item, index) => (
                <div key={index} className="tag">
                    {item}
                    <span
                        className="close-icon "
                        onClick={() => removeTag({ valueToRemove: item, checkedItems, setCheckedItems, selectedBrands, setSelectedBrands, setFilteredAttr })}
                    >
                        &#x2715;
                    </span>
                </div>
            ))}
            <button onClick={(e) => handleClearFilter({ e, data, setFilteredData, setSelectedBrands, setSelectedPriceRange, setFilteredAttr, setCheckedItems })} class=" bg-blue-500 text-light p-2 rounded-lg">clear all icons</button>   
           
                  
        </div>
        <div className="mobile-filters" >
        {!isVisibleData && <button onClick={toggleDataVisible} className='mobile-close-flter'>
                      Open Filter
                  </button>}
        </div>

        </div>
     

    )
}

export default FilteredContext