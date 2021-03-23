import { createStore, combineReducers } from "redux";
import EmpReducer from "./reducer/HRReducer";
import inventReducer from "./reducer/InventoryReducer";

const rootReducer = combineReducers({
  inventory: inventReducer,
  empItems: EmpReducer,
});

const configureStore = () => createStore(rootReducer);

export default configureStore;
