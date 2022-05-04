import { render } from '@testing-library/react';

import UiboxCore from './uibox-core';

describe('UiboxCore', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UiboxCore />);
    expect(baseElement).toBeTruthy();
  });
});
