import { render } from '@testing-library/react';

import WhiteboardUi from './whiteboard-ui';

describe('WhiteboardUi', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WhiteboardUi />);
    expect(baseElement).toBeTruthy();
  });
});
