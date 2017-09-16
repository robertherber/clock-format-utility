import { detectDeviceLocale, detectDeviceClockFormat } from './detect';

export const setMomentLocale = (locale = detectDeviceLocale()) =>
  // eslint-disable-next-line import/no-extraneous-dependencies
  require('moment').locale(locale);

export const replaceFormatInString = (oldValue, clockFormat = '24') =>
  clockFormat === '24'
    ? oldValue.replace('h:mm A', 'HH:mm')
    : oldValue.replace('HH:mm', 'h:mm A');

export const setMomentLocaleClockFormat = (
  clockFormat = detectDeviceClockFormat(),
  // eslint-disable-next-line import/no-extraneous-dependencies
  locale = require('moment').locale()
) => {
  // eslint-disable-next-line import/no-extraneous-dependencies
  const moment = require('moment'),
        // eslint-disable-next-line no-underscore-dangle
        longDateFormat = moment.localeData(locale)._longDateFormat;

  if (clockFormat === '24') {
    moment.updateLocale(locale, {
      longDateFormat: {
        ...longDateFormat,
        LT: 'HH:mm',
        LTS: 'HH:mm:ss',
        LLL:
          longDateFormat.LLL && replaceFormatInString(longDateFormat.LLL),
        LLLL:
          longDateFormat.LLLL && replaceFormatInString(longDateFormat.LLLL),
        lll:
          longDateFormat.lll && replaceFormatInString(longDateFormat.lll),
        llll:
          longDateFormat.llll && replaceFormatInString(longDateFormat.llll),
      },
    });
  } else {
    moment.updateLocale(locale, {
      longDateFormat: {
        ...longDateFormat,
        LT: 'h:mm A',
        LTS: 'h:mm:ss A',
        LLL:
          longDateFormat.LLL && replaceFormatInString(longDateFormat.LLL, '12'),
        LLLL:
          longDateFormat.LLLL && replaceFormatInString(longDateFormat.LLLL, '12'),
        lll:
          longDateFormat.lll && replaceFormatInString(longDateFormat.lll, '12'),
        llll:
          longDateFormat.llll && replaceFormatInString(longDateFormat.llll, '12'),
      },
    });
  }
};
