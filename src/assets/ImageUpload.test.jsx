import '@testing-library/jest-dom/extend-expect';
import * as rtl from '@testing-library/react';
import imageUpload from './ImageUpload';

beforeEach(() => {
  rtl.cleanup();
});

describe('uploads image', () => {
  test('upload success', () => {
    expect(imageUpload(image)).toBeTruthy();
  });
});