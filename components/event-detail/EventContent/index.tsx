import { ReactNode } from 'react';
import styles from './event-content.module.css';

type Props = {
  children: ReactNode;
};

export const EventContent = ({ children }: Props) => {
  return <section className={styles.content}>{children}</section>;
};
