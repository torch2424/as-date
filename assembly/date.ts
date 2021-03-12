import {
  getCalendarDate,
  TimeZone,
  CalendarDate,
  setFullYear,
  setMonth,
  setDate,
  setHours,
  setMinutes,
  setSeconds,
  setMilliseconds,
} from "./calendar";


/**
 * JavaScript Date Object, implemented in AssemblyScript
 * Inspired by: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
 *
 * Missing the following methods:

 * Static Methods:
 * Date.now()
 * Date.parse()
 *
 * Instance Methods:
 *
 * getYear() [Deprecated]
 * setYear() [Deprecated]
 * toDateString()
 * toISOString()
 * toJSON()
 * toGMTString()
 * toLocaleDateString()
 * toLocaleFormat()
 * toLocaleString()
 * toLocaleTimeString()
 * toString()
 * toTimeString()
 * toUTCString()
 * valueOf()
 */
export class Date {
  private value: i64;
  private timeZone: TimeZone; // The local time zone
  private localDate: CalendarDate | null;
  private utcDate: CalendarDate | null;

  private getLocalCalendarDate(): CalendarDate {
    if (this.isNormalizeLocalDate()) {
      return this.localDate!;
    } else if (this.localDate != null && !this.localDate!.isNormalized) {
      return getCalendarDate(this.localDate!, this.value);
    } else {
      let cdate = new CalendarDate(this.value, this.timeZone);
      this.localDate = getCalendarDate(cdate, this.value);
      return this.localDate!;
    }
  }

  private getUTCCalendarDate(): CalendarDate {
    if (this.isNormalizeUTCDate()) {
      return this.utcDate!;
    } else if (this.utcDate != null) {
      return getCalendarDate(this.utcDate!, this.value);
    } else {
      let cdate = new CalendarDate(this.value, TimeZone.UTC_TIME_ZONE);
      this.utcDate = getCalendarDate(cdate, this.value);
      return this.utcDate!;
    }
  }

  private isNormalizeLocalDate(): bool {
    return (
      this.localDate != null &&
        this.localDate!.millis == this.value &&
        this.localDate!.isNormalized
    );
  }

  private isNormalizeUTCDate(): bool {
    return (
      this.utcDate != null &&
        this.utcDate!.millis == this.value &&
        this.utcDate!.isNormalized
    );
  }

  constructor(value: i64) {
    this.value = value;

    // Default the Timezone to zero, as there is currently no way to get the timezone in WASI
    // https://github.com/WebAssembly/WASI/issues/167
    this.timeZone = new TimeZone("UTC", 0);
  }

  /**
   * Method to return the number of milliseconds since January 1, 1970, 00:00:00 UTC, with leap seconds ignored.
   * @param year  the full year to set.
   * @param month the month, beginning with 0 for January to 11 for December.
   * @param day the day of the month.
   * @param hours hour of the day.
   * @param minutes minute segment of a time.
   * @param seconds second segment of a time.
   * @param milliseconds millisecond segment of a time.
   * @returns Returns new timestamp.
   */
  @inline static UTC(
    year: i32,
    month: i32,
    day: i32 = 1,
    hours: i32 = 0,
    minutes: i32 = 0,
    seconds: i32 = 0,
    milliseconds: i32 = 0
  ): i64 {
    let date = new Date(0);

    date.setUTCFullYear(year);
    date.setUTCMonth(month);
    date.setUTCDate(day);
    date.setUTCHours(hours);
    date.setUTCMinutes(minutes);
    date.setUTCSeconds(seconds);
    date.setUTCMilliseconds(milliseconds);

    return date.getTime();
  }

  /**
   * @returns the number of milliseconds since January 1, 1970, 00:00:00 UTC. 
   */
  getTime(): i64 {
    return this.value;
  }

  /**
   * @param milliseconds the number of milliseconds since January 1, 1970, 00:00:00 UTC.
   * @returns the number of milliseconds since January 1, 1970, 00:00:00 UTC. (the passed value)
   */
  setTime(milliseconds: i64): i64 {
    this.value = milliseconds;
    return milliseconds;
  }

  /**
   * @returns time zone difference, in minutes, from UTC.
   */
  getTimezoneOffset(): i32 {
    return this.timeZone.getTimezoneOffset(); 
  }

  /**
   * @param miunutes time zone difference, in minutes, from UTC. (the passed value)
   * @returns time zone difference, in minutes, from UTC. (the passed value)
   */
  setTimezoneOffset(minutes: i32): i32 {
    return this.timeZone.setTimezoneOffset(minutes);
  }

