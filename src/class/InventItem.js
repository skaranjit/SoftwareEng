import { Alert } from "react-native";

export default class InventItem {
  static #id = 1000;

  constructor(Name, price, quantity) {
    this.Name = Name;
    this.price = price;
    this.quantity = quantity;
    InventItem.#id++;
    this.Id = InventItem.#id;
    this.used = 0;
  }

  useItem(quan) {
    if (quan > this.quantity || quan < -1) {
      alert("Check the number!");
    } else if (quan > -1) {
      this.used = quan;
    }
  }
  CalcRemain() {
    return this.quantity - this.used;
  }
  totalPrice() {
    return this.price * this.quantity;
  }
  UpdatePrice(newPrice) {
    this.price = newPrice;
  }
}
