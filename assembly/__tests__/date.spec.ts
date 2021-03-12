import { Date } from "../index";

// Utility functions for tests
function test_utc_date(
  date: Date,
  year: i32,
  month: i32,
  dayOfMonth: i32,
  dayOfWeek: i32,
  hours: i32,
  minutes: i32,
  seconds: i32,
  milliseconds: i32
): void {
  expect(date.getUTCFullYear()).toBe(year);
  expect(date.getUTCMonth()).toBe(month);
  expect(date.getUTCDate()).toBe(dayOfMonth);
  expect(date.getUTCDay()).toBe(dayOfWeek);
  expect(date.getUTCHours()).toBe(hours);
  expect(date.getUTCMinutes()).toBe(minutes);
  expect(date.getUTCSeconds()).toBe(seconds);
  expect(date.getUTCMilliseconds()).toBe(milliseconds);
}

describe("Quick Start README", () => {
  it("should handle the example in the README", () => {
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
    // But to also work within the current limitations of WASI, we will do this manually.

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
  });
});

describe("Date", () => {
  it("should handle a timestamp of 0", () => {
    expect(Date.UTC(1970, 0, 1)).toBe(0);
    expect(Date.UTC(1970, 0, 1, 0, 0, 0, 0)).toBe(0);
  });

  it("should be able to create the correct timestamp", () => {
    let time: i64 = Date.UTC(2018, 10, 10, 11, 0, 0, 1);
    expect(time).toBe(1541847600001);
  });

  it("should be able to modify the timestamp", () => {
    let time: i64 = Date.UTC(2018, 10, 10, 11, 0, 0, 1);
    var date = new Date(time);
    expect(date.getTime()).toBe(time);
    date.setTime(time + 1);
    expect(date.getTime()).toBe(time + 1);
  });
});

describe("date.getX", () => {
  it("should be able to get all date properties for Date.UTC(2018, 10, 10, 11, 0, 0, 1)", () => {
    let date = new Date(Date.UTC(2018, 10, 10, 11, 0, 0, 1));
    test_utc_date(date, 2018, 10, 10, 6, 11, 0, 0, 1);
  });

  it("should be able to get all date properties for Date.UTC(1970, 0, 1, 0, 0, 0, 0)", () => {
    let date = new Date(Date.UTC(1970, 0, 1, 0, 0, 0, 0));
    test_utc_date(date, 1970, 0, 1, 4, 0, 0, 0, 0);
  });

  it("should be able to get all date properties for Date.UTC(0, 0, 1, 0, 0, 0, 0)", () => {
    let date = new Date(Date.UTC(1900, 0, 1, 0, 0, 0, 0));
    test_utc_date(date, 1900, 0, 1, 1, 0, 0, 0, 0);
  });

  it("should be able to get all date properties for Date.UTC(2018, 12, 12, 12, 12, 61, 61)", () => {
    let date = new Date(Date.UTC(2018, 12, 12, 12, 12, 61, 61));
    test_utc_date(date, 2019, 0, 12, 6, 12, 13, 1, 61);
  });
});

