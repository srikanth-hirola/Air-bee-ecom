import React, { useEffect, useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { Link } from 'react-router-dom';
import Ratings from '../Shop/Ratings';
import useFilterHandler from '../../hooks/useFilterHandler';
import useFetchCategoryHandler from '../../hooks/categories/useFetchCategoryHandler';
// import useGetCurrencyConversion from '../../hooks/Site-config/useGetCurrencyConversion';


const Filter = ({ data, setFilteredData, styles, checkedItems, setCheckedItems, selectedBrands, selectedPriceRange, setSelectedBrands, setSelectedPriceRange, filteredAttr, setFilteredAttr, isVisibleData, toggleDataVisible }) => {

    const { handleCheckboxChange, handleBrandCheckBox, handleFilterCheckswithValues } = useFilterHandler()
    const { fetchCategory, fetchSubCategory } = useFetchCategoryHandler();
    // const { ConvertCurrency } = useGetCurrencyConversion()

    const [filterBrand, setFilterBrand] = useState([]);
    const [category, setCategory] = useState([
        {
            name: '',
            subCategory: [],
        },
    ]);
    const [isFilterVisible, setIsFilterVisible] = useState(false);
    const [price, setPrice] = useState([]);
    const [priceRange, setPriceRanges] = useState();

    const [selectedRating, setSelectedRating] = useState();

    const [attributes, setAttributes] = useState([]);
 
    useEffect(() => {
        const updatedBrandState = [...filterBrand];
        const updatedCategoryState = [...category];
        const updatedPrice = [...price];
        data?.forEach((product) => {
            if (product.showInputs) {
                product.colorInputs.forEach((val) => {
                    const dis = Number(val.discountPrice);
                    if (!updatedPrice.includes(dis)) {
                        updatedPrice.push(dis);
                    }
                });
            } else {
                const dis = Number(product.discountPrice);
                if (!updatedPrice.includes(dis)) {
                    updatedPrice.push(dis);
                }
            }
            setPrice(updatedPrice);

            if (!updatedBrandState.includes(product.brandName)) {
                updatedBrandState.push(product.brandName);
            }
            console.log(product.category, ", " + product?.name)
            const categoryIndex = updatedCategoryState.findIndex(
                (cat) => cat.name === product.category
            );
            if (categoryIndex === -1) {
                updatedCategoryState.push({
                    name: product.category,
                    subCategory: [product.subCatgory],
                });
            } else {
                const subCat = updatedCategoryState[categoryIndex].subCategory.find(
                    (sub) => sub === product.subCatgory
                );
                if (!subCat) {
                    updatedCategoryState[categoryIndex].subCategory.push(
                        product.subCatgory
                    );
                }
            }
        });

        setFilterBrand(updatedBrandState);
        setCategory(updatedCategoryState);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data]);

    useEffect(() => {
        const result = [];
        // eslint-disable-next-line array-callback-return
        data?.map((product) => {
            if (product.showInputs) {
                product.colorInputs.forEach((varient) => {
                    if (varient.haveAttributes) {
                        const { name, values } = varient.attributes[0];
                        const existingIndex = result.findIndex((obj) => obj.name === name);
                        if (existingIndex === -1) {
                            result.push({ name, values: values.map((value) => value.valName) });
                        } else {
                            const existingValues = result[existingIndex].values;
                            values.forEach((value) => {
                                if (!existingValues.includes(value.valName)) {
                                    existingValues.push(value.valName);
                                }
                            });
                        }
                    }
                })
            } else {
                if (product?.haveAttributes) {
                    const { name, values } = product?.attributes[0];
                    const existingIndex = result.findIndex((obj) => obj.name === name);
                    if (existingIndex === -1) {
                        result.push({ name, values: values.map((value) => value.valName) });
                    } else {
                        const existingValues = result[existingIndex].values;
                        values.forEach((value) => {
                            if (!existingValues.includes(value.valName)) {
                                existingValues.push(value.valName);
                            }
                        });
                    }
                }
            }
        })

        setAttributes(result)
    }, [data])

    useEffect(() => {
        const uniquePrice = new Set(price);
        const arr = Array.from(uniquePrice);
        pricerange(arr);
    }, [price]);

    useEffect(() => {
        let filteredBrandData;

        if (selectedBrands.length > 0) {
            filteredBrandData = data.filter((product) =>
                selectedBrands.includes(product.brandName)
            );
        } else {
            filteredBrandData = data;
        }

        setFilteredData(filteredBrandData);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedBrands]);

    useEffect(() => {
        let filteredBrandData;

        if (selectedBrands.length > 0) {
            filteredBrandData = data.filter((product) =>
                selectedBrands.includes(product.brandName)
            );
        }

        if (selectedPriceRange) {
            const min = selectedPriceRange.start;
            const max = selectedPriceRange.end;

            const addedProductIds = [];

            const chooseData = !filteredBrandData ? data : filteredBrandData;

            const filteredPriceRange = chooseData.reduce((acc, product) => {
                if (!addedProductIds.includes(product._id)) {
                    if (product.showInputs) {
                        const hasValidColorInput = product.colorInputs.some(
                            (val) => val.discountPrice >= min && val.discountPrice < max
                        );
                        if (hasValidColorInput) {
                            acc.push(product);
                            addedProductIds.push(product._id);
                        }
                    } else {
                        if (product.discountPrice >= min && product.discountPrice < max) {
                            acc.push(product);
                            addedProductIds.push(product._id);
                        }
                    }
                }
                return acc;
            }, []);
            if (filteredPriceRange.length > 0) {
                setFilteredData(filteredPriceRange);
            } else {
                setFilteredData([]);
            }
        } else {
            setFilteredData(filteredBrandData);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedBrands, selectedPriceRange]);

    useEffect(() => {
        const filteredData = data?.filter((val) => val.ratings >= selectedRating);
        setFilteredData(filteredData);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedRating]);

    useEffect(() => {
        const arr = [];
        // eslint-disable-next-line array-callback-return
        data?.map((product) => {
            if (product.showInputs) {
                product.colorInputs.forEach((varient) => {
                    if (varient.haveAttributes) {
                        const found = varient.attributes[0].values.find((val) => val.valName === filteredAttr);
                        if (found) {
                            arr.push(product)
                        }
                    }
                })
            } else {
                if (product.haveAttributes) {
                    const found = product.attributes[0].values.find((val) => val.valName === filteredAttr);
                    if (found) {
                        arr.push(product)
                    }
                }
            }
        })
        setFilteredData(arr);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [filteredAttr])

    const pricerange = (arr) => {
        const high = Math.max(...arr);
        const low = Math.min(...arr);
        // const average = arr.reduce((sum, value) => sum + value, 0) / arr.length;

        const numRanges = 3; // You can change this to 4 for 4 ranges if needed
        const rangeSize = Math.ceil((high - low) / numRanges);

        // Initialize an array to store the price ranges
        const priceRanges = [];

        for (let i = 0; i < numRanges; i++) {
            const rangeStart = low + i * rangeSize;
            const rangeEnd = low + (i + 1) * rangeSize;

            priceRanges.push({ start: rangeStart, end: rangeEnd });
        }
        setPriceRanges(priceRanges);
    };
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
      setIsVisible(!isVisible);
    };

    return (

        <div className="col-md-4 col-lg-3 col-xl-3 col-xxl-3 column3 col-12 col-sm-12">
            <div className="desktop-filter">

                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Category</Accordion.Header>
                        <Accordion.Body>
                            {category.length > 1 &&
                                category.map(
                                    (cat, i) =>
                                        cat.name && (
                                            <React.Fragment key={i}>
                                                <Link to={`/products-by-category/search?category=${fetchCategory(cat.name)?.name}`}
                                                    className="cat-link text-black font-semibold"
                                                >
                                                    {fetchCategory(cat.name)?.name}
                                                </Link>
                                                <ul>
                                                    {cat.subCategory.length > 0 &&
                                                        cat.subCategory.map((sub, index) => (
                                                            <li key={index}
                                                                className="cat-link"
                                                            >
                                                                <Link to={`/products-by-category/search?category=${fetchCategory(cat.name)?.name}&subcategory=${fetchSubCategory(cat.name, sub)?.name}`}
                                                                    className="cat-link text-black"
                                                                >{fetchSubCategory(cat.name, sub)?.name}</Link>
                                                            </li>
                                                        ))}
                                                </ul>
                                            </React.Fragment>
                                        )
                                )}
                        </Accordion.Body>
                    </Accordion.Item>
                    {/* <hr /> */}
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Brands</Accordion.Header>
                        <Accordion.Body>
                            {filterBrand.map((brand, index) => (
                                <li key={index} className="filter-label">
                                    <input
                                        type="checkbox"
                                        value={brand}
                                        checked={selectedBrands.includes(brand)}
                                        onChange={(e) => { handleBrandCheckBox({ e, selectedBrands, setSelectedBrands }); handleCheckboxChange({ e, checkedItems, setCheckedItems }); }}
                                    />
                                    <label className="mb-0">{brand}</label>

                                </li>
                            ))}
                            {/* <ul>
                                <li><label><input type="checkbox" value="Apple" onChange={handleCheckboxChange} />Apple</label></li>
                                <li><label><input type="checkbox" value="Samsung" onChange={handleCheckboxChange} />Samsung</label></li>
                                <li><label><input type="checkbox" value="Huawei" onChange={handleCheckboxChange} />Huawei</label></li>
                                <li><label><input type="checkbox" value="Pocco" onChange={handleCheckboxChange} />Pocco</label></li>

                                <li><label><input type="checkbox" value="Vivo" onChange={handleCheckboxChange} />Vivo</label></li>
                                <li><label><input type="checkbox" value="Oppo" onChange={handleCheckboxChange} />Oppo</label></li>

                                <Link to="">See All</Link>
                            </ul> */}
                        </Accordion.Body>
                    </Accordion.Item>
                    {/* <hr /> */}
                    <Accordion.Item eventKey="3">
                        <Accordion.Header>Price Range</Accordion.Header>
                        <Accordion.Body>
                            {/* <ul>
                                <li><label><input type="checkbox" value="Below Rs.5000" onChange={handleCheckboxChange} />Below Rs.5000</label></li>
                                <li><label><input type="checkbox" value="Rs.5000-12000" onChange={handleCheckboxChange} />Rs.5000-12000</label></li>
                                <li><label><input type="checkbox" value="Rs.12000-20000" onChange={handleCheckboxChange} />Rs.12000-20000</label></li>
                                <li><label><input type="checkbox" value="Rs.20000-35000" onChange={handleCheckboxChange} />Rs.20000-35000</label></li>

                                <li><label><input type="checkbox" value="above 35000" onChange={handleCheckboxChange} />above 35000</label></li>
                                <Link to="">See All</Link>
                            </ul> */}
                            {priceRange?.length > 0 &&
                                <ul className='filter-price-data'>
                                    {priceRange.map((val, index) => (
                                        <li key={index} className="d-flex  h-[30px] price-range-mq">
                                            <input
                                                className='price-range-i-mq'
                                                type="radio"
                                                value={val}
                                                onChange={(e) => {
                                                    setSelectedPriceRange(val);
                                                }}
                                                checked={
                                                    selectedPriceRange?.start === val.start ? true : false
                                                }
                                            />
                                            <label className="mt-0 price-range-p-mq">
                                                <span>{val.start} {styles?.currency?.Symbol}</span>
                                                <span> - </span>
                                                <span>{val.end} {styles?.currency?.Symbol}</span>
                                            </label>
                                        </li>
                                    ))}
                                </ul>}
                        </Accordion.Body>
                    </Accordion.Item>
                    {/* <hr /> */}
                    <Accordion.Item eventKey="5">
                        <Accordion.Header>Rating</Accordion.Header>
                        <Accordion.Body>
                            {/* <ul>
                                <li><label><input type="checkbox" value="5" onChange={handleCheckboxChange} />5</label></li>
                                <li><label><input type="checkbox" value="4.5" onChange={handleCheckboxChange} />4.5</label></li>
                                <li><label><input type="checkbox" value="4" onChange={handleCheckboxChange} />4</label></li>
                                <li><label><input type="checkbox" value="3.5" onChange={handleCheckboxChange} />3.5</label></li>
                                <li><label><input type="checkbox" value="3" onChange={handleCheckboxChange} />3</label></li>
                            </ul> */}
                            <div className='filrer-price-data'>
                                <p className="d-flex mb-0 align-items-center pb-1 full-star-mq ratings-mobile">
                                    <div className='star-mq star1-mq pr-2'>
                                        <Ratings rating={4} />
                                    </div>
                                    <span className='and-up-mq and-up1-mq'> & up</span>
                                    <input
                                        className="star-i"
                                        type="radio"
                                        value={4}
                                        onChange={(e) => {
                                            setSelectedRating(4); handleCheckboxChange({ e, checkedItems, setCheckedItems })
                                        }}
                                        checked={selectedRating === 4 ? true : false}
                                    />
                                </p>
                                <p className="d-flex mb-0 align-items-center pb-1 full-star-mq ratings-mobile">
                                    <div className='star-mq star1-mq pr-2'>
                                        <Ratings rating={3} />
                                    </div>
                                    <span className='and-up-mq and-up1-mq'> & up</span>
                                    <input
                                        className="star-i"
                                        type="radio"
                                        value={3}
                                        onChange={(e) => {
                                            setSelectedRating(3);
                                        }}
                                        checked={selectedRating === 3 ? true : false}
                                    />
                                </p>
                                <p className="d-flex mb-0 align-items-center pb-1 full-star-mq ratings-mobile">
                                    <div className='star-mq star1-mq pr-2'>
                                        <Ratings rating={2} />
                                    </div>
                                    <span className='and-up-mq and-up1-mq'> & up</span>
                                    <input
                                        className="star-i"
                                        type="radio"
                                        value={2}
                                        onChange={(e) => {
                                            setSelectedRating(2);
                                        }}
                                        checked={selectedRating === 2 ? true : false}
                                    />
                                </p>
                                <p className="d-flex mb-0 align-items-center pb-1 full-star-mq ratings-mobile">
                                    <div className='star-mq star1-mq pr-2'>
                                        <Ratings rating={1} />
                                    </div>
                                    <span className='and-up-mq and-up1-mq'> & up</span>
                                    <input
                                        className="star-i"
                                        type="radio"
                                        value={1}
                                        onChange={(e) => {
                                            setSelectedRating(1);
                                        }}
                                        checked={selectedRating === 1 ? true : false}
                                    />
                                </p>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                    {/* <hr /> */}
                    <Accordion.Item eventKey="4" className="filter-acc-item">
                        <Accordion.Header>Attributes</Accordion.Header>
                        <Accordion.Body>
                            <div className="cat-filter-div">
                                {attributes.length > 0 && attributes.map((att, i) => {
                                    return <div className='mb-4' key={i}>
                                        <p>
                                            <b>{att.name}</b>
                                        </p>
                                        <div className='d-flex flex-wrap gap-2'>
                                            {att.values.map((val, index) => {
                                                return <button key={index} value={val} className='att-btn' onClick={() => { setFilteredAttr(val); handleFilterCheckswithValues({ checkedItems, setCheckedItems, value: val }); }}>{val}</button>
                                            })}
                                        </div>
                                    </div>
                                })}
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>

            {/* <div>
      <button onClick={toggleVisibility}>
        {isVisible ? 'Hide Content' : 'Show Content'}
      </button>
      {isVisible && (
        <div>
          <p>This is the content you want to toggle.</p>
          
        </div>
      )}
    </div> */}

    <button className='filter-button' onClick={() => setIsFilterVisible(!isFilterVisible)}>
        {isFilterVisible ? 'Hide Filters' : 'Show Filters'}
      </button>
            <div className="mobile-filters">
                <div>
                   
       
        
                    {isFilterVisible && (
                        <div>
                            <Accordion>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>Category</Accordion.Header>
                                    <Accordion.Body>
                                        {category.length > 1 &&
                                            category.map(
                                                (cat, i) =>
                                                    cat.name && (
                                                        <React.Fragment key={i}>
                                                            <Link to={`/products-by-category/search?category=${fetchCategory(cat.name)?.name}`}
                                                                className="cat-link text-black"
                                                            >
                                                                {fetchCategory(cat.name)?.name}
                                                            </Link>
                                                            <ul>
                                                                {cat.subCategory.length > 0 &&
                                                                    cat.subCategory.map((sub, index) => (
                                                                        <li key={index}
                                                                            className="cat-link"
                                                                        >
                                                                            <Link to={`/products-by-category/search?category=${fetchCategory(cat.name)?.name}&subcategory=${fetchSubCategory(cat.name, sub)?.name}`}
                                                                                className="cat-link text-black"
                                                                            >{fetchSubCategory(cat.name, sub)?.name}</Link>
                                                                        </li>
                                                                    ))}
                                                            </ul>
                                                        </React.Fragment>
                                                    )
                                            )}
                                    </Accordion.Body>
                                </Accordion.Item>
                                <hr />
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>Brands</Accordion.Header>
                                    <Accordion.Body>
                                        {filterBrand.map((brand, index) => (
                                            <li key={index} className="filter-label">
                                                <input className='mr-2'
                                                    type="checkbox"
                                                    value={brand}
                                                    checked={selectedBrands.includes(brand)}
                                                    onChange={(e) => { handleBrandCheckBox({ e, selectedBrands, setSelectedBrands }); handleCheckboxChange({ e, checkedItems, setCheckedItems }); }}
                                                />
                                                <label className="mb-0">{brand}</label>

                                            </li>
                                        ))}
                                        {/* <ul>
                                <li><label><input type="checkbox" value="Apple" onChange={handleCheckboxChange} />Apple</label></li>
                                <li><label><input type="checkbox" value="Samsung" onChange={handleCheckboxChange} />Samsung</label></li>
                                <li><label><input type="checkbox" value="Huawei" onChange={handleCheckboxChange} />Huawei</label></li>
                                <li><label><input type="checkbox" value="Pocco" onChange={handleCheckboxChange} />Pocco</label></li>

                                <li><label><input type="checkbox" value="Vivo" onChange={handleCheckboxChange} />Vivo</label></li>
                                <li><label><input type="checkbox" value="Oppo" onChange={handleCheckboxChange} />Oppo</label></li>

                                <Link to="">See All</Link>
                            </ul> */}
                                    </Accordion.Body>
                                </Accordion.Item>
                                <hr />
                                <Accordion.Item eventKey="3">
                                    <Accordion.Header>Price Range</Accordion.Header>
                                    <Accordion.Body>
                                        {/* <ul>
                                <li><label><input type="checkbox" value="Below Rs.5000" onChange={handleCheckboxChange} />Below Rs.5000</label></li>
                                <li><label><input type="checkbox" value="Rs.5000-12000" onChange={handleCheckboxChange} />Rs.5000-12000</label></li>
                                <li><label><input type="checkbox" value="Rs.12000-20000" onChange={handleCheckboxChange} />Rs.12000-20000</label></li>
                                <li><label><input type="checkbox" value="Rs.20000-35000" onChange={handleCheckboxChange} />Rs.20000-35000</label></li>

                                <li><label><input type="checkbox" value="above 35000" onChange={handleCheckboxChange} />above 35000</label></li>
                                <Link to="">See All</Link>
                            </ul> */}
                                        {priceRange?.length > 0 &&
                                            <ul>
                                                {priceRange.map((val, index) => (
                                                    <li key={index} className="d-flex space-x-2 h-[30px] price-range-mq">
                                                        <input
                                                            className='price-range-i-mq'
                                                            type="radio"
                                                            value={val}
                                                            onChange={(e) => {
                                                                setSelectedPriceRange(val);
                                                            }}
                                                            checked={
                                                                selectedPriceRange?.start === val.start ? true : false
                                                            }
                                                        />
                                                        <label className="mb-0 price-range-p-mq">
                                                            <span>{val.start} {styles?.currency?.Symbol}</span>
                                                            <span> - </span>
                                                            <span>{val.end} {styles?.currency?.Symbol}</span>
                                                        </label>
                                                    </li>
                                                ))}
                                            </ul>}
                                    </Accordion.Body>
                                </Accordion.Item>
                                <hr />
                                <Accordion.Item eventKey="5">
                                    <Accordion.Header>Rating</Accordion.Header>
                                    <Accordion.Body>
                                        {/* <ul>
                                <li><label><input type="checkbox" value="5" onChange={handleCheckboxChange} />5</label></li>
                                <li><label><input type="checkbox" value="4.5" onChange={handleCheckboxChange} />4.5</label></li>
                                <li><label><input type="checkbox" value="4" onChange={handleCheckboxChange} />4</label></li>
                                <li><label><input type="checkbox" value="3.5" onChange={handleCheckboxChange} />3.5</label></li>
                                <li><label><input type="checkbox" value="3" onChange={handleCheckboxChange} />3</label></li>
                            </ul> */}
                                        <div className=''>
                                            <p className="d-flex mb-0 align-items-center pb-1 full-star-mq ratings-mobile">
                                                <div className='star-mq star1-mq pr-2'>
                                                    <Ratings rating={4} />
                                                </div>
                                                <span className='and-up-mq and-up1-mq'> & up</span>
                                                <input
                                                    className="star-i"
                                                    type="radio"
                                                    value={4}
                                                    onChange={(e) => {
                                                        setSelectedRating(4); handleCheckboxChange({ e, checkedItems, setCheckedItems })
                                                    }}
                                                    checked={selectedRating === 4 ? true : false}
                                                />
                                            </p>
                                            <p className="d-flex mb-0 align-items-center pb-1 full-star-mq ratings-mobile">
                                                <div className='star-mq star1-mq'>
                                                    <Ratings rating={3} />
                                                </div>
                                                <span className='and-up-mq and-up1-mq'> & up</span>
                                                <input
                                                    className="star-i"
                                                    type="radio"
                                                    value={3}
                                                    onChange={(e) => {
                                                        setSelectedRating(3);
                                                    }}
                                                    checked={selectedRating === 3 ? true : false}
                                                />
                                            </p>
                                            <p className="d-flex mb-0 align-items-center pb-1 full-star-mq ratings-mobile">
                                                <div className='star-mq star1-mq'>
                                                    <Ratings rating={2} />
                                                </div>
                                                <span className='and-up-mq and-up1-mq'> & up</span>
                                                <input
                                                    className="star-i"
                                                    type="radio"
                                                    value={2}
                                                    onChange={(e) => {
                                                        setSelectedRating(2);
                                                    }}
                                                    checked={selectedRating === 2 ? true : false}
                                                />
                                            </p>
                                            <p className="d-flex mb-0 align-items-center pb-1 full-star-mq ratings-mobile">
                                                <div className='star-mq star1-mq'>
                                                    <Ratings rating={1} />
                                                </div>
                                                <span className='and-up-mq and-up1-mq'> & up</span>
                                                <input
                                                    className="star-i"
                                                    type="radio"
                                                    value={1}
                                                    onChange={(e) => {
                                                        setSelectedRating(1);
                                                    }}
                                                    checked={selectedRating === 1 ? true : false}
                                                />
                                            </p>
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <hr />
                                <Accordion.Item eventKey="4" >
                                    <Accordion.Header>Attributes</Accordion.Header>
                                    <Accordion.Body>
                                        <div className="cat-filter-div">
                                            {attributes.length > 0 && attributes.map((att, i) => {
                                                return <div className='mb-4' key={i}>
                                                    <p>
                                                        <b>{att.name}</b>
                                                    </p>
                                                    <div className='d-flex flex-wrap gap-2'>
                                                        {att.values.map((val, index) => {
                                                            return <button key={index} value={val} className='att-btn' onClick={() => { setFilteredAttr(val); handleFilterCheckswithValues({ checkedItems, setCheckedItems, value: val }); }}>{val}</button>
                                                        })}
                                                    </div>
                                                </div>
                                            })}
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </div>
                    )}
          
      
                </div>
            </div>

        </div>
    )
}

export default Filter