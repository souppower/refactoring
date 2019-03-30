export class NumberRange {
  private _data: { min: number; max: number };

  constructor(min, max) {
    this._data = { min, max };
  }

  get min() {
    return this._data.min;
  }

  get max() {
    return this._data.max;
  }

  contains(arg) {
    return this.min <= arg && arg <= this.max;
  }
}

export function readingsOutsideRange(station, range) {
  return station.readings.filter(r => !range.contains(r.temp));
}
