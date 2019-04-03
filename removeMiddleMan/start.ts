// @ts-ignore
class Person {
  private _department: any;
  get manager() {
    return this._department.manager;
  }
}
// @ts-ignore
class Department {
  private _manager: any;
  get manager() {
    return this._manager;
  }
}
