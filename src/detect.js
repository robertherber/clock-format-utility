const specificClockConfig = {
  'en-SV': '24',
};

export const detectDeviceLocale = () => {
  try {
    // eslint-disable-next-line import/no-extraneous-dependencies
    const deviceInfo = require('react-native-device-info');

    return deviceInfo.getDeviceLocale();
  } catch (e) {

    try
    {
      return window.navigator.languages && window.navigator.languages.length > 0
        ? window.navigator.languages[0]
        : window.navigator.language || window.navigator.userLanguage;
    }
    catch(ex){
      return 'en-US';
    }

  }
};

export const detectDeviceClockFormat = (locale = detectDeviceLocale()) => {
  if(specificClockConfig[locale]){
    return specificClockConfig[locale];
  }

  const timeString = new Date().toLocaleTimeString(locale),
        foundAMorPM = timeString.indexOf('AM') > -1 || timeString.indexOf('PM') > -1;

  return foundAMorPM ? '12' : '24';
};

export default {
  detectDeviceClockFormat,
  detectDeviceLocale,
}
