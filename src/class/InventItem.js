import { Alert } from "react-native";

export default class InventItem {
  #used = 0;
  static #id = 1000;

  constructor(Name, price, quantity) {
    this.Name = Name;
    this.price = price;
    this.quantity = quantity;
    InventItem.#id++;
    this.Id = InventItem.#id;
    this.usedPub = 0;
  }

  getUsed() {
    return this.#used;
  }
  useItem(quan) {
    if (quan > this.quantity) {
      alert("Check the number!");
    } else if (quan > -1) {
      this.#used = quan;
    }
  }
  CalcRemain() {
    return this.quantity - this.#used;
  }
  totalPrice() {
    return this.price * this.quantity;
  }
  UpdatePrice(newPrice) {
    this.price = newPrice;
  }
}
