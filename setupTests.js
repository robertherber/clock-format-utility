beforeEach(() => {
  // eslint-disable-next-line no-underscore-dangle
  this._Date = Date;
});

afterEach(() => {
  // eslint-disable-next-line no-underscore-dangle
  global.Date = this._Date;
});
