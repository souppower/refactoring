// @ts-ignore
class Person {
  private _name: string;
  private _department: any;

  constructor(name, department) {
    this._name = name;
    this._department = department;
  }

  get name() {
    return this._name;
  }

  get manager() {
    return this._department.manager;
  }
}

// @ts-ignore
class Department {
  private _chargeCode: string;
  private _manager: any;

  constructor(chargeCode, manager) {
    this._chargeCode = chargeCode;
    this._manager = manager;
  }

  get chargeCode() {
    return this._chargeCode;
  }

  set chargeCode(arg) {
    this._chargeCode = arg;
  }

  get manager() {
    return this._manager;
  }

  set manager(arg) {
    this._manager = arg;
  }
}
