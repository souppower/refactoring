// @ts-ignore
class Account {
  constructor(private _daysOverdrawn: number, private type: AccountType) {}

  get daysOverdrawn() {
    return this._daysOverdrawn;
  }

  get bankCharge() {
    let result = 4.5;
    if (this.daysOverdrawn > 0) result += this.overdraftCharge;
    return result;
  }

  get overdraftCharge() {
    return this.type.overdraftCharge(this);
  }
}

class AccountType {
  constructor(public isPremium: boolean) {}

  overdraftCharge(account) {
    if (this.isPremium) {
      const baseCharge = 10;
      if (account.daysOverdrawn <= 7) return baseCharge;
      else return baseCharge + (account.daysOverdrawn - 7) * 0.85;
    } else return account.daysOverdrawn * 1.75;
  }
}
