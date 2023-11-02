import styles from './event-summary.module.css';

type Props = {
  title: string;
};

export const EventSummary = ({ title }: Props) => {
  return (
    <section className={styles.summary}>
      <h1>{title}</h1>
    </section>
  );
};
