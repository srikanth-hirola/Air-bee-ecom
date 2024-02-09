import axios from 'axios';
import { server } from '../../server';
// import { ADD_SPECIFICATION } from './types';
import WorkerFactory from '../../WorkerFactory';
import myWorker from '../../workers/myWorker.worker'
const workerInstance = new WorkerFactory(myWorker);

// get all categories
export const getAllCategories = () => async (dispatch) => {
  try {
    dispatch({
      type: 'adminAllCategoriesRequest',
    });

    const { data } = await axios.get(`${server}/category/get-all-categories`);
    workerInstance.postMessage(data);

    workerInstance.onmessage = (res) => {
      dispatch({
        type: 'adminAllCategoriesSuccess',
        payload: data.categories,
      });
    };

    // return data.categories;


  } catch (error) {
    workerInstance.onerror = (err) => {
      dispatch({
        type: 'adminAllCategoriesFailed',
        payload: error.response.data.message,
      });
    };
  }
};



// export const addSpecification = (specification) => ({
//   type: 'ADD_SPECIFICATION',
//   payload: specification,
// });
