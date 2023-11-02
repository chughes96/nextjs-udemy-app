import { ReactNode } from 'react';
import { render, screen } from '@testing-library/react';
import { LogisticsItem } from '@/components/event-detail/LogisticsItem';
import { AddressIcon } from '@/components/icons';

describe('<LogisticsItem />', () => {
  const renderComponent = (children: ReactNode = 'TestNode') =>
    render(<LogisticsItem icon={AddressIcon}>{children}</LogisticsItem>);

  it('renders correctly and matches the snapshot', () => {
    const component = renderComponent();

    expect(component).toMatchSnapshot();
  });

  it('renders the LogisticsItem icon prop', () => {
    renderComponent();

    const icon = screen.getByTestId('logistics-item-icon');

    expect(icon).toBeInTheDocument();
  });

  it('renders the LogisticsItem children prop', () => {
    const expectedChildContent = 'LogisticsItem test';

    renderComponent(expectedChildContent);

    const childContent = screen.getByText(expectedChildContent);

    expect(childContent).toBeInTheDocument();
  });
});
