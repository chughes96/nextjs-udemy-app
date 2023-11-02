import React from 'react';
import { useRouter } from 'next/router';
import { ParsedUrlQuery } from 'querystring';
import { EventContent } from '@/components/event-detail/EventContent';
import { EventLogistics } from '@/components/event-detail/EventLogistics';
import { EventSummary } from '@/components/event-detail/EventSummary';
import { getEventById } from '@/dummy-data';

interface QueryParams extends ParsedUrlQuery {
  eventId: string;
}

type Props = {};

const EventDetailsPage = (props: Props) => {
  const router = useRouter();

  const { eventId } = router.query as QueryParams;
  const eventDetails = getEventById(eventId);

  if (!eventDetails) return <p>No event found!</p>;

  return (
    <>
      <EventSummary title={eventDetails.title} />
      <EventLogistics eventDetails={eventDetails} />
      <EventContent>
        <p>{eventDetails.description}</p>
      </EventContent>
    </>
  );
};

export default EventDetailsPage;
