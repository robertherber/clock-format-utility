describe('index.js', () => {
  it('Should import all deps', () => {
    const allExports = require('../index');
    expect(allExports.detectDeviceLocale).toBeDefined();
    expect(allExports.detectDeviceClockFormat).toBeDefined();
    expect(allExports.setMomentLocale).toBeDefined();
    expect(allExports.setMomentLocaleClockFormat).toBeDefined();
  });
})
