import { ReactNode } from 'react';
import styles from './LogisticsItem.module.css';

type Props = {
  icon: React.FC;
  children: ReactNode;
};

export const LogisticsItem = ({ icon: Icon, children }: Props) => {
  return (
    <li className={styles.item}>
      <span className={styles.icon} data-testid="logistics-item-icon">
        <Icon />
      </span>
      <span className={styles.content}>{children}</span>
    </li>
  );
};
