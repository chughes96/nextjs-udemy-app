import Link from 'next/link';
import React, { ReactNode } from 'react';
import styles from './Button.module.css';

export type ButtonProps = {
  link: string;
  children: ReactNode;
};

export const Button = ({ link, children }: ButtonProps) => {
  return (
    <Link href={link} className={styles.btn}>
      {children}
    </Link>
  );
};
