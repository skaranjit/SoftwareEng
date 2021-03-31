import { createStore, applyMiddleware, combineReducers } from "redux";
import EmpReducer from "./reducer/HRReducer";
import inventReducer from "./reducer/InventoryReducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  inventory: inventReducer,
  empItems: EmpReducer,
});

const configureStore = () => createStore(rootReducer, applyMiddleware(thunk));

export default configureStore;
