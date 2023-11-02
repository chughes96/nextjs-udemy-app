import { ReactNode } from 'react';
import styles from './EventContent.module.css';

type Props = {
  children: ReactNode;
};

export const EventContent = ({ children }: Props) => {
  return <section className={styles.content}>{children}</section>;
};
