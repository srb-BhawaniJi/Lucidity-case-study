import { combineReducers } from 'redux';
import inventoryReducer from './Inventory.reducer';

const rootReducer = combineReducers({
  inventory: inventoryReducer,
});

export default rootReducer;