import React from 'react'

const Attributes = ({ selectedColor, selectedAttr, handleAttrSelect, handleHighlight, selectedAttributeIndices, setSelectedAttributeIndices, active }) => {

    return (
        <>
            <div className='row laptop-productdetails-colours'>
                {selectedColor?.attributes[0]?.name !== '' &&
                    selectedColor?.attributes?.map((val, attrIndex) => (
                        <div className="col-lg-6 col-md-6 col-sm-6 col-12 attributes" key={attrIndex}>
                            <h6>{val.name}</h6>
                            {/* <select name="" id="" className='dropdown-toggle'> */}
                            {val.values.map((val1, valIndex) => {
                                const isSelected =
                                    selectedAttr[attrIndex]?.value.valName ===
                                    val1.valName;
                                return (
                                    <>
                                        {selectedColor.attributeStock ? (
                                            <>
                                                {(active ? val1.eventStock === 0 : val1.stock === 0) ? (
                                                    <button disabled
                                                        key={valIndex}
                                                        className={
                                                            'attribute-btn attribute-strike-btn'
                                                        }
                                                    >
                                                        {val1.valName}
                                                    </button>
                                                ) : (
                                                    <button
                                                        key={valIndex}
                                                        onClick={() => {

                                                            handleAttrSelect(val1, attrIndex);
                                                            handleHighlight({ attrIndex, valIndex, selectedAttributeIndices, setSelectedAttributeIndices });
                                                        }}
                                                        className='attribute-btn'
                                                        style={{
                                                            borderColor: isSelected ? "#fa8232" : '',
                                                            borderWidth: isSelected ? "2px" : '',
                                                        }}
                                                    >
                                                        {val1.valName}
                                                    </button>
                                                )}
                                            </>
                                        ) : (
                                            <>
                                                {(active ? selectedColor.eventStock === 0 : selectedColor.stock === 0) ? (
                                                    <button disabled
                                                        key={valIndex}
                                                        className={
                                                            'attribute-btn attribute-strike-btn'
                                                        }
                                                    >
                                                        {val1.valName}
                                                    </button>
                                                ) : (
                                                    <button
                                                        key={valIndex}
                                                        onClick={() => {

                                                            handleAttrSelect(val1, attrIndex);
                                                            handleHighlight({ attrIndex, valIndex, selectedAttributeIndices, setSelectedAttributeIndices });
                                                        }}
                                                        // className={`attribute-btn ${isSelected ? 'highlight-attribute' : ''
                                                        //   }`}
                                                        className='attribute-btn'
                                                        style={{
                                                            borderColor: isSelected ? "#fa8232" : '',
                                                            borderWidth: isSelected ? "2px" : '2px',
                                                        }}
                                                    >
                                                        {val1.valName}
                                                    </button>
                                                )}
                                            </>
                                        )}
                                    </>
                                );
                            })}
                            {/* <option value="">14-inch Liquid Retina XDR display</option>
                                <option value="">14-inch Liquid Retina XDR display</option> */}
                            {/* </select> */}
                            {/* <span>p</span> */}
                        </div>
                    ))}
                {/* <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                    <h6>Size</h6>
                    <select name="" id="" className='dropdown-toggle'>
                        <option value="">14-inch Liquid Retina XDR display</option>
                        <option value="">14-inch Liquid Retina XDR display</option>
                        <option value="">14-inch Liquid Retina XDR display</option>
                    </select>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                    <h6>Memory</h6>
                    <select name="" id="" className='dropdown-toggle'>
                        <option value="">16GB unified memory</option>
                        <option value="">14-inch Liquid Retina XDR display</option>
                        <option value="">14-inch Liquid Retina XDR display</option>
                    </select>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                    <h6>Storage</h6>
                    <select name="" id="" className='dropdown-toggle'>
                        <option value="">1TV SSD Storage</option>
                        <option value="">14-inch Liquid Retina XDR display</option>
                        <option value="">14-inch Liquid Retina XDR display</option>
                    </select>
                </div> */}
            </div>


            {/* <div className='row laptop-productdetails-colours'>
            <div className="col-lg-6 col-md-6 col-sm-6 col-12 ">
                <h6>Color</h6>
                <span>p</span>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                <h6>Size</h6>
                <select name="" id="" className='dropdown-toggle'>
                    <option value="">14-inch Liquid Retina XDR display</option>
                    <option value="">14-inch Liquid Retina XDR display</option>
                    <option value="">14-inch Liquid Retina XDR display</option>
                </select>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                <h6>Memory</h6>
                <select name="" id="" className='dropdown-toggle'>
                    <option value="">16GB unified memory</option>
                    <option value="">14-inch Liquid Retina XDR display</option>
                    <option value="">14-inch Liquid Retina XDR display</option>
                </select>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                <h6>Storage</h6>
                <select name="" id="" className='dropdown-toggle'>
                    <option value="">1TV SSD Storage</option>
                    <option value="">14-inch Liquid Retina XDR display</option>
                    <option value="">14-inch Liquid Retina XDR display</option>
                </select>
            </div>
        </div> */}
        </>
    )
}

export default Attributes