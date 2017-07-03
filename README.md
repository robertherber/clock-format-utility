# clock-format-utility

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
