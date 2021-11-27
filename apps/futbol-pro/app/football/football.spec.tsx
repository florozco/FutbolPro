import { render } from '@testing-library/react';

import Football from './useFootball';

describe('Football', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Football />);
    expect(baseElement).toBeTruthy();
  });
});
