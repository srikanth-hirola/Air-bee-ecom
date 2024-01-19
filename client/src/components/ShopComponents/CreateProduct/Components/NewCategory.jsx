import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { StyleConfig } from '../../../../utils/StyleConfig';
import ShopNewCategory from './ShopNewCategory';
import CustomizeCategory from './CustomizeCategory';

const NewCategory = ({ categories }) => {
    const { seller } = useSelector((state) => state.seller);
    const styles = StyleConfig();
    const categoriesData = categories;

    const [addNewCat, setAddNewCat] = useState(false);
    const [customizeCat, setCustomizeCat] = useState(false);

    const handleAddCategory = (e) => {
        e.preventDefault();
        setAddNewCat(true);
        setCustomizeCat(false);
    };

    const handleCustomizeState = (e) => {
        e.preventDefault();
        setAddNewCat(false);
        setCustomizeCat(true);
    };

    return (
        <div>
            <div>
                <button className="cat-btn" onClick={handleAddCategory} style={{ backgroundColor: styles?.mainColor, color: styles?.fontColor }}>
                    Request New Category
                </button>
                <button className="cat-btn4" onClick={handleCustomizeState} style={{ backgroundColor: styles?.mainColor, color: styles?.fontColor }}>
                    Customize Existing Category
                </button>
            </div>
            <div className="addCat">
                {addNewCat && <ShopNewCategory id={seller._id} />}
                {customizeCat && <CustomizeCategory categoriesData={categoriesData} />}
            </div>
        </div>
    );
};

export default NewCategory;
