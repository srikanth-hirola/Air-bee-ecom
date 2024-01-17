import React from 'react'

const VarientSelect = ({ data, selectedColorIndex, setSelectedColor, setCount, setWarning, setSelectedColorIndex, setLimited, setMainImage }) => {
    return (
        <>
            {data?.showInputs &&
                <div className="colorInput">
                    {data?.colorInputs.map((val1, index) => (
                        <>
                            {val1.stock === 0 ? (
                                <div className="varient-strike-btn cursor-not-allowed" key={index}>
                                    <img src={val1.image.url} width={100} alt="Variant" />
                                    <p>{val1.imageColor}</p>
                                </div>
                            ) : (
                                <div
                                    className='cursor-pointer select-varient'
                                    // className={`${selectedColorIndex === index ? 'highlight-color' : ''
                                    //   }`}
                                    style={{
                                        borderColor: selectedColorIndex === index ? "#fa8232" : '',
                                        borderWidth: selectedColorIndex === index ? "2px" : '',
                                    }}
                                    key={index}
                                    onClick={(e) => {
                                        setSelectedColor(val1);
                                        setCount(1);
                                        setWarning();
                                        setSelectedColorIndex(index);
                                        setLimited();
                                        // setMainImage(val1.image);
                                    }}
                                >
                                    <img src={val1.image.url} width={100} alt="Variant" />
                                    <p>{val1.imageColor}</p>
                                </div>
                            )}
                        </>
                    ))}
                </div>
            }
        </>
    )
}

export default VarientSelect