import {
  ADD_INVENTORY,
  UPDATE_INVENTORY_ITEM_PRICE,
  UPDATE_INVENTORY_ITEM_QUANTITY,
  DELETE_INVENTORY_ITEM,
  UPDATE_INVENTORY_ITEM_USED,
} from "./../actions/types";
import InventItem from "../class/InventItem";
import lodash from "lodash";
//Mock Data
const a = new InventItem("asda", 12, 2, 1);
const b = new InventItem("Basdas", 24.7, 9);
const c = new InventItem("zxcz", 24.7, 9);
const d = new InventItem("qweqz", 24.7, 9);
const e = new InventItem("lsdas", 24.7, 9);
const f = new InventItem("hjgfj", 24.7, 9);

let initialState = {
  InventoryList: {
    [a.Id]: a,
    [b.Id]: b,
    [c.Id]: c,
    [d.Id]: d,
    [e.Id]: e,
    [f.Id]: f,
  },
};
console.log(a);

const inventReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_INVENTORY:
      const newInventItem = new InventItem(
        action.name,
        parseInt(action.price),
        parseInt(action.quantity)
      );

      state.InventoryList = Object.assign(state.InventoryList, {
        [newInventItem.Id]: newInventItem,
      });
      return state;
    case UPDATE_INVENTORY_ITEM_PRICE:
      //state.InventoryList.forEach((item) => console.log(item.obj.price));
      action.obj.price = action.price;
      return {
        ...state,
        [action.obj.Id]: action.obj,
      };
    case UPDATE_INVENTORY_ITEM_QUANTITY:
      action.obj.quantity = action.quan;
      return {
        ...state,
        [action.key]: action.obj,
      };
    case UPDATE_INVENTORY_ITEM_USED:
      action.obj.useItem(action.newUsed);
      return {
        ...state,
        [action.key]: action.obj,
      };

    case DELETE_INVENTORY_ITEM:
      return {
        InventoryList: lodash.omit(state.InventoryList, action.payload),
      };

    default:
      return state;
  }
};

export default inventReducer;
