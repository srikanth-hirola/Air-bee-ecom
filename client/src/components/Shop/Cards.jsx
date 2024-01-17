import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import TagsInput from './TagsInput';
import { Productcard } from './Productcard';
import { useState } from 'react';

export const Cards = () => {
  const [checkedItems, setCheckedItems] = useState([]);
  const [isDataVisible, setIsDataVisible] = useState(true);


  const removeTag = (valueToRemove) => {
    const updatedItems = checkedItems.filter((item) => item !== valueToRemove);
    setCheckedItems(updatedItems);
  };


  const toggleDataVisibility = () => {
    setIsDataVisible(!isDataVisible);
  };

  return (
    <>

      {/* <div className="container"> */}
      <div className="col-md-9 ">

        <div className='row shoppage-row1'>
          <div className='col-md-6 col-sm-6 col-6'>
            12,911 items in Mobile accessory
          </div>
          <div className="col-md-6 col-sm-6 col-6 icons1-shoppage1">
            <div className=''>
              <DropdownButton id="dropdown-basic-button" title="Features">
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </DropdownButton>
            </div>
            <div className="gridicon1">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M11 3H3V11H11V3Z" fill="#1C1C1C" />
                <path d="M11 13H3V21H11V13Z" fill="#1C1C1C" />
                <path d="M21 3H13V11H21V3Z" fill="#1C1C1C" />
                <path d="M21 13H13V21H21V13Z" fill="#1C1C1C" />
              </svg>
            </div>

          </div>
        </div>
        <div className="row shoppage1-row2">
          <div className='col-md-10'>

            {checkedItems.map((item, index) => (
              <div key={index} className="tag">
                {item}
                <span
                  className="close-icon"
                  onClick={() => removeTag(item)}
                >
                  &#x2715;
                </span>
              </div>
            ))}
            <a href="">clear all icons</a>
          </div>
        </div>
        <div className="row shoppage1-row3">
          <Productcard />
        </div>
      </div>
    </>

  )
}