describe("date.setX", () => {
  it("should allow setUTCFullYear", () => {
    let millis: i64 = 0;
    let time: i64 = Date.UTC(2000, 1, 29, 0, 0, 0, 0); // Tue, 29 Feb 2000 00:00:00 GMT, 951782400000
    let date = new Date(time);

    millis = date.setUTCFullYear(2000);
    expect(millis).toBe(951782400000);
    test_utc_date(date, 2000, 1, 29, 2, 0, 0, 0, 0); // mills, 951782400000
    millis = date.setUTCFullYear(1999); // Mon, 01 Mar 1999 00:00:00 GMT, millis 920246400000
    expect(millis).toBe(920246400000);
    test_utc_date(date, 1999, 2, 1, 1, 0, 0, 0, 0);
    millis = date.setUTCFullYear(1996); // Thu, 29 Feb 1996 00:00:00 GMT, millis 825552000000
    expect(millis).toBe(825552000000);
    test_utc_date(date, 1996, 1, 29, 4, 0, 0, 0, 0);
  });

  it("should allow setUTCMonth", () => {
    let time: i64 = Date.UTC(1996, 1, 29, 0, 0, 0, 0); // Thu, 29 Feb 1996 00:00:00 GMT, millis 825552000000
    let date = new Date(time);

    date.setUTCMonth(13); // Sat, 01 Mar 1997 00:00:00 GMT, millis 857174400000
    test_utc_date(date, 1997, 2, 1, 6, 0, 0, 0, 0);

    date = new Date(825552000000);
    expect(date.setUTCMonth(-11)).toBe(794016000000); // Wed, 01 Mar 1995 00:00:00 GMT, millis 794016000000
    test_utc_date(date, 1995, 2, 1, 3, 0, 0, 0, 0);
  });

  it("should allow setUTCDate", () => {
    let date = new Date(Date.UTC(1996, 1, 29, 0, 0, 0, 0)); //  Thu, 29 Feb 1996 00:00:00 GMT,  825552000000
    expect(date.setUTCDate(30)).toBe(825638400000); // Fri, 01 Mar 1996 00:00:00 GMT, 825638400000
    test_utc_date(date, 1996, 2, 1, 5, 0, 0, 0, 0);
  });

  it("should allow setUTCHours", () => {
    let date = new Date(Date.UTC(1996, 1, 29, 0, 0, 0, 0)); //  Thu, 29 Feb 1996 00:00:00 GMT,  825552000000
    expect(date.setUTCHours(24)).toBe(825638400000); // Fri, 01 Mar 1996 00:00:00 GMT, 825638400000
    test_utc_date(date, 1996, 2, 1, 5, 0, 0, 0, 0);
  });

  it("should allow setUTCMinutes", () => {
    let date = new Date(Date.UTC(1996, 1, 29, 0, 0, 0, 0)); //  Thu, 29 Feb 1996 00:00:00 GMT,  825552000000
    expect(date.setUTCMinutes(24 * 60 + 55)).toBe(825641700000); // Fri, 01 Mar 1996 00:55:00 GMT, 825641700000
    test_utc_date(date, 1996, 2, 1, 5, 0, 55, 0, 0);
  });

  it("should allow setUTCSeconds", () => {
    let date = new Date(Date.UTC(1996, 2, 1, 0, 55, 0, 0)); // Fri, 01 Mar 1996 00:55:00 GMT, 825641700000
    expect(date.setUTCSeconds(6 * 60)).toBe(825642060000); // Fri, 01 Mar 1996 01:01:00 GMT, 825642060000
    test_utc_date(date, 1996, 2, 1, 5, 1, 1, 0, 0);
  });

  it("should allow setUTCMilliseconds", () => {
    let date = new Date(Date.UTC(1996, 2, 1, 1, 1, 0, 0)); // Fri, 01 Mar 1996 01:01:00 GMT, 825642060000
    expect(date.setUTCMilliseconds(1001)).toBe(825642061001); // Fri, 01 Mar 1996 01:01:01 GMT, 825642061001
    test_utc_date(date, 1996, 2, 1, 5, 1, 1, 1, 1);
  });

  it("should allow setFullYear", () => {
    let time: i64 = Date.UTC(2000, 1, 29, 0, 0, 0, 0); // Tue, 29 Feb 2000 00:00:00 GMT, 951782400000
    let date = new Date(time);

    let creationTime = Date.UTC(2000, 1, 29, 0, 0, 0, 0); // Tue, 29 Feb 2000 00:00:00 GMT, 951782400000
    date = new Date(creationTime);
    date.setFullYear(2000);
    expect(date.getFullYear()).toBe(2000);
  });

  it("should allow setMonth", () => {
    let time: i64 = Date.UTC(2000, 1, 29, 0, 0, 0, 0); // Tue, 29 Feb 2000 00:00:00 GMT, 951782400000
    let date = new Date(time);

    date.setMonth(1);
    expect(date.getMonth()).toBe(1);
  });

  it("should allow setDate", () => {
    let time: i64 = Date.UTC(2000, 1, 29, 0, 0, 0, 0); // Tue, 29 Feb 2000 00:00:00 GMT, 951782400000
    let date = new Date(time);

    date.setDate(8);
    expect(date.getDate()).toBe(8);
  });

  it("should allow setHours", () => {
    let time: i64 = Date.UTC(2000, 1, 29, 0, 0, 0, 0); // Tue, 29 Feb 2000 00:00:00 GMT, 951782400000
    let date = new Date(time);

    date.setHours(24);
    expect(date.getHours()).toBe(0);
  });

  it("should allow setMinutes", () => {
    let time: i64 = Date.UTC(2000, 1, 29, 0, 0, 0, 0); // Tue, 29 Feb 2000 00:00:00 GMT, 951782400000
    let date = new Date(time);

    date.setMinutes(24 * 60 + 55);
    expect(date.getMinutes()).toBe(55);
  });

  it("should allow setSeconds", () => {
    let time: i64 = Date.UTC(2000, 1, 29, 0, 0, 0, 0); // Tue, 29 Feb 2000 00:00:00 GMT, 951782400000
    let date = new Date(time);

    date.setSeconds(6 * 60);
    expect(date.getSeconds()).toBe(0);
  });

  it("should allow setMilliseconds", () => {
    let time: i64 = Date.UTC(2000, 1, 29, 0, 0, 0, 0); // Tue, 29 Feb 2000 00:00:00 GMT, 951782400000
    let date = new Date(time);

    date.setMilliseconds(1001);
    expect(date.getMilliseconds()).toBe(1);
  });
});
