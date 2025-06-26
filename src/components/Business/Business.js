import React from 'react';
import styles from './Business.module.css';

const Business = ({ business }) => {
  return (
    <div className={styles.Business}>
      <img src={business.imageSrc} alt={business.name} />
      <h2>{business.name}</h2>
      <div>
        <p>{business.address}</p>
        <p>{business.city}, {business.state} {business.zipCode}</p>
        <p>{business.category} • {business.rating} stars • {business.reviewCount} reviews</p>
      </div>
    </div>
  );
};

export default Business;
