import { render, screen } from '@testing-library/react';
import { createEvents } from '@/__tests__/utils/test-data-builder';
import { EventList } from '@/components/events/EventList';
import { EventDetails } from '@/types';
import { getAllEvents } from '@/dummy-data';

describe('<EventList />', () => {
  let testEvents = createEvents(5);

  const renderComponent = (events: EventDetails[]) =>
    render(<EventList events={events} />);

  it('renders correctly and matches the snapshot', () => {
    // Cannot use test data builder reliably for snapshots because of randomised data
    const events = getAllEvents();

    const component = renderComponent(events);

    expect(component).toMatchSnapshot();
  });

  // Could use it.each but this renders component once
  it('renders an EventItem for each event', () => {
    renderComponent(testEvents);

    testEvents.forEach((e) => {
      const title = screen.getByText(e.title);

      expect(title).toBeInTheDocument();
    });
  });
});
