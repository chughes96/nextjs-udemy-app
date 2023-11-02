import { render, screen } from '@testing-library/react';
import { createEvent } from '@/__tests__/utils/test-data-builder';
import { getAllEvents } from '@/dummy-data';
import { EventLogistics } from '@/components/event-detail/EventLogistics';
import { formatAddress, formatDate } from '@/components/utils/data-formatter';

describe('<EventLogistics />', () => {
  let testEventDetails = createEvent();

  const renderComponent = (eventDetails = testEventDetails) => render(<EventLogistics eventDetails={eventDetails} />);

  it('renders correctly and matches the snapshot', () => {
    // Cannot use test data builder reliably for snapshots because of randomised data
    const eventDetails = getAllEvents()[0];

    const component = renderComponent(eventDetails);

    expect(component).toMatchSnapshot();
  });

  it('renders the event image', () => {
    renderComponent();

    const image = screen.getByAltText(testEventDetails.title);

    expect(image).toBeInTheDocument();
  });

  it('formats and then renders the event date', () => {
    renderComponent();

    const formattedDate = formatDate(testEventDetails.date);

    const date = screen.getByText(formattedDate);

    expect(date).toBeInTheDocument();
  });

  it('formats and then renders the event location', () => {
    renderComponent();

    const formattedLocation = formatAddress(testEventDetails.location);

    const location = screen.getByText(formattedLocation);

    expect(location).toBeInTheDocument();
  });
});
