beforeEach(() => {
  this._Date = Date;
});

afterEach(() => {
  global.Date = this._Date;
});
