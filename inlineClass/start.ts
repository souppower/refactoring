// @ts-ignore
class Shipment {
  private _trackingInformation: TrackingInformation;

  constructor(trackingInfo: TrackingInformation) {
    this._trackingInformation = trackingInfo;
  }

  get trackingInfo() {
    return this._trackingInformation.display;
  }

  get trackingInformation() {
    return this._trackingInformation;
  }

  set trackingInformation(aTrackingInformation) {
    this._trackingInformation = aTrackingInformation;
  }
}

// @ts-ignore
class TrackingInformation {
  private _shippingCompany: any;
  private _trackingNumber: number;

  constructor(trackingNumber: number) {
    this._trackingNumber = trackingNumber;
  }

  get shippingCompany() {
    return this._shippingCompany;
  }

  set shippingCompany(arg) {
    this._shippingCompany = arg;
  }

  get trackingNumber() {
    return this._trackingNumber;
  }

  set trackingNumber(arg) {
    this._trackingNumber = arg;
  }

  get display() {
    return `${this.shippingCompany}: ${this.trackingNumber}`;
  }
}
