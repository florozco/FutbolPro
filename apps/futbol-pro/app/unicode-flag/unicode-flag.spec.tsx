import { render } from '@testing-library/react';

import UnicodeFlag from './unicode-flag';

describe('UnicodeFlag', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UnicodeFlag />);
    expect(baseElement).toBeTruthy();
  });
});
