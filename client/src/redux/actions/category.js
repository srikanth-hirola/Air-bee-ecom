import axios from 'axios';
import { server } from '../../server';
// import { ADD_SPECIFICATION } from './types';

// get all categories
export const getAllCategories = () => async (dispatch) => {
  try {
    dispatch({
      type: 'adminAllCategoriesRequest',
    });

    const { data } = await axios.get(`${server}/category/get-all-categories`);

    // return data.categories;

    dispatch({
      type: 'adminAllCategoriesSuccess',
      payload: data.categories,
    });
  } catch (error) {
    dispatch({
      type: 'adminAllCategoriesFailed',
      payload: error.response.data.message,
    });
  }
};



// export const addSpecification = (specification) => ({
//   type: 'ADD_SPECIFICATION',
//   payload: specification,
// });
