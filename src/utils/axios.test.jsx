import '@testing-library/jest-dom/extend-expect';
import * as rtl from '@testing-library/react';
import axiosWithAuth from './axios';

beforeEach(() => {
  rtl.cleanup();
});

describe('mounts axios', () => {
  test('mount success', () => {
    expect(axiosWithAuth()).toBeTruthy();
  });
});