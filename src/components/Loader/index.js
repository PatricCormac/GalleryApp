import styles from './styles.module.scss';

import React from 'react';

export const Loader = () => (
  <div className={styles['lds-roller']}><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
);
