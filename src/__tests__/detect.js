describe('detect.js', () => {
  it('Should detect language through react-native-device-info', () => {
    // eslint-disable-next-line no-restricted-properties, no-underscore-dangle
    navigator.__defineGetter__('language', () => 'en-SV');

    jest.mock('react-native-device-info', () => ({ getDeviceLocale: () => 'en-GB' }));

    const { detectDeviceLocale } = require('../detect');
    const locale = detectDeviceLocale();
    expect(locale).toEqual('en-GB');
  });

  it('Should fallback to navigator.language', () => {
    // eslint-disable-next-line no-restricted-properties, no-underscore-dangle
    navigator.__defineGetter__('language', () => 'en-SV');

    jest.mock('react-native-device-info', () => {
      throw new Error('forgot to install')
    });

    const { detectDeviceLocale } = require('../detect');
    const locale = detectDeviceLocale();
    expect(locale).toEqual('en-SV');
  });

  it('Should detect clock format of current device to be 24 hours', () => {
    global.Date = jest.fn(() => ({ toLocaleString: () => 'clock is 24 hour you know' }));
    const { detectDeviceClockFormat } = require('../detect');
    const clockFormat = detectDeviceClockFormat();
    expect(clockFormat).toEqual('24');
  })

  it('Should detect that en-US has 12 hour clock format', () => {
    const { detectDeviceClockFormat } = require('../detect');
    const clockFormat = detectDeviceClockFormat('en-US');
    expect(clockFormat).toEqual('12');
  });

  it('Should detect that sv-SE has 24 hour clock format', () => {
    global.Date = jest.fn(() => ({ toLocaleString: () => 'clock is 24 hour you know' }));
    const { detectDeviceClockFormat } = require('../detect');
    const clockFormat = detectDeviceClockFormat('sv-SE');
    expect(clockFormat).toEqual('24');
  })
});
