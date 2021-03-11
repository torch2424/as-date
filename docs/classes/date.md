[as-date](../README.md) / Date

# Class: Date

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
- [getUTCCalendarDate](date.md#getutccalendardate)
- [getUTCDate](date.md#getutcdate)
- [getUTCDay](date.md#getutcday)
- [getUTCFullYear](date.md#getutcfullyear)
- [getUTCHours](date.md#getutchours)
- [getUTCMilliseconds](date.md#getutcmilliseconds)
- [getUTCMinutes](date.md#getutcminutes)
- [getUTCMonth](date.md#getutcmonth)
- [getUTCSeconds](date.md#getutcseconds)
- [getUTCTimeZone](date.md#getutctimezone)
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
- [setUTCDate](date.md#setutcdate)
- [setUTCFullYear](date.md#setutcfullyear)
- [setUTCHours](date.md#setutchours)
- [setUTCMilliseconds](date.md#setutcmilliseconds)
- [setUTCMinutes](date.md#setutcminutes)
- [setUTCMonth](date.md#setutcmonth)
- [setUTCSeconds](date.md#setutcseconds)
- [setUTCTimeZone](date.md#setutctimezone)
- [UTC](date.md#utc)

## Constructors

### constructor

\+ **new Date**(`value`: *number*, `utcTimezoneOffset?`: *number*): [*Date*](date.md)

#### Parameters:

Name | Type | Default value |
:------ | :------ | :------ |
`value` | *number* | - |
`utcTimezoneOffset` | *number* | 0 |

**Returns:** [*Date*](date.md)

Defined in: [date.ts:40](https://github.com/torch2424/as-date/blob/30c25fb/assembly/date.ts#L40)

## Properties

### localDate

• `Private` **localDate**: *null* \| *CalendarDate*

Defined in: [date.ts:17](https://github.com/torch2424/as-date/blob/30c25fb/assembly/date.ts#L17)

___

### timeZone

• `Private` **timeZone**: *TimeZone*

Defined in: [date.ts:16](https://github.com/torch2424/as-date/blob/30c25fb/assembly/date.ts#L16)

___

### utcDate

• `Private` **utcDate**: *null* \| *CalendarDate*

Defined in: [date.ts:18](https://github.com/torch2424/as-date/blob/30c25fb/assembly/date.ts#L18)

___

### value

• `Private` **value**: *number*

Defined in: [date.ts:15](https://github.com/torch2424/as-date/blob/30c25fb/assembly/date.ts#L15)

## Methods

### getDate

▸ **getDate**(): *number*

**Returns:** *number*

Defined in: [date.ts:154](https://github.com/torch2424/as-date/blob/30c25fb/assembly/date.ts#L154)

___

### getDay

▸ **getDay**(): *number*

Returns the day of the week represented by this date. The
returned value ({@code 0} = Sunday, {@code 1} = Monday,
{@code 2} = Tuesday, {@code 3} = Wednesday, {@code 4} =
Thursday, {@code 5} = Friday, {@code 6} = Saturday)

**Returns:** *number*

Defined in: [date.ts:180](https://github.com/torch2424/as-date/blob/30c25fb/assembly/date.ts#L180)

___

### getFullYear

▸ **getFullYear**(): *number*

**Returns:** *number*

Defined in: [date.ts:105](https://github.com/torch2424/as-date/blob/30c25fb/assembly/date.ts#L105)

___

### getHours

▸ **getHours**(): *number*

**Returns:** *number*

Defined in: [date.ts:188](https://github.com/torch2424/as-date/blob/30c25fb/assembly/date.ts#L188)

___

### getLocalCalendarDate

▸ `Private`**getLocalCalendarDate**(): *CalendarDate*

**Returns:** *CalendarDate*

Defined in: [date.ts:65](https://github.com/torch2424/as-date/blob/30c25fb/assembly/date.ts#L65)

___

### getMilliseconds

▸ **getMilliseconds**(): *number*

**Returns:** *number*

Defined in: [date.ts:248](https://github.com/torch2424/as-date/blob/30c25fb/assembly/date.ts#L248)

___

### getMinutes

▸ **getMinutes**(): *number*

**Returns:** *number*

Defined in: [date.ts:208](https://github.com/torch2424/as-date/blob/30c25fb/assembly/date.ts#L208)

___

### getMonth

▸ **getMonth**(): *number*

**Returns:** *number*

Defined in: [date.ts:134](https://github.com/torch2424/as-date/blob/30c25fb/assembly/date.ts#L134)

___

### getSeconds

▸ **getSeconds**(): *number*

**Returns:** *number*

Defined in: [date.ts:228](https://github.com/torch2424/as-date/blob/30c25fb/assembly/date.ts#L228)

___

### getTime

▸ **getTime**(): *number*

**Returns:** *number*

Defined in: [date.ts:47](https://github.com/torch2424/as-date/blob/30c25fb/assembly/date.ts#L47)

___

### getUTCCalendarDate

▸ `Private`**getUTCCalendarDate**(): *CalendarDate*

**Returns:** *CalendarDate*

Defined in: [date.ts:77](https://github.com/torch2424/as-date/blob/30c25fb/assembly/date.ts#L77)

___

### getUTCDate

▸ **getUTCDate**(): *number*

**Returns:** *number*

Defined in: [date.ts:164](https://github.com/torch2424/as-date/blob/30c25fb/assembly/date.ts#L164)

___

### getUTCDay

▸ **getUTCDay**(): *number*

**Returns:** *number*

Defined in: [date.ts:184](https://github.com/torch2424/as-date/blob/30c25fb/assembly/date.ts#L184)

___

### getUTCFullYear

▸ **getUTCFullYear**(): *number*

**Returns:** *number*

Defined in: [date.ts:120](https://github.com/torch2424/as-date/blob/30c25fb/assembly/date.ts#L120)

___

### getUTCHours

▸ **getUTCHours**(): *number*

**Returns:** *number*

Defined in: [date.ts:198](https://github.com/torch2424/as-date/blob/30c25fb/assembly/date.ts#L198)

___

### getUTCMilliseconds

▸ **getUTCMilliseconds**(): *number*

**Returns:** *number*

Defined in: [date.ts:258](https://github.com/torch2424/as-date/blob/30c25fb/assembly/date.ts#L258)

___

### getUTCMinutes

▸ **getUTCMinutes**(): *number*

**Returns:** *number*

Defined in: [date.ts:218](https://github.com/torch2424/as-date/blob/30c25fb/assembly/date.ts#L218)

___

### getUTCMonth

▸ **getUTCMonth**(): *number*

**Returns:** *number*

Defined in: [date.ts:144](https://github.com/torch2424/as-date/blob/30c25fb/assembly/date.ts#L144)

___

### getUTCSeconds

▸ **getUTCSeconds**(): *number*

**Returns:** *number*

Defined in: [date.ts:238](https://github.com/torch2424/as-date/blob/30c25fb/assembly/date.ts#L238)

___

### getUTCTimeZone

▸ **getUTCTimeZone**(): *TimeZone*

**Returns:** *TimeZone*

Defined in: [date.ts:61](https://github.com/torch2424/as-date/blob/30c25fb/assembly/date.ts#L61)

___

### isNormalizeLocalDate

▸ `Private`**isNormalizeLocalDate**(): bool

**Returns:** bool

Defined in: [date.ts:89](https://github.com/torch2424/as-date/blob/30c25fb/assembly/date.ts#L89)

___

### isNormalizeUTCDate

▸ `Private`**isNormalizeUTCDate**(): bool

**Returns:** bool

Defined in: [date.ts:97](https://github.com/torch2424/as-date/blob/30c25fb/assembly/date.ts#L97)

___

### setDate

▸ **setDate**(`date`: *number*): *number*

#### Parameters:

Name | Type |
:------ | :------ |
`date` | *number* |

**Returns:** *number*

Defined in: [date.ts:158](https://github.com/torch2424/as-date/blob/30c25fb/assembly/date.ts#L158)

___

### setFullYear

▸ **setFullYear**(`year`: *number*): *number*

The method sets the full year for a specified date according to local time.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`year` | *number* | the full year to set   |

**Returns:** *number*

Returns new timestamp.

Defined in: [date.ts:114](https://github.com/torch2424/as-date/blob/30c25fb/assembly/date.ts#L114)

___

### setHours

▸ **setHours**(`hours`: *number*): *number*

#### Parameters:

Name | Type |
:------ | :------ |
`hours` | *number* |

**Returns:** *number*

Defined in: [date.ts:192](https://github.com/torch2424/as-date/blob/30c25fb/assembly/date.ts#L192)

___

### setMilliseconds

▸ **setMilliseconds**(`milliseconds`: *number*): *number*

#### Parameters:

Name | Type |
:------ | :------ |
`milliseconds` | *number* |

**Returns:** *number*

Defined in: [date.ts:252](https://github.com/torch2424/as-date/blob/30c25fb/assembly/date.ts#L252)

___

### setMinutes

▸ **setMinutes**(`minutes`: *number*): *number*

#### Parameters:

Name | Type |
:------ | :------ |
`minutes` | *number* |

**Returns:** *number*

Defined in: [date.ts:212](https://github.com/torch2424/as-date/blob/30c25fb/assembly/date.ts#L212)

___

### setMonth

▸ **setMonth**(`month`: *number*): *number*

#### Parameters:

Name | Type |
:------ | :------ |
`month` | *number* |

**Returns:** *number*

Defined in: [date.ts:138](https://github.com/torch2424/as-date/blob/30c25fb/assembly/date.ts#L138)

___

### setSeconds

▸ **setSeconds**(`seconds`: *number*): *number*

#### Parameters:

Name | Type |
:------ | :------ |
`seconds` | *number* |

**Returns:** *number*

Defined in: [date.ts:232](https://github.com/torch2424/as-date/blob/30c25fb/assembly/date.ts#L232)

___

### setTime

▸ **setTime**(`value`: *number*): *number*

#### Parameters:

Name | Type |
:------ | :------ |
`value` | *number* |

**Returns:** *number*

Defined in: [date.ts:51](https://github.com/torch2424/as-date/blob/30c25fb/assembly/date.ts#L51)

___

### setUTCDate

▸ **setUTCDate**(`date`: *number*): *number*

#### Parameters:

Name | Type |
:------ | :------ |
`date` | *number* |

**Returns:** *number*

Defined in: [date.ts:168](https://github.com/torch2424/as-date/blob/30c25fb/assembly/date.ts#L168)

___

### setUTCFullYear

▸ **setUTCFullYear**(`year`: *number*): *number*

The setUTCFullYear() method sets the full year for a specified date according to universal time.

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`year` | *number* | the full year to set.    |

**Returns:** *number*

Defined in: [date.ts:128](https://github.com/torch2424/as-date/blob/30c25fb/assembly/date.ts#L128)

___

### setUTCHours

▸ **setUTCHours**(`hours`: *number*): *number*

#### Parameters:

Name | Type |
:------ | :------ |
`hours` | *number* |

**Returns:** *number*

Defined in: [date.ts:202](https://github.com/torch2424/as-date/blob/30c25fb/assembly/date.ts#L202)

___

### setUTCMilliseconds

▸ **setUTCMilliseconds**(`milliseconds`: *number*): *number*

#### Parameters:

Name | Type |
:------ | :------ |
`milliseconds` | *number* |

**Returns:** *number*

Defined in: [date.ts:262](https://github.com/torch2424/as-date/blob/30c25fb/assembly/date.ts#L262)

___

### setUTCMinutes

▸ **setUTCMinutes**(`minutes`: *number*): *number*

#### Parameters:

Name | Type |
:------ | :------ |
`minutes` | *number* |

**Returns:** *number*

Defined in: [date.ts:222](https://github.com/torch2424/as-date/blob/30c25fb/assembly/date.ts#L222)

___

### setUTCMonth

▸ **setUTCMonth**(`month`: *number*): *number*

#### Parameters:

Name | Type |
:------ | :------ |
`month` | *number* |

**Returns:** *number*

Defined in: [date.ts:148](https://github.com/torch2424/as-date/blob/30c25fb/assembly/date.ts#L148)

___

### setUTCSeconds

▸ **setUTCSeconds**(`seconds`: *number*): *number*

#### Parameters:

Name | Type |
:------ | :------ |
`seconds` | *number* |

**Returns:** *number*

Defined in: [date.ts:242](https://github.com/torch2424/as-date/blob/30c25fb/assembly/date.ts#L242)

___

### setUTCTimeZone

▸ **setUTCTimeZone**(`offset`: *number*): *TimeZone*

#### Parameters:

Name | Type |
:------ | :------ |
`offset` | *number* |

**Returns:** *TimeZone*

Defined in: [date.ts:56](https://github.com/torch2424/as-date/blob/30c25fb/assembly/date.ts#L56)

___

### UTC

▸ `Static`**UTC**(`year`: *number*, `month?`: *number*, `day?`: *number*, `hour?`: *number*, `minute?`: *number*, `second?`: *number*, `millisecond?`: *number*): *number*

#### Parameters:

Name | Type | Default value |
:------ | :------ | :------ |
`year` | *number* | - |
`month` | *number* | 0 |
`day` | *number* | 1 |
`hour` | *number* | 0 |
`minute` | *number* | 0 |
`second` | *number* | 0 |
`millisecond` | *number* | 0 |

**Returns:** *number*

Defined in: [date.ts:20](https://github.com/torch2424/as-date/blob/30c25fb/assembly/date.ts#L20)
