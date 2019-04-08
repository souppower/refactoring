// @ts-ignore
class Customer {
  private _name: any;
  private _discountRate: any;
  private _contract: CustomerContract;

  constructor(name, discountRate) {
    this._name = name;
    this._discountRate = discountRate;
    this._contract = new CustomerContract(dateToday());
  }

  get discountRate() {
    return this._discountRate;
  }

  becomePreferred() {
    this._discountRate += 0.03;
    // other nice things
  }

  applyDiscount(amount) {
    return amount.subtract(amount.multiply(this._discountRate));
  }
}

// @ts-ignore
class CustomerContract {
  private _startDate: any;
  constructor(startDate) {
    this._startDate = startDate;
  }
}

// @ts-ignore
const dateToday = () => new Date();
