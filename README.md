# as-date

![npm version](https://img.shields.io/npm/v/as-date) ![npm downloads per month](https://img.shields.io/npm/dm/as-date)

Staging AssemblyScript Date implementation by @LiaoPeng , as an installable AssemblyScript library.

This library builds upon @LiaoPeng 's work in [AssemblyScript/assemblyscript#357](https://github.com/AssemblyScript/assemblyscript/pull/357). By taking their changes, and moving into an installble AssemblyScript library. **This is a rough implementation of `Date` for AssemblyScript, and a more mature `Date` implementation will eventually be written and merged into the AssemblyScript Standard Library.**

## Installation

`as-date` is available as a [npm package](https://www.npmjs.com/package/as-date). You can install `as-date` in your AssemblyScript project by running:

`npm install --save as-date`

## Quick Start

```typescript
// This library is inspired by Web API Date Object
// Feel free to also reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
import { Date } from "as-date";

// Let's create the date:
// Universal Time: Wednesday, March 10th, 2021 19:06:24:242 UTC+0 (Universal Time)
// Local time: Wednesday, March 10th, 2021 12:06:24:242 UTC-7 (Pacific Standard Time)

// Values will count from 0, unless otherwise specified.
let year = 2021;
let month = 2;
let dayOfMonth = 10; // Day of the month, counts from 1.
let dayOfWeek = 3;
let hours = 18;
let minutes = 6;
let seconds = 24;
let milliseconds = 242;

// The Date Constructor takes in a timestamp in milliseconds.
// A UTC timestamp can be made using Date.UTC
let date = new Date(
  Date.UTC(year, month, dayOfMonth, hours, minutes, seconds, milliseconds),
);

// Let's set our timezone manually
// By default a date's timezone will default to UTC+0.
// In theory we could use Javascript's getTimezoneOffset to get this for us
// But we also want to work within the current limitations of WASI
// E.g https://github.com/WebAssembly/WASI/issues/167

// Set our timezone offset on the date (The offset is passed as minutes)
let timeZoneOffsetHours = -7; // UTC-7, or Pacific Standard Time
date.setTimezoneOffset(timeZoneOffsetHours * 60);

// Get the UTC absolute values (e.g ignore the UTC timezone offset)
expect(date.getUTCFullYear()).toBe(year);
expect(date.getUTCMonth()).toBe(month);
expect(date.getUTCDate()).toBe(dayOfMonth);
expect(date.getUTCDay()).toBe(dayOfWeek);
expect(date.getUTCHours()).toBe(hours);
expect(date.getUTCMinutes()).toBe(minutes);
expect(date.getUTCSeconds()).toBe(seconds);
expect(date.getUTCMilliseconds()).toBe(milliseconds);

// Get the timezone relative value (Local time)
expect(date.getFullYear()).toBe(year);
expect(date.getMonth()).toBe(month);
expect(date.getDate()).toBe(dayOfMonth);
expect(date.getDay()).toBe(dayOfWeek);
expect(date.getHours()).toBe(hours - 7);
expect(date.getMinutes()).toBe(minutes);
expect(date.getSeconds()).toBe(seconds);
expect(date.getMilliseconds()).toBe(milliseconds);

// We can also set both the local and universal time properties 
// (FullYear, Month, Date, etc...)
date.setHours(13);
expect(date.getUTCHours()).toBe(20);
expect(date.getHours()).toBe(13);

date.setUTCHours(21);
expect(date.getUTCHours()).toBe(21);
expect(date.getHours()).toBe(14);
```

## Reference API

The Reference API documentation can be found in the [`docs/`](./docs) directory.

## Similar Libraries

* [ColinEberhardt/assemblyscript-temporal](https://github.com/ColinEberhardt/assemblyscript-temporal) - A very experimental implementation of the TC39 temporal specification, for AssemblyScript.

## License

**TL;DR** This project is licensed under [GPLv2 with a linking exception](./LICENSE).

This library builds on  @LiaoPeng 's work, which they mentioned is [based on the Java Standard Library Date](https://github.com/AssemblyScript/assemblyscript/pull/357#issuecomment-652409902). [@DcodeIO and I discussed](https://github.com/AssemblyScript/working-group/issues/56) that we should look into the License in Java to ensure that we can use the code in AssemblyScript (which is licensed under MIT).

Looking at the [AssemblyScript/assemblyscript#357](https://github.com/AssemblyScript/assemblyscript/pull/357), you will notice it does refer to Java's [util/Calendar.java](https://github.com/openjdk/jdk/blob/master/src/java.base/share/classes/java/util/Calendar.java), and states that the file is licensed under [GPLv2 with a linking exception](https://github.com/openjdk/jdk/blob/master/LICENSE).

Looking through various discussions of porting, or creating derivative works, of other implementations ([1](https://stackoverflow.com/questions/10952689/code-ported-from-one-to-another-language-licensing), [2](https://softwareengineering.stackexchange.com/questions/266210/porting-an-algorithm-implementation-licensed-under-gnu-gpl-v3), [3](https://softwareengineering.stackexchange.com/questions/151515/rewrote-gnu-gpl-v2-code-in-another-language-can-i-change-a-license), [4](https://softwareengineering.stackexchange.com/questions/205180/what-licensing-implications-if-any-are-there-when-porting-code-from-one-langua), [5](https://softwareengineering.stackexchange.com/questions/86754/is-it-possible-to-rewrite-every-line-of-an-open-source-project-in-a-slightly-dif)), it seems like we should be preserving the license that this code was stated to have reffered to. There could be an argument that this could have been a "clean room" implementation, but it would probably be best to just make this library have the same License! Which means that this library can't be merged into the main AssemblyScript standard library, but can act as a Date implementation in the meantime :)

Lastly, **I am not a lawyer or software license expert**, but when we take a look at the [license exception meaning](https://en.wikipedia.org/wiki/GPL_linking_exception), or compare to a less restrictive but similar license like [LGPL](https://opensource.stackexchange.com/questions/1410/what-is-the-difference-between-gpl-classpath-exception-vs-lgpl), it is possible that **this license allows this library to be used in any other project freely without the parent project having to modify their license or distribution**. 

