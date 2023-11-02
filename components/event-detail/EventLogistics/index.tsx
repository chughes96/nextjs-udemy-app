import { EventDetails } from '@/types';
import { AddressIcon, DateIcon } from '@/components/icons';
import { LogisticsItem } from '../LogisticsItem';
import { formatAddress, formatDate } from '@/components/utils/data-formatter';
import styles from './event-logistics.module.css';

type Props = {
  eventDetails: EventDetails;
};

export const EventLogistics = ({ eventDetails: { date, location, image } }: Props) => {
  const formattedDate = formatDate(date);

  const formattedAddress = formatAddress(location);

  return (
    <section className={styles.logistics}>
      <div className={styles.image}>
        <img src={`/${image}`} alt={image} />
      </div>
      <ul className={styles.list}>
        <LogisticsItem icon={DateIcon}>
          <time>{formattedDate}</time>
        </LogisticsItem>
        <LogisticsItem icon={AddressIcon}>
          <address>{formattedAddress}</address>
        </LogisticsItem>
      </ul>
    </section>
  );
};
