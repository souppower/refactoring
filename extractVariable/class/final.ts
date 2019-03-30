export class Order {
  private _data: { quantity: number; itemPrice: number };
  constructor(aRecord) {
    this._data = aRecord;
  }

  get quantity() {
    return this._data.quantity;
  }

  get itemPrice() {
    return this._data.itemPrice;
  }

  get price() {
    return this.basePrice - this.quantityDiscount + this.shipping;
  }

  private get basePrice() {
    return this.quantity * this.itemPrice;
  }

  private get quantityDiscount() {
    return Math.max(0, this.quantity - 500) * this.itemPrice * 0.05;
  }

  private get shipping() {
    return Math.min(this.quantity * this.itemPrice * 0.1, 100);
  }
}
