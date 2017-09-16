# clock-format-utility
[ ![Codeship Status for robertherber/clock-format-utility](https://app.codeship.com/projects/78dc88f0-7cf6-0135-5c44-361f0802280c/status?branch=master)](https://app.codeship.com/projects/245786)
[![devDependency Status](https://david-dm.org/robertherber/clock-format-utility/dev-status.svg?style=flat)](https://david-dm.org/robertherber/clock-format-utility?type=dev)


This is a tiny library used to set 12/24 hour clock formatting.
The main use-case is to **support non-standard language/localization combinations** - specifically in moment.

It exposes the following methods; two detection methods:

- **detectDeviceClockFormat**
  - by parsing `date.toLocaleString(detectedDeviceLocale)`
- **detectDeviceLocale**
  - using `react-native-device-info` or (if not available) `navigator.language`

And two specifically aimed at configuring moment:

- **setMomentLocaleClockFormat**
  - overrides current moment locale clock format with detected device clock format
- **setMomentLocale**
  - sets `moment.locale` to the detected device locale

Please feel free to submit pull-requests for other libraries (`detectDeviceLocale` could benefit from supporting more libraries than `react-native-device-info`, and setters for `date-fns` would be very welcome)
