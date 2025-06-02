// Mocks cho các hàm hoặc thành phần chưa cài đặt
// Tập tin này dùng để mock các phụ thuộc cho việc testing

import { vi } from 'vitest';

// Mock các hàm dateUtils chưa được cài đặt
export const getRelativeTime = vi.fn((date) => {
  const now = new Date();
  const diffMs = now - new Date(date);
  
  if (diffMs < 60000) return 'just now';
  if (diffMs < 3600000) return '1 minute ago';
  return '1 hour ago';
});

export const isToday = vi.fn((date) => {
  const today = new Date();
  const checkDate = new Date(date);
  
  return today.getDate() === checkDate.getDate() &&
    today.getMonth() === checkDate.getMonth() &&
    today.getFullYear() === checkDate.getFullYear();
});

// Thêm các mock khác tùy theo nhu cầu
