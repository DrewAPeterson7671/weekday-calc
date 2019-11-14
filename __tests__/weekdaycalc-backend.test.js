import { leapYear } from './../src/weekdaycalc-backend.js'

describe('leapYear', () => {
  test('should enter a valid year', () => {
    let validYear = 2019;
    let leapYearTest = leapYear(validYear);
    expect(leapYearTest).not.toEqual(true);
  });
  test('year should be divisible by 4', () => {
    let leapYearTest2 = leapYear(2004);
    let leapYearTest3 = leapYear(2003);
    expect(leapYearTest2).toEqual(true);
    expect(leapYearTest3).toEqual(false);
  });
});
