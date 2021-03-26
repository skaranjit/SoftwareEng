import {
  ADD_INVENTORY,
  UPDATE_INVENTORY_ITEM_PRICE,
  UPDATE_INVENTORY_ITEM_QUANTITY,
  DELETE_INVENTORY_ITEM,
  UPDATE_INVENTORY_ITEM_USED,
} from "./types";

export const AddInventory = (name, price, quantity) => ({
  type: ADD_INVENTORY,
  name: name,
  price: price,
  quantity: quantity,
});

export const UpdateInventoryItemPrice = (key, obj, price) => ({
  type: UPDATE_INVENTORY_ITEM_PRICE,
  key: key,
  obj: obj,
  price: price,
});

export const UpdateInventoryItemQuantity = (key, obj, quan) => ({
  type: UPDATE_INVENTORY_ITEM_QUANTITY,
  key: key,
  obj: obj,
  quan: quan,
});
export const UpdateInventoryItemUsed = (key, obj, newUsed) => ({
  type: UPDATE_INVENTORY_ITEM_USED,
  key: key,
  obj: obj,
  newUsed: newUsed,
});
export const DeleteInvItem = (payload) => ({
  type: DELETE_INVENTORY_ITEM,
  payload: payload,
});
