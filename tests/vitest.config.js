export default {
  // Cấu hình đường dẫn để resolve module cho tests
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^@components/(.*)$': '<rootDir>/src/components/$1',
    '^@hooks/(.*)$': '<rootDir>/src/hooks/$1',
    '^@pages/(.*)$': '<rootDir>/src/pages/$1',
    '^@layouts/(.*)$': '<rootDir>/src/layouts/$1',
    '^@context/(.*)$': '<rootDir>/src/context/$1',
    '^@utils/(.*)$': '<rootDir>/src/utils/$1',
    '^@assets/(.*)$': '<rootDir>/src/assets/$1',
    '^@constants/(.*)$': '<rootDir>/src/constants/$1',
    '^@services/(.*)$': '<rootDir>/src/services/$1',
    '^@store/(.*)$': '<rootDir>/src/store/$1',
    '^@api/(.*)$': '<rootDir>/src/api/$1',
    // Xử lý CSS, images, etc
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    '\\.(jpg|jpeg|png|gif|webp|svg)$': '<rootDir>/tests/setup/__mocks__/fileMock.js'
  },
  
  // Đặt ngưỡng bao phủ mã
  coverageThreshold: {
    global: {
      branches: 70,
      functions: 70,
      lines: 70,
      statements: 70
    }
  },
  
  // Đường dẫn đến các file khi chạy coverage
  collectCoverageFrom: [
    'src/**/*.{js,jsx}',
    '!src/**/*.d.ts',
    '!src/**/index.{js,jsx}',
    '!src/main.jsx',
    '!src/vite-env.d.ts',
    '!**/node_modules/**',
  ],
  
  // Bỏ qua các thư mục khi chạy tests
  testPathIgnorePatterns: [
    '/node_modules/', 
    '/dist/'
  ],
};
