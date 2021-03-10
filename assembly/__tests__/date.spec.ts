import {
  Date
} from '../index';

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
) : void {
  assert(date.getUTCFullYear() == year);
  assert(date.getUTCMonth() == month);
  assert(date.getUTCDate() == dayOfMonth);
  assert(date.getUTCDay() == dayOfWeek);
  assert(date.getUTCHours() == hours);
  assert(date.getUTCMinutes() == minutes);
  assert(date.getUTCSeconds() == seconds);
  assert(date.getUTCMilliseconds() == milliseconds);
}

function test_utc_millis(
  millis: i64, 
  year: i32, 
  month: i32, 
  dayOfMonth: i32, 
  dayOfWeek: i32, 
  hours: i32, 
  minutes: i32, 
  seconds: i32, 
  milliseconds: i32
) : void {
  var date = new Date(millis);
  test_utc_date(date, year, month, dayOfMonth, dayOfWeek, hours, minutes, seconds, milliseconds);
}

describe('Date', () => {

  it('should handle a timestamp of 0', () => {
    assert(Date.UTC(1970, 0, 1) == 0);
    assert(Date.UTC(1970, 0, 1, 0, 0, 0, 0) == 0);
  });

  it('should be able to create the correct timestamp', () => {
    let time: i64 = Date.UTC(2018, 10, 10, 11, 0, 0, 1);
    assert(time == 1541847600001);
  });

  it('should be able to modify the timestamp', () => {
    let time: i64 = Date.UTC(2018, 10, 10, 11, 0, 0, 1);
    var date = new Date(time);
    assert(date.getTime() == time);
    date.setTime(time + 1);
    assert(date.getTime() == time + 1);
  });
});

describe('date.getX', () => {
  it('should be able to get all date properties', () => {
    let time: i64 = 0;
    time = Date.UTC(2018, 10, 10, 11, 0, 0, 1); // Sat, 10 Nov 2018 11:00:00 GMT
    test_utc_millis(time, 2018, 10, 10, 6, 11, 0, 0, 1);
    time = Date.UTC(1970, 0, 1, 0, 0, 0, 0); // Thu, 01 Jan 1970 00:00:00 GMT
    test_utc_millis(time, 1970, 0, 1, 4, 0 , 0, 0, 0);
    time = Date.UTC(70, 0, 1, 11, 11, 22, 22); // Thu, 01 Jan 1970 11:11:22 GMT
    test_utc_millis(time, 1970, 0, 1, 4, 11, 11, 22, 22);
    time = Date.UTC(0, 0, 1, 0, 0, 0, 0); // Mon, 01 Jan 1900 00:00:00 GMT
    test_utc_millis(time, 1900, 0, 1, 1, 0, 0, 0, 0);
    time = Date.UTC(2018, 12, 12, 12, 12, 61, 61); // Sat, 12 Jan 2019 12:13:01 GMT
    test_utc_millis(time, 2019, 0, 12, 6, 12, 13, 1, 61);
  });
});

