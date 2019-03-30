let defaultOwnerData = { firstName: "Martin", lastName: "Fowler" };
let newSpaceship: any = {};
newSpaceship.owner = xxDefaultOwner();
setDefaultOwner({ firstName: "Rebecca", lastName: "Parsons" });

function xxDefaultOwner() {
  return Object.assign({}, defaultOwnerData);
}

function setDefaultOwner(arg) {
  defaultOwnerData = arg;
}