  /**
   * @returns The full year as a 4-digit number, according to local time.
   */
  getFullYear(): i32 {
    return this.getLocalCalendarDate().year;
  }

  /**
   * The method sets the full year for a specified date according to local time.
   * @param year the full 4-digit year to set
   * @returns the number of milliseconds since January 1, 1970, 00:00:00 UTC (the new timestamp). 
   */
  setFullYear(year: i32): i64 {
    let cdate = this.getLocalCalendarDate();
    setFullYear(cdate, year);
    return this.setTime(cdate.millis);
  }

  /**
   * @returns The full year as a 4-digit number, according to universal time.
   */
  getUTCFullYear(): i32 {
    return this.getUTCCalendarDate().year;
  }

  /**
   * The setUTCFullYear() method sets the full year for a specified date according to universal time.
   * @param year the full 4-digit year to set.
   * @returns the number of milliseconds since January 1, 1970, 00:00:00 UTC (the new timestamp). 
   */
  setUTCFullYear(year: i32): i64 {
    var cdate = this.getUTCCalendarDate();
    setFullYear(cdate, year);
    return this.setTime(cdate.millis);
  }

  /**
   * @returns the month (0–11) in the specified date according to local time.
   */
  getMonth(): i32 {
    return this.getLocalCalendarDate().month - 1; // Adjust 1-based to 0-based
  }

  /**
   * @param month the month (0–11) in the specified date according to local time.
   * @returns the number of milliseconds since January 1, 1970, 00:00:00 UTC (the new timestamp). 
   */
  setMonth(month: i32): i64 {
    var cdate = this.getLocalCalendarDate();
    setMonth(cdate, month + 1);
    return this.setTime(cdate.millis);
  }

  /**
   * @param month the month (0–11) in the specified date according to universal time.
   */
  getUTCMonth(): i32 {
    return this.getUTCCalendarDate().month - 1; // adjust 1-based to 0-based;
  }

  /**
   * @param month the month (0–11) in the specified date according to universal time.
   * @returns the number of milliseconds since January 1, 1970, 00:00:00 UTC (the new timestamp). 
   */
  setUTCMonth(month: i32): i64 {
    var cdate = this.getUTCCalendarDate();
    setMonth(cdate, month + 1);
    return this.setTime(cdate.millis);
  }

  /**
   * @returns the day of the month (1–31) of the specified date according to local time.
   */
  getDate(): i32 {
    return this.getLocalCalendarDate().dayOfMonth;
  }

  /**
   * @param date the day of the month (1–31) of the specified date according to local time.
   * @returns the number of milliseconds since January 1, 1970, 00:00:00 UTC (the new timestamp). 
   */
  setDate(date: i32): i64 {
    var cdate = this.getLocalCalendarDate();
    setDate(cdate, date);
    return this.setTime(cdate.millis);
  }

  /**
   * @returns the day of the month (1–31) of the specified date according to universal time.
   */
  getUTCDate(): i32 {
    return this.getUTCCalendarDate().dayOfMonth;
  }

  /**
   * @param date the day of the month (1–31) of the specified date according to universal time.
   * @returns the number of milliseconds since January 1, 1970, 00:00:00 UTC (the new timestamp). 
   */
  setUTCDate(date: i32): i64 {
    var cdate = this.getUTCCalendarDate();
    setDate(cdate, date);
    return this.setTime(cdate.millis);
  }

  /**
   * Returns the day of the week represented by this date, according to local time.
   * The returned value ({@code 0} = Sunday, {@code 1} = Monday,
   * {@code 2} = Tuesday, {@code 3} = Wednesday, {@code 4} =
   * Thursday, {@code 5} = Friday, {@code 6} = Saturday)
   */
  getDay(): i32 {
    return this.getLocalCalendarDate().dayOfWeek - 1;
  }

  /**
   * Returns the day of the week represented by this date, according to universal time.
   * The returned value ({@code 0} = Sunday, {@code 1} = Monday,
   * {@code 2} = Tuesday, {@code 3} = Wednesday, {@code 4} =
   * Thursday, {@code 5} = Friday, {@code 6} = Saturday)
   */
  getUTCDay(): i32 {
    return this.getUTCCalendarDate().dayOfWeek - 1;
  }

