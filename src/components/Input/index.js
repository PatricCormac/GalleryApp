import React from 'react';
import CN from 'classnames';

import styles from './styles.module.scss';

export function Input(props) {
  const { label, type = 'text', isButton, placeholder, value, onChange } = props;

  return (
    <label className={CN(styles.inputBlock, { [styles.button]: isButton })}>
      {label}
      <input value={value} onChange={onChange} type={type} placeholder={placeholder} />
    </label>
  );
}
