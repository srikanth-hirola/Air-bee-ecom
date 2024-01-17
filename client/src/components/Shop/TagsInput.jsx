// import React, { useState } from 'react';
// import { FaTimes } from 'react-icons/fa'; // Import the delete icon from react-icons library

// function TagsInput() {
//   const [tags, setTags] = useState([]);
//   const [inputValue, setInputValue] = useState('');

//   const handleInputChange = (event) => {
//     setInputValue(event.target.value);
//   };

//   const handleInputKeyDown = (event) => {
//     if (event.key === 'Enter' && inputValue.trim() !== '') {
//       setTags([...tags, inputValue.trim()]);
//       setInputValue('');
//     }
//   };

//   const removeTag = (indexToRemove) => {
//     const updatedTags = tags.filter((_, index) => index !== indexToRemove);
//     setTags(updatedTags);
//   };

//   return (
//     <div className='taginput-shoppage1'>
//       <div>
//        <div className="tags">
//        {tags.map((tag, index) => (
//           <span key={index} className="tag">
//             {tag}
//             <FaTimes onClick={() => removeTag(index)} className="delete-icon" />
//           </span>
//         ))}
//        </div>
//       </div>
//       <a href="">clear all icons</a>
//       <input
//         type="text"
//         value={inputValue}
//         onChange={handleInputChange}
//         onKeyDown={handleInputKeyDown}
//         placeholder="Press Enter to add tags"
//       />
      
//     </div>
//   );
// }

// export default TagsInput;

import React, { useState } from 'react';

const TagsInput = () => {
  const [checkedItems, setCheckedItems] = useState([]);

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setCheckedItems([...checkedItems, value]);
    } else {
      const updatedItems = checkedItems.filter((item) => item !== value);
      setCheckedItems(updatedItems);
    }
  };

  const removeTag = (valueToRemove) => {
    const updatedItems = checkedItems.filter((item) => item !== valueToRemove);
    setCheckedItems(updatedItems);
  };

  return (
    <div>
      <h3>Checkbox Tag List</h3>
      <form>
        <label>
          <input
            type="checkbox"
            value="Tag 1"
            onChange={handleCheckboxChange}
          />
          Tag 1
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            value="Tag 2"
            onChange={handleCheckboxChange}
          />
          Tag 2
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            value="Tag 3"
            onChange={handleCheckboxChange}
          />
          Tag 3
        </label>
        <br />
        {/* Add more checkboxes as needed */}
      </form>

      <div>
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
      </div>
    </div>
  );
};

export default TagsInput;