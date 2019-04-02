// @ts-ignore
class Person {
  private _name: string;
  private _officeAreaCode: string;
  private _officeNumber: number;
  private _telephoneNumber: TelephoneNumber;

  constructor(name: string, areaCode: string, _officeNumber: number) {
    this._name = name;
    this._officeAreaCode = areaCode;
    this._officeNumber = _officeNumber;
    this._telephoneNumber = new TelephoneNumber(areaCode, _officeNumber);
  }

  get name() {
    return this._name;
  }

  set name(arg) {
    this._name = arg;
  }

  get telephoneNumber() {
    return this._telephoneNumber.toString();
  }

  get officeAreaCode() {
    return this._telephoneNumber.areaCode;
  }

  set officeAreaCode(arg) {
    this._telephoneNumber.areaCode = arg;
  }

  get officeNumber() {
    return this._telephoneNumber.number;
  }

  set officeNumber(arg) {
    this._telephoneNumber.number = arg;
  }
}

class TelephoneNumber {
  private _areaCode: string;
  private _number: number;

  constructor(areaCode: string, officeNumber: number) {
    this._areaCode = areaCode;
    this._number = officeNumber;
  }

  toString() {
    return `(${this.areaCode}) ${this.number}`;
  }

  get areaCode() {
    return this._areaCode;
  }

  set areaCode(arg) {
    this._areaCode = arg;
  }

  get number() {
    return this._number;
  }

  set number(arg) {
    this._number = arg;
  }
}
