import { render, screen } from '@testing-library/react';
import { EventSummary } from '@/components/event-detail/EventSummary';

describe('<EventSummary />', () => {
  const renderComponent = (title = 'Event Title') => render(<EventSummary title={title} />);

  it('renders correctly and matches the snapshot', () => {
    const component = renderComponent();

    expect(component).toMatchSnapshot();
  });

  it('renders the EventSummary title prop', () => {
    const expectedTitle = 'EventSummary title test';

    renderComponent(expectedTitle);

    const title = screen.getByText(expectedTitle);

    expect(title).toBeInTheDocument();
  });
});
