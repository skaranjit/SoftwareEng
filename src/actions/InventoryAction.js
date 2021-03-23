import {
  ADD_INVENTORY,
  UPDATE_INVENTORY_ITEM_PRICE,
  UPDATE_INVENTORY_ITEM_QUANTITY,
  DELETE_INVENTORY_ITEM,
} from "./types";

export const addInventory = (InvItem) => ({
  type: ADD_INVENTORY,
  data: InvItem,
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

export const DeleteInvItem = (key) => ({
  type: DELETE_INVENTORY_ITEM,
  key: key,
});
