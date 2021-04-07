import { createStore, applyMiddleware, combineReducers } from "redux";
import EmpReducer from "./reducer/HRReducer";
import inventReducer from "./reducer/InventoryReducer";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createTransform } from "redux-persist";
import { invert } from "lodash";

const rootReducer = combineReducers({
  inventory: inventReducer,
  empItems: EmpReducer,
});
const SetTransform = createTransform(
  // transform state on its way to being serialized and persisted.
  (inboundState, key) => {
    // convert mySet to an Array.
    return { ...inboundState, mySet: [...inboundState.mySet] };
  },
  // transform state being rehydrated
  (outboundState, key) => {
    // convert mySet back to a Set.
    return { ...outboundState, mySet: new Set(outboundState.mySet) };
  },
  // define which reducers this transform gets called for.
  { whitelist: ["inventory"] }
);
const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  whitelist: ["inventory"],
  transforms: [SetTransform],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
export let store = createStore(persistedReducer, applyMiddleware(thunk));
export let persistedStore = persistStore(store);
