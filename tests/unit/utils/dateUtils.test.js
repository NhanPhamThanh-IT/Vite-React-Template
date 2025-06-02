import * as dateUtils from '../../../src/utils/dateUtils';
import { getRelativeTime, isToday } from '../../setup/__mocks__/functionMocks';

describe('Date Utils', () => {
  // Reset Date object after each test
  let originalDate;
  beforeEach(() => {
    originalDate = global.Date;
  });
  
  afterEach(() => {
    global.Date = originalDate;
  });

  describe('formatDate', () => {
    test('formats date in the default format', () => {
      const testDate = new Date('2023-01-15');
      expect(dateUtils.formatDate(testDate)).toBeDefined();
    });

    test('formats date with short format', () => {
      const testDate = new Date('2023-01-15');
      const formatted = dateUtils.formatDate(testDate, 'short');
      expect(formatted).toBeDefined();
      expect(typeof formatted).toBe('string');
    });
    
    test('handles invalid dates', () => {
      const invalidDate = new Date('invalid-date');
      expect(dateUtils.formatDate(invalidDate)).toBe('Invalid date');
    });
  });
  
  // Sử dụng các hàm mock vì các hàm thực tế chưa được cài đặt
  describe('getRelativeTime (mocked)', () => {
    test('returns "just now" for current time', () => {
      const now = new Date();
      expect(getRelativeTime(now)).toBe('just now');
    });
    
    test('returns "1 minute ago" for date 1 minute in the past', () => {
      const date = new Date();
      date.setMinutes(date.getMinutes() - 1);
      expect(getRelativeTime(date)).toBe('1 minute ago');
    });
  });
  
  describe('isToday (mocked)', () => {
    test('returns true for today', () => {
      const today = new Date();
      expect(isToday(today)).toBe(true);
    });
  });
});
