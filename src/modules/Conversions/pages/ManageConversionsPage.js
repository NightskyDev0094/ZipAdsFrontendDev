import React from 'react';
import ManageConversions from '../components/ManageConversions';

export const ManageConversionsPage = ({ ...props }) => {
  return (
    <div>
      <ManageConversions {...props} />
    </div>
  );
};

export default ManageConversionsPage;
