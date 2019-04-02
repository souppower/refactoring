// @ts-ignore
class Person {
  private _name: string;
  private _officeAreaCode: string;
  private _officeNumber: number;

  constructor(name: string, areaCode: string, _officeNumber: number) {
    this._name = name;
    this._officeAreaCode = areaCode;
    this._officeNumber = _officeNumber;
  }

  get name() {
    return this._name;
  }

  set name(arg) {
    this._name = arg;
  }

  get telephoneNumber() {
    return `(${this.officeAreaCode}) ${this.officeNumber}`;
  }

  get officeAreaCode() {
    return this._officeAreaCode;
  }

  set officeAreaCode(arg) {
    this._officeAreaCode = arg;
  }

  get officeNumber() {
    return this._officeNumber;
  }

  set officeNumber(arg) {
    this._officeNumber = arg;
  }
}
