import { EventDetails } from '@/types';
import React from 'react';
import { EventItem } from '../EventItem';
import styles from './EventList.module.css';

type Props = {
  events: EventDetails[];
};

export const EventList = ({ events }: Props) => {
  return (
    <ul className={styles.list}>
      {events.map((e) => (
        <EventItem key={e.id} event={e} />
      ))}
    </ul>
  );
};
