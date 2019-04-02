// @ts-ignore
class Shipment {
  private _trackingInformation: any;
  private _shippingCompany: any;

  constructor(trackingInfo: TrackingInformation, shippingCompany: any) {
    this._trackingInformation = trackingInfo;
    this._shippingCompany = shippingCompany;
  }

  get shippingCompany() {
    return this.shippingCompany;
  }

  set shippingCompany(arg) {
    this.shippingCompany = arg;
  }

  get trackingNumber() {
    return this.trackingNumber;
  }

  set trackingNumber(arg) {
    this.trackingNumber = arg;
  }
}
