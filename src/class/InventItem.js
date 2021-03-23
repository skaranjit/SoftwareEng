export default class InventItem {
  #stock;
  #used;
  static #id = 1000;

  constructor(Name, price, quantity) {
    this.Name = Name;
    this.price = price;
    this.quantity = quantity;
    InventItem.#id++;
    this.Id = InventItem.#id;
  }

  getStock() {
    return this.quantity - InventItem.used;
  }
  useItem(quan) {
    InventItem.#used = quan;
    this.quantity = this.quantity - quan;
  }
  totalPrice() {
    return this.price * this.quantity;
  }
  UpdatePrice(newPrice) {
    this.price = newPrice;
  }
}
