import { fireEvent, render, screen } from '@testing-library/react';
import { createEvent } from '@/__tests__/utils/test-data-builder';
import { EventItem } from '@/components/events/EventItem';
import { getAllEvents } from '@/dummy-data';
import { renderWithNavigation } from '@/__tests__/utils/ComponentRenderer';

describe('<EventItem />', () => {
  let testEventDetails = createEvent();

  const renderComponent = (eventDetails = testEventDetails) => render(<EventItem event={eventDetails} />);

  it('renders correctly and matches the snapshot', () => {
    // Cannot use test data builder reliably for snapshots because of randomised data
    const eventDetails = getAllEvents()[0];

    const component = renderComponent(eventDetails);

    expect(component).toMatchSnapshot();
  });

  it('renders the event title', () => {
    renderComponent();

    const title = screen.getByText(testEventDetails.title);

    expect(title).toBeInTheDocument();
  });

  it('renders the event image', () => {
    renderComponent();

    const image = screen.getByAltText(testEventDetails.image);

    expect(image).toBeInTheDocument();
  });

  it('formats and then renders the event date', () => {
    renderComponent();

    const formattedDate = new Date(testEventDetails.date).toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });

    const date = screen.getByText(formattedDate);

    expect(date).toBeInTheDocument();
  });

  it('formats and then renders the event location', () => {
    renderComponent();

    const formattedLocation = testEventDetails.location.replace(', ', '\n');

    const location = screen.getByText(formattedLocation);

    expect(location).toBeInTheDocument();
  });

  it('renders a link to the event details page that navigates when clicked', () => {
    const routerPushMock = jest.fn();

    renderWithNavigation(<EventItem event={testEventDetails} />, { push: routerPushMock });

    const link = screen.getByText('Explore Event');
    expect(link).toBeInTheDocument();

    fireEvent.click(link);

    expect(routerPushMock).toHaveBeenCalled();
    expect(routerPushMock.mock.calls[0][0]).toEqual(`/events/${testEventDetails.id}`);
  });
});
