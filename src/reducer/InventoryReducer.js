import {
  ADD_INVENTORY,
  UPDATE_INVENTORY_ITEM_PRICE,
  UPDATE_INVENTORY_ITEM_QUANTITY,
  DELETE_INVENTORY_ITEM,
} from "./../actions/types";
import InventItem from "../class/InventItem";
//Mock Data
const a = new InventItem("asda", 12, 2);
const b = new InventItem("Basdas", 24.7, 9);
const c = new InventItem("zxcz", 24.7, 9);
const d = new InventItem("qweqz", 24.7, 9);
const e = new InventItem("lsdas", 24.7, 9);
const f = new InventItem("hjgfj", 24.7, 9);

const initialState = {
  InventoryList: {
    [a.Id]: a,
    [b.Id]: b,
    [c.Id]: c,
    [d.Id]: d,
    [e.Id]: e,
    [f.Id]: f,
  },
};

const inventReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_INVENTORY:
      return {
        ...state,
        InventoryList: state.InventoryList.assign(data),
      };
    case UPDATE_INVENTORY_ITEM_PRICE:
      //state.InventoryList.forEach((item) => console.log(item.obj.price));
      action.obj.price = action.price;
      return {
        ...state,
        [action.key]: action.obj,
        InventoryList: state.InventoryList,
      };
    case UPDATE_INVENTORY_ITEM_QUANTITY:
      action.obj.quantity = action.quan;
      return {
        ...state,
        [action.key]: action.obj,
        InventoryList: state.InventoryList,
      };

    case DELETE_INVENTORY_ITEM:
      return {
        ...state,
        InventoryList: state.InventoryList.filter((item) => item.key != key),
      };
    default:
      return state;
  }
};

export default inventReducer;
