import { render, screen } from '@testing-library/react';
import { createEvent } from '@/__tests__/utils/test-data-builder';
import { EventItem } from '@/components/events/EventItem';
import { EventDetails } from '@/types';
import { getAllEvents } from '@/dummy-data';

describe('<EventItem />', () => {
  let testEventDetails = createEvent();

  const renderComponent = (eventDetails: EventDetails) =>
    render(<EventItem event={eventDetails} />);

  it('renders correctly and matches the snapshot', () => {
    // Cannot use test data builder reliably for snapshots because of randomised data
    const eventDetails = getAllEvents()[0];

    const component = renderComponent(eventDetails);

    expect(component).toMatchSnapshot();
  });

  it('renders the event title', () => {
    renderComponent(testEventDetails);

    const title = screen.getByText(testEventDetails.title);

    expect(title).toBeInTheDocument();
  });

  it('renders the event image', () => {
    renderComponent(testEventDetails);

    const image = screen.getByAltText(testEventDetails.image);

    expect(image).toBeInTheDocument();
  });

  it('formats and then renders the event date', () => {
    renderComponent(testEventDetails);

    const formattedDate = new Date(testEventDetails.date).toLocaleDateString(
      'en-GB',
      {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      }
    );

    const date = screen.getByText(formattedDate);

    expect(date).toBeInTheDocument();
  });

  it('formats and then renders the event location', () => {
    renderComponent(testEventDetails);

    const formattedLocation = testEventDetails.location.replace(', ', '\n');

    const location = screen.getByText(formattedLocation);

    expect(location).toBeInTheDocument();
  });

  it('renders a routing link to the event details page', () => {
    renderComponent(testEventDetails);

    const link = screen.getByText('Explore Event');

    expect(link).toBeInTheDocument();
    expect(link.getAttribute('href')).toEqual(`/${testEventDetails.id}`);
  });
});
