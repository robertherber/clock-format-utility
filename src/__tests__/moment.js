import { setMomentLocaleClockFormat, setMomentLocale } from '../moment';

describe('moment.js', () => {
  it('Should set moment to current device locale', () => {
    const moment = require('moment');
    // eslint-disable-next-line no-restricted-properties, no-underscore-dangle
    navigator.__defineGetter__('language', () => 'sv-SE');

    setMomentLocale('en-GB');
    expect(moment.locale()).toEqual('en-gb');

    setMomentLocale();
    expect(moment.locale()).toEqual('sv');
  });

  it('Should update moment locale to use clock format of current device locale', () => {
    const language = 'sv-SE';
    // eslint-disable-next-line no-restricted-properties, no-underscore-dangle
    navigator.__defineGetter__('language', () => language);

    const moment = require('moment');

    moment.locale(language);

    setMomentLocaleClockFormat();

    const { _longDateFormat } = moment.localeData();

    expect(_longDateFormat).toEqual({
      L: 'YYYY-MM-DD',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY [kl.] h:mm A',
      LLLL: 'dddd D MMMM YYYY [kl.] h:mm A',
      LT: 'h:mm A',
      LTS: 'h:mm:ss A',
      lll: 'D MMM YYYY h:mm A',
      llll: 'ddd D MMM YYYY h:mm A',
    });
  });

  it('Should update moment locale to use 24h clock format', () => {
    const language = 'en-US';

    const moment = require('moment');

    moment.updateLocale(language, {
      longDateFormat: {
        L: 'MM/DD/YYYY',
        LL: 'MMMM D, YYYY',
        LLL: 'MMMM D, YYYY h:mm A',
        LLLL: 'dddd, MMMM D, YYYY h:mm A',
        LT: 'h:mm A',
        LTS: 'h:mm:ss A',
        l: 'M/D/YYYY',
        ll: 'MMM D, YYYY',
        lll: 'MMM D, YYYY h:mm A',
        llll: 'ddd, MMM D, YYYY h:mm A',
      },
    });

    setMomentLocaleClockFormat('24', language);

    const { _longDateFormat } = moment.localeData(language);

    expect(_longDateFormat).toEqual({
      L: 'MM/DD/YYYY',
      LL: 'MMMM D, YYYY',
      LLL: 'MMMM D, YYYY HH:mm',
      LLLL: 'dddd, MMMM D, YYYY HH:mm',
      LT: 'HH:mm',
      LTS: 'HH:mm:ss',
      l: 'M/D/YYYY',
      ll: 'MMM D, YYYY',
      lll: 'MMM D, YYYY HH:mm',
      llll: 'ddd, MMM D, YYYY HH:mm',
    });
  });

  it('Should update moment locale to use 12h clock format', () => {
    const language = 'sv-SE';
    const moment = require('moment');

    moment.updateLocale(language, {
      longDateFormat: {
        L: 'YYYY-MM-DD',
        LL: 'D MMMM YYYY',
        LLL: 'D MMMM YYYY [kl.] HH:mm',
        LLLL: 'dddd D MMMM YYYY [kl.] HH:mm',
        LT: 'HH:mm',
        LTS: 'HH:mm:ss',
        lll: 'D MMM YYYY HH:mm',
        llll: 'ddd D MMM YYYY HH:mm',
      },
    });

    setMomentLocaleClockFormat('12', language);

    const { _longDateFormat } = moment.localeData(language);

    expect(_longDateFormat).toEqual({
      L: 'YYYY-MM-DD',
      LL: 'D MMMM YYYY',
      LLL: 'D MMMM YYYY [kl.] h:mm A',
      LLLL: 'dddd D MMMM YYYY [kl.] h:mm A',
      LT: 'h:mm A',
      LTS: 'h:mm:ss A',
      lll: 'D MMM YYYY h:mm A',
      llll: 'ddd D MMM YYYY h:mm A',
    });
  });
});