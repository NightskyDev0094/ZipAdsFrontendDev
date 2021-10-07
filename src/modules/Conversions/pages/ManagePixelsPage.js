import React from 'react';
import ManagePixels from '../components/ManagePixels';

export const ManagePixelsPage = ({ ...props }) => {
  return (
    <div>
      <ManagePixels {...props} />
    </div>
  );
};

export default ManagePixelsPage;