  /**
   * @returns the hour (0–23) in the specified date according to local time.
   */
  getHours(): i32 {
    return this.getLocalCalendarDate().hours;
  }

  /**
   * @param hours the hour (0-23) of the specified date according to local time.
   * @returns the number of milliseconds since January 1, 1970, 00:00:00 UTC (the new timestamp). 
   */
  setHours(hours: i32): i64 {
    var cdate = this.getLocalCalendarDate();
    setHours(cdate, hours);
    return this.setTime(cdate.millis);
  }

  /**
   * @returns the hour (0–23) in the specified date according to universal time.
   */
  getUTCHours(): i32 {
    return this.getUTCCalendarDate().hours;
  }

  /**
   * @param hours the hour (0-23) of the specified date according to universal time.
   * @returns the number of milliseconds since January 1, 1970, 00:00:00 UTC (the new timestamp). 
   */
  setUTCHours(hours: i32): i64 {
    var cdate = this.getUTCCalendarDate();
    setHours(cdate, hours);
    return this.setTime(cdate.millis);
  }

  /**
   * @returns the minutes (0–59) in the specified date according to local time.
   */
  getMinutes(): i32 {
    return this.getLocalCalendarDate().minutes;
  }

  /**
   * @param minutes the minutes (0–59) in the specified date according to local time.
   * @returns the number of milliseconds since January 1, 1970, 00:00:00 UTC (the new timestamp). 
   */
  setMinutes(minutes: i32): i64 {
    var cdate = this.getLocalCalendarDate();
    setMinutes(cdate, minutes);
    return this.setTime(cdate.millis);
  }

  /**
   * @returns the minutes (0–59) in the specified date according to universal time.
   */
  getUTCMinutes(): i32 {
    return this.getUTCCalendarDate().minutes;
  }

  /**
   * @param minutes the minutes (0–59) in the specified date according to universal time.
   * @returns the number of milliseconds since January 1, 1970, 00:00:00 UTC (the new timestamp). 
   */
  setUTCMinutes(minutes: i32): i64 {
    var cdate = this.getUTCCalendarDate();
    setMinutes(cdate, minutes);
    return this.setTime(cdate.millis);
  }

  /**
   * @returns the seconds (0–59) in the specified date according to local time.
   */
  getSeconds(): i32 {
    return this.getLocalCalendarDate().seconds;
  }

  /**
   * @param seconds the seconds (0–59) in the specified date according to local time.
   * @returns the number of milliseconds since January 1, 1970, 00:00:00 UTC (the new timestamp). 
   */
  setSeconds(seconds: i32): i64 {
    var cdate = this.getLocalCalendarDate();
    setSeconds(cdate, seconds);
    return this.setTime(cdate.millis);
  }

  /**
   * @returns the seconds (0–59) in the specified date according to universal time.
   */
  getUTCSeconds(): i32 {
    return this.getUTCCalendarDate().seconds;
  }

  /**
   * @param seconds the seconds (0–59) in the specified date according to universal time.
   * @returns the number of milliseconds since January 1, 1970, 00:00:00 UTC (the new timestamp). 
   */
  setUTCSeconds(seconds: i32): i64 {
    var cdate = this.getUTCCalendarDate();
    setSeconds(cdate, seconds);
    return this.setTime(cdate.millis);
  }

  /**
   * @returns the milliseconds (0–999) in the specified date according to local time.
   */
  getMilliseconds(): i32 {
    return this.getLocalCalendarDate().milliseconds;
  }

  /**
   * @param milliseconds the milliseconds (0–999) in the specified date according to local time.
   * @returns the number of milliseconds since January 1, 1970, 00:00:00 UTC (the new timestamp). 
   */
  setMilliseconds(milliseconds: i32): i64 {
    var cdate = this.getLocalCalendarDate();
    setMilliseconds(cdate, milliseconds);
    return this.setTime(cdate.millis);
  }

  /**
   * @returns the milliseconds (0–999) in the specified date according to universal time.
   */
  getUTCMilliseconds(): i32 {
    return this.getUTCCalendarDate().milliseconds;
  }

  /**
   * @param milliseconds the milliseconds (0–999) in the specified date according to universal time.
   * @returns the number of milliseconds since January 1, 1970, 00:00:00 UTC (the new timestamp). 
   */
  setUTCMilliseconds(milliseconds: i32): i64 {
    var cdate = this.getUTCCalendarDate();
    setMilliseconds(cdate, milliseconds);
    return this.setTime(cdate.millis);
  }
}
