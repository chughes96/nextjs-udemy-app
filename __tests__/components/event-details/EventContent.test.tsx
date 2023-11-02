import { render, screen } from '@testing-library/react';
import { EventContent } from '@/components/event-detail/EventContent';
import { ReactNode } from 'react';

describe('<EventContent />', () => {
  const renderComponent = (children: ReactNode = 'TestNode') => render(<EventContent>{children}</EventContent>);

  it('renders correctly and matches the snapshot', () => {
    const component = renderComponent();

    expect(component).toMatchSnapshot();
  });

  it('renders the EventContent children prop', () => {
    const expectedChildContent = 'EventContent test';

    renderComponent(expectedChildContent);

    const childContent = screen.getByText(expectedChildContent);

    expect(childContent).toBeInTheDocument();
  });
});
