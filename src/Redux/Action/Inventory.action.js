import axios from 'axios';

export const setInventoryData = (data) => {
    return {
      type: 'SET_INVENTORY_DATA',
      payload: data,
    };
  };

export const fetchInventoryData = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get('https://dev-0tf0hinghgjl39z.api.raw-labs.com/inventory');
      dispatch(setInventoryData(response.data));
    } catch (error) {
      console.error('Error fetching inventory data:', error);
    }
  };
};


export const updateProduct = (updatedProduct) => {
  return {
    type: 'UPDATE_PRODUCT',
    payload: updatedProduct,
  };
};

export const deleteProduct = (index) => {
  return {
    type: 'DELETE_PRODUCT',
    payload: index,
  };
};

export const disableProduct = (index) => {
  return {
    type: 'DISABLE_PRODUCT',
    payload: index,
  };
};

