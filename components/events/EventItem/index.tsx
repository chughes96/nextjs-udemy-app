import React from 'react';
import Link from 'next/link';
import { EventDetails } from '@/types';
import styles from './EventItem.module.css';

type Props = {
  event: EventDetails;
};

export const EventItem = ({
  event: { title, image, date, location, id },
}: Props) => {
  const formattedDate = new Date(date).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const formattedAddress = location.replace(', ', '\n');

  return (
    <li className={styles.item}>
      <img src={`/${image}`} alt={image} />
      <div className={styles.content}>
        <div className={styles.summary}>
          <h2>{title}</h2>
          <div className={styles.date}>
            <time>{formattedDate}</time>
          </div>
          <div className={styles.address}>
            <address>{formattedAddress}</address>
          </div>
        </div>
        <div className={styles.actions}>
          <Link href={`/events/${id}`}>Explore Event</Link>
        </div>
      </div>
    </li>
  );
};
