// BusinessList.js
import React from 'react';
import Business from '../Business/Business';
import { businesses } from '../../data/businesses';

const BusinessList = () => {
  return (
    <div>
      {businesses.map(biz => (
        <Business key={biz.id} business={biz} />
      ))}
    </div>
  );
};

export default BusinessList;
