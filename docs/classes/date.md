[as-date](../README.md) / Date

# Class: Date

JavaScript Date Object, implemented in AssemblyScript
Inspired by: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date

Missing the following methods:

Static Methods:
Date.now()
Date.parse()

Instance Methods:

getYear() [Deprecated]
setYear() [Deprecated]
toDateString()
toISOString()
toJSON()
toGMTString()
toLocaleDateString()
toLocaleFormat()
toLocaleString()
toLocaleTimeString()
toString()
toTimeString()
toUTCString()
valueOf()

## Table of contents

### Constructors

- [constructor](date.md#constructor)

### Properties

- [localDate](date.md#localdate)
- [timeZone](date.md#timezone)
- [utcDate](date.md#utcdate)
- [value](date.md#value)

### Methods

- [getDate](date.md#getdate)
- [getDay](date.md#getday)
- [getFullYear](date.md#getfullyear)
- [getHours](date.md#gethours)
- [getLocalCalendarDate](date.md#getlocalcalendardate)
- [getMilliseconds](date.md#getmilliseconds)
- [getMinutes](date.md#getminutes)
- [getMonth](date.md#getmonth)
- [getSeconds](date.md#getseconds)
- [getTime](date.md#gettime)
- [getTimezoneOffset](date.md#gettimezoneoffset)
- [getUTCCalendarDate](date.md#getutccalendardate)
- [getUTCDate](date.md#getutcdate)
- [getUTCDay](date.md#getutcday)
- [getUTCFullYear](date.md#getutcfullyear)
- [getUTCHours](date.md#getutchours)
- [getUTCMilliseconds](date.md#getutcmilliseconds)
- [getUTCMinutes](date.md#getutcminutes)
- [getUTCMonth](date.md#getutcmonth)
- [getUTCSeconds](date.md#getutcseconds)
- [isNormalizeLocalDate](date.md#isnormalizelocaldate)
- [isNormalizeUTCDate](date.md#isnormalizeutcdate)
- [setDate](date.md#setdate)
- [setFullYear](date.md#setfullyear)
- [setHours](date.md#sethours)
- [setMilliseconds](date.md#setmilliseconds)
- [setMinutes](date.md#setminutes)
- [setMonth](date.md#setmonth)
- [setSeconds](date.md#setseconds)
- [setTime](date.md#settime)
- [setTimezoneOffset](date.md#settimezoneoffset)
- [setUTCDate](date.md#setutcdate)
- [setUTCFullYear](date.md#setutcfullyear)
- [setUTCHours](date.md#setutchours)
- [setUTCMilliseconds](date.md#setutcmilliseconds)
- [setUTCMinutes](date.md#setutcminutes)
- [setUTCMonth](date.md#setutcmonth)
- [setUTCSeconds](date.md#setutcseconds)
- [UTC](date.md#utc)

## Constructors

### constructor

\+ **new Date**(`value`: *number*): [*Date*](date.md)

#### Parameters:

Name | Type |
:------ | :------ |
`value` | *number* |

**Returns:** [*Date*](date.md)

Defined in: [date.ts:86](https://github.com/torch2424/as-date/blob/main/assembly/date.ts#L86)

## Properties

### localDate

• `Private` **localDate**: *null* \| *CalendarDate*

Defined in: [date.ts:45](https://github.com/torch2424/as-date/blob/main/assembly/date.ts#L45)

___

### timeZone

• `Private` **timeZone**: *TimeZone*

Defined in: [date.ts:44](https://github.com/torch2424/as-date/blob/main/assembly/date.ts#L44)

___

### utcDate

• `Private` **utcDate**: *null* \| *CalendarDate*

Defined in: [date.ts:46](https://github.com/torch2424/as-date/blob/main/assembly/date.ts#L46)

___

### value

• `Private` **value**: *number*

Defined in: [date.ts:43](https://github.com/torch2424/as-date/blob/main/assembly/date.ts#L43)

## Methods

### getDate

▸ **getDate**(): *number*

**Returns:** *number*

the day of the month (1–31) of the specified date according to local time.

Defined in: [date.ts:233](https://github.com/torch2424/as-date/blob/main/assembly/date.ts#L233)

___

### getDay

▸ **getDay**(): *number*

Returns the day of the week represented by this date, according to local time.
The returned value ({@code 0} = Sunday, {@code 1} = Monday,
{@code 2} = Tuesday, {@code 3} = Wednesday, {@code 4} =
Thursday, {@code 5} = Friday, {@code 6} = Saturday)

**Returns:** *number*

Defined in: [date.ts:270](https://github.com/torch2424/as-date/blob/main/assembly/date.ts#L270)

___

### getFullYear

▸ **getFullYear**(): *number*

**Returns:** *number*

The full year as a 4-digit number, according to local time.

Defined in: [date.ts:163](https://github.com/torch2424/as-date/blob/main/assembly/date.ts#L163)

___

### getHours

▸ **getHours**(): *number*

**Returns:** *number*

the hour (0–23) in the specified date according to local time.

Defined in: [date.ts:287](https://github.com/torch2424/as-date/blob/main/assembly/date.ts#L287)

___

### getLocalCalendarDate

▸ `Private`**getLocalCalendarDate**(): *CalendarDate*

**Returns:** *CalendarDate*

Defined in: [date.ts:48](https://github.com/torch2424/as-date/blob/main/assembly/date.ts#L48)

___

### getMilliseconds

▸ **getMilliseconds**(): *number*

**Returns:** *number*

the milliseconds (0–999) in the specified date according to local time.

Defined in: [date.ts:389](https://github.com/torch2424/as-date/blob/main/assembly/date.ts#L389)

___

### getMinutes

▸ **getMinutes**(): *number*

**Returns:** *number*

the minutes (0–59) in the specified date according to local time.

Defined in: [date.ts:321](https://github.com/torch2424/as-date/blob/main/assembly/date.ts#L321)

___

### getMonth

▸ **getMonth**(): *number*

**Returns:** *number*

the month (0–11) in the specified date according to local time.

Defined in: [date.ts:199](https://github.com/torch2424/as-date/blob/main/assembly/date.ts#L199)

___

### getSeconds

▸ **getSeconds**(): *number*

**Returns:** *number*

the seconds (0–59) in the specified date according to local time.

Defined in: [date.ts:355](https://github.com/torch2424/as-date/blob/main/assembly/date.ts#L355)

___

### getTime

▸ **getTime**(): *number*

**Returns:** *number*

the number of milliseconds since January 1, 1970, 00:00:00 UTC.

Defined in: [date.ts:132](https://github.com/torch2424/as-date/blob/main/assembly/date.ts#L132)

___

### getTimezoneOffset

▸ **getTimezoneOffset**(): *number*

**Returns:** *number*

time zone difference, in minutes, from UTC.

Defined in: [date.ts:148](https://github.com/torch2424/as-date/blob/main/assembly/date.ts#L148)

___

### getUTCCalendarDate

▸ `Private`**getUTCCalendarDate**(): *CalendarDate*

**Returns:** *CalendarDate*

Defined in: [date.ts:60](https://github.com/torch2424/as-date/blob/main/assembly/date.ts#L60)

___

### getUTCDate

▸ **getUTCDate**(): *number*

**Returns:** *number*

the day of the month (1–31) of the specified date according to universal time.

Defined in: [date.ts:250](https://github.com/torch2424/as-date/blob/main/assembly/date.ts#L250)

___

### getUTCDay

▸ **getUTCDay**(): *number*

Returns the day of the week represented by this date, according to universal time.
The returned value ({@code 0} = Sunday, {@code 1} = Monday,
{@code 2} = Tuesday, {@code 3} = Wednesday, {@code 4} =
Thursday, {@code 5} = Friday, {@code 6} = Saturday)

**Returns:** *number*

Defined in: [date.ts:280](https://github.com/torch2424/as-date/blob/main/assembly/date.ts#L280)

___

### getUTCFullYear

▸ **getUTCFullYear**(): *number*

**Returns:** *number*

The full year as a 4-digit number, according to universal time.

Defined in: [date.ts:181](https://github.com/torch2424/as-date/blob/main/assembly/date.ts#L181)

___

### getUTCHours

▸ **getUTCHours**(): *number*

**Returns:** *number*

the hour (0–23) in the specified date according to universal time.

Defined in: [date.ts:304](https://github.com/torch2424/as-date/blob/main/assembly/date.ts#L304)

___

### getUTCMilliseconds

▸ **getUTCMilliseconds**(): *number*

**Returns:** *number*

the milliseconds (0–999) in the specified date according to universal time.

Defined in: [date.ts:406](https://github.com/torch2424/as-date/blob/main/assembly/date.ts#L406)

___

### getUTCMinutes

▸ **getUTCMinutes**(): *number*

**Returns:** *number*

the minutes (0–59) in the specified date according to universal time.

Defined in: [date.ts:338](https://github.com/torch2424/as-date/blob/main/assembly/date.ts#L338)

___

### getUTCMonth

▸ **getUTCMonth**(): *number*

**Returns:** *number*

Defined in: [date.ts:216](https://github.com/torch2424/as-date/blob/main/assembly/date.ts#L216)

___

### getUTCSeconds

▸ **getUTCSeconds**(): *number*

**Returns:** *number*

the seconds (0–59) in the specified date according to universal time.

Defined in: [date.ts:372](https://github.com/torch2424/as-date/blob/main/assembly/date.ts#L372)

___

### isNormalizeLocalDate

▸ `Private`**isNormalizeLocalDate**(): bool

**Returns:** bool

Defined in: [date.ts:72](https://github.com/torch2424/as-date/blob/main/assembly/date.ts#L72)

___

### isNormalizeUTCDate

▸ `Private`**isNormalizeUTCDate**(): bool

**Returns:** bool

Defined in: [date.ts:80](https://github.com/torch2424/as-date/blob/main/assembly/date.ts#L80)

___

### setDate

▸ **setDate**(`date`: *number*): *number*

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`date` | *number* | the day of the month (1–31) of the specified date according to local time.   |

**Returns:** *number*

the number of milliseconds since January 1, 1970, 00:00:00 UTC (the new timestamp).

Defined in: [date.ts:241](https://github.com/torch2424/as-date/blob/main/assembly/date.ts#L241)

___

### setFullYear

▸ **setFullYear**(`year`: *number*): *number*

The method sets the full year for a specified date according to local time.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`year` | *number* | the full 4-digit year to set   |

**Returns:** *number*

the number of milliseconds since January 1, 1970, 00:00:00 UTC (the new timestamp).

Defined in: [date.ts:172](https://github.com/torch2424/as-date/blob/main/assembly/date.ts#L172)

___

### setHours

▸ **setHours**(`hours`: *number*): *number*

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`hours` | *number* | the hour (0-23) of the specified date according to local time.   |

**Returns:** *number*

the number of milliseconds since January 1, 1970, 00:00:00 UTC (the new timestamp).

Defined in: [date.ts:295](https://github.com/torch2424/as-date/blob/main/assembly/date.ts#L295)

___

### setMilliseconds

▸ **setMilliseconds**(`milliseconds`: *number*): *number*

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`milliseconds` | *number* | the milliseconds (0–999) in the specified date according to local time.   |

**Returns:** *number*

the number of milliseconds since January 1, 1970, 00:00:00 UTC (the new timestamp).

Defined in: [date.ts:397](https://github.com/torch2424/as-date/blob/main/assembly/date.ts#L397)

___

### setMinutes

▸ **setMinutes**(`minutes`: *number*): *number*

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`minutes` | *number* | the minutes (0–59) in the specified date according to local time.   |

**Returns:** *number*

the number of milliseconds since January 1, 1970, 00:00:00 UTC (the new timestamp).

Defined in: [date.ts:329](https://github.com/torch2424/as-date/blob/main/assembly/date.ts#L329)

___

### setMonth

▸ **setMonth**(`month`: *number*): *number*

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`month` | *number* | the month (0–11) in the specified date according to local time.   |

**Returns:** *number*

the number of milliseconds since January 1, 1970, 00:00:00 UTC (the new timestamp).

Defined in: [date.ts:207](https://github.com/torch2424/as-date/blob/main/assembly/date.ts#L207)

___

### setSeconds

▸ **setSeconds**(`seconds`: *number*): *number*

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`seconds` | *number* | the seconds (0–59) in the specified date according to local time.   |

**Returns:** *number*

the number of milliseconds since January 1, 1970, 00:00:00 UTC (the new timestamp).

Defined in: [date.ts:363](https://github.com/torch2424/as-date/blob/main/assembly/date.ts#L363)

___

### setTime

▸ **setTime**(`milliseconds`: *number*): *number*

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`milliseconds` | *number* | the number of milliseconds since January 1, 1970, 00:00:00 UTC.   |

**Returns:** *number*

the number of milliseconds since January 1, 1970, 00:00:00 UTC. (the passed value)

Defined in: [date.ts:140](https://github.com/torch2424/as-date/blob/main/assembly/date.ts#L140)

___

### setTimezoneOffset

▸ **setTimezoneOffset**(`minutes`: *number*): *number*

#### Parameters:

Name | Type |
:------ | :------ |
`minutes` | *number* |

**Returns:** *number*

time zone difference, in minutes, from UTC. (the passed value)

Defined in: [date.ts:156](https://github.com/torch2424/as-date/blob/main/assembly/date.ts#L156)

___

### setUTCDate

▸ **setUTCDate**(`date`: *number*): *number*

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`date` | *number* | the day of the month (1–31) of the specified date according to universal time.   |

**Returns:** *number*

the number of milliseconds since January 1, 1970, 00:00:00 UTC (the new timestamp).

Defined in: [date.ts:258](https://github.com/torch2424/as-date/blob/main/assembly/date.ts#L258)

___

### setUTCFullYear

▸ **setUTCFullYear**(`year`: *number*): *number*

The setUTCFullYear() method sets the full year for a specified date according to universal time.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`year` | *number* | the full 4-digit year to set.   |

**Returns:** *number*

the number of milliseconds since January 1, 1970, 00:00:00 UTC (the new timestamp).

Defined in: [date.ts:190](https://github.com/torch2424/as-date/blob/main/assembly/date.ts#L190)

___

### setUTCHours

▸ **setUTCHours**(`hours`: *number*): *number*

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`hours` | *number* | the hour (0-23) of the specified date according to universal time.   |

**Returns:** *number*

the number of milliseconds since January 1, 1970, 00:00:00 UTC (the new timestamp).

Defined in: [date.ts:312](https://github.com/torch2424/as-date/blob/main/assembly/date.ts#L312)

___

### setUTCMilliseconds

▸ **setUTCMilliseconds**(`milliseconds`: *number*): *number*

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`milliseconds` | *number* | the milliseconds (0–999) in the specified date according to universal time.   |

**Returns:** *number*

the number of milliseconds since January 1, 1970, 00:00:00 UTC (the new timestamp).

Defined in: [date.ts:414](https://github.com/torch2424/as-date/blob/main/assembly/date.ts#L414)

___

### setUTCMinutes

▸ **setUTCMinutes**(`minutes`: *number*): *number*

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`minutes` | *number* | the minutes (0–59) in the specified date according to universal time.   |

**Returns:** *number*

the number of milliseconds since January 1, 1970, 00:00:00 UTC (the new timestamp).

Defined in: [date.ts:346](https://github.com/torch2424/as-date/blob/main/assembly/date.ts#L346)

___

### setUTCMonth

▸ **setUTCMonth**(`month`: *number*): *number*

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`month` | *number* | the month (0–11) in the specified date according to universal time.   |

**Returns:** *number*

the number of milliseconds since January 1, 1970, 00:00:00 UTC (the new timestamp).

Defined in: [date.ts:224](https://github.com/torch2424/as-date/blob/main/assembly/date.ts#L224)

___

### setUTCSeconds

▸ **setUTCSeconds**(`seconds`: *number*): *number*

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`seconds` | *number* | the seconds (0–59) in the specified date according to universal time.   |

**Returns:** *number*

the number of milliseconds since January 1, 1970, 00:00:00 UTC (the new timestamp).

Defined in: [date.ts:380](https://github.com/torch2424/as-date/blob/main/assembly/date.ts#L380)

___

### UTC

▸ `Static`**UTC**(`year`: *number*, `month`: *number*, `day?`: *number*, `hours?`: *number*, `minutes?`: *number*, `seconds?`: *number*, `milliseconds?`: *number*): *number*

Method to return the number of milliseconds since January 1, 1970, 00:00:00 UTC, with leap seconds ignored.

#### Parameters:

Name | Type | Default value | Description |
:------ | :------ | :------ | :------ |
`year` | *number* | - | the full year to set.   |
`month` | *number* | - | the month, beginning with 0 for January to 11 for December.   |
`day` | *number* | 1 | the day of the month.   |
`hours` | *number* | 0 | hour of the day.   |
`minutes` | *number* | 0 | minute segment of a time.   |
`seconds` | *number* | 0 | second segment of a time.   |
`milliseconds` | *number* | 0 | millisecond segment of a time.   |

**Returns:** *number*

Returns new timestamp.

Defined in: [date.ts:107](https://github.com/torch2424/as-date/blob/main/assembly/date.ts#L107)
