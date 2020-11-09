import React from 'react';
import styles from './index.scss';

import Basic from '@/views/basic';

export default () => {
  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
      <Basic />
    </div>
  );
};
