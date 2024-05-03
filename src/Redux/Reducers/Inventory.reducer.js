const initialState = {
  inventoryData: [],
  isLoading: true,
};

const inventoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_INVENTORY_DATA':
      return {
        ...state,
        inventoryData: action.payload,
        isLoading: false,
      };
    case 'UPDATE_PRODUCT':
      return {
        ...state,
        inventoryData: state.inventoryData.map((product, index) =>
          index === action.payload.index ? action.payload : product
        ),
      };
    case 'DELETE_PRODUCT':
      return {
        ...state,
        inventoryData: state.inventoryData.filter((_, index) => index !== action.payload),
      };
    case 'DISABLE_PRODUCT':
      return {
        ...state,
        inventoryData: state.inventoryData.map((product, index) =>
          index === action.payload ? { ...product, disabled: true } : product
        ),
      };
    default:
      return state;
  }
};

export default inventoryReducer;