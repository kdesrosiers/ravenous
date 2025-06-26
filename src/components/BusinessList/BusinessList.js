// BusinessList.js
import React from 'react';
import Business from '../Business/Business';
import { businesses } from '../../data/businesses';
import styles from "./BusinessList.module.css";

const BusinessList = () => {
  return (
    <div className={styles.BusinessList}>
      {businesses.map(biz => (
        <Business key={biz.id} business={biz} />
      ))}
    </div>
  );
};

export default BusinessList;
