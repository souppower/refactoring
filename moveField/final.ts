// @ts-ignore
class Customer {
  private _name: any;
  private _discountRate: any;
  private _contract: CustomerContract;

  constructor(name, discountRate) {
    this._name = name;
    this._contract = new CustomerContract(dateToday(), discountRate);
    this.discountRate = discountRate;
  }

  get discountRate() {
    return this._contract.discountRate;
  }

  set discountRate(discountRate) {
    this._contract.discountRate = discountRate;
  }

  becomePreferred() {
    this.discountRate = this.discountRate + 0.03;
    // other nice things
  }

  applyDiscount(amount) {
    return amount.subtract(amount.multiply(this.discountRate));
  }
}

// @ts-ignore
class CustomerContract {
  private _startDate: any;
  private _discountRate: any;

  constructor(startDate, discountRate) {
    this._startDate = startDate;
    this._discountRate = discountRate;
  }

  public get discountRate() {
    return this._discountRate;
  }

  public set discountRate(discountRate) {
    this._discountRate = discountRate;
  }
}

// @ts-ignore
const dateToday = () => new Date();
