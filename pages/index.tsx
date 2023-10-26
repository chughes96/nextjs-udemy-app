import React from 'react';
import { getFeaturedEvents } from '@/dummy-data';
import { EventList } from '@/components/events/EventList';

type Props = {};

const Home = (props: Props) => {
  const featuredEvents = getFeaturedEvents();
  return (
    <div>
      <h1>Home</h1>
      <EventList events={featuredEvents} />
    </div>
  );
};

export default Home;
