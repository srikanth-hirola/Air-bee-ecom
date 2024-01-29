import React, { useState } from 'react';
import { Accordion } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Ratings from '../Shop/Ratings';

const MenuFilterMobile = ({ styles,fetchCategory,category,handleBrandCheckBox,fetchSubCategory,handleCheckboxChange, filterBrand, priceRange, selectedBrands, setSelectedBrands, selectedPriceRange, setSelectedPriceRange, selectedRating, setSelectedRating, checkedItems, setCheckedItems, attributes, setFilteredAttr, handleFilterCheckswithValues }) => {
  return (
    <div className="off-canvas-menu">
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
  );
};

export default MenuFilterMobile;
