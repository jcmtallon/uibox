import { render } from '@testing-library/react';

import Uibox from './uibox';

describe('Uibox', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Uibox />);
    expect(baseElement).toBeTruthy();
  });
});
