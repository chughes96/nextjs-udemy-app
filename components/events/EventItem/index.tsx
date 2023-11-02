import React from 'react';
import { EventDetails } from '@/types';
import styles from './EventItem.module.css';
import { Button } from '@/components/ui/Button';
import { AddressIcon, ArrowRightIcon, DateIcon } from '@/components/icons';

type Props = {
  event: EventDetails;
};

export const EventItem = ({ event: { title, image, date, location, id } }: Props) => {
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
            <DateIcon />
            <time>{formattedDate}</time>
          </div>
          <div className={styles.address}>
            <AddressIcon />
            <address>{formattedAddress}</address>
          </div>
        </div>
        <div className={styles.actions}>
          <Button link={`/events/${id}`}>
            <span>Explore Event</span>
            <span className={styles.icon}>
              <ArrowRightIcon />
            </span>
          </Button>
        </div>
      </div>
    </li>
  );
};