describe('date.setX', () => {

  it('should allow setUTCFullYear', () => {
    let millis: i64 = 0;
    let time: i64 = Date.UTC(2000, 1, 29, 0, 0, 0, 0); // Tue, 29 Feb 2000 00:00:00 GMT, 951782400000
    let date = new Date(time);

    millis = date.setUTCFullYear(2000);
    assert(millis == 951782400000);
    test_utc_date(date, 2000, 1, 29, 2, 0, 0, 0, 0); // mills, 951782400000
    millis = date.setUTCFullYear(1999); // Mon, 01 Mar 1999 00:00:00 GMT, millis 920246400000
    assert(millis == 920246400000);
    test_utc_date(date, 1999, 2, 1, 1, 0, 0, 0, 0);
    millis = date.setUTCFullYear(1996); // Thu, 29 Feb 1996 00:00:00 GMT, millis 825552000000
    assert(millis == 825552000000);
    test_utc_date(date, 1996, 1, 29, 4, 0, 0, 0, 0);
  });

  it('should allow setUTCMonth', () => {
    let time: i64 = Date.UTC(2000, 1, 29, 0, 0, 0, 0); // Tue, 29 Feb 2000 00:00:00 GMT, 951782400000
    let date = new Date(time);

    date.setUTCMonth(13);  // Sat, 01 Mar 1997 00:00:00 GMT, millis 857174400000
    test_utc_date(date, 1997, 2, 1, 6, 0, 0, 0, 0);

    date = new Date(825552000000);
    assert(date.setUTCMonth(-11) == 794016000000); // Wed, 01 Mar 1995 00:00:00 GMT, millis 794016000000
    test_utc_date(date, 1995, 2, 1, 3, 0, 0, 0, 0);
  });

  it('should allow setUTCDate', () => {
    let time: i64 = Date.UTC(2000, 1, 29, 0, 0, 0, 0); // Tue, 29 Feb 2000 00:00:00 GMT, 951782400000
    let date = new Date(time);

    date = new Date(Date.UTC(1996, 1, 29, 0, 0, 0, 0)); //  Thu, 29 Feb 1996 00:00:00 GMT,  825552000000
    assert(date.setUTCDate(30) == 825638400000); // Fri, 01 Mar 1996 00:00:00 GMT, 825638400000
    test_utc_date(date, 1996, 2, 1, 5, 0, 0, 0, 0);
  });

  it('should allow setUTCHours', () => {
    let time: i64 = Date.UTC(2000, 1, 29, 0, 0, 0, 0); // Tue, 29 Feb 2000 00:00:00 GMT, 951782400000
    let date = new Date(time);

    date = new Date(Date.UTC(1996, 1, 29, 0, 0, 0, 0)); //  Thu, 29 Feb 1996 00:00:00 GMT,  825552000000
    assert(date.setUTCHours(24) == 825638400000); // Fri, 01 Mar 1996 00:00:00 GMT, 825638400000
    test_utc_date(date, 1996, 2, 1, 5, 0, 0, 0, 0);
  });

  it('should allow setUTCMinutes', () => {
    let time: i64 = Date.UTC(2000, 1, 29, 0, 0, 0, 0); // Tue, 29 Feb 2000 00:00:00 GMT, 951782400000
    let date = new Date(time);

    date = new Date(Date.UTC(1996, 1, 29, 0, 0, 0, 0)); //  Thu, 29 Feb 1996 00:00:00 GMT,  825552000000
    assert(date.setUTCMinutes(24 * 60 + 55) == 825641700000); // Fri, 01 Mar 1996 00:55:00 GMT, 825641700000
    test_utc_date(date, 1996, 2, 1, 5, 0, 55, 0, 0);
  });

  it('should allow setUTCSeconds', () => {
    let time: i64 = Date.UTC(2000, 1, 29, 0, 0, 0, 0); // Tue, 29 Feb 2000 00:00:00 GMT, 951782400000
    let date = new Date(time);

    assert(date.setUTCSeconds(6 * 60) == 825642060000); // Fri, 01 Mar 1996 01:01:00 GMT, 825642060000
    test_utc_date(date, 1996, 2, 1, 5, 1, 1, 0, 0);
  });

  it('should allow setUTCSeconds', () => {
    let time: i64 = Date.UTC(2000, 1, 29, 0, 0, 0, 0); // Tue, 29 Feb 2000 00:00:00 GMT, 951782400000
    let date = new Date(time);

    assert(date.setUTCSeconds(6 * 60) == 825642060000); // Fri, 01 Mar 1996 01:01:00 GMT, 825642060000
    test_utc_date(date, 1996, 2, 1, 5, 1, 1, 0, 0);
  });

  it('should allow setUTCMilliseconds', () => {
    let time: i64 = Date.UTC(2000, 1, 29, 0, 0, 0, 0); // Tue, 29 Feb 2000 00:00:00 GMT, 951782400000
    let date = new Date(time);

    assert(date.setUTCMilliseconds(1001) == 825642061001); // Fri, 01 Mar 1996 01:01:01 GMT, 825642061001 
    test_utc_date(date, 1996, 2, 1, 5, 1, 1, 1, 1);
  });

  it('should allow setFullYear', () => {
    let time: i64 = Date.UTC(2000, 1, 29, 0, 0, 0, 0); // Tue, 29 Feb 2000 00:00:00 GMT, 951782400000
    let date = new Date(time);

    let creationTime = Date.UTC(2000, 1, 29, 0, 0, 0, 0); // Tue, 29 Feb 2000 00:00:00 GMT, 951782400000
    date = new Date(creationTime);
    date.setFullYear(2000);
    assert(date.getFullYear() == 2000);
  });

  it('should allow setMonth', () => {
    let time: i64 = Date.UTC(2000, 1, 29, 0, 0, 0, 0); // Tue, 29 Feb 2000 00:00:00 GMT, 951782400000
    let date = new Date(time);

    date.setMonth(1); 
    assert(date.getMonth() == 1);
  });

  it('should allow setDate', () => {
    let time: i64 = Date.UTC(2000, 1, 29, 0, 0, 0, 0); // Tue, 29 Feb 2000 00:00:00 GMT, 951782400000
    let date = new Date(time);

    date.setDate(8);
    assert(date.getDate() == 8);
  });

  it('should allow setHours', () => {
    let time: i64 = Date.UTC(2000, 1, 29, 0, 0, 0, 0); // Tue, 29 Feb 2000 00:00:00 GMT, 951782400000
    let date = new Date(time);

    date.setHours(24);
    assert(date.getHours() == 0);
  });

  it('should allow setMinutes', () => {
    let time: i64 = Date.UTC(2000, 1, 29, 0, 0, 0, 0); // Tue, 29 Feb 2000 00:00:00 GMT, 951782400000
    let date = new Date(time);

    date.setMinutes(24 * 60 + 55);
    assert(date.getMinutes() == 55);
  });

  it('should allow setSeconds', () => {
    let time: i64 = Date.UTC(2000, 1, 29, 0, 0, 0, 0); // Tue, 29 Feb 2000 00:00:00 GMT, 951782400000
    let date = new Date(time);

    date.setSeconds(6 * 60);
    assert(date.getSeconds() == 0);
  });

  it('should allow setMilliseconds', () => {
    let time: i64 = Date.UTC(2000, 1, 29, 0, 0, 0, 0); // Tue, 29 Feb 2000 00:00:00 GMT, 951782400000
    let date = new Date(time);

    date.setMilliseconds(1001);
    assert(date.getMilliseconds() == 1);
  });
});  
