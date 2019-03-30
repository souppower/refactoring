let classDefaultOwnerData = { firstName: "Martin", lastName: "Fowler" };
newSpaceship.owner = xxDefaultOwner();
setDefaultOwner({ firstName: "Rebecca", lastName: "Parsons" });

class Person {
  private _lastName: string;
  private _firstName: string;

  constructor(data: { firstName: string; lastName: string }) {
    this._lastName = data.lastName;
    this._firstName = data.firstName;
  }

  get lastName() {
    return this._lastName;
  }

  get firstName() {
    return this._firstName;
  }
}

function xxxDefaultOwner() {
  return new Person(classDefaultOwnerData);
}

function setDefaultOwner(arg) {
  defaultOwnerData = arg;
}
